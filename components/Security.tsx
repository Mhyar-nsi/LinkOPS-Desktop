'use client'

import { CloudOff, KeyRound, ShieldCheck, Zap } from 'lucide-react'
import { useLang } from '@/lib/lang'

const ICONS = [ShieldCheck, Zap, KeyRound, CloudOff]

export function Security(): React.JSX.Element {
  const { t } = useLang()

  return (
    <section id="security" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mono-tag">{t.security.tag}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.security.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.security.lead}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.security.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-lg border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-sidebar text-muted-foreground">
                  <Icon className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
