import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const separatorVariants = cva('w-full shrink-0 border-0', {
  variants: {
    variant: {
      solid: 'h-px bg-ink-black',
      double: 'h-[3px] border-y border-ink-black bg-transparent',
      dashed: 'h-px border-t border-dashed border-ink-faint bg-transparent',
      thick: 'h-[3px] bg-ink-black',
      editorial: 'h-[8px] bg-[linear-gradient(to_bottom,#1A1209_0_4px,transparent_4px_5px,#1A1209_5px_6px,transparent_6px)]',
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
})

export interface PaperSeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {
  label?: string
}

const PaperSeparator = React.forwardRef<HTMLDivElement, PaperSeparatorProps>(
  ({ className, variant, label, ...props }, ref) => {
    if (!label) {
      return <div ref={ref} role="separator" className={cn(separatorVariants({ variant }), className)} {...props} />
    }

    return (
      <div ref={ref} className={cn('flex items-center gap-3', className)} {...props}>
        <div className={cn('flex-1', separatorVariants({ variant }))} />
        <span className="font-mono text-xs uppercase tracking-widest text-ink-light">{label}</span>
        <div className={cn('flex-1', separatorVariants({ variant }))} />
      </div>
    )
  }
)

PaperSeparator.displayName = 'PaperSeparator'

export { PaperSeparator, separatorVariants }
