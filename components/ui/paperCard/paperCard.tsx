import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const paperCardVariants = cva('border-2 border-ink-black rounded-none paper-grain transition-all duration-200 ease-paper', {
  variants: {
    variant: {
      default: 'bg-paper-base text-ink-black shadow-lift-2',
      featured: 'bg-paper-base text-ink-black shadow-lift-2 border-l-[4px] border-l-accent-yellow',
      dark: 'bg-ink-black text-paper-base shadow-accent',
      ghost: 'bg-transparent text-ink-dark border-dashed border-ink-faint shadow-none',
      aged: 'bg-paper-aged text-ink-black shadow-lift-1',
    },
    hoverable: {
      true: 'hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-lift-3',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    hoverable: false,
  },
})

export interface PaperCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paperCardVariants> {}

const PaperCard = React.forwardRef<HTMLDivElement, PaperCardProps>(
  ({ className, variant, hoverable, ...props }, ref) => (
    <div ref={ref} className={cn(paperCardVariants({ variant, hoverable }), className)} {...props} />
  )
)

const PaperCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('border-b border-ink-faint px-6 py-4', className)} {...props} />
  )
)

const PaperCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('font-display text-xl text-ink-black', className)} {...props} />
  )
)

const PaperCardSubtitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('font-mono text-xs uppercase tracking-wide text-ink-light', className)}
      {...props}
    />
  )
)

const PaperCardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('px-6 py-5', className)} {...props} />
)

const PaperCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center justify-between border-t border-ink-faint px-6 py-4', className)}
      {...props}
    />
  )
)

PaperCard.displayName = 'PaperCard'
PaperCardHeader.displayName = 'PaperCardHeader'
PaperCardTitle.displayName = 'PaperCardTitle'
PaperCardSubtitle.displayName = 'PaperCardSubtitle'
PaperCardBody.displayName = 'PaperCardBody'
PaperCardFooter.displayName = 'PaperCardFooter'

export {
  PaperCard,
  PaperCardHeader,
  PaperCardTitle,
  PaperCardSubtitle,
  PaperCardBody,
  PaperCardFooter,
  paperCardVariants,
}
