'use client'

import { Activity } from 'lucide-react'
import { useLang } from '@/lib/lang'

export function Footer(): React.JSX.Element {
  const { t } = useLang()

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
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="#features" className="transition-colors hover:text-foreground">
            {t.header.features}
          </a>
          <a href="#screenshots" className="transition-colors hover:text-foreground">
            {t.header.screenshots}
          </a>
          <a href="/guide" className="transition-colors hover:text-foreground">
            {t.header.guide}
          </a>
          <a href="#security" className="transition-colors hover:text-foreground">
            {t.header.security}
          </a>
          <Activity className="h-3.5 w-3.5 text-muted-foreground/50" />
        </div>
      </div>
    </footer>
  )
}
