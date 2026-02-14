#!/usr/bin/env python3
"""
SEO Keyword Research Tool - Wiederverwendbar für jedes Projekt

Verwendung:
    python seo_keyword_tool.py example.com
    python seo_keyword_tool.py example.com --seeds "keyword1,keyword2,keyword3"
    python seo_keyword_tool.py example.com --lang de --country Germany
    python seo_keyword_tool.py example.com --lang en --country "United States"

Ausgabe: Eine einzige Datei {domain}_seo_report.md
"""

import requests
import json
import base64
import argparse
import sys
from datetime import datetime
from typing import Dict, List, Set
from collections import defaultdict
import time

# === KONFIGURATION (einmal anpassen) ===
API_LOGIN = "julian@mrdejin.com"
API_PASSWORD = "69b59cded033e41a"
# ========================================

CREDENTIALS = base64.b64encode(f"{API_LOGIN}:{API_PASSWORD}".encode()).decode()
BASE_URL = "https://api.dataforseo.com/v3"
HEADERS = {"Authorization": f"Basic {CREDENTIALS}", "Content-Type": "application/json"}


def api(endpoint: str, data: List[Dict]) -> Dict:
    """API Request mit Fehlerbehandlung."""
    try:
        r = requests.post(f"{BASE_URL}/{endpoint}", headers=HEADERS, json=data, timeout=60)
        r.raise_for_status()
        return r.json()
    except Exception as e:
        return {"error": str(e)}


def get_domain_overview(domain: str, country: str, lang: str) -> Dict:
    """Traffic, Rankings, Metriken der Domain."""
    print(f"  ->Domain Overview...")
    return api("dataforseo_labs/google/domain_rank_overview/live", [{
        "target": domain, "location_name": country, "language_code": lang
    }])


def get_ranked_keywords(domain: str, country: str, lang: str, limit: int = 100) -> List[Dict]:
    """Für welche Keywords rankt die Domain bereits?"""
    print(f"  ->Ranked Keywords...")
    r = api("dataforseo_labs/google/ranked_keywords/live", [{
        "target": domain, "location_name": country, "language_code": lang,
        "limit": limit, "order_by": ["keyword_data.keyword_info.search_volume,desc"]
    }])
    return extract_ranked(r)


def get_keyword_suggestions(seed: str, country: str, lang: str, limit: int = 50) -> List[Dict]:
    """Keyword-Vorschläge basierend auf Seed."""
    r = api("dataforseo_labs/google/keyword_suggestions/live", [{
        "keyword": seed, "location_name": country, "language_code": lang,
        "limit": limit, "order_by": ["keyword_info.search_volume,desc"]
    }])
    return extract_suggestions(r)


def get_related_keywords(seed: str, country: str, lang: str, limit: int = 30) -> List[Dict]:
    """Related Keywords (aus 'searches related to')."""
    r = api("dataforseo_labs/google/related_keywords/live", [{
        "keyword": seed, "location_name": country, "language_code": lang,
        "limit": limit, "depth": 2
    }])
    return extract_related(r)


def get_competitors(domain: str, country: str, lang: str, limit: int = 20) -> List[Dict]:
    """Wer sind die SEO-Konkurrenten?"""
    print(f"  ->Konkurrenten...")
    r = api("dataforseo_labs/google/competitors_domain/live", [{
        "target": domain, "location_name": country, "language_code": lang,
        "limit": limit, "exclude_top_domains": True
    }])
    return extract_competitors(r)


def get_competitor_keywords(domain: str, country: str, lang: str, limit: int = 100) -> List[Dict]:
    """Keywords für die ein Konkurrent rankt."""
    r = api("dataforseo_labs/google/ranked_keywords/live", [{
        "target": domain, "location_name": country, "language_code": lang,
        "limit": limit, "order_by": ["keyword_data.keyword_info.search_volume,desc"]
    }])
    return extract_ranked(r)


def get_keyword_difficulty(keywords: List[str], country: str, lang: str) -> Dict[str, int]:
    """Keyword Difficulty für Liste von Keywords."""
    print(f"  ->Keyword Difficulty...")
    r = api("dataforseo_labs/google/bulk_keyword_difficulty/live", [{
        "keywords": keywords[:100], "location_name": country, "language_code": lang
    }])
    return extract_difficulty(r)


def get_traffic_estimation(domains: List[str], country: str, lang: str) -> List[Dict]:
    """Traffic-Schätzung für Domains."""
    print(f"  ->Traffic Estimation...")
    r = api("dataforseo_labs/google/bulk_traffic_estimation/live", [{
        "targets": domains[:20], "location_name": country, "language_code": lang
    }])
    return extract_traffic(r)


# === EXTRAKTION ===

