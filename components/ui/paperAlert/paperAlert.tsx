import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const paperAlertVariants = cva('rounded-none border border-ink-faint bg-paper-base p-5 shadow-soft', {
  variants: {
    variant: {
      info: 'border-l-4 border-l-accent-blue',
      success: 'border-l-4 border-l-accent-green',
      warning: 'border-l-4 border-l-accent-yellow',
      danger: 'border-l-4 border-l-accent-red',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
})

export interface PaperAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paperAlertVariants> {}

const PaperAlert = React.forwardRef<HTMLDivElement, PaperAlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(paperAlertVariants({ variant }), className)} {...props} />
  )
)

const PaperAlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h4 ref={ref} className={cn('font-display text-base text-ink-black', className)} {...props} />
  )
)

const PaperAlertContent = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('mt-1 font-body text-sm text-ink-medium', className)} {...props} />
  )
)

PaperAlert.displayName = 'PaperAlert'
PaperAlertTitle.displayName = 'PaperAlertTitle'
PaperAlertContent.displayName = 'PaperAlertContent'

export { PaperAlert, PaperAlertTitle, PaperAlertContent, paperAlertVariants }
