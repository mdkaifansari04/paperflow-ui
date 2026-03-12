import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const progressFillVariants = cva('h-full border-r-2 border-r-ink-black transition-all duration-200 ease-paper', {
  variants: {
    variant: {
      default: 'bg-ink-black',
      success: 'bg-accent-yellow',
      error: 'bg-accent-red',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface PaperProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressFillVariants> {
  value: number
  label?: string
}

const PaperProgress = React.forwardRef<HTMLDivElement, PaperProgressProps>(
  ({ className, value, variant, label, ...props }, ref) => {
    const safe = Math.min(100, Math.max(0, value))

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div className="mb-1 flex items-center justify-between font-mono text-xs uppercase tracking-wide text-ink-light">
          <span>{label ?? 'Progress'}</span>
          <span>{safe}%</span>
        </div>
        <div className="h-2 border-2 border-ink-black bg-paper-aged">
          <div className={cn(progressFillVariants({ variant }))} style={{ width: `${safe}%` }} />
        </div>
      </div>
    )
  }
)

PaperProgress.displayName = 'PaperProgress'

export { PaperProgress, progressFillVariants }
