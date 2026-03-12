import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const paperAlertVariants = cva(
  'relative overflow-hidden rounded-none border-2 border-ink-black p-5 shadow-lift-1 transition-all duration-150 ease-paper',
  {
    variants: {
      variant: {
        info: 'border-l-[6px] border-l-accent-blue bg-[rgba(74,144,217,0.08)]',
        success: 'border-l-[6px] border-l-accent-green bg-[rgba(76,175,125,0.08)]',
        warning: 'border-l-[6px] border-l-accent-yellow bg-[rgba(242,201,76,0.12)]',
        danger: 'border-l-[6px] border-l-accent-red bg-[rgba(224,90,77,0.1)]',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
)

const iconStyles: Record<NonNullable<VariantProps<typeof paperAlertVariants>['variant']>, string> = {
  info: 'text-accent-blue',
  success: 'text-accent-green',
  warning: 'text-accent-yellow',
  danger: 'text-accent-red',
}

export interface PaperAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paperAlertVariants> {
  icon?: React.ReactNode
}

const PaperAlert = React.forwardRef<HTMLDivElement, PaperAlertProps>(
  ({ className, variant = 'info', icon, children, ...props }, ref) => {
    const tone = (variant ?? 'info') as NonNullable<VariantProps<typeof paperAlertVariants>['variant']>

    return (
      <div ref={ref} className={cn(paperAlertVariants({ variant: tone }), className)} {...props}>
        <span className="pointer-events-none absolute right-2 top-1 select-none font-mono text-[10px] uppercase tracking-widest text-ink-faint opacity-60">
          Notice
        </span>
        <div className="flex gap-3">
          <span className={cn('mt-0.5 inline-flex text-lg leading-none', iconStyles[tone])}>{icon ?? '!'}</span>
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
    )
  }
)

const PaperAlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h4 ref={ref} className={cn('font-display text-lg text-ink-black', className)} {...props} />
  )
)

const PaperAlertContent = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('mt-1 font-body text-sm leading-7 text-ink-medium', className)} {...props} />
  )
)

PaperAlert.displayName = 'PaperAlert'
PaperAlertTitle.displayName = 'PaperAlertTitle'
PaperAlertContent.displayName = 'PaperAlertContent'

export { PaperAlert, PaperAlertTitle, PaperAlertContent, paperAlertVariants }
