import {
  paperAccordionDocs,
  paperAlertDocs,
  paperAvatarDocs,
  paperBadgeDocs,
  paperBreadcrumbDocs,
  paperButtonDocs,
  paperCardDocs,
  paperCheckboxDocs,
  paperDialogDocs,
  paperInputDocs,
  paperProgressDocs,
  paperSelectDocs,
  paperSeparatorDocs,
  paperSkeletonDocs,
  paperSliderDocs,
  paperSwitchDocs,
  paperTableDocs,
  paperTabsDocs,
  paperTextareaDocs,
  paperTooltipDocs,
} from '@/components/ui'
import type { ComponentCategory, ComponentMeta } from '@/types'

export const registry: ComponentMeta[] = [
  paperButtonDocs,
  paperBadgeDocs,
  paperCardDocs,
  paperInputDocs,
  paperSelectDocs,
  paperCheckboxDocs,
  paperSwitchDocs,
  paperTextareaDocs,
  paperAlertDocs,
  paperBreadcrumbDocs,
  paperSeparatorDocs,
  paperSkeletonDocs,
  paperTooltipDocs,
  paperAccordionDocs,
  paperDialogDocs,
  paperTabsDocs,
  paperProgressDocs,
  paperSliderDocs,
  paperAvatarDocs,
  paperTableDocs,
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
