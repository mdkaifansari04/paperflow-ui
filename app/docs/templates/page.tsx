export default function TemplatesPage() {
  return (
    <article className="max-w-3xl space-y-6">
      <header className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-light">
          Docs / Templates
        </p>
        <h1 className="font-display text-5xl text-ink-black underline decoration-ink-black underline-offset-4">
          Templates
        </h1>
      </header>

      <p className="font-body text-base text-ink-medium">
        Templates are in active construction. We are shaping complete page systems with the same paper
        constraints: tight type, honest shadows, and practical layout primitives.
      </p>

      <section className="border border-dashed border-ink-faint bg-paper-cream p-5">
        <h2 className="font-display text-2xl font-bold uppercase text-ink-dark">Coming soon</h2>
        <p className="mt-2 font-handwritten text-sm italic text-ink-medium">
          ↗ We are prototyping landing, pricing, docs home, and changelog templates next.
        </p>
      </section>
    </article>
  )
}
