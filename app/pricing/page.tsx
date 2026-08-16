import type { Metadata } from 'next'
import { dictionary } from '@/lib/dictionary'
import { SiteHeader } from '@/components/SiteHeader'
import { Pricing } from '@/components/Pricing'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: dictionary.en.pricing.metaTitle,
  description: dictionary.en.pricing.metaDescription
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
