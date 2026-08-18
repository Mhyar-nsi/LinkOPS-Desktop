'use client'

import Link from 'next/link'
import { ArrowDown, BookOpen, Download, Lock, ShieldCheck, TerminalSquare } from 'lucide-react'
import PixelBlast from '@/components/ui/PixelBlast'
import { Reveal } from '@/components/ui/Reveal'
import { useLang } from '@/lib/lang'
import { DOWNLOAD_URL } from '@/lib/site'

/** Resolved value of --terminal-accent (hsl 152 72% 48% in both themes). */
const BLAST_COLOR = '#22d280'

export function Hero(): React.JSX.Element {
  const { t } = useLang()

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Interactive pixel-particle background (WebGL) — sits behind the
          content, reacts to the cursor, and matches the theme accent. */}
      <div aria-hidden="true" className="absolute inset-0 opacity-40">
        <PixelBlast
          variant="square"
          color={BLAST_COLOR}
          transparent
          autoPauseOffscreen
          speed={0.5}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-sidebar px-3 py-1 text-xs text-muted-foreground">
            <TerminalSquare className="h-3.5 w-3.5" />
            {t.hero.tag}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            {t.hero.titleLine1}{' '}
            <span className="bg-gradient-to-r from-foreground via-muted-foreground to-muted-foreground bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.lead}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={DOWNLOAD_URL}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download className="h-4 w-4" />
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href="/#features"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-sidebar px-5 text-sm font-medium transition-colors hover:bg-accent"
            >
              {t.hero.ctaSecondary}
              <ArrowDown className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-success" />
              {t.hero.note}
            </span>
            <Link
              href="/guide"
              className="inline-flex items-center gap-1.5 underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-muted-foreground"
            >
              <BookOpen className="h-3.5 w-3.5" />
              {t.hero.guideLink}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {/* Terminal mock — styled exactly like the app's session view */}
          <div className="glow-border mx-auto mt-14 max-w-3xl overflow-hidden rounded-lg border border-border bg-terminal-background">
            <div className="flex items-center gap-2 border-b border-border bg-sidebar px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
              <span className="ms-2 font-mono text-xs text-muted-foreground">{t.hero.terminalTitle}</span>
            </div>
            {/* dir=ltr: terminal content is English/technical and must not
              mirror inside the Persian RTL layout. */}
            <div dir="ltr" className="flex items-start gap-3 px-4 py-4 text-left sm:px-5 sm:py-5">
              <div className="hidden select-none flex-col items-center gap-2 font-mono text-[10px] leading-5 text-terminal-muted sm:flex">
                <Lock className="h-3 w-3" />
                <TerminalSquare className="h-3 w-3" />
              </div>
              <pre className="min-w-0 flex-1 overflow-x-auto font-mono text-xs leading-5 text-terminal-foreground sm:text-[13px] sm:leading-6">
                {t.hero.terminalLines.map((line, i) => {
                  const isCommand = line.startsWith('$')
                  const isPrompt = line.endsWith('█')
                  const isOutput = !isCommand && !isPrompt && line.trim() !== ''
                  return (
                    <div
                      key={i}
                      className={
                        isCommand
                          ? 'text-terminal-accent'
                          : isOutput
                            ? 'text-terminal-foreground'
                            : isPrompt
                              ? 'text-terminal-accent'
                              : 'text-terminal-foreground'
                      }
                    >
                      {line}
                    </div>
                  )
                })}
              </pre>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {t.hero.badges.map((b) => (
              <span
                key={b}
                className="rounded-md border border-border bg-sidebar px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
