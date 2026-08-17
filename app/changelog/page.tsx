import type { Metadata } from 'next'
import { dictionary } from '@/lib/dictionary'
import { SiteHeader } from '@/components/SiteHeader'
import { Changelog } from '@/components/Changelog'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Changelog',
  description: dictionary.en.changelog.metaDescription,
  alternates: { canonical: '/changelog' },
  openGraph: {
    title: dictionary.en.changelog.metaTitle,
    description: dictionary.en.changelog.metaDescription,
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
        <Changelog />
      </main>
      <Footer />
    </div>
  )
}
