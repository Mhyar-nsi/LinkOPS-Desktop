'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * A terminal-styled block for commands. Always LTR — terminal content is
 * English/technical and must not mirror in the Persian RTL layout.
 */
export function TerminalShell({
  title,
  lines,
  className
}: {
  /** Optional title shown in the fake terminal bar (e.g. "bash — install"). */
  title?: string
  /** Each entry is one line; a `$` prefix renders as a green prompt. */
  lines: string[]
  className?: string
}): React.JSX.Element {
  const [copied, setCopied] = useState(false)

  const copy = async (): Promise<void> => {
    await navigator.clipboard.writeText(lines.join('\n'))
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div
      dir="ltr"
      className={cn(
        'overflow-hidden rounded-md border border-border bg-terminal-background text-left shadow-inner',
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-sidebar px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-destructive/80" />
        <span className="h-2 w-2 rounded-full bg-warning/80" />
        <span className="h-2 w-2 rounded-full bg-success/80" />
        {title && <span className="ms-2 font-mono text-[11px] text-terminal-muted">{title}</span>}
        <button
          type="button"
          onClick={() => void copy()}
          aria-label="Copy commands"
          title="Copy commands"
          className="ms-auto inline-flex h-6 w-6 items-center justify-center rounded text-terminal-muted transition-colors hover:bg-white/10 hover:text-terminal-foreground"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </div>
      <pre className="overflow-x-auto p-3 font-mono text-xs leading-6 text-terminal-foreground">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {line.startsWith('$') ? <span className="text-terminal-accent">{line}</span> : <span>{line}</span>}
          </div>
        ))}
      </pre>
    </div>
  )
}
