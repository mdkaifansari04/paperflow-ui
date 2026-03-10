export default function GetStartedPage() {
  return (
    <article className="max-w-3xl space-y-8 text-ink-dark">
      <header className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-light">Docs / Start here</p>
        <h1 className="font-display text-5xl leading-tight text-ink-black underline decoration-ink-black underline-offset-4">
          Get Started
        </h1>
        <p className="font-handwritten text-sm italic text-ink-medium">
          ↗ No CLI needed. Just copy, paste, and own the code.
        </p>
      </header>

      <div className="border-t border-ink-black pt-6">
        <h2 className="font-display text-3xl text-ink-black underline decoration-ink-black underline-offset-4">
          Installation
        </h2>
        <p className="mt-3 font-body text-base text-ink-medium">
          Paperflow UI is copy-paste first. You do not install a package to use components. You copy a
          component file, paste it into your app, and customize it as if your teammate wrote it.
        </p>
        <pre className="mt-4 overflow-x-auto border border-ink-black bg-paper-aged p-4 font-mono text-xs shadow-lift-1">
          <code>{`# 1) Copy component files
components/ui/paperButton/*

# 2) Add docs metadata
a registry entry in /registry/index.ts

# 3) Import and ship
import { PaperButton } from '@/components/ui'`}</code>
        </pre>
      </div>

      <section className="space-y-3">
        <h2 className="font-display text-3xl text-ink-black underline decoration-ink-black underline-offset-4">
          Setup
        </h2>
        <p className="font-body text-base text-ink-medium">
          Wire your foundation in three places: tokens and utility classes in <code>globals.css</code>,
          theme keys in <code>tailwind.config.ts</code>, and all eight font variables in
          <code> app/layout.tsx</code>.
        </p>
      </section>

      <section className="border border-dashed border-ink-faint bg-paper-cream p-5">
        <h3 className="font-display text-2xl text-ink-black underline decoration-ink-black underline-offset-4">
          Philosophy
        </h3>
        <p className="mt-2 font-body text-sm text-ink-medium">
          Build pieces that read clearly in code and on screen. If a style needs a paragraph to justify
          it, remove it. Paper UI favors intention over decoration every time.
        </p>
      </section>
    </article>
  )
}
