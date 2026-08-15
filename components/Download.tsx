'use client'

import { Download as DownloadIcon, Terminal } from 'lucide-react'
import { FaWindows, FaLinux } from 'react-icons/fa6'
import { useLang } from '@/lib/lang'
import { DOWNLOADS, APP_VERSION } from '@/lib/site'
import { cn } from '@/lib/utils'

function InstallSteps({ title, steps }: { title: string; steps: string[] }): React.JSX.Element {
  return (
    <div className="mt-5">
      <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        <Terminal className="h-3.5 w-3.5" />
        {title}
      </p>
      <ol className="mt-2 space-y-1.5">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-border text-[10px] text-muted-foreground">
              {i + 1}
            </span>
            <span className="font-mono leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
    </div>
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
            {t.download.version.replace('{{version}}', APP_VERSION)}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 lg:grid-cols-2">
          {/* Windows */}
          <div className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-ring/50">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-sidebar text-muted-foreground transition-colors group-hover:text-foreground">
                <FaWindows className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{t.download.windows.name}</h3>
                <p className="text-xs text-muted-foreground">{t.download.windows.file}</p>
              </div>
            </div>
            <a
              href={winConfigured ? win.url : '#'}
              download={winConfigured ? true : undefined}
              aria-disabled={!winConfigured}
              className={cn(
                'mt-6 inline-flex h-9 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors',
                winConfigured
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'cursor-not-allowed bg-muted text-muted-foreground/60'
              )}
            >
              <DownloadIcon className="h-4 w-4" />
              {winConfigured ? t.download.windows.cta : t.download.windows.cta}
            </a>
            <InstallSteps title={t.download.windows.stepsTitle} steps={t.download.windows.steps} />
          </div>

          {/* Linux — two packages */}
          <div className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-ring/50">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-sidebar text-muted-foreground transition-colors group-hover:text-foreground">
                <FaLinux className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{t.download.linux.name}</h3>
                <p className="text-xs text-muted-foreground">{t.download.linux.file}</p>
              </div>
            </div>

            {/* .deb */}
            <div className="mt-5 rounded-md border border-border bg-sidebar/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{t.download.linux.deb.name}</p>
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
              <InstallSteps title={t.download.linux.deb.stepsTitle} steps={t.download.linux.deb.steps} />
            </div>

            {/* AppImage */}
            <div className="mt-3 rounded-md border border-border bg-sidebar/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{t.download.linux.appImage.name}</p>
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
              <InstallSteps title={t.download.linux.appImage.stepsTitle} steps={t.download.linux.appImage.steps} />
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">{t.download.note}</p>
      </div>
    </section>
  )
}