def extract_ranked(r: Dict) -> List[Dict]:
    try:
        items = r.get("tasks", [{}])[0].get("result", [{}])[0].get("items", []) or []
        return [{
            "keyword": i.get("keyword_data", {}).get("keyword", ""),
            "volume": i.get("keyword_data", {}).get("keyword_info", {}).get("search_volume", 0) or 0,
            "cpc": i.get("keyword_data", {}).get("keyword_info", {}).get("cpc", 0) or 0,
            "position": i.get("ranked_serp_element", {}).get("serp_item", {}).get("rank_group", 0) or 0,
            "url": i.get("ranked_serp_element", {}).get("serp_item", {}).get("url", ""),
            "traffic_value": i.get("ranked_serp_element", {}).get("serp_item", {}).get("etv", 0) or 0,
            "difficulty": i.get("keyword_data", {}).get("keyword_properties", {}).get("keyword_difficulty"),
            "intent": i.get("keyword_data", {}).get("search_intent_info", {}).get("main_intent", "")
        } for i in items if i.get("keyword_data", {}).get("keyword")]
    except: return []


def extract_suggestions(r: Dict) -> List[Dict]:
    try:
        items = r.get("tasks", [{}])[0].get("result", [{}])[0].get("items", []) or []
        return [{
            "keyword": i.get("keyword", ""),
            "volume": i.get("keyword_info", {}).get("search_volume", 0) or 0,
            "cpc": i.get("keyword_info", {}).get("cpc", 0) or 0,
            "competition": i.get("keyword_info", {}).get("competition_level", ""),
            "difficulty": i.get("keyword_properties", {}).get("keyword_difficulty"),
            "intent": i.get("search_intent_info", {}).get("main_intent", "")
        } for i in items if i.get("keyword")]
    except: return []


def extract_related(r: Dict) -> List[Dict]:
    try:
        items = r.get("tasks", [{}])[0].get("result", [{}])[0].get("items", []) or []
        return [{
            "keyword": i.get("keyword_data", {}).get("keyword", ""),
            "volume": i.get("keyword_data", {}).get("keyword_info", {}).get("search_volume", 0) or 0,
            "cpc": i.get("keyword_data", {}).get("keyword_info", {}).get("cpc", 0) or 0,
            "difficulty": i.get("keyword_data", {}).get("keyword_properties", {}).get("keyword_difficulty")
        } for i in items if i.get("keyword_data", {}).get("keyword")]
    except: return []


def extract_competitors(r: Dict) -> List[Dict]:
    try:
        items = r.get("tasks", [{}])[0].get("result", [{}])[0].get("items", []) or []
        return [{
            "domain": i.get("domain", ""),
            "common_keywords": i.get("avg_position", 0),
            "organic_traffic": i.get("metrics", {}).get("organic", {}).get("etv", 0) or 0,
            "organic_keywords": i.get("metrics", {}).get("organic", {}).get("count", 0) or 0
        } for i in items if i.get("domain")]
    except: return []


def extract_difficulty(r: Dict) -> Dict[str, int]:
    try:
        items = r.get("tasks", [{}])[0].get("result", [{}])[0].get("items", []) or []
        return {i.get("keyword", ""): i.get("keyword_difficulty") for i in items if i.get("keyword")}
    except: return {}


def extract_traffic(r: Dict) -> List[Dict]:
    try:
        items = r.get("tasks", [{}])[0].get("result", [{}])[0].get("items", []) or []
        return [{
            "target": i.get("target", ""),
            "organic_traffic": i.get("metrics", {}).get("organic", {}).get("etv", 0) or 0,
            "organic_keywords": i.get("metrics", {}).get("organic", {}).get("count", 0) or 0,
            "organic_cost": i.get("metrics", {}).get("organic", {}).get("estimated_paid_traffic_cost", 0) or 0
        } for i in items if i.get("target")]
    except: return []


def extract_overview(r: Dict) -> Dict:
    try:
        item = r.get("tasks", [{}])[0].get("result", [{}])[0]
        m = item.get("metrics", {}).get("organic", {}) if item.get("metrics") else {}
        return {
            "organic_traffic": m.get("etv", 0) or 0,
            "organic_keywords": m.get("count", 0) or 0,
            "traffic_cost": m.get("estimated_paid_traffic_cost", 0) or 0
        }
    except: return {"organic_traffic": 0, "organic_keywords": 0, "traffic_cost": 0}


# === HAUPTFUNKTION ===

