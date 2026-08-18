'use client'

import { Check, Lock, RadioTower, Server, Cable } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { useLang } from '@/lib/lang'

const CARDS = [
  { key: 'ssh', Icon: Lock, tint: 'text-success', bg: 'bg-success/10', ring: 'hover:border-success/40' },
  { key: 'telnet', Icon: RadioTower, tint: 'text-info', bg: 'bg-info/10', ring: 'hover:border-info/40' },
  { key: 'rlogin', Icon: Server, tint: 'text-warning', bg: 'bg-warning/10', ring: 'hover:border-warning/40' },
  { key: 'raw', Icon: Cable, tint: 'text-primary', bg: 'bg-primary/10', ring: 'hover:border-primary/40' }
] as const

export function Protocols(): React.JSX.Element {
  const { t } = useLang()

  return (
    <section id="protocols" className="border-t border-border bg-sidebar/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mono-tag">{t.protocols.tag}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.protocols.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.protocols.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {CARDS.map(({ key, Icon, tint, bg, ring }, i) => {
            const data = t.protocols[key]
            return (
              <Reveal key={key} delay={0.1 + i * 0.05} className="h-full">
                <div className={`h-full rounded-lg border border-border bg-card p-6 transition-colors ${ring}`}>
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-md ${bg} ${tint}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-mono text-lg font-semibold">{data.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {data.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tint}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
