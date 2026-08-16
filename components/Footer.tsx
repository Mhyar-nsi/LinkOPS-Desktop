'use client'

import Link from 'next/link'
import { Activity } from 'lucide-react'
import { useLang } from '@/lib/lang'

export function Footer(): React.JSX.Element {
  const { t, lang } = useLang()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          {/* The app logo — a static bundled asset. */}
          <img src="/logo.png" alt="LinkOPS Desktop" className="h-6 w-6 rounded" width={24} height={24} />
          <span className="text-sm font-semibold tracking-tight">
            LinkOPS <span className="text-muted-foreground">Desktop</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} LinkOPS. {t.footer.rights}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <Link href="/guide" className="transition-colors hover:text-foreground">
            {t.header.guide}
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            {lang === 'fa' ? 'حریم خصوصی' : 'Privacy'}
          </Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            {lang === 'fa' ? 'شرایط استفاده' : 'Terms'}
          </Link>
          <Activity className="h-3.5 w-3.5 text-muted-foreground/50" />
        </div>
      </div>
    </footer>
  )
}
