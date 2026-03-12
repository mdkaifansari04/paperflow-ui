import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const paperSkeletonVariants = cva(
  [
    'relative overflow-hidden rounded-none border border-ink-medium/50 bg-paper-light',
    'shadow-[2px_2px_0px_rgba(26,18,9,0.08)]',
    'animate-[paperPulse_1.8s_ease-in-out_infinite]',
    "before:pointer-events-none before:absolute before:inset-0 before:content-['']",
    'before:border before:border-ink-faint/40',
  ],
  {
    variants: {
      variant: {
        text: 'h-3.5 w-full',
        rect: 'h-24 w-full',
        avatar: 'h-10 w-10',
      },
      density: {
        light: '',
        medium: 'bg-paper-aged',
        strong: 'bg-paper-cream border-ink-medium/70',
      },
    },
    defaultVariants: {
      variant: 'rect',
      density: 'medium',
    },
  }
)

export interface PaperSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paperSkeletonVariants> {}

const PaperSkeleton = React.forwardRef<HTMLDivElement, PaperSkeletonProps>(
  ({ className, variant, density, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(paperSkeletonVariants({ variant, density }), className)}
      {...props}
    />
  )
)

PaperSkeleton.displayName = 'PaperSkeleton'

export { PaperSkeleton, paperSkeletonVariants }
