import { notFound } from 'next/navigation'
import { PaperButton } from '@/components/ui'
import { getComponent, registry } from '@/registry'

interface ComponentDetailPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return registry.map((component) => ({ slug: component.slug }))
}

export default async function ComponentDetailPage({ params }: ComponentDetailPageProps) {
  const { slug } = await params
  const component = getComponent(slug)

  if (!component) {
    notFound()
  }

  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-light">
          Docs / Components / {component.name}
        </p>
        <h1 className="font-display text-5xl text-ink-black underline decoration-ink-black underline-offset-4">
          {component.name}
        </h1>
        <p className="font-body text-base text-ink-medium">{component.description}</p>
      </header>

      <section className="space-y-3 border border-ink-faint bg-paper-light p-5 shadow-lift-1">
        <h2 className="font-display text-2xl font-bold uppercase text-ink-dark">Preview</h2>
        {component.slug === 'paper-button' ? (
          <div className="flex flex-wrap gap-3">
            <PaperButton>Primary</PaperButton>
            <PaperButton variant="secondary">Secondary</PaperButton>
            <PaperButton variant="outline">Outline</PaperButton>
            <PaperButton variant="ghost">Ghost</PaperButton>
            <PaperButton variant="danger">Danger</PaperButton>
          </div>
        ) : (
          <p className="font-body text-sm text-ink-medium">
            Preview for this component lands here once implementation is added.
          </p>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl font-bold uppercase text-ink-dark">Copy Snippet</h2>
        <pre className="overflow-x-auto border border-ink-black bg-paper-aged p-4 font-mono text-xs shadow-lift-1">
          <code>{`import { ${component.name} } from '@/components/ui'`}</code>
        </pre>
      </section>
    </article>
  )
}
