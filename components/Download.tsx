'use client'

import { Download as DownloadIcon } from 'lucide-react'
import { FaWindows, FaLinux } from 'react-icons/fa6'
import { useLang } from '@/lib/lang'
import { DOWNLOADS, APP_VERSION } from '@/lib/site'
import { cn } from '@/lib/utils'

const OS_META = [
  { key: 'windows', icon: FaWindows },
  { key: 'linux', icon: FaLinux }
] as const

export function Download(): React.JSX.Element {
  const { t } = useLang()

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

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {OS_META.map(({ key, icon: Icon }) => {
            const os = DOWNLOADS[key]
            const info = t.download[key]
            const configured = os.url.length > 0
            return (
              <div
                key={key}
                className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-ring/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-sidebar text-muted-foreground transition-colors group-hover:text-foreground">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{info.name}</h3>
                    <p className="text-xs text-muted-foreground">{info.file}</p>
                  </div>
                </div>
                <a
                  href={configured ? os.url : '#'}
                  download={configured ? true : undefined}
                  aria-disabled={!configured}
                  className={cn(
                    'mt-6 inline-flex h-9 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors',
                    configured
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'cursor-not-allowed bg-muted text-muted-foreground/60'
                  )}
                >
                  <DownloadIcon className="h-4 w-4" />
                  {configured ? info.cta : info.comingSoon}
                </a>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">{t.download.note}</p>
      </div>
    </section>
  )
}
