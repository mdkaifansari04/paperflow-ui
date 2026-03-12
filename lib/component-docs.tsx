import type { ReactNode } from 'react'
import {
  PaperAccordion,
  PaperAlert,
  PaperAlertContent,
  PaperAlertTitle,
  PaperAvatar,
  PaperAvatarGroup,
  PaperBadge,
  PaperBreadcrumb,
  PaperButton,
  PaperCard,
  PaperCardBody,
  PaperCardFooter,
  PaperCardHeader,
  PaperCardSubtitle,
  PaperCardTitle,
  PaperCheckbox,
  PaperDialog,
  PaperField,
  PaperInput,
  PaperProgress,
  PaperSelect,
  PaperSeparator,
  PaperSkeleton,
  PaperSlider,
  PaperSwitch,
  PaperTable,
  PaperTabs,
  PaperTextarea,
  PaperTooltip,
} from '@/components/ui'

export interface DocPropRow {
  name: string
  type: string
  defaultValue: string
  description: string
}

export interface DocVariantRow {
  name: string
  render: ReactNode
}

export interface DocExample {
  title: string
  description: string
  render: ReactNode
  code: string
}

export interface ComponentDocDefinition {
  wittyLine: string
  filePath: string
  barrelPath: string
  masterExport: string
  preview: ReactNode
  variants: DocVariantRow[]
  props: DocPropRow[]
  examples: DocExample[]
}

const tableColumns = [
  { key: 'name', header: 'Name' },
  { key: 'role', header: 'Role' },
  { key: 'status', header: 'Status' },
] as const

const tableRows = [
  { name: 'Kaif', role: 'Design engineer', status: 'Stable' },
  { name: 'Asha', role: 'QA lead', status: 'Reviewing' },
  { name: 'Nirav', role: 'Frontend', status: 'Shipping' },
]

