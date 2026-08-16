'use client'

import { ArrowDown, ArrowRight, BookOpen, Download } from 'lucide-react'
import { useLang } from '@/lib/lang'
import { DOWNLOAD_URL } from '@/lib/site'
import { cn } from '@/lib/utils'
import { TerminalShell } from '@/components/ui/TerminalShell'

const SECTION_ORDER = [
  'overview',
  'install',
  'devices',
  'connect',
  'commands',
  'batch',
  'history',
  'settings',
  'update'
] as const

type SectionId = (typeof SECTION_ORDER)[number]

interface GuideSection {
  title: string
  intro: string
  steps: string[]
  terminal?: { title: string; lines: string[] }[]
}

export function Guide(): React.JSX.Element {
  const { t, lang } = useLang()
  const guide = t.guide
  const sections = guide.sections as Record<SectionId, GuideSection>

  const nextOf = (id: SectionId): SectionId | null => {
    const idx = SECTION_ORDER.indexOf(id)
    return idx >= 0 && idx < SECTION_ORDER.length - 1 ? SECTION_ORDER[idx + 1] : null
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      {/* Page header */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="mono-tag">{guide.tag}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{guide.title}</h1>
        <p className="mt-4 text-muted-foreground">{guide.lead}</p>
      </div>

      <div className="mt-12 gap-10 lg:grid lg:grid-cols-[220px_1fr]">
        {/* Sticky section nav */}
        <aside className="mb-8 lg:mb-0">
          <nav className="lg:sticky lg:top-24">
            <p className="mb-2 hidden text-xs font-medium uppercase tracking-wide text-muted-foreground lg:block">
              {lang === 'fa' ? 'فهرست' : 'Contents'}
            </p>
            <div className="flex flex-wrap gap-1.5 lg:flex-col">
              {SECTION_ORDER.map((id) => (
                <a
                  key={id}
                  href={`#guide-${id}`}
                  className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {guide.quickLinks[id]}
                </a>
              ))}
            </div>
          </nav>
        </aside>

        {/* Sections */}
        <div className="min-w-0 space-y-12">
          {SECTION_ORDER.map((id, i) => {
            const section = sections[id]
            const next = nextOf(id)
            return (
              <section key={id} id={`guide-${id}`} className="scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-sidebar font-mono text-xs text-muted-foreground">
                    {i + 1}
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{section.title}</h2>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{section.intro}</p>

                <ol className="mt-5 space-y-3">
                  {section.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-sidebar text-[11px] text-muted-foreground">
                        {j + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>

                {section.terminal && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {section.terminal.map((block, k) => (
                      <TerminalShell key={k} title={block.title} lines={block.lines} />
                    ))}
                  </div>
                )}

                {next && (
                  <a
                    href={`#guide-${next}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {guide.nextSection}: {sections[next].title}
                    <ArrowDown className="h-4 w-4" />
                  </a>
                )}
              </section>
            )
          })}

          {/* Bottom CTA */}
          <div className="rounded-lg border border-border bg-sidebar/40 p-6 text-center sm:p-8">
            <BookOpen className="mx-auto h-6 w-6 text-primary" />
            <p className="mt-3 text-lg font-semibold">{guide.title}</p>
            <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">{guide.lead}</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={DOWNLOAD_URL}
                download={DOWNLOAD_URL.startsWith('#') ? undefined : true}
                className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                {guide.downloadCta}
              </a>
              <a
                href="/"
                className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-accent"
              >
                <ArrowRight className={cn('h-4 w-4', lang === 'fa' && 'rotate-180')} />
                {guide.backHome}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
