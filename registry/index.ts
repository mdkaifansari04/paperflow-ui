import { paperButtonDocs } from '@/components/ui/paperButton'
import type { ComponentCategory, ComponentMeta } from '@/types'

export const registry: ComponentMeta[] = [
  paperButtonDocs,
  // {
  //   slug: 'paper-input',
  //   name: 'PaperInput',
  //   description: 'Single-line input with honest borders and clear states.',
  //   category: 'forms',
  //   tags: ['input', 'form'],
  //   status: 'beta',
  //   addedAt: '2025-01-02',
  // },
  // {
  //   slug: 'paper-textarea',
  //   name: 'PaperTextarea',
  //   description: 'Long-form input for notes, docs, and comments.',
  //   category: 'forms',
  //   tags: ['textarea', 'form'],
  //   status: 'wip',
  //   addedAt: '2025-01-03',
  // },
  // {
  //   slug: 'paper-select',
  //   name: 'PaperSelect',
  //   description: 'Menu-driven selection with category headers.',
  //   category: 'forms',
  //   tags: ['select', 'dropdown'],
  //   status: 'beta',
  //   addedAt: '2025-01-04',
  // },
  // {
  //   slug: 'paper-tabs',
  //   name: 'PaperTabs',
  //   description: 'Editorial tabs for segmented content.',
  //   category: 'navigation',
  //   tags: ['tabs', 'navigation'],
  //   status: 'wip',
  //   addedAt: '2025-01-05',
  // },
  // {
  //   slug: 'paper-toast',
  //   name: 'PaperToast',
  //   description: 'Temporary notifications with tasteful urgency.',
  //   category: 'feedback',
  //   tags: ['toast', 'feedback'],
  //   status: 'beta',
  //   addedAt: '2025-01-06',
  // },
  // {
  //   slug: 'paper-modal',
  //   name: 'PaperModal',
  //   description: 'Modal for focused tasks and confirmations.',
  //   category: 'overlays',
  //   tags: ['modal', 'dialog'],
  //   status: 'wip',
  //   addedAt: '2025-01-07',
  // },
  // {
  //   slug: 'paper-card',
  //   name: 'PaperCard',
  //   description: 'Foundational content container for previews.',
  //   category: 'layout',
  //   tags: ['card', 'layout'],
  //   status: 'beta',
  //   addedAt: '2025-01-08',
  // },
  // {
  //   slug: 'paper-banner',
  //   name: 'PaperBanner',
  //   description: 'Announcement strip with a single clear CTA.',
  //   category: 'marketing',
  //   tags: ['banner', 'announcement'],
  //   status: 'wip',
  //   addedAt: '2025-01-09',
  // },
  // {
  //   slug: 'paper-table',
  //   name: 'PaperTable',
  //   description: 'Data table tuned for docs and changelogs.',
  //   category: 'data-display',
  //   tags: ['table', 'data'],
  //   status: 'beta',
  //   addedAt: '2025-01-10',
  // },
  // {
  //   slug: 'paper-empty-state',
  //   name: 'PaperEmptyState',
  //   description: 'A smart no-results pattern with actionable next steps.',
  //   category: 'feedback',
  //   tags: ['empty-state', 'feedback'],
  //   status: 'wip',
  //   addedAt: '2025-01-11',
  // },
  // {
  //   slug: 'paper-pricing-template',
  //   name: 'PaperPricingTemplate',
  //   description: 'Pricing layout that feels editorial, not salesy.',
  //   category: 'templates',
  //   tags: ['template', 'pricing'],
  //   status: 'wip',
  //   addedAt: '2025-01-12',
  // },
]

export function getComponent(slug: string) {
  return registry.find((component) => component.slug === slug)
}

export function getComponentsByCategory(category: ComponentCategory) {
  return registry.filter((component) => component.category === category)
}

export function getStableComponents() {
  return registry.filter((component) => component.status === 'stable')
}
