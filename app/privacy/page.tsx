import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { LegalPage } from '@/components/LegalPage'
import { Footer } from '@/components/Footer'
import { dictionary } from '@/lib/dictionary'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: dictionary.en.legal.privacyLead,
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy — LinkOPS Desktop',
    description: dictionary.en.legal.privacyLead,
    type: 'website',
    siteName: 'LinkOPS Desktop'
  }
}

export default function PrivacyPage(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <LegalPage kind="privacy" />
      </main>
      <Footer />
    </div>
  )
}
