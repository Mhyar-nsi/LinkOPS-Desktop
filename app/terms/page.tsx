import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { LegalPage } from '@/components/LegalPage'
import { Footer } from '@/components/Footer'
import { dictionary } from '@/lib/dictionary'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: dictionary.en.legal.termsLead,
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service — LinkOPS Desktop',
    description: dictionary.en.legal.termsLead,
    type: 'website',
    siteName: 'LinkOPS Desktop'
  }
}

export default function TermsPage(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <LegalPage kind="terms" />
      </main>
      <Footer />
    </div>
  )
}
