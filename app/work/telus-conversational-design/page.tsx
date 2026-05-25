"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Pillar = "Stakeholders" | "Quality" | "Process" | "Team";

type Responsibility = {
  title: string;
  pillar: Pillar;
  whatItLooksLike: string[];
  outcome: string;
};

const RESPONSIBILITIES: Responsibility[] = [
  {
    title: "Conversational Design & Intent Quality",
    pillar: "Quality",
    whatItLooksLike: [
      "Designing conversational patterns and response behaviors for clarity, inclusivity, and safety.",
      "Reviewing templates for tone, edge cases, and “real user” phrasing (not lab language).",
      "Defining acceptance criteria so evaluations stay consistent across reviewers.",
    ],
    outcome: "Higher precision, fewer ambiguous intents, and more stable user experience across scenarios.",
  },
  {
    title: "Client Communication & Presentations",
    pillar: "Stakeholders",
    whatItLooksLike: [
      "Presenting progress, risks, and decisions in client-friendly narratives.",
      "Translating complex model/UX constraints into actionable next steps.",
      "Keeping stakeholders aligned on scope, quality bar, and timelines.",
    ],
    outcome: "Faster decisions, fewer misalignments, and clearer ownership across parties.",
  },
  {
    title: "Cross-functional Collaboration (Engineering)",
    pillar: "Stakeholders",
    whatItLooksLike: [
      "Working with engineers to validate feasibility and reduce rework.",
      "Reporting issues with clear reproduction context and proposed resolution paths.",
      "Tracking changes that could introduce regressions in flows or templates.",
    ],
    outcome: "More shippable work: fewer back-and-forth cycles and clearer implementation targets.",
  },
  {
    title: "Team Lead (Bulgaria) + Global Delivery",
    pillar: "Team",
    whatItLooksLike: [
      "Coaching reviewers/designers and aligning on rubric + standards.",
      "Unblocking delivery, setting priorities, and maintaining high review quality.",
      "Operating across distributed teams (e.g., Philippines, Guatemala, India, Ireland).",
    ],
    outcome: "Consistent quality at scale across time zones, with stable throughput and accountability.",
  },
  {
    title: "Process Improvement & Proactive Ops",
    pillar: "Process",
    whatItLooksLike: [
      "Finding workflow bottlenecks and proposing lightweight fixes (templates, checklists, review loops).",
      "Building reusable review patterns to reduce noise and improve signal.",
      "Leading template reviews and calibration sessions to avoid drift over time.",
    ],
    outcome: "Reduced cycle time, fewer repeated errors, and a more predictable quality bar.",
  },
];

export default function TelusConversationalDesign() {
  const [active, setActive] = useState<Pillar>("Stakeholders");

  const visible = useMemo(() => {
    return RESPONSIBILITIES.filter((r) => r.pillar === active);
  }, [active]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500/30">
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 border-b border-zinc-900/50">
        <Link
          href="/"
          className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-7xl mx-auto px-6 pt-20">
        <header className="mb-20 max-w-6xl">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/30 decoration-2">
            Conversational Design / Delivery Leadership
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-10 text-white">
            TELUS <br /> <span className="text-zinc-700">Conversation Systems.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-4xl">
            Team lead work at the intersection of conversational UX, stakeholder alignment, and
            process-driven quality at scale.
          </p>

          <p className="mt-8 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
            Note: NDA-safe. Examples are representative and intentionally anonymized.
          </p>
        </header>

        <section className="border-t border-zinc-900 pt-12">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
              01 / Operating Model
            </h2>
            <span className="text-[10px] font-mono text-zinc-700">TEAM_LEAD_BULGARIA</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 border border-zinc-900 bg-zinc-950/30">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">My Role</p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Conversational designer + delivery lead: I own quality, alignment, and throughput for my
                track, and I represent outcomes to stakeholders.
              </p>
            </div>
            <div className="p-8 border border-zinc-900 bg-zinc-950/30">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">Global Team</p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                I collaborate across distributed realities and time zones (e.g., Philippines, Guatemala,
                India, Ireland) with consistent standards and calibration.
              </p>
            </div>
            <div className="p-8 border border-zinc-900 bg-zinc-950/30">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">Quality Bar</p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Template review, rubric alignment, and evidence-driven decisions—so “good” is measurable and
                repeatable.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 border-t border-zinc-900 pt-16">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
              02 / Responsibilities (Interactive)
            </h2>
            <span className="text-[10px] font-mono text-zinc-700">PILLARS</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {(["Stakeholders", "Quality", "Process", "Team"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setActive(p)}
                className={[
                  "px-5 py-3 text-[10px] uppercase tracking-[0.3em] font-bold border rounded-sm transition-colors",
                  active === p
                    ? "border-blue-500 text-blue-300 bg-blue-500/10"
                    : "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600",
                ].join(" ")}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visible.map((r) => (
              <details
                key={r.title}
                className="group border border-zinc-900 bg-black/20 p-6 rounded-sm open:border-blue-500/60"
              >
                <summary className="cursor-pointer list-none">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2">
                    Pillar: {r.pillar}
                  </p>
                  <h3 className="text-white font-bold uppercase tracking-tight">{r.title}</h3>
                  <p className="mt-3 text-zinc-400">
                    Click to expand: what it looks like + outcome
                  </p>
                </summary>

                <div className="mt-6 pt-6 border-t border-zinc-900">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-3">
                    What It Looks Like
                  </p>
                  <ul className="space-y-2 text-zinc-300">
                    {r.whatItLooksLike.map((item) => (
                      <li key={item} className="text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border border-zinc-900 bg-zinc-950/30 p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-300 mb-2">
                      Outcome
                    </p>
                    <p className="text-zinc-300 leading-relaxed">{r.outcome}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-zinc-900 pt-16">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
              03 / Process Improvements (Examples)
            </h2>
            <span className="text-[10px] font-mono text-zinc-700">OPS</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 border border-zinc-900 bg-zinc-950/30">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Template Review Loop
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Review → calibration → revision → re-test, so tone and intent coverage improve without
                drift.
              </p>
            </div>
            <div className="p-8 border border-zinc-900 bg-zinc-950/30">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">Stakeholder Pack</p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Clear updates with risks/decisions and “what engineering needs next” to reduce latency in
                approvals.
              </p>
            </div>
            <div className="p-8 border border-zinc-900 bg-zinc-950/30">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Quality Rubrics
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Shared definitions for pass/fail, edge cases, and severity to keep multi-site results
                consistent.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

