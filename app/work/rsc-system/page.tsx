"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type PhaseId = "Audit" | "Tokens" | "Components" | "Blueprints";

const PHASES: Array<{
  id: PhaseId;
  title: string;
  subtitle: string;
  bullets: string[];
  outcome: string;
}> = [
  {
    id: "Audit",
    title: "Visual Audit & Scoping",
    subtitle: "Mapping inconsistencies and UX bottlenecks",
    bullets: [
      "Inventory of dashboards and patterns across the ecosystem.",
      "Identification of duplicated components and inconsistent hierarchy.",
      "Prioritization framework to sequence redesign work with minimal disruption.",
    ],
    outcome: "A single source of truth for what existed and what had to be standardized.",
  },
  {
    id: "Tokens",
    title: "Design DNA (Tokens)",
    subtitle: "Typography and accessible color scale",
    bullets: [
      "Typed hierarchy for headings, tables, and dense academic data layouts.",
      "Tokenized color ramps aligned to institutional constraints and legibility.",
      "Reusable spacing rules to prevent layout drift between teams.",
    ],
    outcome: "Stable foundations that keep pages consistent without constant manual policing.",
  },
  {
    id: "Components",
    title: "Master Components",
    subtitle: "Scalable building blocks for complex data",
    bullets: [
      "Responsive patterns designed for long labels and high-density tables.",
      "Reusable components engineered to handle real data variability.",
      "Maintenance strategy: update once, propagate everywhere.",
    ],
    outcome: "Less design debt, fewer regressions, and faster shipping for new pages.",
  },
  {
    id: "Blueprints",
    title: "Page Blueprints",
    subtitle: "Applying the system to real templates",
    bullets: [
      "Template frames that enforce hierarchy, spacing, and interaction patterns.",
      "System-level consistency checks across modules and page types.",
      "Verification notes for handoff and future maintenance.",
    ],
    outcome: "A coherent experience across portals, dashboards, and data-heavy pages.",
  },
];

export default function RscSystem() {
  const [active, setActive] = useState<PhaseId>("Audit");
  const phase = PHASES.find((p) => p.id === active) ?? PHASES[0];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500/30">
      <nav
        className="p-8 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 border-b border-zinc-900/50"
        aria-label="Project Navigation"
      >
        <Link
          href="/"
          className="text-[10px] uppercase tracking-widest font-bold text-zinc-300 hover:text-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
        >
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-7xl mx-auto px-6 pt-20">
        <header className="mb-20 max-w-6xl">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/30 decoration-2">
            Institutional Systems / Design System Engineering
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-10 text-white">
            RSC / GGP <br /> <span className="text-zinc-700">System.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-4xl">
            Consolidating a fragmented institutional UI into a scalable design system: audit → tokens →
            master components → page blueprints.
          </p>
          <p className="mt-8 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
            NDA-safe version. Private FigJam/Figma boards and internal files are not embedded.
          </p>
        </header>

        <section className="border-t border-zinc-900 pt-16 mb-24">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
              01 / System Preview
            </h2>
            <span className="text-[10px] font-mono text-zinc-700">ARCHITECTURE</span>
          </div>

          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950 shadow-2xl">
            <Image
              src="/rsc-system-preview.jpg"
              alt="RSC / GGP system preview"
              fill
              sizes="(max-width: 1024px) 100vw, 90vw"
              className="object-cover opacity-85"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400 mb-2 italic">
                Consolidation
              </p>
              <p className="text-white font-bold uppercase tracking-tight">
                Tokens • Components • Blueprints
              </p>
            </div>
          </div>

          <div className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Preview only — system boards are private.
          </div>
        </section>

        <section className="border-t border-zinc-900 pt-16">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
              02 / Build Phases (Interactive)
            </h2>
            <span className="text-[10px] font-mono text-zinc-700">PIPELINE</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {PHASES.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(p.id)}
                className={[
                  "px-5 py-3 text-[10px] uppercase tracking-[0.3em] font-bold border rounded-sm transition-colors",
                  active === p.id
                    ? "border-blue-500 text-blue-300 bg-blue-500/10"
                    : "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600",
                ].join(" ")}
              >
                {p.id}
              </button>
            ))}
          </div>

          <div className="border border-zinc-900 bg-zinc-950/30 p-8 md:p-10 rounded-sm">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-3">
              {phase.id}
            </p>
            <h3 className="text-3xl md:text-5xl font-black uppercase italic text-white leading-tight">
              {phase.title}
            </h3>
            <p className="mt-4 text-zinc-400 text-lg leading-relaxed">{phase.subtitle}</p>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-3">
                  What I Did
                </p>
                <ul className="space-y-2 text-zinc-300">
                  {phase.bullets.map((b) => (
                    <li key={b} className="text-sm leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-zinc-900 bg-black/20 p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-300 mb-2">
                  Outcome
                </p>
                <p className="text-zinc-300 leading-relaxed">{phase.outcome}</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

