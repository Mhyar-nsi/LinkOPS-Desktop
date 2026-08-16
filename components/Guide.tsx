'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Download,
  Info,
  Lightbulb,
  TriangleAlert
} from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { useLang } from '@/lib/lang'
import { DOWNLOAD_URL } from '@/lib/site'
import { SECTION_ORDER, sectionHref, type SectionId } from '@/lib/guide'
import { cn } from '@/lib/utils'
import { TerminalShell } from '@/components/ui/TerminalShell'

interface GuideNote {
  type: 'tip' | 'note' | 'warning'
  text: string
}

interface GuideTable {
  title: string
  headers: string[]
  rows: string[][]
}

interface GuideSection {
  title: string
  intro: string
  steps: string[]
  terminal?: { title: string; lines: string[] }[]
  notes?: GuideNote[]
  table?: GuideTable
}

const NOTE_STYLES: Record<GuideNote['type'], { icon: typeof Info; box: string; label: string }> = {
  tip: { icon: Lightbulb, box: 'border-success/30 bg-success/5', label: 'text-success' },
  note: { icon: Info, box: 'border-info/30 bg-info/5', label: 'text-info' },
  warning: { icon: TriangleAlert, box: 'border-warning/30 bg-warning/5', label: 'text-warning' }
}

export function Guide({ sectionId }: { sectionId: SectionId }): React.JSX.Element {
  const { t, lang } = useLang()
  const guide = t.guide
  const sections = guide.sections as Record<SectionId, GuideSection>
  const section = sections[sectionId]
  const idx = SECTION_ORDER.indexOf(sectionId)
  const prev = idx > 0 ? SECTION_ORDER[idx - 1] : null
  const next = idx < SECTION_ORDER.length - 1 ? SECTION_ORDER[idx + 1] : null

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Breadcrumb — Guide / section title */}
      <Reveal>
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/guide" className="transition-colors hover:text-foreground">
            {guide.title}
          </Link>
          <ArrowLeft className={cn('h-3 w-3', lang === 'fa' && 'rotate-180')} />
          <span className="text-foreground">{section.title}</span>
        </nav>
      </Reveal>

      <div className="mt-6 gap-10 lg:grid lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* Sticky sidebar — all sections link to their own pages */}
        <aside className="mb-8 lg:mb-0">
          <nav className="lg:sticky lg:top-20">
            <p className="mb-2 hidden text-xs font-medium uppercase tracking-wide text-muted-foreground lg:block">
              {lang === 'fa' ? 'فهرست' : 'On this page'}
            </p>
            <div className="flex flex-wrap gap-1.5 lg:flex-col">
              {SECTION_ORDER.map((id, i) => {
                const isActive = id === sectionId
                return (
                  <Link
                    key={id}
                    href={sectionHref(id)}
                    className={cn(
                      'flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors',
                      isActive
                        ? 'bg-accent font-medium text-foreground'
                        : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground'
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-4 w-4 shrink-0 items-center justify-center font-mono text-[10px]',
                        isActive ? 'text-primary' : 'text-muted-foreground/70'
                      )}
                    >
                      {i + 1}
                    </span>
                    {guide.quickLinks[id]}
                  </Link>
                )
              })}
            </div>
            <div className="mt-6 hidden border-t border-border pt-6 lg:block">
              <Link
                href={DOWNLOAD_URL}
                className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                {guide.downloadCta}
              </Link>
            </div>
          </nav>
        </aside>

        {/* Section content */}
        <div className="min-w-0">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-sidebar font-mono text-xs text-muted-foreground">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{section.title}</h1>
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

            {/* Callouts (tip / note / warning) */}
            {section.notes && section.notes.length > 0 && (
              <div className="mt-5 space-y-3">
                {section.notes.map((note, k) => {
                  const style = NOTE_STYLES[note.type]
                  const Icon = style.icon
                  return (
                    <div key={k} className={cn('flex items-start gap-3 rounded-md border p-4', style.box)}>
                      <Icon className={cn('mt-0.5 h-4 w-4 shrink-0', style.label)} />
                      <div className="min-w-0">
                        <p className={cn('text-xs font-semibold uppercase tracking-wide', style.label)}>
                          {guide.callouts[note.type]}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{note.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Terminal blocks */}
            {section.terminal && (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {section.terminal.map((block, k) => (
                  <TerminalShell key={k} title={block.title} lines={block.lines} />
                ))}
              </div>
            )}

            {/* Table (e.g. shortcuts) */}
            {section.table && (
              <div className="mt-5 overflow-hidden rounded-md border border-border">
                <p className="border-b border-border bg-sidebar px-4 py-2 text-sm font-medium">
                  {section.table.title}
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-sidebar/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
                        {section.table.headers.map((h, k) => (
                          <th key={k} className="px-4 py-2 font-medium">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, k) => (
                        <tr key={k} className="border-b border-border/60 last:border-0">
                          {row.map((cell, c) => (
                            <td
                              key={c}
                              className={cn(
                                'px-4 py-2.5',
                                c === row.length - 1 && 'font-mono text-xs text-muted-foreground'
                              )}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Prev / Next — real pagination to the adjacent section pages */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {prev ? (
                <Link
                  href={sectionHref(prev)}
                  className="group flex items-center gap-3 rounded-md border border-border bg-card p-4 transition-colors hover:bg-accent"
                >
                  <ArrowLeft
                    className={cn('h-4 w-4 shrink-0 text-muted-foreground', lang === 'fa' && 'rotate-180')}
                  />
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{guide.prevSection}</span>
                    <span className="block truncate text-sm font-medium">{sections[prev].title}</span>
                  </span>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
              {next ? (
                <Link
                  href={sectionHref(next)}
                  className="group flex items-center justify-end gap-3 rounded-md border border-border bg-card p-4 text-end transition-colors hover:bg-accent"
                >
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{guide.nextSection}</span>
                    <span className="block truncate text-sm font-medium">{sections[next].title}</span>
                  </span>
                  <ArrowRight
                    className={cn('h-4 w-4 shrink-0 text-muted-foreground', lang === 'fa' && 'rotate-180')}
                  />
                </Link>
              ) : null}
            </div>
          </Reveal>

          {/* Bottom CTA */}
          <Reveal className="mt-10 rounded-lg border border-border bg-sidebar/40 p-6 text-center sm:p-8">
            <BookOpen className="mx-auto h-6 w-6 text-primary" />
            <p className="mt-3 text-lg font-semibold">{guide.title}</p>
            <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">{guide.lead}</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={DOWNLOAD_URL}
                className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                {guide.downloadCta}
              </Link>
              <Link
                href="/"
                className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-accent"
              >
                <ArrowRight className={cn('h-4 w-4', lang === 'fa' && 'rotate-180')} />
                {guide.backHome}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
