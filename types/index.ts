export type PaperShadow =
  | 'lift-1'
  | 'lift-2'
  | 'lift-3'
  | 'lift-4'
  | 'accent'
  | 'soft'

export type PaperAccent = 'yellow' | 'red' | 'green' | 'blue' | 'orange'

export type ComponentSize = 'sm' | 'md' | 'lg'

export type ComponentCategory =
  | 'primitives'
  | 'forms'
  | 'navigation'
  | 'feedback'
  | 'data-display'
  | 'layout'
  | 'overlays'
  | 'marketing'
  | 'templates'

export type ComponentStatus = 'stable' | 'beta' | 'wip'

export interface ComponentMeta {
  slug: string
  name: string
  description: string
  category: ComponentCategory
  tags: string[]
  status: ComponentStatus
  addedAt: string
}
