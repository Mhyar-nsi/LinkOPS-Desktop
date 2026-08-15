'use client'

import { useState } from 'react'
import { LayoutDashboard, MonitorPlay, FolderKanban, History, Settings2, Cable, ListChecks, Boxes } from 'lucide-react'
import { useLang } from '@/lib/lang'
import { cn } from '@/lib/utils'

type TabKey = 'dashboard' | 'devices' | 'terminal' | 'batchRuns' | 'commands' | 'groups' | 'history' | 'settings'

const TABS: { key: TabKey; icon: typeof LayoutDashboard }[] = [
  { key: 'dashboard', icon: LayoutDashboard },
  { key: 'devices', icon: Boxes },
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
  terminal: 'sessions.png',
  batchRuns: 'batch-runs.png',
  commands: 'commands.png',
  groups: 'command-groups.png',
  history: 'history.png',
  settings: 'settings.png'
}

export function Screenshots(): React.JSX.Element {
  const { t } = useLang()
  const [active, setActive] = useState<TabKey>('dashboard')

  return (
    <section id="screenshots" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mono-tag">{t.screenshots.tag}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.screenshots.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.screenshots.lead}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card">
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
            <div className="overflow-hidden rounded-md border border-border bg-background">
              {/* Screenshots are static site assets — plain img is fine. */}
              <img
                src={`/screenshots/${SHOT_FILES[active]}`}
                alt={t.screenshots.tabs[active]}
                width={1440}
                height={900}
                className="block w-full"
                loading={active === 'dashboard' ? 'eager' : 'lazy'}
              />
            </div>
            <figcaption className="mt-3 px-1 pb-1 text-center text-sm text-muted-foreground">
              {t.screenshots.captions[active]}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
