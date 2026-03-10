import { colors, fonts, motion, shadows } from '@/lib/tokens'

export default function TokensPage() {
  return (
    <article className="max-w-4xl space-y-8">
      <header className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-light">Docs / Tokens</p>
        <h1 className="font-display text-5xl text-ink-black underline decoration-ink-black underline-offset-4">
          Design Tokens
        </h1>
        <p className="font-body text-base text-ink-medium">
          One token source. No surprises between docs and production code.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-bold uppercase text-ink-dark">Colors</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {Object.entries(colors).map(([group, values]) => (
            <div key={group} className="border border-ink-faint bg-paper-light p-4">
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink-light">{group}</h3>
              <ul className="mt-2 space-y-2">
                {Object.entries(values).map(([name, hex]) => (
                  <li key={name} className="flex items-center justify-between text-sm">
                    <span className="font-body text-ink-medium">{name}</span>
                    <span className="font-mono text-xs text-ink-dark">{hex}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-bold uppercase text-ink-dark">Shadows & Motion</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="border border-ink-faint bg-paper-light p-4">
            <h3 className="font-mono text-xs uppercase tracking-wide text-ink-light">Shadows</h3>
            <pre className="mt-2 whitespace-pre-wrap font-mono text-xs text-ink-dark">
              {JSON.stringify(shadows, null, 2)}
            </pre>
          </div>
          <div className="border border-ink-faint bg-paper-light p-4">
            <h3 className="font-mono text-xs uppercase tracking-wide text-ink-light">Motion + Fonts</h3>
            <pre className="mt-2 whitespace-pre-wrap font-mono text-xs text-ink-dark">
              {JSON.stringify({ motion, fonts }, null, 2)}
            </pre>
          </div>
        </div>
      </section>
    </article>
  )
}
