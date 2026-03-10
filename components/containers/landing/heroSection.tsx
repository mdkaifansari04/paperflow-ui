"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { PaperButton } from "@/components/ui";

const STATS = [
  { value: "40+", label: "Components" },
  { value: "8", label: "Fonts, all intentional" },
  { value: "0", label: "Lorem ipsum" },
];

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="paper-section relative border-b border-ink-black bg-paper-base">
      <span className="pointer-events-none absolute right-6 top-8 select-none font-display text-[16rem] leading-none text-ink-faint opacity-5 rotate-6">
        §
      </span>

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-light">
          Editorial components for Next.js
        </p>

        <h1 className="mt-4 font-display text-5xl leading-[0.95] text-ink-black md:text-6xl">
          Paperflow UI
        </h1>

        <h2 className="mt-3 font-display text-3xl text-ink-dark underline decoration-ink-black underline-offset-4">
          Components that feel made, not generated.
        </h2>

        <p className="mt-3 font-handwritten text-sm italic text-ink-medium">
          ↗ Copy. Paste. Ship.
        </p>

        <p className="mt-6 max-w-2xl font-body text-base text-ink-medium">
          Build interfaces with warm paper surfaces, honest shadows, and type
          that actually says something. No gradients. No fluff. Just components
          that ship cleanly.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <PaperButton
            rightIcon={<ArrowRight className="h-4 w-4" />}
            onClick={() => router.push("/docs/get-started")}
          >
            Get started
          </PaperButton>
          <PaperButton
            variant="secondary"
            onClick={() => router.push("/docs/components")}
          >
            Browse components
          </PaperButton>
        </div>

        {/* <div className="mt-14 grid gap-6 border-t border-ink-faint pt-6 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-ink-black">
                {stat.value}
              </p>
              <p className="font-body text-xs uppercase tracking-wide text-ink-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
