import type { Metadata, Viewport } from 'next'
import { MotionConfig } from 'framer-motion'
import NextTopLoader from 'nextjs-toploader'
import '@fontsource-variable/vazirmatn'
import '@fontsource-variable/jetbrains-mono'
import { LangProvider } from '@/lib/lang'
import { ThemeProvider } from '@/lib/theme'
import { dictionary } from '@/lib/dictionary'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://linkops.ir'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: dictionary.en.meta.title,
    template: '%s — LinkOPS Desktop'
  },
  description: dictionary.en.meta.description,
  applicationName: 'LinkOPS Desktop',
  keywords: [
    'LinkOPS',
    'network operations',
    'SSH',
    'Telnet',
    'terminal',
    'router management',
    'switch management',
    'SSH client',
    'network automation',
    'CLI',
    'network engineer'
  ],
  openGraph: {
    title: dictionary.en.meta.title,
    description: dictionary.en.meta.description,
    type: 'website',
    siteName: 'LinkOPS Desktop',
    url: SITE_URL,
    locale: 'en_US',
    images: [{ url: '/screenshots/dashboard.png', width: 1440, height: 900, alt: 'LinkOPS Desktop dashboard' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: dictionary.en.meta.title,
    description: dictionary.en.meta.description,
    images: ['/screenshots/dashboard.png']
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png'
  },
  appleWebApp: {
    capable: true,
    title: 'LinkOPS Desktop',
    statusBarStyle: 'default'
  },
  formatDetection: {
    telephone: false
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0e' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' }
  ],
  width: 'device-width',
  initialScale: 1
}

/** Structured data for search engines: the desktop app itself is the product. */
const softwareJsonLd = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LinkOPS Desktop",
  "applicationCategory": "NetworkApplication",
  "operatingSystem": "Windows, Linux, macOS",
  "description": "Manage switches, routers, firewalls and servers from one app — real terminal sessions, batch runs, command templates, config backups and a complete history.",
  "offers": {
    "@type": "Offer",
    "price": "14.99",
    "priceCurrency": "USD",
    "description": "License plans from 3 to 12 months"
  },
  "featureList": "SSH, Telnet, Rlogin, Raw TCP, real terminal, batch runs, command templates, config backups, app lock, bilingual EN/FA"
}`

/** Apply the saved theme + language before paint to avoid a flash of the wrong theme/language. */
const noFoucScript = `(function () {
  try {
    var t = localStorage.getItem('linkops-site-theme') || 'system'
    var dark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', dark)
    var l = localStorage.getItem('linkops-site-lang') || 'en'
    if (l === 'fa' || l === 'en') {
      document.documentElement.lang = l
      document.documentElement.dir = l === 'fa' ? 'rtl' : 'ltr'
    }
  } catch (e) {}
})()`

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFoucScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: softwareJsonLd }} />
      </head>
      <body className="font-sans">
        <Analytics />
        {/* reducedMotion="user" keeps scroll/load animations off for users who
            prefer reduced motion, while everything else animates normally. */}
        <MotionConfig reducedMotion="user">
          {/* Top progress bar shown while navigating between pages. */}
          <NextTopLoader color="var(--top-loader-color)" height={2} showSpinner={false} shadow="0 0 8px hsl(152 72% 48% / 0.6)" />
          <ThemeProvider>
            <LangProvider>{children}</LangProvider>
          </ThemeProvider>
        </MotionConfig>
      </body>
    </html>
  )
}
