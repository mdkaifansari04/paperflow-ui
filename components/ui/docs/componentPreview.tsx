'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { PaperSyntaxHighlight } from './paperSyntaxHighlight'

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
  previewLines?: string
  className?: string
  previewClassName?: string
}

export function ComponentPreview({
  children,
  code,
  previewLines,
  className,
  previewClassName,
}: ComponentPreviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const peek = useMemo(() => {
    if (previewLines) {
      return previewLines
    }

    return code.split('\n').slice(0, 6).join('\n')
  }, [code, previewLines])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className={cn('relative overflow-hidden border-2 border-ink-black shadow-lift-2 rounded-none', className)}>
      <div
        className={cn(
          'flex min-h-[240px] flex-wrap items-center justify-center gap-4 bg-paper-aged p-12',
          previewClassName
        )}
      >
        {children}
      </div>

      <div className="relative border-t border-ink-faint">
        <div className="max-h-[100px] overflow-hidden bg-ink-black p-4">
          <pre className="font-mono text-xs leading-relaxed text-paper-base">{peek}</pre>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 flex h-[68px] items-end justify-center gap-3 pb-3"
          style={{ background: 'linear-gradient(to bottom, transparent, #1A1209)' }}
        >
          <button
            onClick={() => setIsOpen((value) => !value)}
            className="border border-paper-base/30 px-4 py-1.5 font-mono text-xs text-paper-base transition-all duration-150 hover:bg-paper-base/10"
          >
            {isOpen ? 'Hide code ↑' : 'View code ↓'}
          </button>
          <button
            onClick={handleCopy}
            className="border border-paper-base/30 px-4 py-1.5 font-mono text-xs text-paper-base transition-all duration-150 hover:bg-paper-base/10"
          >
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="relative border-t-2 border-ink-black bg-ink-black">
          <button
            onClick={handleCopy}
            className="absolute right-4 top-4 border border-ink-medium px-3 py-1 font-mono text-xs text-ink-light transition-colors hover:text-paper-base"
          >
            {copied ? 'Copied ✓' : 'Copy all'}
          </button>
          <pre className="overflow-x-auto p-6 pt-12 font-mono text-sm leading-relaxed text-paper-base">
            <PaperSyntaxHighlight code={code} />
          </pre>
        </div>
      ) : null}
    </div>
  )
}
