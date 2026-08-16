import { SiteHeader } from '@/components/SiteHeader'
import { Hero } from '@/components/Hero'
import { Download } from '@/components/Download'
import { Features } from '@/components/Features'
import { Screenshots } from '@/components/Screenshots'
import { Protocols } from '@/components/Protocols'
import { Security } from '@/components/Security'
import { Cta } from '@/components/Cta'
import { Footer } from '@/components/Footer'

export default function Page(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Download />
        <Features />
        <Screenshots />
        <Protocols />
        <Security />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
