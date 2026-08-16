'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Download, Gem, Menu, Rocket, X } from 'lucide-react'
import { useLang } from '@/lib/lang'
import { DOWNLOAD_URL } from '@/lib/site'
import { cn } from '@/lib/utils'
import { LangToggle } from './LangToggle'
import { ThemeToggle } from './ThemeToggle'

/** Top-level pages: the guide, the changelog and the pricing page. */
const NAV = [
  { key: 'guide', href: '/guide', icon: BookOpen },
  { key: 'changelog', href: '/changelog', icon: Rocket },
  { key: 'pricing', href: '/pricing', icon: Gem }
] as const

type NavKey = (typeof NAV)[number]['key']

export function SiteHeader(): React.JSX.Element {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:gap-6 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          {/* The app logo — a static bundled asset, no remote images are used. */}
          <img src="/logo.png" alt="LinkOPS Desktop" className="h-7 w-7 rounded-md" width={28} height={28} />
          <span className="text-sm font-semibold tracking-tight">
            LinkOPS <span className="hidden text-muted-foreground sm:inline">Desktop</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm text-muted-foreground lg:flex">
          {NAV.map(({ key, href, icon: Icon }) => (
            <Link
              key={key}
              href={href}
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon className="h-3.5 w-3.5 text-primary/80" />
              {t.header[key as NavKey]}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2">
          <ThemeToggle />
          <LangToggle />
          <Link
            href={DOWNLOAD_URL}
            className={cn(
              'hidden h-8 items-center gap-2 rounded-md px-3 text-sm font-medium transition-colors sm:inline-flex',
              'bg-primary text-primary-foreground hover:bg-primary/90'
            )}
          >
            <Download className="h-4 w-4" />
            {t.header.cta}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-sidebar text-muted-foreground transition-colors hover:text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {NAV.map(({ key, href, icon: Icon }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <Icon className="h-4 w-4 text-primary" />
                {t.header[key as NavKey]}
              </Link>
            ))}
            <Link
              href={DOWNLOAD_URL}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              {t.header.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
