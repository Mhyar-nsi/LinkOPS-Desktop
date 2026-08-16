'use client'

import {
  Cable,
  ClipboardList,
  Layers,
  LayoutGrid,
  ShieldCheck,
  SunMoon,
  TerminalSquare
} from 'lucide-react'
import { Languages } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { useLang } from '@/lib/lang'

const ICONS = [LayoutGrid, TerminalSquare, Cable, Layers, ClipboardList, Languages, ShieldCheck, SunMoon]

export function Features(): React.JSX.Element {
  const { t } = useLang()

  return (
    <section id="features" className="border-t border-border bg-sidebar/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mono-tag">{t.features.tag}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.features.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.features.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.06} className="h-full">
              <div className="group h-full rounded-lg border border-border bg-card p-5 transition-colors hover:border-ring/50 hover:bg-card/60">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-sidebar text-muted-foreground transition-colors group-hover:text-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground/60">{item.tag}</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
              </Reveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}
