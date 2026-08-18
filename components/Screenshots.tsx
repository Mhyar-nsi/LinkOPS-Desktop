'use client'

import { useEffect, useRef, useState } from 'react'
import {
  LayoutDashboard,
  Loader2,
  MonitorPlay,
  FolderKanban,
  FolderTree,
  History,
  Settings2,
  Cable,
  ListChecks,
  Boxes
} from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { useLang } from '@/lib/lang'
import { useTheme } from '@/lib/theme'
import { cn } from '@/lib/utils'

type TabKey =
  | 'dashboard'
  | 'devices'
  | 'categories'
  | 'terminal'
  | 'batchRuns'
  | 'commands'
  | 'groups'
  | 'history'
  | 'settings'

const TABS: { key: TabKey; icon: typeof LayoutDashboard }[] = [
  { key: 'dashboard', icon: LayoutDashboard },
  { key: 'devices', icon: Boxes },
  { key: 'categories', icon: FolderTree },
  { key: 'terminal', icon: MonitorPlay },
  { key: 'batchRuns', icon: Cable },
  { key: 'commands', icon: ListChecks },
  { key: 'groups', icon: FolderKanban },
  { key: 'history', icon: History },
  { key: 'settings', icon: Settings2 }
]

const SHOT_FILES: Record<TabKey, string> = {
  dashboard: 'dashboard.png',
  devices: 'devices.png',
  categories: 'categories.png',
  terminal: 'sessions.png',
  batchRuns: 'batch-runs.png',
  commands: 'commands.png',
  groups: 'command-groups.png',
  history: 'history.png',
  settings: 'settings.png'
}

/** The light variant of a shot file. */
function lightFile(file: string): string {
  return file.replace(/\.png$/, '-light.png')
}

export function Screenshots(): React.JSX.Element {
  const { t } = useLang()
  const { resolved } = useTheme()
  const [active, setActive] = useState<TabKey>('dashboard')
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  const file = resolved === 'light' ? lightFile(SHOT_FILES[active]) : SHOT_FILES[active]
  const src = `/screenshots/${file}`

  // Preload every shot in both themes once — tab switches then feel instant.
  useEffect(() => {
    for (const { key } of TABS) {
      for (const f of [SHOT_FILES[key], lightFile(SHOT_FILES[key])]) {
        const img = new Image()
        img.src = `/screenshots/${f}`
      }
    }
  }, [])

  // Switch the tab immediately; show the loader until the new image is ready.
  // Never get stuck on the spinner: on first load/reload the image can be
  // fully loaded (SSR parse, HTTP/memory cache) before React attaches onLoad,
  // so the load event is missed. Detect that and mark it loaded right away.
  useEffect(() => {
    setLoaded(false)
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [src])

  return (
    <section id="screenshots" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mono-tag">{t.screenshots.tag}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.screenshots.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.screenshots.lead}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          {/* Tab bar — mirrors the app's sidebar nav */}
          <div className="flex items-center gap-1 overflow-x-auto border-b border-border bg-sidebar p-2">
            {TABS.map(({ key, icon: Icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                className={cn(
                  'inline-flex shrink-0 items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition-colors',
                  active === key
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {t.screenshots.tabs[key]}
              </button>
            ))}
          </div>

          <figure className="p-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-background">
              {/* Static assets: dark shots are the default files, light shots
                  carry a -light suffix — pick per resolved theme. The tab
                  switches instantly; the loader overlays until the image is
                  decoded (preloaded on mount, so usually instant). */}
              <img
                key={src}
                ref={imgRef}
                src={src}
                alt={t.screenshots.tabs[active]}
                width={1440}
                height={900}
                loading="eager"
                decoding="async"
                fetchPriority="low"
                onLoad={() => setLoaded(true)}
                className={cn(
                  'block h-full w-full object-contain transition-opacity duration-200',
                  loaded ? 'opacity-100' : 'opacity-0'
                )}
              />
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
                  <Loader2 className="h-7 w-7 animate-spin text-muted-foreground" />
                </div>
              )}
            </div>
            <figcaption className="mt-3 px-1 pb-1 text-center text-sm text-muted-foreground">
              {t.screenshots.captions[active]}
            </figcaption>
          </figure>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
