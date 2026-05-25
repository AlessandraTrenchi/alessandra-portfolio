"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Track = "Accessibility" | "UX Heuristics" | "Information Architecture" | "Content";
type Severity = "High" | "Medium" | "Low";

type Finding = {
  id: string;
  title: string;
  track: Track;
  severity: Severity;
  evidence: string[];
  recommendation: string[];
};

const REPRESENTATIVE_FINDINGS: Finding[] = [
  {
    id: "IA-01",
    title: "Keyboard path breaks in primary navigation",
    track: "Accessibility",
    severity: "High",
    evidence: ["Video repro (keyboard-only)", "Focus order notes", "DOM snapshot (interactive element)"],
    recommendation: [
      "Ensure keyboard parity (Enter/Space) and visible focus on all interactive controls.",
      "Add predictable focus management for menus/dialog patterns.",
    ],
  },
  {
    id: "IA-02",
    title: "Headings and landmarks inconsistent across templates",
    track: "Information Architecture",
    severity: "Medium",
    evidence: ["SR headings list / outline review", "Template comparison matrix"],
    recommendation: [
      "Normalize heading hierarchy (single H1, logical nesting).",
      "Apply landmark regions consistently (nav/main/footer).",
    ],
  },
  {
    id: "IA-03",
    title: "Dense pages lack scannable hierarchy for first-time users",
    track: "UX Heuristics",
    severity: "Medium",
    evidence: ["Heuristic notes", "Scroll-depth observation", "Screenshot annotations"],
    recommendation: [
      "Introduce sectioning, progressive disclosure, and clearer page-level summaries.",
      "Reduce cognitive load by grouping related actions and content blocks.",
    ],
  },
  {
    id: "IA-04",
    title: "Microcopy uses institutional jargon without user-facing definitions",
    track: "Content",
    severity: "Low",
    evidence: ["Content inventory", "Examples list (terms + contexts)"],
    recommendation: [
      "Add short definitions/tooltips for domain terms.",
      "Rewrite high-traffic labels to match user mental models.",
    ],
  },
];

export default function InstitutionalAudit() {
  const [track, setTrack] = useState<Track | "All">("All");
  const [severity, setSeverity] = useState<Severity | "All">("All");

  const visible = useMemo(() => {
    return REPRESENTATIVE_FINDINGS.filter((f) => {
      const trackOk = track === "All" ? true : f.track === track;
      const severityOk = severity === "All" ? true : f.severity === severity;
      return trackOk && severityOk;
    });
  }, [track, severity]);

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
            Institutional Audit / UX + Accessibility
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-10 text-white">
            Institutional <br /> <span className="text-zinc-700">Audit.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-4xl">
            A structured evaluation of complex portals: accessibility, UX heuristics, information
            architecture, and content clarity—translated into actionable fixes for designers and engineers.
          </p>
          <p className="mt-8 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
            NDA-safe version. Private client data, internal documentation, and non-public artifacts are not
            embedded.
          </p>
        </header>

        <section className="border-t border-zinc-900 pt-16 mb-24">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
              01 / Audit Snapshot
            </h2>
            <span className="text-[10px] font-mono text-zinc-700">METHOD</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950 shadow-2xl">
                <Image
                  src="/audit-preview.png"
                  alt="Institutional audit preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover opacity-85"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400 mb-2 italic">
                    Evidence-Based Review
                  </p>
                  <p className="text-white font-bold uppercase tracking-tight">
                    Findings • Severity • Fix Paths
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 border border-zinc-900 bg-zinc-950/30">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600 mb-2">
                  Inputs
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Device/browser checks, keyboard-only paths, AT smoke tests, heuristic evaluation, and
                  content inventory.
                </p>
              </div>
              <div className="p-6 border border-zinc-900 bg-zinc-950/30">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600 mb-2">
                  Outputs
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  A prioritized log of issues, reproduction evidence, and recommendations written for fast
                  implementation.
                </p>
              </div>
              <div className="p-6 border border-zinc-900 bg-zinc-950/30">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600 mb-2">
                  Stakeholder Readout
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Executive summary + risk framing to align teams on what to fix first and why.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-900 pt-16">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
              02 / Findings (Interactive, Representative)
            </h2>
            <span className="text-[10px] font-mono text-zinc-700">TRIAGE</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {(["All", "Accessibility", "UX Heuristics", "Information Architecture", "Content"] as const).map(
              (t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTrack(t)}
                  className={[
                    "px-4 py-2 text-[10px] uppercase tracking-widest font-bold border rounded-sm transition-colors",
                    track === t
                      ? "border-blue-500 text-blue-200 bg-blue-500/10"
                      : "border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600",
                  ].join(" ")}
                >
                  Track: {t}
                </button>
              )
            )}
            {(["All", "High", "Medium", "Low"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSeverity(s)}
                className={[
                  "px-4 py-2 text-[10px] uppercase tracking-widest font-bold border rounded-sm transition-colors",
                  severity === s
                    ? "border-blue-500 text-blue-200 bg-blue-500/10"
                    : "border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600",
                ].join(" ")}
              >
                Severity: {s}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visible.map((f) => (
              <details
                key={f.id}
                className="group border border-zinc-900 bg-black/20 p-6 rounded-sm open:border-blue-500/60"
              >
                <summary className="cursor-pointer list-none">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2">
                    {f.id} • {f.track}
                  </p>
                  <h3 className="text-white font-bold uppercase tracking-tight">{f.title}</h3>
                  <p className="mt-3 text-zinc-400">
                    Severity: <span className="text-white font-bold">{f.severity}</span>
                  </p>
                </summary>

                <div className="mt-6 pt-6 border-t border-zinc-900">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-3">
                    Evidence
                  </p>
                  <ul className="space-y-2 text-zinc-300">
                    {f.evidence.map((e) => (
                      <li key={e} className="text-sm leading-relaxed">
                        {e}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 text-[10px] uppercase tracking-[0.3em] font-bold text-blue-300 mb-3">
                    Recommendation
                  </p>
                  <ul className="space-y-2 text-zinc-300">
                    {f.recommendation.map((r) => (
                      <li key={r} className="text-sm leading-relaxed">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}

            {visible.length === 0 && (
              <div className="border border-zinc-900 bg-black/20 p-6 rounded-sm text-zinc-400">
                No findings match the current filters.
              </div>
            )}
          </div>
        </section>
      </article>
    </div>
  );
}

