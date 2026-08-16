'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { useLang } from '@/lib/lang'
import { cn } from '@/lib/utils'

interface LegalBlock {
  heading: string
  paragraphs: string[]
}

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }): React.JSX.Element {
  const { t, lang } = useLang()
  const legal = t.legal

  const title = kind === 'privacy' ? legal.privacyTitle : legal.termsTitle
  const lead = kind === 'privacy' ? legal.privacyLead : legal.termsLead
  const blocks: LegalBlock[] = kind === 'privacy' ? legal.privacyBlocks : legal.termsBlocks

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Reveal>
        <p className="mono-tag">{legal.updated}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">{lead}</p>
      </Reveal>

      <div className="mt-10 space-y-10">
        {blocks.map((block, i) => (
          <Reveal key={block.heading} delay={Math.min(i * 0.05, 0.2)}>
            <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span className="h-4 w-1 rounded-full bg-primary" />
              {block.heading}
            </h2>
            {block.paragraphs.map((p, j) => (
              <p key={j} className="mt-3 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 border-t border-border pt-8">
        <Link
          href="/"
          className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-accent"
        >
          <ArrowRight className={cn('h-4 w-4', lang === 'fa' && 'rotate-180')} />
          {legal.backHome}
        </Link>
      </Reveal>
    </div>
  )
}
