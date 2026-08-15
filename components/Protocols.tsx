'use client'

import { Check, Lock, RadioTower } from 'lucide-react'
import { useLang } from '@/lib/lang'

export function Protocols(): React.JSX.Element {
  const { t } = useLang()

  return (
    <section id="protocols" className="border-t border-border bg-sidebar/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mono-tag">{t.protocols.tag}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.protocols.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.protocols.lead}</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-success/10 text-success">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="font-mono text-lg font-semibold">{t.protocols.ssh.title}</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {t.protocols.ssh.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-info/10 text-info">
                <RadioTower className="h-5 w-5" />
              </div>
              <h3 className="font-mono text-lg font-semibold">{t.protocols.telnet.title}</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {t.protocols.telnet.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-info" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