def run_research(domain: str, seeds: List[str], country: str, lang: str):
    """Führt die komplette Recherche durch."""
    
    print(f"\n{'='*60}")
    print(f"SEO KEYWORD RECHERCHE")
    print(f"{'='*60}")
    print(f"Domain: {domain}")
    print(f"Land: {country} | Sprache: {lang}")
    print(f"Seeds: {', '.join(seeds[:5])}{'...' if len(seeds) > 5 else ''}")
    print(f"{'='*60}\n")
    
    data = {
        "domain": domain,
        "country": country,
        "lang": lang,
        "timestamp": datetime.now().isoformat(),
        "overview": {},
        "ranked_keywords": [],
        "keyword_ideas": [],
        "competitors": [],
        "competitor_keywords": {},
        "keyword_difficulty": {},
        "traffic_comparison": []
    }
    
    # 1. Domain Overview
    print("[1/6] Domain-Analyse...")
    overview_r = get_domain_overview(domain, country, lang)
    data["overview"] = extract_overview(overview_r)
    
    # 2. Aktuelle Rankings
    print("[2/6] Aktuelle Rankings...")
    data["ranked_keywords"] = get_ranked_keywords(domain, country, lang, 100)
    
    # 3. Keyword-Ideen aus Seeds
    print("[3/6] Keyword-Ideen...")
    seen = set()
    for seed in seeds:
        print(f"  ->{seed}")
        for kw in get_keyword_suggestions(seed, country, lang, 30):
            if kw["keyword"] not in seen and kw["volume"] > 0:
                seen.add(kw["keyword"])
                kw["source"] = seed
                data["keyword_ideas"].append(kw)
        for kw in get_related_keywords(seed, country, lang, 20):
            if kw["keyword"] not in seen and kw["volume"] > 0:
                seen.add(kw["keyword"])
                kw["source"] = seed
                data["keyword_ideas"].append(kw)
        time.sleep(0.3)
    
    if not data["keyword_ideas"]:
        for s in seeds:
            data["keyword_ideas"].append({"keyword": s, "volume": 0, "cpc": 0, "difficulty": None, "intent": "", "source": "seed"})
    data["keyword_ideas"].sort(key=lambda x: x["volume"], reverse=True)
    
    # 4. Konkurrenten
    print("[4/6] Konkurrenzanalyse...")
    data["competitors"] = get_competitors(domain, country, lang, 10)
    
    # 5. Top-Konkurrenten Keywords
    print("[5/6] Konkurrenz-Keywords...")
    for comp in data["competitors"][:3]:
        comp_domain = comp["domain"]
        print(f"  ->{comp_domain}")
        data["competitor_keywords"][comp_domain] = get_competitor_keywords(comp_domain, country, lang, 50)
        time.sleep(0.3)
    
    # 6. Keyword Difficulty
    print("[6/6] Keyword Difficulty...")
    all_kw = [k["keyword"] for k in data["keyword_ideas"][:50]]
    all_kw += [k["keyword"] for k in data["ranked_keywords"][:20]]
    if not all_kw:
        all_kw = seeds  # Fallback: Seeds nutzen wenn API keine Ideen lieferte
    all_kw = list(set(all_kw))[:100]
    data["keyword_difficulty"] = get_keyword_difficulty(all_kw, country, lang)
    
    # Traffic-Vergleich
    print("[+] Traffic-Vergleich...")
    comp_domains = [domain] + [c["domain"] for c in data["competitors"][:5]]
    data["traffic_comparison"] = get_traffic_estimation(comp_domains, country, lang)
    
    # Report erstellen
    report = create_report(data)
    filename = f"{domain.replace('.', '_')}_seo_report.md"
    with open(filename, "w", encoding="utf-8") as f:
        f.write(report)
    
    print(f"\n{'='*60}")
    print(f"[OK] FERTIG! Report gespeichert: {filename}")
    print(f"{'='*60}")
    print(f"\nStatistik:")
    print(f"  • Aktuelle Rankings: {len(data['ranked_keywords'])}")
    print(f"  • Keyword-Ideen: {len(data['keyword_ideas'])}")
    print(f"  • Konkurrenten: {len(data['competitors'])}")
    print(f"  • Konkurrenz-Keywords: {sum(len(v) for v in data['competitor_keywords'].values())}")


