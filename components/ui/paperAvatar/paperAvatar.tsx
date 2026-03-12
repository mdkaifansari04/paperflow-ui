import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const avatarVariants = cva('inline-flex items-center justify-center overflow-hidden border-2 border-ink-black bg-paper-aged font-display italic text-ink-black rounded-none', {
  variants: {
    size: {
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-14 w-14 text-lg',
      xl: 'h-20 w-20 text-2xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface PaperAvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  initials?: string
}

const PaperAvatar = React.forwardRef<HTMLDivElement, PaperAvatarProps>(
  ({ className, size, src, alt, initials, ...props }, ref) => (
    <div ref={ref} className={cn(avatarVariants({ size }), className)} {...props}>
      {src ? <img src={src} alt={alt ?? 'avatar'} className="h-full w-full object-cover" /> : initials ?? 'PF'}
    </div>
  )
)

interface PaperAvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const PaperAvatarGroup = React.forwardRef<HTMLDivElement, PaperAvatarGroupProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex -space-x-2 [&>*]:border-paper-base', className)} {...props}>
      {children}
    </div>
  )
)

PaperAvatar.displayName = 'PaperAvatar'
PaperAvatarGroup.displayName = 'PaperAvatarGroup'

export { PaperAvatar, PaperAvatarGroup, avatarVariants }
