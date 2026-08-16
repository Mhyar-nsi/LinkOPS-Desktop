'use client'

import Link from 'next/link'
import { ArrowUp, BookOpen, Download, KeyRound } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { useLang } from '@/lib/lang'
import { DOWNLOAD_URL } from '@/lib/site'

export function Cta(): React.JSX.Element {
  const { t } = useLang()

  return (
    <section className="border-t border-border bg-sidebar/40">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <Reveal>
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <KeyRound className="h-6 w-6" />
        </div>
        <p className="mono-tag">{t.cta.tag}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.cta.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.cta.lead}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={DOWNLOAD_URL}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            {t.cta.primary}
          </Link>
          <Link
            href="/guide"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-accent"
          >
            <BookOpen className="h-4 w-4" />
            {t.cta.guide}
          </Link>
          <Link
            href="/#top"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-accent"
          >
            {t.cta.secondary}
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
