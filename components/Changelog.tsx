'use client'

import { Check, Download, History, Tag } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { useLang } from '@/lib/lang'
import { DOWNLOAD_URL, DOWNLOADS } from '@/lib/site'
import { RELEASES } from '@/lib/releases'
import { cn } from '@/lib/utils'

export function Changelog(): React.JSX.Element {
  const { t, lang } = useLang()

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Reveal>
        <p className="mono-tag">{t.changelog.tag}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.changelog.title}</h1>
        <p className="mt-4 text-muted-foreground">{t.changelog.lead}</p>
      </Reveal>

      <div className="mt-10 space-y-6">
        {RELEASES.map((release, i) => (
          <Reveal key={release.version} delay={i * 0.05}>
            <article className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 font-mono text-sm font-semibold text-primary">
                  <Tag className="h-3.5 w-3.5" />
                  v{release.version}
                </span>
                <span className="text-xs text-muted-foreground" dir="ltr">
                  {release.date}
                </span>
                <span className="ms-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                  <History className="h-3.5 w-3.5" />
                  {i === 0 ? t.changelog.latest : t.changelog.previous}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {release.notes[lang].map((note, k) => (
                  <li key={k} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span className="min-w-0">{note}</span>
                  </li>
                ))}
              </ul>

              {i === 0 && (
                <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border pt-4">
                  <Link
                    href={DOWNLOAD_URL}
                    className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Download className="h-4 w-4" />
                    {t.changelog.downloadLatest}
                  </Link>
                  <span className="text-xs text-muted-foreground">
                    {t.changelog.downloadHint}
                  </span>
                  <span className="hidden items-center gap-1 text-[10px] text-muted-foreground/70 sm:inline-flex">
                    <a href={DOWNLOADS.windows.url} className={cn(!DOWNLOADS.windows.url && 'pointer-events-none')} dir="ltr">
                      win
                    </a>
                    <span>·</span>
                    <a href={DOWNLOADS.linux.deb.url} dir="ltr">deb</a>
                    <span>·</span>
                    <a href={DOWNLOADS.mac.url} dir="ltr">dmg</a>
                  </span>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
