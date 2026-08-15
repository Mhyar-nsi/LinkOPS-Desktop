import type { Metadata, Viewport } from 'next'
import '@fontsource-variable/vazirmatn'
import '@fontsource-variable/jetbrains-mono'
import { LangProvider } from '@/lib/lang'
import { ThemeProvider } from '@/lib/theme'
import { dictionary } from '@/lib/dictionary'
import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://linkops-desktop.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: dictionary.en.meta.title,
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
    'SSH client'
  ],
  openGraph: {
    title: dictionary.en.meta.title,
    description: dictionary.en.meta.description,
    type: 'website',
    siteName: 'LinkOPS Desktop',
    images: [{ url: '/screenshots/dashboard.png', width: 1440, height: 900, alt: 'LinkOPS Desktop dashboard' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: dictionary.en.meta.title,
    description: dictionary.en.meta.description,
    images: ['/screenshots/dashboard.png']
  },
  icons: {
    icon: '/logo.png'
  }
}

export const viewport: Viewport = {
  themeColor: '#0a0a0e',
  width: 'device-width',
  initialScale: 1
}

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
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
