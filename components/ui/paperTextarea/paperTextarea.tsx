import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const paperTextareaVariants = cva(
  [
    'w-full min-h-[120px] rounded-none border-2 border-ink-black bg-paper-cream px-4 py-3',
    'font-body text-base leading-[1.75] text-ink-dark placeholder:text-ink-faint placeholder:italic',
    'transition-all duration-150 ease-paper focus-visible:outline-none focus-visible:shadow-[3px_3px_0px_#F2C94C]',
    'disabled:pointer-events-none disabled:opacity-40',
  ],
  {
    variants: {
      variant: {
        default: '',
        lined:
          'bg-[linear-gradient(to_bottom,transparent_calc(1.75rem-1px),rgba(44,36,22,0.1)_calc(1.75rem-1px),rgba(44,36,22,0.1)_1.75rem)] bg-[length:100%_1.75rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface PaperTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof paperTextareaVariants> {}

const PaperTextarea = React.forwardRef<HTMLTextAreaElement, PaperTextareaProps>(
  ({ className, variant, ...props }, ref) => (
    <textarea ref={ref} className={cn(paperTextareaVariants({ variant }), className)} {...props} />
  )
)

PaperTextarea.displayName = 'PaperTextarea'

export { PaperTextarea, paperTextareaVariants }
