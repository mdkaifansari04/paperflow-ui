import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const paperSkeletonVariants = cva('animate-[paperPulse_2s_ease-in-out_infinite] border border-ink-faint bg-paper-aged rounded-none', {
  variants: {
    variant: {
      text: 'h-4 w-full',
      rect: 'h-24 w-full',
      avatar: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'rect',
  },
})

export interface PaperSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paperSkeletonVariants> {}

const PaperSkeleton = React.forwardRef<HTMLDivElement, PaperSkeletonProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} aria-hidden="true" className={cn(paperSkeletonVariants({ variant }), className)} {...props} />
  )
)

PaperSkeleton.displayName = 'PaperSkeleton'

export { PaperSkeleton, paperSkeletonVariants }
