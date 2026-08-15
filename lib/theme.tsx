'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type SiteTheme = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'linkops-site-theme'

interface ThemeContextValue {
  theme: SiteTheme
  resolved: 'light' | 'dark'
  setTheme: (theme: SiteTheme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function resolve(theme: SiteTheme): 'light' | 'dark' {
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return theme
}

function apply(theme: SiteTheme): 'light' | 'dark' {
  const resolvedTheme = resolve(theme)
  document.documentElement.classList.toggle('dark', resolvedTheme === 'dark')
  return resolvedTheme
}

export function ThemeProvider({ children }: { children: ReactNode }): React.JSX.Element {
  // Start with the default so the server HTML and the first client render
  // always match (no hydration mismatch). The persisted choice is applied
  // right after mount; the no-FOUC script in the layout has already set the
  // dark class before paint, so there is no visible flash.
  const [theme, setThemeState] = useState<SiteTheme>('system')
  const [resolved, setResolved] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark' || stored === 'system') setThemeState(stored)
  }, [])

  useEffect(() => {
    setResolved(apply(theme))
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (): void => {
      if (theme === 'system') {
        setResolved(apply('system'))
      }
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [theme])

  const value: ThemeContextValue = {
    theme,
    resolved,
    setTheme: setThemeState
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
