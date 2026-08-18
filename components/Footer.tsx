'use client'

import Link from 'next/link'
import { Activity } from 'lucide-react'
import { useLang } from '@/lib/lang'

export function Footer(): React.JSX.Element {
  const { t, lang } = useLang()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
          <div className="flex items-center gap-2">
            {/* The app logo — a static bundled asset. */}
            <img src="/logo.png" alt="LinkOPS Desktop" className="h-6 w-6 rounded" width={24} height={24} />
            <span className="text-sm font-semibold tracking-tight">
              LinkOPS <span className="text-muted-foreground">Desktop</span>
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 text-center sm:items-end sm:text-end">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} LinkOPS. {t.footer.rights}
            </p>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground/80">
              <Activity className="h-3 w-3" />
              {t.footer.developed}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
          <Link href="/guide" className="transition-colors hover:text-foreground">
            {t.header.guide}
          </Link>
          <Link href="/changelog" className="transition-colors hover:text-foreground">
            {t.header.changelog}
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            {lang === 'fa' ? 'حریم خصوصی' : 'Privacy'}
          </Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            {lang === 'fa' ? 'شرایط استفاده' : 'Terms'}
          </Link>
          <span className="text-muted-foreground/50">·</span>
          <span>{t.footer.heart}</span>
        </div>
      </div>
    </footer>
  )
}
