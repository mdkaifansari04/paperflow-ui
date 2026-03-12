import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { notFound } from 'next/navigation'
import { ComponentPreview, PropsTable } from '@/components/ui'
import { componentDocDefinitions } from '@/lib/component-docs'
import { getComponent, registry } from '@/registry'

interface ComponentDetailPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return registry.map((component) => ({ slug: component.slug }))
}

async function getComponentCode(filePath: string) {
  const absolutePath = path.join(process.cwd(), filePath)
  try {
    return await readFile(absolutePath, 'utf8')
  } catch {
    return `// Unable to load source from ${filePath}`
  }
}

function titleize(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export default async function ComponentDetailPage({ params }: ComponentDetailPageProps) {
  const { slug } = await params
  const component = getComponent(slug)
  const definition = componentDocDefinitions[slug]

  if (!component || !definition) {
    notFound()
  }

  const code = await getComponentCode(definition.filePath)

  return (
    <article className="space-y-12">
      <header className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-light">
          Components / {component.name}
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-ink-light">
          {titleize(component.category)}
        </p>
        <h1 className="font-display text-5xl text-ink-black">{component.name}</h1>
        <p className="max-w-2xl font-body text-base text-ink-medium">{component.description}</p>
        <p className="inline-block -rotate-1 font-handwritten text-base italic text-ink-medium">
          {definition.wittyLine}
        </p>
      </header>

      <div className="border-t-2 border-ink-black" />

      <section className="space-y-4">
        <h2 className="font-display text-2xl text-ink-black underline decoration-ink-black underline-offset-4">
          Preview
        </h2>
        <ComponentPreview code={code}>{definition.preview}</ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl text-ink-black underline decoration-ink-black underline-offset-4">
          Installation
        </h2>
        <p className="font-body text-sm text-ink-medium">
          Copy this file into your project, export its barrel, and then add it to the master UI index.
        </p>
        <ol className="space-y-3 font-body text-sm text-ink-medium">
          <li>
            <span className="mr-2 font-mono text-xs uppercase tracking-wide text-ink-light">Step 1.</span>
            Create this file:
            <div className="mt-2 inline-flex items-center gap-2 border border-ink-black bg-paper-aged px-3 py-1.5 font-mono text-xs shadow-soft">
              {definition.filePath}
              <span className="text-ink-faint">⎘</span>
            </div>
          </li>
          <li>
            <span className="mr-2 font-mono text-xs uppercase tracking-wide text-ink-light">Step 2.</span>
            Create the barrel:
            <div className="mt-2 inline-flex items-center gap-2 border border-ink-black bg-paper-aged px-3 py-1.5 font-mono text-xs shadow-soft">
              {definition.barrelPath}
              <span className="text-ink-faint">⎘</span>
            </div>
          </li>
          <li>
            <span className="mr-2 font-mono text-xs uppercase tracking-wide text-ink-light">Step 3.</span>
            Add this export in <code className="font-mono">components/ui/index.ts</code>:
            <pre className="mt-2 w-fit border border-ink-black bg-paper-aged px-3 py-1.5 font-mono text-xs shadow-soft">
              <code>{definition.masterExport}</code>
            </pre>
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl text-ink-black underline decoration-ink-black underline-offset-4">
          Variants
        </h2>
        <div className="grid border border-dashed border-ink-faint md:grid-cols-2">
          {definition.variants.map((variant) => (
            <div key={variant.name} className="border-b border-dashed border-ink-faint p-4 last:border-b-0 md:[&:nth-child(odd)]:border-r">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-light">{variant.name}</p>
              <div className="flex min-h-16 items-center">{variant.render}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl text-ink-black underline decoration-ink-black underline-offset-4">
          Props
        </h2>
        <PropsTable rows={definition.props} />
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-2xl text-ink-black underline decoration-ink-black underline-offset-4">
          Examples
        </h2>
        {definition.examples.map((example) => (
          <div key={example.title} className="space-y-3">
            <h3 className="font-display text-xl italic text-ink-black">{example.title}</h3>
            <p className="max-w-2xl font-body text-sm text-ink-medium">{example.description}</p>
            <ComponentPreview code={example.code} previewClassName="min-h-[160px] p-8">
              {example.render}
            </ComponentPreview>
          </div>
        ))}
      </section>
    </article>
  )
}
