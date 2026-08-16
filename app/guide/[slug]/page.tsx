import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/SiteHeader'
import { Guide } from '@/components/Guide'
import { Footer } from '@/components/Footer'
import { dictionary } from '@/lib/dictionary'
import { SECTION_ORDER, type SectionId } from '@/lib/guide'

export function generateStaticParams(): { slug: string }[] {
  return SECTION_ORDER.filter((id) => id !== 'overview').map((id) => ({ slug: id }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  if (!SECTION_ORDER.includes(slug as SectionId)) {
    return { title: dictionary.en.guide.metaTitle }
  }
  const section = dictionary.en.guide.sections[slug as SectionId]
  return {
    title: `${section.title} — LinkOPS Desktop`,
    description: section.intro,
    openGraph: {
      title: `${section.title} — LinkOPS Desktop`,
      description: section.intro,
      type: 'website',
      siteName: 'LinkOPS Desktop'
    }
  }
}

export default async function GuideSectionPage({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<React.JSX.Element> {
  const { slug } = await params
  if (!SECTION_ORDER.includes(slug as SectionId) || slug === 'overview') notFound()
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Guide sectionId={slug as SectionId} />
      </main>
      <Footer />
    </div>
  )
}
