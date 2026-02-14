/**
 * SEO-Daten für Programmatic SEO
 * Zentrale Quelle für Keywords und Städte – Basis für lokale Landingpages
 */

export const PRIMARY_KEYWORDS = [
  'SEO Agentur München',
  'SEO München',
  'Suchmaschinenoptimierung München',
  'SEO Beratung München',
  'Local SEO München',
  'SEO Agentur Bayern',
  'SEO Agentur München Preis',
  'SEO Agentur München Test',
  'Suchmaschinenoptimierung Agentur München',
  'SEO Dienstleister München',
] as const

export interface CityInfo {
  name: string
  slug: string
  population: number
  region: string
  highlight: string
  economy: string
  facts: string[]
  seoImportance: string
  cityAbout: string
  challenge: string
  whySeoNeeded: string
}

export const CITIES: CityInfo[] = [
  {
    name: 'Garching',
    slug: 'garching',
    population: 17656,
    region: 'Landkreis München, Oberbayern',
    highlight: 'Hochschul- und Forschungszentrum mit Max-Planck-Instituten, ESO und Forschungsreaktor FRM II. U-Bahn-Anschluss nach München in 20 Minuten.',
    economy: 'Business Campus mit tausenden Arbeitsplätzen, Gewerbegebiet Hochbrück, starke Wissenschafts- und Technologiebranche.',
    facts: ['4 Max-Planck-Institute', 'Europäische Südsternwarte (ESO)', 'Forschungsreaktor FRM II', '3 U-Bahnhöfe, 20 Min. nach München', 'Business Campus mit 4.000+ Arbeitsplätzen'],
    seoImportance: 'Wissenschafts- und Technologieunternehmen in Garching konkurrieren um hochqualifizierte Kunden und Partner. Suchmaschinenoptimierung hilft Forschungsdienstleister, Technologie-Start-ups und B2B-Anbieter in den Suchergebnissen sichtbar zu werden – besonders bei Fachbegriffen und lokalen Anfragen.',
    cityAbout: 'Garching bei München ist mehr als eine Stadt – es ist eines der wichtigsten Forschungszentren Europas. Mit vier Max-Planck-Instituten, der Europäischen Südsternwarte und dem Forschungsreaktor FRM II zieht die Stadt Wissenschaftler und Technologieunternehmen aus aller Welt an. Der Business Campus und das Gewerbegebiet Hochbrück haben tausende Arbeitsplätze geschaffen. Drei U-Bahnhöfe verbinden Garching in nur 20 Minuten mit der Münchner Innenstadt.',
    challenge: 'Wissenschafts- und Technologieunternehmen in Garching stehen vor einer besonderen Herausforderung: Sie müssen bei komplexen Fachbegriffen und nischen-spezifischen Suchanfragen sichtbar sein – oft in einem internationalen, stark umkämpften Umfeld. Wer bei Google nicht gefunden wird, verliert potenzielle Kooperationspartner und Aufträge.',
    whySeoNeeded: 'Forschungsdienstleister, Spin-offs und B2B-Anbieter in Garching brauchen SEO, um bei Fach-Suchanfragen, Projekt-Ausschreibungen und Partner-Recherchen gefunden zu werden. Ohne strategische Suchmaschinenoptimierung bleiben sie trotz Exzellenz unsichtbar.',
  },
  {
    name: 'Starnberg',
    slug: 'starnberg',
    population: 24000,
    region: 'Landkreis Starnberg, Oberbayern',
    highlight: 'Am Starnberger See gelegen. Landkreis mit höchstem Kaufkraftdurchschnitt Deutschlands (33.102 € pro Kopf).',
    economy: 'Teil der Metropolregion München, Global Player wie United Domains, IT-Dienstleister, Einzelhandel und Gastronomie.',
    facts: ['Höchste Kaufkraft Deutschlands (33.102 €/Kopf)', '25 km südwestlich von München', 'S-Bahn 35 Min. zum Hauptbahnhof', 'Starnberger See, starke Tourismusbranche', 'Global Player wie United Domains'],
    seoImportance: 'Der Landkreis Starnberg hat die höchste Kaufkraft in Deutschland – potenzielle Kunden suchen online nach regionalen Dienstleistern. SEO und Local SEO sind entscheidend, um Gastronomie, Einzelhandel und Dienstleister bei lokalen Suchen und Google Maps zu positionieren.',
    cityAbout: 'Starnberg am gleichnamigen See ist eine der wohlhabendsten Städte Bayerns. Der Landkreis hat den höchsten Kaufkraftdurchschnitt Deutschlands – über 33.000 Euro pro Kopf. Die malerische Lage, die Nähe zu München (25 km) und die starke Wirtschaft machen Starnberg zu einem attraktiven Standort für Gastronomie, Einzelhandel und Dienstleister.',
    challenge: 'Hohe Kaufkraft bedeutet auch hohe Erwartungen: Kunden in Starnberg vergleichen online intensiv. Wer bei Google und Google Maps nicht auf Seite 1 erscheint, verliert wertvolle Kunden an die Konkurrenz – oft an Anbieter aus München.',
    whySeoNeeded: 'Gastronomie, Einzelhandel, Ärzte und Dienstleister in Starnberg brauchen Local SEO, um bei „Restaurant Starnberg“, „Arzt Starnberger See“ oder „Handwerker Starnberg“ gefunden zu werden. Die Kaufkraft ist da – die Sichtbarkeit muss stimmen.',
  },
  {
    name: 'Traunstein',
    slug: 'traunstein',
    population: 21000,
    region: 'Landkreis Traunstein, Oberbayern',
    highlight: 'Herz des Chiemgaus, Nähe zum Chiemsee. Historische Altstadt, gute Anbindung an München und Salzburg.',
    economy: 'Handwerk, Handel, Tourismus, Gesundheitswesen. Wichtiger regionaler Wirtschaftsstandort im südöstlichen Oberbayern.',
    facts: ['Herz des Chiemgaus', 'Nähe Chiemsee und Alpen', 'Historische Altstadt', 'Schnellstraße nach München und Salzburg', 'Starke Handwerks- und Tourismusbranche'],
    seoImportance: 'Tourismus und Handwerk prägen Traunstein. Hotels, Gastronomie und lokale Dienstleister profitieren von Local SEO, um Urlauber und Einheimische bei Suchen wie „Restaurant Traunstein“ oder „Handwerker Chiemgau“ zu erreichen.',
    cityAbout: 'Traunstein ist das Herz des Chiemgaus – eingebettet zwischen Chiemsee und Alpen. Die historische Altstadt, die Nähe zu Salzburg und München sowie die starke Handwerks- und Tourismustradition machen die Stadt zu einem bedeutenden regionalen Zentrum.',
    challenge: 'Urlaubsgäste buchen und suchen online. Wer bei „Hotel Chiemgau“, „Restaurant Traunstein“ oder „Aktivurlaub Chiemsee“ nicht rankt, bleibt unsichtbar. Gleichzeitig konkurrieren Handwerker und Dienstleister um die Aufmerksamkeit der Einheimischen.',
    whySeoNeeded: 'Hotels, Gastronomie und Tourismusanbieter brauchen SEO für Buchungsanfragen. Handwerker und lokale Dienstleister profitieren von Local SEO, um Einheimische bei konkreten Suchanfragen zu erreichen.',
  },
  {
    name: 'Freising',
    slug: 'freising',
    population: 50000,
    region: 'Landkreis Freising, Oberbayern',
    highlight: 'Große Kreisstadt nördlich von München. Landkreis Freising: Platz 3 im Wirtschaftskraft-Ranking deutscher Landkreise.',
    economy: 'Nähe zum Flughafen München, exzellente Verkehrsinfrastruktur, starke regionale Wirtschaft, Wissenschaftsstadt.',
    facts: ['Platz 3 im Wirtschaftskraft-Ranking Deutschlands', 'Direkt am Flughafen München', 'Technische Universität München (TUM)', 'Weihenstephan: älteste Brauerei der Welt', 'Starkes Gewerbegebiet'],
    seoImportance: 'Freising ist ein Wirtschaftsmotor. Unternehmen rund um den Flughafen, Logistik und Wissenschaft brauchen starke Online-Präsenz. SEO hilft B2B-Dienstleister und lokale Firmen, bei Fachsuchen und regionalen Anfragen gefunden zu werden.',
    cityAbout: 'Freising – die Domstadt nördlich von München – verbindet 1.000 Jahre Geschichte mit modernem Wirtschaftsleben. Direkt am Flughafen München gelegen, belegt der Landkreis Platz 3 im Wirtschaftskraft-Ranking Deutschlands. Die TUM in Weihenstephan und starke Gewerbegebiete prägen die Region.',
    challenge: 'Unternehmen in Freising konkurrieren mit Anbietern aus München und dem Umland. Logistik, Flughafendienstleister und B2B-Anbieter müssen bei Fach-Suchanfragen sichtbar sein – sonst gehen Aufträge an die Konkurrenz.',
    whySeoNeeded: 'Logistikunternehmen, Flughafendienstleister und lokale B2B-Anbieter brauchen SEO, um bei Ausschreibungen, Partner-Recherchen und Fach-Suchen gefunden zu werden. Die Wirtschaftskraft ist da – die Online-Sichtbarkeit entscheidet.',
  },
  {
    name: 'Dachau',
    slug: 'dachau',
    population: 48000,
    region: 'Landkreis Dachau, Oberbayern',
    highlight: 'Direkt nordwestlich von München. Gute S-Bahn-Anbindung (ca. 25 Min. zum Hauptbahnhof).',
    economy: 'Pendlerstadt, Gewerbegebiete, Einzelhandel, Handwerk und Dienstleistungen. Wächst durch München-Nähe.',
    facts: ['S-Bahn S2: 25 Min. zum Münchner Hauptbahnhof', 'Wachsendes Gewerbegebiet', 'Starker Einzelhandel', 'Viele Pendler aus München', 'Gute Autobahnanbindung A8'],
    seoImportance: 'Dachau wächst als Pendler- und Wirtschaftsstandort. Lokale Unternehmen müssen sich gegen München behaupten. Mit Local SEO und gezielter Keyword-Strategie können Handwerker, Dienstleister und Geschäfte in Dachau bei regionalen Suchen ranken.',
    cityAbout: 'Dachau – direkt nordwestlich von München – hat sich von einer Kleinstadt zu einer dynamischen Pendler- und Wirtschaftsstadt entwickelt. Die S-Bahn verbindet in 25 Minuten mit dem Münchner Hauptbahnhof. Gewerbegebiete und Einzelhandel wachsen stetig.',
    challenge: 'Lokale Unternehmen in Dachau stehen im Schatten Münchens. Bei Suchen wie „Handwerker Dachau“ oder „Arzt Dachau“ dominieren oft Münchner Anbieter. Ohne gezielte Local-SEO-Strategie bleiben Unternehmen unsichtbar.',
    whySeoNeeded: 'Handwerker, Ärzte, Anwälte und Geschäfte in Dachau brauchen SEO, um bei regionalen Suchanfragen vor den Münchner Konkurrenten zu ranken. Die Nähe zu München ist Chance und Herausforderung zugleich.',
  },
  {
    name: 'Germering',
    slug: 'germering',
    population: 41000,
    region: 'Landkreis Fürstenfeldbruck, Oberbayern',
    highlight: 'Fünftgrößte Stadt Oberbayerns, westlich von München. S-Bahn S8 verbindet mit München in rund 30 Minuten.',
    economy: 'Pendlerstandort, Einzelhandel, lokale Gewerbe, starke Nachfrage nach lokalen Dienstleistungen.',
    facts: ['Fünftgrößte Stadt Oberbayerns', 'S-Bahn S8: 30 Min. nach München', 'Starker Einzelhandel', 'Gewerbegebiet Nord', 'Wachsendes Dienstleistungssegment'],
    seoImportance: 'Germering ist eine typische Pendlerstadt mit hohem Bedarf an lokalen Services. Handwerker, Ärzte, Rechtsanwälte und Geschäfte konkurrieren um Sichtbarkeit. Local SEO und Google Business Profile optimieren die Auffindbarkeit bei „vor Ort“-Suchen.',
    cityAbout: 'Germering ist die fünftgrößte Stadt Oberbayerns – westlich von München, gut angebunden durch die S-Bahn S8. Starker Einzelhandel, das Gewerbegebiet Nord und ein wachsendes Dienstleistungssegment prägen die Stadt. Viele Pendler suchen vor Ort nach Services.',
    challenge: 'In Germering konkurrieren lokale Anbieter um die gleichen Kunden: Wer erscheint bei „Zahnarzt Germering“, „Rechtsanwalt Germering“ oder „Handwerker Germering“ zuerst? Ohne optimiertes Google Business Profile und Local SEO geht man leer aus.',
    whySeoNeeded: 'Ärzte, Anwälte, Handwerker und Geschäfte in Germering brauchen Local SEO und ein optimiertes Google Business Profile. Die Nachfrage ist da – die Sichtbarkeit bei lokalen Suchen entscheidet über Neukunden.',
  },
  {
    name: 'Fürstenfeldbruck',
    slug: 'fuerstenfeldbruck',
    population: 38000,
    region: 'Landkreis Fürstenfeldbruck, Oberbayern',
    highlight: 'Kreisstadt mit knapp 200.000 Einwohnern im Landkreis. „Region der Zukunft“-Prädikat, AGENDA-21-Modelllandkreis.',
    economy: 'Mittelstand in Industrie, Handel, Handwerk und Dienstleistungen. FFB-Schau als bedeutende Gewerbeschau.',
    facts: ['Landkreis mit 200.000 Einwohnern', 'FFB-Schau: große Gewerbeschau', '„Region der Zukunft“-Prädikat', 'Starker Mittelstand', 'S-Bahn nach München'],
    seoImportance: 'Der Landkreis Fürstenfeldbruck hat einen starken Mittelstand. Industrie, Handel und Handwerk konkurrieren regional. SEO und Local SEO sorgen dafür, dass Unternehmen bei der FFB-Schau und darüber hinaus dauerhaft online sichtbar bleiben.',
    cityAbout: 'Fürstenfeldbruck ist die Kreisstadt eines der wirtschaftsstärksten Landkreise Bayerns. Knapp 200.000 Einwohner, „Region der Zukunft“-Prädikat und die bedeutende FFB-Schau machen die Region zu einem Hotspot für Mittelstand und Handwerk.',
    challenge: 'Starker Mittelstand bedeutet harte Konkurrenz: Industrie, Handel und Handwerk kämpfen um die gleichen Kunden. Die FFB-Schau bringt Sichtbarkeit – aber danach? Wer online nicht rankt, wird schnell vergessen.',
    whySeoNeeded: 'Unternehmen im Landkreis Fürstenfeldbruck brauchen SEO, um dauerhaft sichtbar zu bleiben – nicht nur während der FFB-Schau. Local SEO hilft Handwerkern und Dienstleistern, bei regionalen Suchen gefunden zu werden.',
  },
  {
    name: 'Rosenheim',
    slug: 'rosenheim',
    population: 64000,
    region: 'Kreisfreie Stadt, Oberbayern',
    highlight: 'Kreisfreie Stadt am Inn, Tor zum Chiemgau. Bahnknotenpunkt, 50 Minuten mit dem Zug nach München.',
    economy: 'Holzwirtschaft, Handel, Tourismus, verarbeitende Industrie. Wichtiger Wirtschaftsstandort in Südostbayern.',
    facts: ['Wichtiger Bahnknotenpunkt', '50 Min. Zugfahrt nach München', 'Starke Holzwirtschaft', 'Tor zum Chiemgau', 'Verarbeitende Industrie'],
    seoImportance: 'Rosenheim verbindet Industrie, Handel und Tourismus. Holzverarbeiter, Einzelhändler und Gastronomen profitieren von SEO, um in der Region und darüber hinaus gefunden zu werden – besonders bei Branchen- und Ortsanfragen.',
    cityAbout: 'Rosenheim – die Stadt am Inn – ist Tor zum Chiemgau und wichtiger Bahnknotenpunkt. Starke Holzwirtschaft, verarbeitende Industrie und Tourismus prägen die Wirtschaft. In 50 Minuten ist man mit dem Zug in München.',
    challenge: 'Rosenheim verbindet verschiedene Branchen: Holzverarbeiter suchen B2B-Kunden, Gastronomen Urlauber, Einzelhändler Einheimische. Jede Branche braucht andere Keywords – aber alle brauchen Sichtbarkeit bei Google.',
    whySeoNeeded: 'Holzverarbeiter brauchen B2B-SEO für Fachsuchen. Gastronomie und Einzelhandel profitieren von Local SEO. Ohne strategische Suchmaschinenoptimierung bleiben Unternehmen in Rosenheim hinter der Konkurrenz zurück.',
  },
  {
    name: 'Kempten',
    slug: 'kempten',
    population: 70000,
    region: 'Kreisfreie Stadt, Allgäu',
    highlight: 'Größte Stadt im Allgäu, eine der ältesten Städte Deutschlands. Zentrum für Tourismus und Wirtschaft.',
    economy: 'Maschinenbau, Textilindustrie, Dienstleistungen, Tourismus. Starker Mittelstand und Hidden Champions.',
    facts: ['Größte Stadt im Allgäu', 'Eine der ältesten Städte Deutschlands', 'Maschinenbau und Textilindustrie', 'Starker Tourismus', 'Hidden Champions im Mittelstand'],
    seoImportance: 'Kempten verbindet Industrie mit Tourismus. B2B-Unternehmen und Tourismusbetriebe brauchen unterschiedliche SEO-Strategien. Wir helfen beiden, bei relevanten Suchen – ob „Maschinenbau Allgäu“ oder „Hotel Kempten“ – zu ranken.',
    cityAbout: 'Kempten – die größte Stadt im Allgäu – verbindet 2.000 Jahre Geschichte mit moderner Wirtschaft. Maschinenbau, Textilindustrie und Hidden Champions prägen die Industrie. Gleichzeitig ist Kempten ein wichtiges Tourismus-Zentrum.',
    challenge: 'Kempten hat zwei Gesichter: B2B-Unternehmen konkurrieren bei Fach-Suchanfragen, Tourismusbetriebe bei Urlaubssuchen. Beide brauchen SEO – aber mit unterschiedlichen Strategien. Eine Einheitslösung funktioniert nicht.',
    whySeoNeeded: 'Maschinenbauer und Zulieferer brauchen B2B-SEO für „Maschinenbau Allgäu“ und ähnliche Fachbegriffe. Hotels und Gastronomie brauchen Local SEO und Reise-Keywords. Wir entwickeln die passende Strategie für jede Branche.',
  },
  {
    name: 'Landshut',
    slug: 'landshut',
    population: 76000,
    region: 'Kreisfreie Stadt, Niederbayern',
    highlight: 'Landeshauptstadt Niederbayerns, historische Altstadt. BMW-Werk, starke Industrie- und Wissenschaftspräsenz.',
    economy: 'Automobilindustrie, Hochschule, Handel, Gesundheitswesen. Bedeutender Wirtschaftsstandort in Niederbayern.',
    facts: ['Landeshauptstadt Niederbayerns', 'BMW-Werk und Zulieferer', 'Hochschule Landshut', 'Historische Altstadt', 'Starke Automobil- und Zulieferindustrie'],
    seoImportance: 'Landshut ist ein Industriestandort mit BMW und vielen Zulieferern. B2B-SEO und technisches SEO helfen Unternehmen, bei Fachbegriffen und Lieferanten-Suchen sichtbar zu werden. Lokale Dienstleister profitieren von Local SEO.',
    cityAbout: 'Landshut – Landeshauptstadt Niederbayerns – ist geprägt von der Automobilindustrie. Das BMW-Werk und zahlreiche Zulieferer schaffen tausende Arbeitsplätze. Die historische Altstadt und die Hochschule Landshut ergänzen das Bild einer modernen Wirtschaftsstadt.',
    challenge: 'Zulieferer und Technologiedienstleister in Landshut müssen bei OEM-Suchen und Fachbegriffen sichtbar sein. Wer bei „Automobilzulieferer Landshut“ oder Branchen-Keywords nicht rankt, verpasst Ausschreibungen und Kooperationen.',
    whySeoNeeded: 'Automobilzulieferer brauchen B2B-SEO für Fach- und Lieferanten-Suchen. Lokale Dienstleister – von Ärzten bis Handwerkern – profitieren von Local SEO. Die Industrie sucht online – die Sichtbarkeit entscheidet.',
  },
  {
    name: 'Augsburg',
    slug: 'augsburg',
    population: 306000,
    region: 'Kreisfreie Stadt, Schwaben',
    highlight: 'Drittgrößte Stadt Bayerns. BIP 15,3 Mrd. €, über 34.000 Unternehmen. Augsburg Innovationspark.',
    economy: 'Diverse Industrie, 152.000 sozialversicherungspflichtig Beschäftigte, starkes Mittelstandsökosystem.',
    facts: ['Drittgrößte Stadt Bayerns', '34.000+ Unternehmen', 'Augsburg Innovationspark (49.000 m²)', '152.000 sozialversicherungspflichtig Beschäftigte', 'BIP 15,3 Mrd. €'],
    seoImportance: 'Augsburg ist ein bedeutender Wirtschaftsstandort. Mit 34.000 Unternehmen herrscht harter Wettbewerb um Online-Sichtbarkeit. SEO und Local SEO helfen Mittelständlern, sich gegen Konkurrenz aus München und der Region zu behaupten.',
    cityAbout: 'Augsburg – drittgrößte Stadt Bayerns – ist ein Wirtschaftsmotor mit über 34.000 Unternehmen und 152.000 Beschäftigten. Der Augsburg Innovationspark, vielfältige Industrie und ein starkes Mittelstandsökosystem prägen die Stadt.',
    challenge: '34.000 Unternehmen kämpfen um Sichtbarkeit. Wer bei Google nicht auf Seite 1 steht, verliert gegen die Konkurrenz – aus Augsburg, München und der Region. Der Wettbewerb ist hart, die Standards sind hoch.',
    whySeoNeeded: 'Mittelständler in Augsburg brauchen SEO, um sich gegen größere Player zu behaupten. Local SEO hilft bei regionalen Suchen, technisches SEO und Content-Marketing bei Fach- und Branchen-Keywords.',
  },
  {
    name: 'Ingolstadt',
    slug: 'ingolstadt',
    population: 140000,
    region: 'Kreisfreie Stadt, Oberbayern',
    highlight: 'Audi-Standort, zweitgrößte Stadt Oberbayerns. Universitätsstadt mit starker Automobil- und Zulieferindustrie.',
    economy: 'Automobilindustrie, Technologie, Forschung. Hohe Kaufkraft, viele Arbeitsplätze im produzierenden Gewerbe.',
    facts: ['Audi-Zentrale und Werke', 'Zweitgrößte Stadt Oberbayerns', 'Katholische Universität Eichstätt-Ingolstadt', 'Starke Zuliefererindustrie', 'Hohe Kaufkraft'],
    seoImportance: 'Ingolstadt lebt von der Automobilindustrie. Zulieferer, Technologiedienstleister und lokale Unternehmen konkurrieren um Sichtbarkeit. B2B-SEO und technisches SEO helfen, bei Fach- und Branchensuchen gefunden zu werden.',
    cityAbout: 'Ingolstadt – Audi-Stadt und zweitgrößte Stadt Oberbayerns – ist ein Zentrum der Automobilindustrie. Audi-Zentrale, Werke und eine starke Zuliefererindustrie prägen die Wirtschaft. Hohe Kaufkraft und die Universität sorgen für Dynamik.',
    challenge: 'Zulieferer und Technologiedienstleister in Ingolstadt konkurrieren um OEM-Aufträge und Fach-Suchanfragen. Wer bei „Automobilzulieferer Ingolstadt“ oder Branchen-Keywords nicht rankt, bleibt außen vor.',
    whySeoNeeded: 'Automobilzulieferer und B2B-Dienstleister brauchen technisches SEO und Content-Marketing für Fach-Keywords. Lokale Unternehmen profitieren von Local SEO. Die Industrie sucht online – SEO macht sichtbar.',
  },
  {
    name: 'Regensburg',
    slug: 'regensburg',
    population: 160000,
    region: 'Kreisfreie Stadt, Oberpfalz',
    highlight: 'UNESCO-Welterbestadt. BIP pro Einwohner 92.038 € (vergleichbar mit München). Einzugsgebiet ca. 700.000 Menschen.',
    economy: 'TOP-12-Standort mit hohen Zukunftschancen. Global Player, Hidden Champions, Hochschulen, hohe Arbeitsplatzdichte.',
    facts: ['UNESCO-Welterbestadt', 'BIP pro Kopf 92.038 € (wie München)', 'TOP-12-Wirtschaftsstandort', 'Einzugsgebiet 700.000 Menschen', 'Global Player und Hidden Champions'],
    seoImportance: 'Regensburg ist ein Top-Wirtschaftsstandort. Unternehmen müssen sich gegen nationale Konkurrenz behaupten. Strategisches SEO und Content-Marketing sorgen für nachhaltige Sichtbarkeit bei Fach- und Lokalsuchen.',
    cityAbout: 'Regensburg – UNESCO-Welterbestadt und TOP-12-Wirtschaftsstandort – verbindet Geschichte mit Zukunft. Mit einem BIP pro Kopf vergleichbar mit München und einem Einzugsgebiet von 700.000 Menschen zieht die Stadt Global Player und Hidden Champions an.',
    challenge: 'Regensburger Unternehmen konkurrieren mit nationaler und internationaler Konkurrenz. Ohne starke SEO-Strategie und hochwertigen Content bleibt man unsichtbar – trotz exzellenter Produkte und Dienstleistungen.',
    whySeoNeeded: 'Hidden Champions und Global Player in Regensburg brauchen strategisches SEO, um bei Fach- und Branchensuchen zu ranken. Content-Marketing und technisches SEO sorgen für nachhaltige Sichtbarkeit im Wettbewerb.',
  },
]

/** Erst 20 Keywords: 10 primäre + 10 Städte (SEO Agentur [Stadt]) */
export const TOP_20_KEYWORDS = [
  ...PRIMARY_KEYWORDS,
  ...CITIES.slice(0, 10).map((c) => `SEO Agentur ${c.name}`),
] as const

export type CitySlug = CityInfo['slug']

export function getCityBySlug(slug: string): CityInfo | undefined {
  return CITIES.find((c) => c.slug === slug)
}

export function getAllCitySlugs(): string[] {
  return CITIES.map((c) => c.slug)
}
