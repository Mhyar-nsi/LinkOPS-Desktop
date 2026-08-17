import type { Metadata } from 'next'
import { dictionary } from '@/lib/dictionary'
import { SiteHeader } from '@/components/SiteHeader'
import { Pricing } from '@/components/Pricing'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing',
  description: dictionary.en.pricing.metaDescription,
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: dictionary.en.pricing.metaTitle,
    description: dictionary.en.pricing.metaDescription,
    type: 'website',
    siteName: 'LinkOPS Desktop',
    images: [{ url: '/screenshots/dashboard.png', width: 1440, height: 900, alt: 'LinkOPS Desktop dashboard' }]
  }
}

export default function Page(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
