import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { Guide } from '@/components/Guide'
import { Footer } from '@/components/Footer'
import { dictionary } from '@/lib/dictionary'

export const metadata: Metadata = {
  title: dictionary.en.guide.metaTitle,
  description: dictionary.en.guide.metaDescription,
  openGraph: {
    title: dictionary.en.guide.metaTitle,
    description: dictionary.en.guide.metaDescription,
    type: 'website',
    siteName: 'LinkOPS Desktop',
    images: [{ url: '/screenshots/dashboard.png', width: 1440, height: 900, alt: 'LinkOPS Desktop dashboard' }]
  }
}

export default function GuidePage(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Guide sectionId="overview" />
      </main>
      <Footer />
    </div>
  )
}
