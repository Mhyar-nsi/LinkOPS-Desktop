'use client'

import Link from 'next/link'
import { BadgeCheck, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { useLang } from '@/lib/lang'
import { CURRENCY, CURRENCY_FA, PLANS, PURCHASE_URL, DOWNLOAD_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

/** Price formatter — keeps two decimals only when needed. */
function fmt(amount: number): string {
  return amount % 1 === 0 ? String(amount) : amount.toFixed(2)
}

/** Format a Toman amount with Persian digits + thousands separators. */
function fmtToman(amount: number): string {
  return amount.toLocaleString('fa-IR')
}

export function Pricing(): React.JSX.Element {
  const { t, lang } = useLang()
  const fa = lang === 'fa'

  return (
    <section id="pricing" className="border-t border-border bg-sidebar/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mono-tag">{t.pricing.tag}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.pricing.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.pricing.lead}</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {PLANS.map((plan, planIndex) => {
            const perMonth = fa ? plan.priceToman / plan.months : plan.price / plan.months
            const price = fa ? plan.priceToman : plan.price
            const compareAt = fa ? plan.compareAtToman : plan.compareAt
            const perMonthText = fa
              ? `${fmtToman(Math.round(perMonth / 10_000) * 10_000)} ${CURRENCY_FA}`
              : `${CURRENCY}${fmt(Math.round(perMonth * 100) / 100)}`
            return (
              <Reveal key={plan.id} delay={planIndex * 0.1} className="h-full">
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-lg border bg-card p-6 transition-colors',
                  plan.featured
                    ? 'border-primary/60 shadow-lg shadow-primary/5'
                    : 'border-border hover:border-ring/50'
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                      <Sparkles className="h-3 w-3" />
                      {t.pricing.popular}
                    </span>
                  </div>
                )}

                <h3 className="text-sm font-semibold">{t.pricing.plans[plan.id].name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{t.pricing.plans[plan.id].desc}</p>

                <div className="mt-5">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span className="text-3xl font-semibold tracking-tight">
                      {fa ? (
                        <>
                          {fmtToman(price)}
                          <span className="ms-1.5 text-sm font-normal text-muted-foreground">{CURRENCY_FA}</span>
                        </>
                      ) : (
                        <>
                          {CURRENCY}
                          {fmt(price)}
                        </>
                      )}
                    </span>
                    {plan.discount > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-success/15 px-1.5 py-0.5 text-[11px] font-semibold text-success ring-1 ring-success/30">
                        {t.pricing.off.replace('{{pct}}', String(plan.discount))}
                      </span>
                    )}
                  </div>
                  <div
                    className={cn(
                      'mt-2 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs',
                      plan.discount > 0 ? 'text-muted-foreground' : 'min-h-[18px]'
                    )}
                  >
                    {plan.discount > 0 ? (
                      <>
                        <span className="text-[13px] leading-none text-muted-foreground/80 line-through decoration-muted-foreground/50">
                          {fa ? `${fmtToman(compareAt)} ${CURRENCY_FA}` : `${CURRENCY}${fmt(compareAt)}`}
                        </span>
                        <span className="text-success">
                          {t.pricing.save.replace('{{pct}}', String(plan.discount))}
                        </span>
                      </>
                    ) : null}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t.pricing.perMonth.replace('{{price}}', perMonthText)}
                  </p>
                </div>

                <ul className="mt-5 flex-1 space-y-2">
                  {t.pricing.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={PURCHASE_URL || DOWNLOAD_URL}
                  className={cn(
                    'mt-6 inline-flex h-9 items-center justify-center rounded-md text-sm font-medium transition-colors',
                    plan.featured
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-border bg-sidebar text-foreground hover:bg-accent'
                  )}
                >
                  {t.pricing.buy.replace('{{name}}', t.pricing.plans[plan.id].name)}
                </Link>
              </div>
              </Reveal>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">{t.pricing.note}</p>
      </div>
    </section>
  )
}