export const componentDocDefinitions: Record<string, ComponentDocDefinition> = {
  'paper-button': {
    wittyLine: '← default variant: calm, sharp, and impossible to ignore.',
    filePath: 'components/ui/paperButton/paperButton.tsx',
    barrelPath: 'components/ui/paperButton/index.ts',
    masterExport: "export * from './paperButton'",
    preview: (
      <div className="flex flex-wrap justify-center gap-3">
        <PaperButton>Primary</PaperButton>
        <PaperButton variant="secondary">Secondary</PaperButton>
        <PaperButton variant="outline">Outline</PaperButton>
        <PaperButton variant="ghost">Ghost</PaperButton>
        <PaperButton variant="danger">Danger</PaperButton>
      </div>
    ),
    variants: [
      { name: 'Primary', render: <PaperButton>Primary</PaperButton> },
      { name: 'Secondary', render: <PaperButton variant="secondary">Secondary</PaperButton> },
      { name: 'Outline', render: <PaperButton variant="outline">Outline</PaperButton> },
      { name: 'Ghost', render: <PaperButton variant="ghost">Ghost</PaperButton> },
      { name: 'Danger', render: <PaperButton variant="danger">Danger</PaperButton> },
    ],
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'", defaultValue: 'primary', description: 'Visual treatment for the action.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: 'md', description: 'Padding and font size preset.' },
      { name: 'isLoading', type: 'boolean', defaultValue: 'false', description: 'Shows animated loading dots and disables interactions.' },
      { name: 'leftIcon', type: 'ReactNode', defaultValue: 'undefined', description: 'Optional icon before label.' },
      { name: 'rightIcon', type: 'ReactNode', defaultValue: 'undefined', description: 'Optional icon after label.' },
    ],
    examples: [
      {
        title: 'Form submission',
        description: 'Use loading state to prevent duplicate submissions.',
        render: <PaperButton isLoading>Saving draft</PaperButton>,
        code: `<PaperButton isLoading>Saving draft</PaperButton>`,
      },
      {
        title: 'Destructive action',
        description: 'Reserve red variant for irreversible actions only.',
        render: <PaperButton variant="danger">Delete project</PaperButton>,
        code: `<PaperButton variant="danger">Delete project</PaperButton>`,
      },
    ],
  },
  'paper-badge': {
    wittyLine: '↗ tiny labels, loud clarity.',
    filePath: 'components/ui/paperBadge/paperBadge.tsx',
    barrelPath: 'components/ui/paperBadge/index.ts',
    masterExport: "export * from './paperBadge'",
    preview: (
      <div className="flex flex-wrap justify-center gap-2">
        <PaperBadge>Default</PaperBadge>
        <PaperBadge variant="solid">Stable</PaperBadge>
        <PaperBadge variant="yellow">Beta</PaperBadge>
        <PaperBadge variant="green">Ready</PaperBadge>
      </div>
    ),
    variants: [
      { name: 'Default', render: <PaperBadge>Default</PaperBadge> },
      { name: 'Solid', render: <PaperBadge variant="solid">Solid</PaperBadge> },
      { name: 'Yellow', render: <PaperBadge variant="yellow">Yellow</PaperBadge> },
      { name: 'Red', render: <PaperBadge variant="red">Red</PaperBadge> },
      { name: 'Blue', render: <PaperBadge variant="blue">Blue</PaperBadge> },
    ],
    props: [
      { name: 'variant', type: "'default' | 'solid' | 'yellow' | 'red' | 'green' | 'blue' | 'orange'", defaultValue: 'default', description: 'Color style for emphasis and status.' },
      { name: 'children', type: 'ReactNode', defaultValue: 'required', description: 'Badge text content.' },
    ],
    examples: [
      {
        title: 'Status chips',
        description: 'Use one color family per panel to avoid noise.',
        render: (
          <div className="flex gap-2">
            <PaperBadge variant="green">Stable</PaperBadge>
            <PaperBadge variant="yellow">Beta</PaperBadge>
          </div>
        ),
        code: `<PaperBadge variant="green">Stable</PaperBadge>`,
      },
      {
        title: 'Metadata labels',
        description: 'Mono labels pair well with card subtitles.',
        render: <PaperBadge variant="default">v1.0</PaperBadge>,
        code: `<PaperBadge>v1.0</PaperBadge>`,
      },
    ],
  },
  'paper-card': {
    wittyLine: '← foundation first. everything else stacks on top.',
    filePath: 'components/ui/paperCard/paperCard.tsx',
    barrelPath: 'components/ui/paperCard/index.ts',
    masterExport: "export * from './paperCard'",
    preview: (
      <PaperCard className="w-full max-w-xl" variant="featured">
        <PaperCardHeader>
          <PaperCardSubtitle>Feature</PaperCardSubtitle>
          <PaperCardTitle>Card heading with intent</PaperCardTitle>
        </PaperCardHeader>
        <PaperCardBody>
          A focused card surface for docs, dashboards, and content previews.
        </PaperCardBody>
        <PaperCardFooter>
          <span className="font-mono text-xs text-ink-light">Updated 2m ago</span>
          <PaperButton size="sm">Open</PaperButton>
        </PaperCardFooter>
      </PaperCard>
    ),
    variants: [
      { name: 'Default', render: <PaperCard className="w-full max-w-xs p-4">Default card</PaperCard> },
      { name: 'Featured', render: <PaperCard variant="featured" className="w-full max-w-xs p-4">Featured card</PaperCard> },
      { name: 'Aged', render: <PaperCard variant="aged" className="w-full max-w-xs p-4">Aged card</PaperCard> },
      { name: 'Ghost', render: <PaperCard variant="ghost" className="w-full max-w-xs p-4">Ghost card</PaperCard> },
    ],
    props: [
      { name: 'variant', type: "'default' | 'featured' | 'dark' | 'ghost' | 'aged'", defaultValue: 'default', description: 'Surface style and emphasis level.' },
      { name: 'hoverable', type: 'boolean', defaultValue: 'false', description: 'Enables lift-on-hover interaction.' },
      { name: 'children', type: 'ReactNode', defaultValue: 'required', description: 'Card content tree.' },
    ],
    examples: [
      {
        title: 'Feature summary',
        description: 'Combine subtitle + title + CTA in one compact card.',
        render: <PaperCard variant="featured" className="w-full max-w-sm p-4">Feature summary card</PaperCard>,
        code: `<PaperCard variant="featured">Feature summary card</PaperCard>`,
      },
      {
        title: 'Passive surface',
        description: 'Use ghost variant where hierarchy should stay quiet.',
        render: <PaperCard variant="ghost" className="w-full max-w-sm p-4">Passive content surface</PaperCard>,
        code: `<PaperCard variant="ghost">Passive content surface</PaperCard>`,
      },
    ],
  },
  'paper-input': {
    wittyLine: '↗ forms should read like forms, not puzzle boxes.',
    filePath: 'components/ui/paperInput/paperInput.tsx',
    barrelPath: 'components/ui/paperInput/index.ts',
    masterExport: "export * from './paperInput'",
    preview: (
      <div className="w-full max-w-md space-y-4">
        <PaperField label="Email address" hint="We will only send release notes.">
          <PaperInput placeholder="you@example.com" />
        </PaperField>
      </div>
    ),
    variants: [
      { name: 'Default', render: <PaperInput placeholder="Default input" className="w-56" /> },
      { name: 'Filled', render: <PaperInput variant="filled" placeholder="Filled input" className="w-56" /> },
      { name: 'Bordered', render: <PaperInput variant="bordered" placeholder="Bordered input" className="w-56" /> },
      { name: 'Error', render: <PaperInput hasError placeholder="Error state" className="w-56" /> },
    ],
    props: [
      { name: 'variant', type: "'default' | 'filled' | 'bordered'", defaultValue: 'default', description: 'Input shell treatment.' },
      { name: 'hasError', type: 'boolean', defaultValue: 'false', description: 'Applies red underline error state.' },
      { name: 'placeholder', type: 'string', defaultValue: 'undefined', description: 'Hint text inside field.' },
    ],
    examples: [
      {
        title: 'Sign-up form',
        description: 'Pair with PaperField to keep labels and hints consistent.',
        render: (
          <PaperField label="Team name" hint="Visible in URLs and docs.">
            <PaperInput placeholder="paperflow-labs" />
          </PaperField>
        ),
        code: `<PaperField label="Team name"><PaperInput /></PaperField>`,
      },
      {
        title: 'Validation error',
        description: 'Use hint channel for clear corrective instructions.',
        render: (
          <PaperField label="Email" error="Please enter a valid email address.">
            <PaperInput hasError placeholder="name@domain.com" />
          </PaperField>
        ),
        code: `<PaperInput hasError placeholder="name@domain.com" />`,
      },
    ],
  },
  'paper-select': {
    wittyLine: '↗ menus can be calm and still unmistakable.',
    filePath: 'components/ui/paperSelect/paperSelect.tsx',
    barrelPath: 'components/ui/paperSelect/index.ts',
    masterExport: "export * from './paperSelect'",
    preview: (
      <div className="w-full max-w-md">
        <PaperSelect
          label="Framework"
          defaultValue="next"
          options={[
            { label: 'Next.js', value: 'next' },
            { label: 'Nuxt', value: 'nuxt' },
            { label: 'SvelteKit', value: 'sveltekit' },
          ]}
        />
      </div>
    ),
    variants: [
      { name: 'Default', render: <PaperSelect options={[{ label: 'Default', value: 'd' }]} defaultValue="d" className="w-56" /> },
      { name: 'Labeled', render: <PaperSelect label="Plan" options={[{ label: 'Pro', value: 'pro' }]} defaultValue="pro" className="w-56" /> },
    ],
    props: [
      { name: 'options', type: 'PaperSelectOption[]', defaultValue: '[]', description: 'List of selectable label/value options.' },
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Optional field label above control.' },
      { name: 'hint', type: 'string', defaultValue: 'undefined', description: 'Small helper text below control.' },
    ],
    examples: [
      {
        title: 'Plan chooser',
        description: 'Use for small finite option sets in settings forms.',
        render: <PaperSelect options={[{ label: 'Starter', value: 'starter' }, { label: 'Pro', value: 'pro' }]} defaultValue="starter" className="w-56" />,
        code: `<PaperSelect options={[{ label: 'Starter', value: 'starter' }]} />`,
      },
      {
        title: 'Environment picker',
        description: 'Pairs well with mono labels for operational UIs.',
        render: <PaperSelect label="Environment" options={[{ label: 'Prod', value: 'prod' }, { label: 'Staging', value: 'staging' }]} defaultValue="prod" className="w-56" />,
        code: `<PaperSelect label="Environment" options={...} />`,
      },
    ],
  },
  'paper-checkbox': {
    wittyLine: '↗ sharp edges, clear choices.',
    filePath: 'components/ui/paperCheckbox/paperCheckbox.tsx',
    barrelPath: 'components/ui/paperCheckbox/index.ts',
    masterExport: "export * from './paperCheckbox'",
    preview: <PaperCheckbox label="Email me release notes" hint="About one message a month." defaultChecked />,
    variants: [
      { name: 'Unchecked', render: <PaperCheckbox label="Unchecked" /> },
      { name: 'Checked', render: <PaperCheckbox label="Checked" defaultChecked /> },
      { name: 'Disabled', render: <PaperCheckbox label="Disabled" disabled /> },
    ],
    props: [
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Primary label text.' },
      { name: 'hint', type: 'string', defaultValue: 'undefined', description: 'Secondary helper text.' },
      { name: 'defaultChecked', type: 'boolean', defaultValue: 'false', description: 'Initial checked state for uncontrolled usage.' },
    ],
    examples: [
      { title: 'Consent checkbox', description: 'Use with concise legal language and optional hint.', render: <PaperCheckbox label="I agree to the terms" hint="Required before continuing." />, code: `<PaperCheckbox label="I agree to the terms" />` },
      { title: 'Preference toggles', description: 'Group checkboxes for independent notification settings.', render: <div className="grid gap-2"><PaperCheckbox label="Product updates" defaultChecked /><PaperCheckbox label="Security alerts" /></div>, code: `<PaperCheckbox label="Product updates" defaultChecked />` },
    ],
  },
  'paper-switch': {
    wittyLine: '← square slider, unapologetically mechanical.',
    filePath: 'components/ui/paperSwitch/paperSwitch.tsx',
    barrelPath: 'components/ui/paperSwitch/index.ts',
    masterExport: "export * from './paperSwitch'",
    preview: <PaperSwitch label="Enable public API" defaultChecked />,
    variants: [
      { name: 'Off', render: <PaperSwitch label="Off" /> },
      { name: 'On', render: <PaperSwitch label="On" defaultChecked /> },
    ],
    props: [
      { name: 'checked', type: 'boolean', defaultValue: 'undefined', description: 'Controlled checked state.' },
      { name: 'defaultChecked', type: 'boolean', defaultValue: 'false', description: 'Initial unchecked/checked value.' },
      { name: 'onCheckedChange', type: '(checked: boolean) => void', defaultValue: 'undefined', description: 'Callback when state changes.' },
    ],
    examples: [
      { title: 'Feature flag', description: 'Good for binary product settings in admin surfaces.', render: <PaperSwitch label="Enable beta banner" defaultChecked />, code: `<PaperSwitch label="Enable beta banner" />` },
      { title: 'Privacy mode', description: 'Keep label explicit so state meaning is obvious.', render: <PaperSwitch label="Hide activity from team" />, code: `<PaperSwitch label="Hide activity from team" />` },
    ],
  },
  'paper-textarea': {
    wittyLine: '↗ longer thoughts deserve better surfaces.',
    filePath: 'components/ui/paperTextarea/paperTextarea.tsx',
    barrelPath: 'components/ui/paperTextarea/index.ts',
    masterExport: "export * from './paperTextarea'",
    preview: <PaperTextarea placeholder="Write something worth reading..." className="w-full max-w-2xl" />,
    variants: [
      { name: 'Default', render: <PaperTextarea placeholder="Default" className="w-64" /> },
      { name: 'Lined', render: <PaperTextarea variant="lined" placeholder="Lined notes" className="w-64" /> },
    ],
    props: [
      { name: 'variant', type: "'default' | 'lined'", defaultValue: 'default', description: 'Textarea background treatment.' },
      { name: 'placeholder', type: 'string', defaultValue: 'undefined', description: 'Optional handwritten-style guidance.' },
      { name: 'rows', type: 'number', defaultValue: 'undefined', description: 'Initial rendered row count.' },
    ],
    examples: [
      { title: 'Issue notes', description: 'Useful for triage comments with full context.', render: <PaperTextarea placeholder="What happened? What did you expect?" className="w-full max-w-md" />, code: `<PaperTextarea placeholder="What happened?" />` },
      { title: 'Release notes draft', description: 'Lined variant helps visual scanning for long text.', render: <PaperTextarea variant="lined" className="w-full max-w-md" placeholder="Changelog for v1.4" />, code: `<PaperTextarea variant="lined" />` },
    ],
  },
  'paper-alert': {
    wittyLine: '← urgency without shouting.',
    filePath: 'components/ui/paperAlert/paperAlert.tsx',
    barrelPath: 'components/ui/paperAlert/index.ts',
    masterExport: "export * from './paperAlert'",
    preview: (
      <PaperAlert variant="warning" className="w-full max-w-2xl">
        <PaperAlertTitle>Scheduled maintenance</PaperAlertTitle>
        <PaperAlertContent>Read-only mode starts Friday at 11:00 PM IST.</PaperAlertContent>
      </PaperAlert>
    ),
    variants: [
      { name: 'Info', render: <PaperAlert variant="info" className="w-full max-w-sm"><PaperAlertTitle>Heads up</PaperAlertTitle><PaperAlertContent>New docs are available.</PaperAlertContent></PaperAlert> },
      { name: 'Success', render: <PaperAlert variant="success" className="w-full max-w-sm"><PaperAlertTitle>Saved</PaperAlertTitle><PaperAlertContent>All changes synced.</PaperAlertContent></PaperAlert> },
      { name: 'Warning', render: <PaperAlert variant="warning" className="w-full max-w-sm"><PaperAlertTitle>Warning</PaperAlertTitle><PaperAlertContent>Double-check before publishing.</PaperAlertContent></PaperAlert> },
      { name: 'Danger', render: <PaperAlert variant="danger" className="w-full max-w-sm"><PaperAlertTitle>Blocked</PaperAlertTitle><PaperAlertContent>Permission required.</PaperAlertContent></PaperAlert> },
    ],
    props: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", defaultValue: 'info', description: 'Accent stripe and tone color.' },
      { name: 'children', type: 'ReactNode', defaultValue: 'required', description: 'Alert title/content blocks.' },
    ],
    examples: [
      { title: 'Deployment warning', description: 'Use warning variant for risky actions.', render: <PaperAlert variant="warning" className="w-full max-w-md"><PaperAlertTitle>Production deploy</PaperAlertTitle><PaperAlertContent>Traffic may spike for 3-5 minutes.</PaperAlertContent></PaperAlert>, code: `<PaperAlert variant="warning">...</PaperAlert>` },
      { title: 'Success confirmation', description: 'Short success notice after async actions.', render: <PaperAlert variant="success" className="w-full max-w-md"><PaperAlertTitle>Publish complete</PaperAlertTitle><PaperAlertContent>Your page is live.</PaperAlertContent></PaperAlert>, code: `<PaperAlert variant="success">...</PaperAlert>` },
    ],
  },
  'paper-breadcrumb': {
    wittyLine: '↗ slash separators. old-school and readable.',
    filePath: 'components/ui/paperBreadcrumb/paperBreadcrumb.tsx',
    barrelPath: 'components/ui/paperBreadcrumb/index.ts',
    masterExport: "export * from './paperBreadcrumb'",
    preview: <PaperBreadcrumb items={[{ label: 'Docs', href: '/docs' }, { label: 'Components', href: '/docs/components' }, { label: 'PaperButton' }]} />,
    variants: [
      { name: 'Standard', render: <PaperBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Docs' }]} /> },
      { name: 'Deep path', render: <PaperBreadcrumb items={[{ label: 'Docs', href: '/docs' }, { label: 'Components', href: '/docs/components' }, { label: 'Forms', href: '#' }, { label: 'PaperInput' }]} /> },
    ],
    props: [
      { name: 'items', type: 'PaperBreadcrumbItem[]', defaultValue: '[]', description: 'Ordered path segments; last item becomes current page.' },
    ],
    examples: [
      { title: 'Docs trail', description: 'Great for deep component pages and guides.', render: <PaperBreadcrumb items={[{ label: 'Docs', href: '/docs' }, { label: 'Guides', href: '#' }, { label: 'Typography' }]} />, code: `<PaperBreadcrumb items={[...]} />` },
      { title: 'Admin nav', description: 'Use to orient users in nested dashboards.', render: <PaperBreadcrumb items={[{ label: 'Admin', href: '#' }, { label: 'Teams', href: '#' }, { label: 'Paperflow' }]} />, code: `<PaperBreadcrumb items={[...]} />` },
    ],
  },
  'paper-separator': {
    wittyLine: '← dividers are typography too.',
    filePath: 'components/ui/paperSeparator/paperSeparator.tsx',
    barrelPath: 'components/ui/paperSeparator/index.ts',
    masterExport: "export * from './paperSeparator'",
    preview: (
      <div className="w-full max-w-xl space-y-4">
        <PaperSeparator variant="solid" />
        <PaperSeparator variant="double" />
        <PaperSeparator variant="editorial" label="Components" />
      </div>
    ),
    variants: [
      { name: 'Solid', render: <PaperSeparator variant="solid" className="w-56" /> },
      { name: 'Dashed', render: <PaperSeparator variant="dashed" className="w-56" /> },
      { name: 'Editorial', render: <PaperSeparator variant="editorial" className="w-56" /> },
      { name: 'Labeled', render: <PaperSeparator label="Props" className="w-56" /> },
    ],
    props: [
      { name: 'variant', type: "'solid' | 'double' | 'dashed' | 'thick' | 'editorial'", defaultValue: 'solid', description: 'Visual line style.' },
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Centers text between divider lines.' },
    ],
    examples: [
      { title: 'Section split', description: 'Use as rhythm marker between large content blocks.', render: <PaperSeparator variant="thick" className="w-full max-w-md" />, code: `<PaperSeparator variant="thick" />` },
      { title: 'Labeled chapter', description: 'Adds quick scan points for long docs pages.', render: <PaperSeparator variant="double" label="API" className="w-full max-w-md" />, code: `<PaperSeparator label="API" />` },
    ],
  },
  'paper-skeleton': {
    wittyLine: '↗ loading state, but make it editorial.',
    filePath: 'components/ui/paperSkeleton/paperSkeleton.tsx',
    barrelPath: 'components/ui/paperSkeleton/index.ts',
    masterExport: "export * from './paperSkeleton'",
    preview: (
      <div className="w-full max-w-md space-y-3">
        <PaperSkeleton variant="text" className="w-2/3" />
        <PaperSkeleton variant="text" />
        <PaperSkeleton variant="rect" />
      </div>
    ),
    variants: [
      { name: 'Text', render: <PaperSkeleton variant="text" className="w-40" /> },
      { name: 'Rectangle', render: <PaperSkeleton variant="rect" className="w-40" /> },
      { name: 'Avatar', render: <PaperSkeleton variant="avatar" /> },
    ],
    props: [
      { name: 'variant', type: "'text' | 'rect' | 'avatar'", defaultValue: 'rect', description: 'Shape preset.' },
    ],
    examples: [
      { title: 'Card loading', description: 'Stack text and rectangle skeletons for content cards.', render: <div className="space-y-2"><PaperSkeleton variant="text" className="w-36" /><PaperSkeleton variant="rect" className="w-56" /></div>, code: `<PaperSkeleton variant="rect" />` },
      { title: 'Profile loading', description: 'Avatar + text skeleton pattern for user lists.', render: <div className="flex items-center gap-3"><PaperSkeleton variant="avatar" /><div className="space-y-1"><PaperSkeleton variant="text" className="w-24" /><PaperSkeleton variant="text" className="w-16" /></div></div>, code: `<PaperSkeleton variant="avatar" />` },
    ],
  },
  'paper-tooltip': {
    wittyLine: '← small hint, zero drama.',
    filePath: 'components/ui/paperTooltip/paperTooltip.tsx',
    barrelPath: 'components/ui/paperTooltip/index.ts',
    masterExport: "export * from './paperTooltip'",
    preview: (
      <PaperTooltip content="Shortcut: ⌘K">
        <PaperButton size="sm" variant="outline">
          Hover for tip
        </PaperButton>
      </PaperTooltip>
    ),
    variants: [
      { name: 'Default', render: <PaperTooltip content="Synced 2m ago"><PaperBadge variant="solid">Status</PaperBadge></PaperTooltip> },
    ],
    props: [
      { name: 'content', type: 'ReactNode', defaultValue: 'required', description: 'Tooltip message.' },
      { name: 'children', type: 'ReactNode', defaultValue: 'required', description: 'Anchor element.' },
    ],
    examples: [
      { title: 'Icon hint', description: 'Tooltips keep dense controls discoverable.', render: <PaperTooltip content="Archive"><button className="border border-ink-black px-2 py-1 font-mono text-xs">⌘</button></PaperTooltip>, code: `<PaperTooltip content="Archive">...</PaperTooltip>` },
      { title: 'Context note', description: 'Use for low-priority metadata and shortcuts.', render: <PaperTooltip content="This table refreshes every 30s"><PaperBadge variant="yellow">Auto</PaperBadge></PaperTooltip>, code: `<PaperTooltip content="Refreshes every 30s">...</PaperTooltip>` },
    ],
  },
  'paper-accordion': {
    wittyLine: '↗ open what matters, collapse the rest.',
    filePath: 'components/ui/paperAccordion/paperAccordion.tsx',
    barrelPath: 'components/ui/paperAccordion/index.ts',
    masterExport: "export * from './paperAccordion'",
    preview: (
      <PaperAccordion
        className="w-full max-w-xl"
        items={[
          { value: 'a', title: 'How do I install components?', content: 'Copy the file, export it, and ship.' },
          { value: 'b', title: 'Do I need a package?', content: 'No package required for core components.' },
          { value: 'c', title: 'Can I customize variants?', content: 'Yes. CVA is inside every file.' },
        ]}
      />
    ),
    variants: [
      { name: 'Default', render: <PaperAccordion className="w-64" items={[{ value: '1', title: 'Question', content: 'Answer text.' }]} /> },
    ],
    props: [
      { name: 'items', type: 'PaperAccordionItem[]', defaultValue: '[]', description: 'Disclosure entries rendered top to bottom.' },
      { name: 'defaultValue', type: 'string', defaultValue: 'first item', description: 'Initially opened item value.' },
    ],
    examples: [
      { title: 'FAQ block', description: 'Ideal for docs sections with concise Q&A.', render: <PaperAccordion className="w-full max-w-md" items={[{ value: '1', title: 'Is it accessible?', content: 'Keyboard and screen-reader friendly semantics.' }, { value: '2', title: 'Can I theme it?', content: 'Yes, everything uses token classes.' }]} />, code: `<PaperAccordion items={[...]} />` },
      { title: 'Release notes', description: 'Collapse changelog sections by version.', render: <PaperAccordion className="w-full max-w-md" items={[{ value: '1', title: 'v1.2.0', content: 'New table and tabs components.' }, { value: '2', title: 'v1.1.0', content: 'Introduced dialog and accordion.' }]} />, code: `<PaperAccordion items={[...]} />` },
    ],
  },
  'paper-dialog': {
    wittyLine: '← strongest lift, highest intent.',
    filePath: 'components/ui/paperDialog/paperDialog.tsx',
    barrelPath: 'components/ui/paperDialog/index.ts',
    masterExport: "export * from './paperDialog'",
    preview: (
      <PaperDialog
        title="Delete workspace"
        subtitle="This action cannot be undone."
        trigger={<PaperButton variant="danger">Open dialog</PaperButton>}
        footer={<div className="flex justify-end gap-2"><PaperButton size="sm" variant="outline">Cancel</PaperButton><PaperButton size="sm" variant="danger">Delete</PaperButton></div>}
      >
        Remove this workspace and its activity history forever.
      </PaperDialog>
    ),
    variants: [
      { name: 'With trigger', render: <PaperDialog title="Publish update" trigger={<PaperButton size="sm">Open</PaperButton>}>Everything ready to ship?</PaperDialog> },
    ],
    props: [
      { name: 'open', type: 'boolean', defaultValue: 'undefined', description: 'Controlled open state.' },
      { name: 'defaultOpen', type: 'boolean', defaultValue: 'false', description: 'Initial open state for uncontrolled mode.' },
      { name: 'onOpenChange', type: '(open: boolean) => void', defaultValue: 'undefined', description: 'Open/close callback.' },
      { name: 'title', type: 'string', defaultValue: 'required', description: 'Dialog title line.' },
    ],
    examples: [
      { title: 'Destructive confirm', description: 'Use danger button in footer for high-risk actions.', render: <PaperDialog title="Archive project" trigger={<PaperButton variant="danger" size="sm">Archive</PaperButton>}>Archived projects can be restored for 30 days.</PaperDialog>, code: `<PaperDialog title="Archive project" trigger={<PaperButton />}>...</PaperDialog>` },
      { title: 'Quick form modal', description: 'Collect one short action without route transitions.', render: <PaperDialog title="Invite teammate" trigger={<PaperButton size="sm">Invite</PaperButton>}>Send an invite link to a teammate.</PaperDialog>, code: `<PaperDialog title="Invite teammate" ... />` },
    ],
  },
  'paper-tabs': {
    wittyLine: '↗ segmented content, without chrome overload.',
    filePath: 'components/ui/paperTabs/paperTabs.tsx',
    barrelPath: 'components/ui/paperTabs/index.ts',
    masterExport: "export * from './paperTabs'",
    preview: (
      <PaperTabs
        className="w-full max-w-xl"
        items={[
          { value: 'overview', label: 'Overview', content: 'Project status and goals for this sprint.' },
          { value: 'api', label: 'API', content: 'All endpoint contracts and request shapes.' },
          { value: 'qa', label: 'QA', content: 'Checklist before release cut.' },
        ]}
      />
    ),
    variants: [{ name: 'Standard', render: <PaperTabs className="w-72" items={[{ value: 'a', label: 'One', content: 'First panel' }, { value: 'b', label: 'Two', content: 'Second panel' }]} /> }],
    props: [
      { name: 'items', type: 'PaperTabItem[]', defaultValue: '[]', description: 'Tab labels and associated content.' },
      { name: 'defaultValue', type: 'string', defaultValue: 'first tab', description: 'Initially active tab value.' },
    ],
    examples: [
      { title: 'Docs navigation', description: 'Split large API references into digestible sections.', render: <PaperTabs className="w-full max-w-md" items={[{ value: 'props', label: 'Props', content: 'All available props.' }, { value: 'events', label: 'Events', content: 'Emitters and payloads.' }]} />, code: `<PaperTabs items={[...]} />` },
      { title: 'Analytics panes', description: 'Switch between metrics without route refresh.', render: <PaperTabs className="w-full max-w-md" items={[{ value: 'day', label: 'Day', content: 'Daily summary.' }, { value: 'week', label: 'Week', content: 'Weekly trend.' }]} />, code: `<PaperTabs items={[...]} />` },
    ],
  },
  'paper-progress': {
    wittyLine: '← visible progress builds trust.',
    filePath: 'components/ui/paperProgress/paperProgress.tsx',
    barrelPath: 'components/ui/paperProgress/index.ts',
    masterExport: "export * from './paperProgress'",
    preview: <PaperProgress className="w-full max-w-lg" label="Migration" value={64} />,
    variants: [
      { name: 'Default', render: <PaperProgress className="w-64" value={42} label="Build" /> },
      { name: 'Success', render: <PaperProgress className="w-64" variant="success" value={87} label="Test" /> },
      { name: 'Error', render: <PaperProgress className="w-64" variant="error" value={23} label="Retry" /> },
    ],
    props: [
      { name: 'value', type: 'number', defaultValue: 'required', description: 'Progress percentage (0-100).' },
      { name: 'variant', type: "'default' | 'success' | 'error'", defaultValue: 'default', description: 'Fill color scheme.' },
      { name: 'label', type: 'string', defaultValue: 'Progress', description: 'Mono label shown above track.' },
    ],
    examples: [
      { title: 'Upload state', description: 'Pair with polling updates for long uploads.', render: <PaperProgress className="w-full max-w-md" value={31} label="Uploading assets" />, code: `<PaperProgress value={31} label="Uploading assets" />` },
      { title: 'Checklist completion', description: 'Works well for onboarding milestones.', render: <PaperProgress className="w-full max-w-md" value={90} variant="success" label="Checklist" />, code: `<PaperProgress value={90} variant="success" />` },
    ],
  },
  'paper-slider': {
    wittyLine: '↗ direct manipulation, paper-style.',
    filePath: 'components/ui/paperSlider/paperSlider.tsx',
    barrelPath: 'components/ui/paperSlider/index.ts',
    masterExport: "export * from './paperSlider'",
    preview: <PaperSlider className="w-full max-w-md" defaultValue={35} label="Opacity" />,
    variants: [
      { name: 'Default', render: <PaperSlider className="w-64" defaultValue={50} /> },
      { name: 'Labeled', render: <PaperSlider className="w-64" defaultValue={20} label="Volume" /> },
    ],
    props: [
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Optional mono label above control.' },
      { name: 'min / max', type: 'number', defaultValue: '0 / 100', description: 'Allowed value range.' },
      { name: 'value / defaultValue', type: 'number', defaultValue: 'undefined', description: 'Controlled or uncontrolled value.' },
    ],
    examples: [
      { title: 'Density control', description: 'Great for tuning UI spacing in playgrounds.', render: <PaperSlider className="w-full max-w-md" label="Density" defaultValue={45} />, code: `<PaperSlider label="Density" defaultValue={45} />` },
      { title: 'Audio level', description: 'Small footprint control for media panels.', render: <PaperSlider className="w-full max-w-md" label="Gain" defaultValue={72} />, code: `<PaperSlider label="Gain" defaultValue={72} />` },
    ],
  },
  'paper-avatar': {
    wittyLine: '← square avatars keep the system sharp.',
    filePath: 'components/ui/paperAvatar/paperAvatar.tsx',
    barrelPath: 'components/ui/paperAvatar/index.ts',
    masterExport: "export * from './paperAvatar'",
    preview: (
      <div className="flex items-center gap-4">
        <PaperAvatar initials="KA" size="xl" />
        <PaperAvatarGroup>
          <PaperAvatar initials="AN" />
          <PaperAvatar initials="RV" />
          <PaperAvatar initials="TM" />
        </PaperAvatarGroup>
      </div>
    ),
    variants: [
      { name: 'Small', render: <PaperAvatar initials="SM" size="sm" /> },
      { name: 'Medium', render: <PaperAvatar initials="MD" size="md" /> },
      { name: 'Large', render: <PaperAvatar initials="LG" size="lg" /> },
      { name: 'XL', render: <PaperAvatar initials="XL" size="xl" /> },
    ],
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", defaultValue: 'md', description: 'Avatar dimensions and type scale.' },
      { name: 'src', type: 'string', defaultValue: 'undefined', description: 'Image source URL.' },
      { name: 'initials', type: 'string', defaultValue: 'PF', description: 'Fallback label when image is missing.' },
    ],
    examples: [
      { title: 'Team row', description: 'Use stacked avatars for compact participant lists.', render: <PaperAvatarGroup><PaperAvatar initials="KA" /><PaperAvatar initials="AS" /><PaperAvatar initials="NV" /></PaperAvatarGroup>, code: `<PaperAvatarGroup>...</PaperAvatarGroup>` },
      { title: 'Profile header', description: 'XL avatar anchors account settings sections.', render: <PaperAvatar initials="PF" size="xl" />, code: `<PaperAvatar size="xl" initials="PF" />` },
    ],
  },
  'paper-table': {
    wittyLine: '↗ readable data, no zebra cosplay.',
    filePath: 'components/ui/paperTable/paperTable.tsx',
    barrelPath: 'components/ui/paperTable/index.ts',
    masterExport: "export * from './paperTable'",
    preview: <PaperTable columns={[...tableColumns]} rows={[...tableRows]} className="max-w-3xl" />,
    variants: [
      { name: 'Standard', render: <PaperTable columns={[...tableColumns]} rows={[...tableRows]} className="max-w-2xl" /> },
    ],
    props: [
      { name: 'columns', type: 'PaperTableColumn<T>[]', defaultValue: '[]', description: 'Defines header labels and row keys.' },
      { name: 'rows', type: 'T[]', defaultValue: '[]', description: 'Array of record-shaped table rows.' },
    ],
    examples: [
      { title: 'Changelog table', description: 'Perfect for release notes and status snapshots.', render: <PaperTable columns={[...tableColumns]} rows={[...tableRows]} className="max-w-2xl" />, code: `const columns = [{ key: 'name', header: 'Name' }]
<PaperTable columns={columns} rows={rows} />` },
      { title: 'Ops dashboard', description: 'Pairs with badges and progress cells for quick triage.', render: <PaperTable columns={[...tableColumns]} rows={[...tableRows]} className="max-w-2xl" />, code: `<PaperTable columns={columns} rows={rows} />` },
    ],
  },
}
