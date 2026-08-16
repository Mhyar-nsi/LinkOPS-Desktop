'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Check,
  Download as DownloadIcon,
  MousePointerClick,
  Terminal,
  Wrench
} from 'lucide-react'
import { FaWindows, FaLinux, FaApple } from 'react-icons/fa6'
import { Reveal } from '@/components/ui/Reveal'
import { useLang } from '@/lib/lang'
import { DOWNLOADS, APP_VERSION } from '@/lib/site'
import { cn } from '@/lib/utils'
import { TerminalShell } from '@/components/ui/TerminalShell'

type OsTab = 'windows' | 'mac' | 'linux'

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

function DownloadButton({
  url,
  label,
  className
}: {
  url: string
  label: string
  className?: string
}): React.JSX.Element {
  const configured = url.length > 0
  return (
    <a
      href={configured ? url : '#'}
      download={configured ? true : undefined}
      aria-disabled={!configured}
      className={cn(
        'inline-flex h-10 w-auto shrink-0 self-start items-center justify-center gap-2 rounded-md px-5 text-sm font-medium shadow-sm transition-colors',
        configured
          ? 'bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]'
          : 'cursor-not-allowed bg-muted text-muted-foreground/60 shadow-none',
        className
      )}
    >
      <DownloadIcon className="h-4 w-4" />
      {label}
    </a>
  )
}

export function Download(): React.JSX.Element {
  const { t } = useLang()
  const [tab, setTab] = useState<OsTab>('windows')

  const win = DOWNLOADS.windows
  const deb = DOWNLOADS.linux.deb
  const appImage = DOWNLOADS.linux.appImage
  const mac = DOWNLOADS.mac

  const tabs: { id: OsTab; label: string; icon: typeof FaWindows; color: string; bg: string }[] = [
    {
      id: 'windows',
      label: t.download.windows.name,
      icon: FaWindows,
      color: 'text-[#0078d4]',
      bg: 'bg-[#0078d4]/10'
    },
    {
      id: 'mac',
      label: t.download.mac.name,
      icon: FaApple,
      color: 'text-muted-foreground',
      bg: 'bg-muted'
    },
    {
      id: 'linux',
      label: t.download.linux.name,
      icon: FaLinux,
      color: 'text-[#f5821e]',
      bg: 'bg-[#f5821e]/10'
    }
  ]

  return (
    <section id="download" className="border-t border-border bg-sidebar/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mono-tag">{t.download.tag}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.download.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.download.lead}</p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {t.download.version.replace('{{version}}', APP_VERSION)}
          </p>
        </Reveal>

        {/* Full-width OS tabs */}
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <div
            role="tablist"
            aria-label={t.download.title}
            className="grid grid-cols-3 gap-1 rounded-lg border border-border bg-card p-1"
          >
            {tabs.map(({ id, label, icon: Icon, color, bg }) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-3 py-3 text-sm font-medium transition-colors',
                  tab === id
                    ? 'bg-sidebar text-foreground shadow-sm ring-1 ring-border'
                    : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground'
                )}
              >
                <span className={cn('flex h-6 w-6 items-center justify-center rounded-md', bg, color)}>
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </button>
            ))}
          </div>

          {/* Windows */}
          <div
            role="tabpanel"
            hidden={tab !== 'windows'}
            className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0078d4]/10 text-[#0078d4]">
                    <FaWindows className="h-4 w-4" />
                  </span>
                  {t.download.windows.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.download.windows.file}</p>
              </div>
              <DownloadButton url={win.url} label={t.download.windows.cta} className="shrink-0" />
            </div>
            <div className="mt-6 border-t border-border pt-5">
              <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <MousePointerClick className="h-3.5 w-3.5" />
                {t.download.windows.stepsTitle}
              </p>
              <GuiSteps steps={t.download.windows.steps} />
            </div>
          </div>

          {/* macOS */}
          <div
            role="tabpanel"
            hidden={tab !== 'mac'}
            className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <FaApple className="h-4 w-4" />
                  </span>
                  {t.download.mac.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.download.mac.file}</p>
              </div>
              <DownloadButton url={mac.url} label={t.download.mac.cta} className="shrink-0" />
            </div>
            <div className="mt-6 border-t border-border pt-5">
              <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <MousePointerClick className="h-3.5 w-3.5" />
                {t.download.mac.stepsTitle}
              </p>
              <GuiSteps steps={t.download.mac.steps} />
            </div>
          </div>

          {/* Linux */}
          <div
            role="tabpanel"
            hidden={tab !== 'linux'}
            className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f5821e]/10 text-[#f5821e]">
                <FaLinux className="h-4 w-4" />
              </span>
              {t.download.linux.name}
              <span className="text-sm font-normal text-muted-foreground">— {t.download.linux.file}</span>
            </h3>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {/* .deb */}
              <div className="rounded-lg border border-border bg-sidebar/60 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 text-sm font-medium">
                      <Check className="h-3.5 w-3.5 text-success" />
                      {t.download.linux.deb.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.download.linux.deb.file}</p>
                  </div>              <DownloadButton
                url={deb.url}
                label={t.download.linux.deb.cta}
                className="h-9 px-3 text-xs"
              />
                </div>
                <TerminalShell
                  title={t.download.linux.deb.stepsTitle}
                  lines={t.download.linux.deb.steps}
                  className="mt-3"
                />
              </div>

              {/* AppImage */}
              <div className="rounded-lg border border-border bg-sidebar/60 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 text-sm font-medium">
                      <Terminal className="h-3.5 w-3.5 text-info" />
                      {t.download.linux.appImage.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.download.linux.appImage.file}</p>
                  </div>
                  <DownloadButton
                    url={appImage.url}
                    label={t.download.linux.appImage.cta}
                    className="h-9 px-3 text-xs"
                  />
                </div>
                <TerminalShell
                  title={t.download.linux.appImage.stepsTitle}
                  lines={t.download.linux.appImage.steps}
                  className="mt-3"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Wrench className="h-3.5 w-3.5" />
              <span>{t.download.note}</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <Link
            href="/guide/install"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            <BookOpen className="h-4 w-4" />
            {t.download.help}
          </Link>
        </div>
      </div>
    </section>
  )
}
