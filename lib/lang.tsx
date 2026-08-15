'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { dictionary, type Lang } from './dictionary'

const STORAGE_KEY = 'linkops-site-lang'

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (typeof dictionary)['en']
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }): React.JSX.Element {
  // Start with the default so the server HTML and the first client render
  // always match (no hydration mismatch). The persisted choice is applied
  // right after mount; the no-FOUC script in the layout has already set
  // <html lang/dir> before paint, so there is no visible flash.
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'fa' || stored === 'en') setLangState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value: LangContextValue = {
    lang,
    setLang: setLangState,
    t: dictionary[lang]
  }

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
