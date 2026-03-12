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
    <div className={cn('relative w-full min-w-0 max-w-full overflow-hidden rounded-none border-2 border-ink-black', className)}>
      <div
        className={cn(
          'flex min-h-[240px] flex-wrap items-center justify-center gap-4 bg-paper-aged p-12',
          previewClassName
        )}
      >
        {children}
      </div>

      {!isOpen ? (
        <div className="relative border-t border-ink-faint">
          <div className="max-h-[100px] overflow-hidden bg-ink-black p-4">
            <pre className="w-full overflow-x-auto font-mono text-xs leading-relaxed text-paper-base">{peek}</pre>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 flex h-[68px] items-end justify-center gap-3 pb-3"
            style={{ background: 'linear-gradient(to bottom, transparent, #1A1209)' }}
          >
            <button
              onClick={() => setIsOpen(true)}
              className="border border-paper-base/30 px-4 py-1.5 font-mono text-xs text-paper-base transition-all duration-150 hover:bg-paper-base/10"
            >
              View code ↓
            </button>
            <button
              onClick={handleCopy}
              className="border border-paper-base/30 px-4 py-1.5 font-mono text-xs text-paper-base transition-all duration-150 hover:bg-paper-base/10"
            >
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
        </div>
      ) : null}

      {isOpen ? (
        <div className="relative w-full min-w-0 max-w-full border-t-2 border-ink-black bg-ink-black">
          <div className="absolute right-4 top-4 flex gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="border border-ink-medium px-3 py-1 font-mono text-xs text-ink-light transition-colors hover:text-paper-base"
            >
              Hide ↑
            </button>
            <button
              onClick={handleCopy}
              className="border border-ink-medium px-3 py-1 font-mono text-xs text-ink-light transition-colors hover:text-paper-base"
            >
              {copied ? 'Copied ✓' : 'Copy all'}
            </button>
          </div>
          <div className="w-full max-w-full overflow-auto">
            <pre className="max-h-[28rem] min-w-full overflow-auto p-6 pt-12 font-mono text-sm leading-relaxed text-paper-base">
              <code className="block w-max min-w-full">
                <PaperSyntaxHighlight code={code} />
              </code>
            </pre>
          </div>
        </div>
      ) : null}
    </div>
  )
}
