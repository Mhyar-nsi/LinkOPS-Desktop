'use client'

import { BookOpen, Check, Download as DownloadIcon, MousePointerClick, Terminal, Wrench } from 'lucide-react'
import { FaWindows, FaLinux } from 'react-icons/fa6'
import { useLang } from '@/lib/lang'
import { DOWNLOADS, APP_VERSION } from '@/lib/site'
import { cn } from '@/lib/utils'
import { TerminalShell } from '@/components/ui/TerminalShell'

/** Numbered GUI steps (Windows wizard, …). Terminal content is always LTR. */
function GuiSteps({ steps }: { steps: string[] }): React.JSX.Element {
  return (
    <ol className="mt-4 space-y-2">
      {steps.map((step, i) => (
        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-border text-[10px]">
            {i + 1}
          </span>
          <span className="leading-relaxed">{step}</span>
        </li>
      ))}
    </ol>
  )
}

export function Download(): React.JSX.Element {
  const { t } = useLang()

  const win = DOWNLOADS.windows
  const deb = DOWNLOADS.linux.deb
  const appImage = DOWNLOADS.linux.appImage

  const winConfigured = win.url.length > 0
  const debConfigured = deb.url.length > 0
  const appImageConfigured = appImage.url.length > 0

  return (
    <section id="download" className="border-t border-border bg-sidebar/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mono-tag">{t.download.tag}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.download.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.download.lead}</p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {t.download.version.replace('{{version}}', APP_VERSION)}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 lg:grid-cols-2">
          {/* ── Windows ─────────────────────────────────────────────── */}
          <div className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-ring/50">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0078d4]/10 text-[#0078d4]">
                <FaWindows className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">{t.download.windows.name}</h3>
                <p className="text-xs text-muted-foreground">{t.download.windows.file}</p>
              </div>
            </div>

            <a
              href={winConfigured ? win.url : '#'}
              download={winConfigured ? true : undefined}
              aria-disabled={!winConfigured}
              className={cn(
                'mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors',
                winConfigured
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'cursor-not-allowed bg-muted text-muted-foreground/60'
              )}
            >
              <DownloadIcon className="h-4 w-4" />
              {t.download.windows.cta}
            </a>

            <div className="mt-6 border-t border-border pt-4">
              <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <MousePointerClick className="h-3.5 w-3.5" />
                {t.download.windows.stepsTitle}
              </p>
              <GuiSteps steps={t.download.windows.steps} />
            </div>
          </div>

          {/* ── Linux ───────────────────────────────────────────────── */}
          <div className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-ring/50">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f5821e]/10 text-[#f5821e]">
                <FaLinux className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">{t.download.linux.name}</h3>
                <p className="text-xs text-muted-foreground">{t.download.linux.file}</p>
              </div>
            </div>

            {/* .deb */}
            <div className="mt-5 rounded-lg border border-border bg-sidebar/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-sm font-medium">
                    <Check className="h-3.5 w-3.5 text-success" />
                    {t.download.linux.deb.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.download.linux.deb.file}</p>
                </div>
                <a
                  href={debConfigured ? deb.url : '#'}
                  download={debConfigured ? true : undefined}
                  aria-disabled={!debConfigured}
                  className={cn(
                    'inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-md px-3 text-xs font-medium transition-colors',
                    debConfigured
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'cursor-not-allowed bg-muted text-muted-foreground/60'
                  )}
                >
                  <DownloadIcon className="h-3.5 w-3.5" />
                  {t.download.linux.deb.cta}
                </a>
              </div>
              {/* Install commands — rendered in a real terminal look, LTR. */}
              <TerminalShell
                title={t.download.linux.deb.stepsTitle}
                lines={t.download.linux.deb.steps}
                className="mt-3"
              />
            </div>

            {/* AppImage */}
            <div className="mt-3 rounded-lg border border-border bg-sidebar/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-sm font-medium">
                    <Terminal className="h-3.5 w-3.5 text-info" />
                    {t.download.linux.appImage.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.download.linux.appImage.file}</p>
                </div>
                <a
                  href={appImageConfigured ? appImage.url : '#'}
                  download={appImageConfigured ? true : undefined}
                  aria-disabled={!appImageConfigured}
                  className={cn(
                    'inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-md px-3 text-xs font-medium transition-colors',
                    appImageConfigured
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'cursor-not-allowed bg-muted text-muted-foreground/60'
                  )}
                >
                  <DownloadIcon className="h-3.5 w-3.5" />
                  {t.download.linux.appImage.cta}
                </a>
              </div>
              <TerminalShell
                title={t.download.linux.appImage.stepsTitle}
                lines={t.download.linux.appImage.steps}
                className="mt-3"
              />
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Wrench className="h-3.5 w-3.5" />
              <span>{t.download.note}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <a
            href="/guide"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            <BookOpen className="h-4 w-4" />
            {t.download.help}
          </a>
        </div>
      </div>
    </section>
  )
}