def create_report(d: Dict) -> str:
    """Erstellt den Markdown-Report."""
    lines = []
    lines.append(f"# SEO Report: {d['domain']}")
    lines.append(f"\n**Datum:** {d['timestamp'][:10]}")
    lines.append(f"**Land:** {d['country']} | **Sprache:** {d['lang']}")
    lines.append("\n---\n")
    
    # Overview
    lines.append("## 1. Domain-Übersicht\n")
    o = d["overview"]
    lines.append(f"| Metrik | Wert |")
    lines.append(f"|--------|------|")
    lines.append(f"| Organic Traffic (geschätzt) | {o.get('organic_traffic', 0):,.0f} |")
    lines.append(f"| Rankende Keywords | {o.get('organic_keywords', 0):,} |")
    lines.append(f"| Traffic-Wert (€) | {o.get('traffic_cost', 0):,.2f} |")
    
    # Aktuelle Rankings
    lines.append("\n---\n")
    lines.append("## 2. Aktuelle Rankings\n")
    if d["ranked_keywords"]:
        lines.append("| Pos | Keyword | Volume | CPC | Traffic-Wert | Intent |")
        lines.append("|-----|---------|--------|-----|--------------|--------|")
        for k in d["ranked_keywords"][:30]:
            lines.append(f"| {k['position']} | {k['keyword']} | {k['volume']} | €{k['cpc']:.2f} | €{k['traffic_value']:.2f} | {k['intent'][:6] if k['intent'] else ''} |")
    else:
        lines.append("⚠️ Keine Rankings gefunden!")
    
    # Keyword-Ideen
    lines.append("\n---\n")
    lines.append("## 3. Keyword-Ideen\n")
    lines.append("| Keyword | Volume | CPC | Difficulty | Intent | Quelle |")
    lines.append("|---------|--------|-----|------------|--------|--------|")
    for k in d["keyword_ideas"][:50]:
        diff = k.get('difficulty', 'N/A')
        diff = diff if diff is not None else 'N/A'
        lines.append(f"| {k['keyword']} | {k['volume']} | €{k['cpc']:.2f} | {diff} | {k.get('intent', '')[:6]} | {k.get('source', '')} |")
    
    # Traffic-Vergleich
    lines.append("\n---\n")
    lines.append("## 4. Traffic-Vergleich mit Konkurrenz\n")
    if d["traffic_comparison"]:
        lines.append("| Domain | Organic Traffic | Keywords | Traffic-Wert |")
        lines.append("|--------|-----------------|----------|--------------|")
        for t in d["traffic_comparison"]:
            lines.append(f"| {t['target']} | {t['organic_traffic']:,.0f} | {t['organic_keywords']:,} | €{t['organic_cost']:,.2f} |")
    
    # Konkurrenten
    lines.append("\n---\n")
    lines.append("## 5. SEO-Konkurrenten\n")
    if d["competitors"]:
        lines.append("| Domain | Organic Traffic | Keywords |")
        lines.append("|--------|-----------------|----------|")
        for c in d["competitors"][:10]:
            lines.append(f"| {c['domain']} | {c['organic_traffic']:,.0f} | {c['organic_keywords']:,} |")
    
    # Konkurrenz-Keywords
    lines.append("\n---\n")
    lines.append("## 6. Keywords der Top-Konkurrenten\n")
    for comp, keywords in d["competitor_keywords"].items():
        lines.append(f"\n### {comp}\n")
        lines.append("| Keyword | Volume | CPC | Position |")
        lines.append("|---------|--------|-----|----------|")
        for k in keywords[:20]:
            lines.append(f"| {k['keyword']} | {k['volume']} | €{k['cpc']:.2f} | {k['position']} |")
    
    # Keyword Difficulty
    lines.append("\n---\n")
    lines.append("## 7. Keyword Difficulty\n")
    lines.append("Legende: 0-30 = Leicht ✅ | 31-60 = Mittel ⚠️ | 61-100 = Schwer ❌\n")
    lines.append("| Keyword | Difficulty |")
    lines.append("|---------|------------|")
    sorted_diff = sorted(d["keyword_difficulty"].items(), key=lambda x: x[1] if x[1] is not None else 999)
    for kw, diff in sorted_diff[:30]:
        icon = "✅" if diff and diff <= 30 else ("⚠️" if diff and diff <= 60 else "❌")
        lines.append(f"| {kw} | {diff if diff else 'N/A'} {icon if diff else ''} |")
    
    lines.append("\n---\n*Report generiert mit SEO Keyword Tool*")
    return "\n".join(lines)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="SEO Keyword Research Tool")
    parser.add_argument("domain", help="Ziel-Domain (z.B. example.com)")
    parser.add_argument("--seeds", default="", help="Komma-getrennte Seed-Keywords")
    parser.add_argument("--lang", default="de", help="Sprache (de, en, etc.)")
    parser.add_argument("--country", default="Germany", help="Land (Germany, United States, etc.)")
    
    args = parser.parse_args()
    
    # Seeds parsen oder aus Domain ableiten
    if args.seeds:
        seeds = [s.strip() for s in args.seeds.split(",")]
    else:
        # Automatische Seeds aus Domain
        domain_name = args.domain.split(".")[0]
        seeds = [domain_name]
        print(f"⚠️ Keine Seeds angegeben, nutze: {domain_name}")
        print(f"   Tipp: --seeds 'keyword1,keyword2,keyword3'\n")
    
    run_research(args.domain, seeds, args.country, args.lang)
