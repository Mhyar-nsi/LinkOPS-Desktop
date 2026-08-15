'use client'

import { Languages } from 'lucide-react'
import { useLang } from '@/lib/lang'
import { cn } from '@/lib/utils'

export function LangToggle(): React.JSX.Element {
  const { lang, setLang } = useLang()

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-1 rounded-md border border-border bg-sidebar p-0.5 text-xs"
    >
      <Languages className="me-1 ms-1.5 h-3.5 w-3.5 text-muted-foreground" />
      <button
        type="button"
        onClick={() => setLang('en')}
        className={cn(
          'rounded px-2 py-1 font-medium transition-colors',
          lang === 'en' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('fa')}
        className={cn(
          'rounded px-2 py-1 font-medium transition-colors',
          lang === 'fa' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
        )}
      >
        فارسی
      </button>
    </div>
  )
}
