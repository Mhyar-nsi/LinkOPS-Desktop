import type { Metadata } from 'next'
import { dictionary } from '@/lib/dictionary'
import { SiteHeader } from '@/components/SiteHeader'
import { Changelog } from '@/components/Changelog'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: dictionary.en.changelog.metaTitle,
  description: dictionary.en.changelog.metaDescription
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
