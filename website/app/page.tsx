import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeatureGrid from '@/components/FeatureGrid'
import KeywordSection from '@/components/KeywordSection'
import ScreenshotsSection from '@/components/ScreenshotsSection'
import WhySeoSection from '@/components/WhySeoSection'
import Footer from '@/components/Footer'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import HomepageFAQSchema from '@/components/HomepageFAQSchema'
import WebSiteSchema from '@/components/WebSiteSchema'

// Below-fold sections: lazy load für kleinere Initial-Bundle
const ProcessSection = dynamic(() => import('@/components/ProcessSection'), { ssr: true })
const TestimonialSlider = dynamic(() => import('@/components/TestimonialSlider'), { ssr: true })
const CityLinks = dynamic(() => import('@/components/CityLinks'), { ssr: true })
const HomepageFAQ = dynamic(() => import('@/components/HomepageFAQ'), { ssr: true })
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: true })

export const metadata: Metadata = {
  title: { absolute: 'SEO Agentur München | Suchmaschinenoptimierung & Local SEO' },
  description:
    'Professionelle SEO Agentur in München. Suchmaschinenoptimierung, Local SEO und SEO Beratung für Unternehmen in Bayern. Transparente Preise, messbare Erfolge. Kostenloses Erstgespräch.',
  openGraph: {
    title: 'SEO Agentur München | Suchmaschinenoptimierung & Local SEO',
    description:
      'Professionelle SEO Agentur in München. Suchmaschinenoptimierung, Local SEO und SEO Beratung für Unternehmen in Bayern.',
  },
}

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <HomepageFAQSchema />
      <WebSiteSchema />
      <Header />
      <main>
        <Hero showSearchAnimation />
        <FeatureGrid />
        <WhySeoSection />
        <KeywordSection />
        <ScreenshotsSection />
        <ProcessSection />
        <TestimonialSlider />
        <CityLinks />
        <HomepageFAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
