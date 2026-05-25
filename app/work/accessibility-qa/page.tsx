"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Severity = "P2 / High" | "P3 / Medium" | "P4 / Low";
type Track = "Keyboard" | "Screen Reader" | "Visual" | "Structure";

type Finding = {
  id: string;
  title: string;
  severity: Severity;
  track: Track;
  standards: string[];
  impact: string;
  evidence: string[];
  suggestedResolution: string[];
};

const REPRESENTATIVE_FINDINGS: Finding[] = [
  {
    id: "F-01",
    title: "Primary menu not operable with Enter/Space",
    severity: "P2 / High",
    track: "Keyboard",
    standards: ["WCAG 2.2 — 2.1.1 Keyboard", "WCAG 2.2 — 2.1.2 No Keyboard Trap"],
    impact:
      "Keyboard-only users cannot open account navigation, blocking access to essential pages and actions.",
    evidence: [
      "Video reproduction (keyboard-only)",
      "Steps-to-reproduce with expected vs actual behavior",
      "DOM/code signal: interaction wired only to pointer/click",
    ],
    suggestedResolution: [
      "Bind Enter/Space to the same action as click (button semantics or key handlers).",
      "Move focus into the opened menu and restore focus predictably on close.",
      "Re-test on the device/AT matrix (NVDA/VoiceOver + keyboard-only).",
    ],
  },
  {
    id: "F-02",
    title: "Informational images announced as file names / skipped",
    severity: "P2 / High",
    track: "Screen Reader",
    standards: ["WCAG 2.2 — 1.1.1 Non-text Content"],
    impact:
      "Screen reader users lose essential context; announcements are non-informative (file paths) or absent.",
    evidence: [
      "AT output transcript (VoiceOver/NVDA)",
      "DOM inspection of accessible name sources (alt/ARIA)",
      "Screenshots of impacted headers",
    ],
    suggestedResolution: [
      "Provide meaningful `alt` for informative images; empty alt only for decorative content.",
      "Avoid accidental file-name announcements by setting intentional name sources.",
    ],
  },
  {
    id: "F-03",
    title: "Focusable element exposed to AT without a meaningful name",
    severity: "P2 / High",
    track: "Structure",
    standards: ["WCAG 2.2 — 4.1.2 Name, Role, Value", "WCAG 2.2 — 2.4.4 Link Purpose"],
    impact:
      "Assistive Tech announces generic labels, increasing confusion and misnavigation risk for SR users.",
    evidence: [
      "AT output transcript (announced label)",
      "Accessibility tree / HTML snapshot",
      "Screenshot of focus ring and tab stop location",
    ],
    suggestedResolution: [
      "Ensure interactive elements have a deterministic accessible name (text/aria-label/aria-labelledby).",
      "Remove hidden focus traps or make them non-focusable when not user-facing.",
    ],
  },
  {
    id: "F-04",
    title: "Focus indicator too weak on dark theme components",
    severity: "P3 / Medium",
    track: "Visual",
    standards: ["WCAG 2.2 — 2.4.7 Focus Visible", "WCAG 2.2 — 1.4.11 Non-text Contrast"],
    impact:
      "Keyboard users can lose track of focus on complex forms, increasing errors and time-to-complete.",
    evidence: ["Screenshots (focused vs unfocused)", "CSS check (outline/box-shadow values)"],
    suggestedResolution: [
      "Increase focus indicator thickness/contrast; don’t remove outlines without a replacement.",
      "Verify across background variants and high-contrast/forced colors where applicable.",
    ],
  },
  {
    id: "F-05",
    title: "Heading structure inconsistent across templates",
    severity: "P4 / Low",
    track: "Structure",
    standards: ["WCAG 2.2 — 1.3.1 Info and Relationships"],
    impact:
      "Screen reader navigation is slower and less predictable; users lose structure and page cues.",
    evidence: ["DOM outline review", "SR rotor / headings list check"],
    suggestedResolution: [
      "Normalize heading levels (single H1; logical nesting).",
      "Use landmarks consistently for page regions.",
    ],
  },
];

export default function AccessibilityQA() {
  const [activeSection, setActiveSection] = useState<"Audit" | "Triage" | "Expert Summary">(
    "Audit"
  );
  const [severityFilter, setSeverityFilter] = useState<Severity | "All">("All");
  const [trackFilter, setTrackFilter] = useState<Track | "All">("All");

  const filteredFindings = useMemo(() => {
    return REPRESENTATIVE_FINDINGS.filter((finding) => {
      const matchesSeverity = severityFilter === "All" ? true : finding.severity === severityFilter;
      const matchesTrack = trackFilter === "All" ? true : finding.track === trackFilter;
      return matchesSeverity && matchesTrack;
    });
  }, [severityFilter, trackFilter]);

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
            Accessibility QA / Software Testing
          </span>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-10 text-white">
            Applause <br /> <span className="text-zinc-700">Accessibility Expert.</span>
          </h1>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic">
                I audit enterprise websites and digital services against{" "}
                <span className="text-white font-bold">WCAG 2.2</span> (A/AA), validate issues on{" "}
                <span className="text-white">real devices</span>, and ship reports that are grounded in
                evidence: <span className="text-white">videos</span>,{" "}
                <span className="text-white">photos/screenshots</span>, AT output, and the{" "}
                <span className="text-white">actual DOM/code path</span>.
              </p>

              <p className="mt-6 text-zinc-400 leading-relaxed">
                My work includes <span className="text-white font-bold">auditing</span>,{" "}
                <span className="text-white font-bold">bug discovery</span>, and{" "}
                <span className="text-white font-bold">triage</span> (validating tickets reported by other
                testers, de-duplicating, and prioritizing what engineering should fix first).
              </p>

              <p className="mt-6 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                Also used in enterprise contexts: web clauses such as EN 301 549 section 9.2.x, when
                applicable.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950 shadow-2xl">
                <Image
                  src="/accessibility.png"
                  alt="Accessibility audit and QA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover opacity-60"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400 mb-2 italic">
                    Evidence Package
                  </p>
                  <p className="text-white font-bold uppercase tracking-tight">
                    Video • Screenshots • AT Output • Code Signals
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[11px] text-zinc-500 leading-relaxed">
                NDA-safe content: representative examples only (no client-identifying details).
              </p>
            </div>
          </div>
        </header>

        <section className="border-t border-zinc-900 pt-10">
          <div className="flex flex-wrap gap-3">
            {(["Audit", "Triage", "Expert Summary"] as const).map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveSection(label)}
                className={[
                  "px-5 py-3 text-[10px] uppercase tracking-[0.3em] font-bold border rounded-sm transition-colors",
                  activeSection === label
                    ? "border-blue-500 text-blue-300 bg-blue-500/10"
                    : "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600",
                ].join(" ")}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {activeSection === "Audit" && (
          <section className="grid md:grid-cols-2 gap-12 md:gap-16 mt-14">
            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">Audit Output</h2>
              <ul className="space-y-3 text-zinc-300 leading-relaxed">
                <li>
                  <span className="text-white font-bold">Evidence-based tickets</span> with steps to
                  reproduce, expected vs actual behavior, and verification notes.
                </li>
                <li>
                  <span className="text-white font-bold">Artifacts</span>: short videos, annotated
                  screenshots/photos, AT output transcripts, and device/OS/browser matrix.
                </li>
                <li>
                  <span className="text-white font-bold">Suggested resolutions</span> that connect UX impact
                  to practical fixes (semantics, ARIA sources, keyboard parity, focus order).
                </li>
                <li>
                  <span className="text-white font-bold">Standards mapping</span> (e.g., 2.1.1 Keyboard, 1.1.1
                  Non-text Content, 4.1.2 Name/Role/Value) + enterprise checklists.
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
                Code + Reality Alignment
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 border border-zinc-900 bg-zinc-950/40">
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600 mb-2">
                    Actual Results
                  </p>
                  <p className="text-zinc-300">
                    I validate behavior as users experience it (devices + AT), then align it with the
                    implementation (DOM, roles, labels, event handling).
                  </p>
                </div>
                <div className="p-6 border border-zinc-900 bg-zinc-950/40">
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600 mb-2">
                    Suggested Fix Paths
                  </p>
                  <p className="text-zinc-300">
                    When possible, I include high-confidence fix directions and what to re-test after the
                    change (to prevent regressions).
                  </p>
                </div>
                <div className="p-6 border border-zinc-900 bg-zinc-950/40">
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600 mb-2">
                    Expertise
                  </p>
                  <p className="text-zinc-300">
                    I write expert summaries for stakeholders, and I triage reports from other testers to
                    keep the issue pipeline clean and actionable.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {(activeSection === "Audit" || activeSection === "Triage") && (
          <section className="mt-24 border-t border-zinc-900 pt-16">
            <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-10">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                01 / Findings & Triage (Representative)
              </h2>
              <span className="text-[10px] font-mono text-zinc-700">WCAG_2_2_AA</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 border border-zinc-900 bg-zinc-950/30">
                <span className="text-blue-500 font-black text-4xl mb-4 block">
                  {REPRESENTATIVE_FINDINGS.length}
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                  Sample Findings
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Anonymized examples to demonstrate audit method + reporting quality.
                </p>
              </div>
              <div className="p-8 border border-zinc-900 bg-zinc-950/30">
                <span className="text-blue-500 font-black text-4xl mb-4 block">
                  {REPRESENTATIVE_FINDINGS.filter((f) => f.severity === "P2 / High").length}
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-2">P2 / High</p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Blocking interactions for keyboard-only and screen reader users.
                </p>
              </div>
              <div className="p-8 border border-zinc-900 bg-zinc-950/30">
                <span className="text-blue-500 font-black text-4xl mb-4 block">A/AA</span>
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                  Compliance Target
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Each ticket maps to criteria and includes “how to verify” after fixes.
                </p>
              </div>
            </div>

            <div className="mt-12 border border-zinc-900 bg-zinc-950/30 p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300 mb-2 italic">
                    Interactive Triage
                  </h3>
                  <p className="text-zinc-400">
                    Filter representative findings by severity and track to mirror how I validate and
                    prioritize incoming reports.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex flex-wrap gap-2">
                    {(["All", "P2 / High", "P3 / Medium", "P4 / Low"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSeverityFilter(opt)}
                        className={[
                          "px-3 py-2 text-[10px] uppercase tracking-widest font-bold border rounded-sm transition-colors",
                          severityFilter === opt
                            ? "border-blue-500 text-blue-200 bg-blue-500/10"
                            : "border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600",
                        ].join(" ")}
                      >
                        {opt === "All" ? "Severity: All" : opt}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(["All", "Keyboard", "Screen Reader", "Visual", "Structure"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setTrackFilter(opt)}
                        className={[
                          "px-3 py-2 text-[10px] uppercase tracking-widest font-bold border rounded-sm transition-colors",
                          trackFilter === opt
                            ? "border-blue-500 text-blue-200 bg-blue-500/10"
                            : "border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600",
                        ].join(" ")}
                      >
                        {opt === "All" ? "Track: All" : opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                {filteredFindings.map((finding) => (
                  <details
                    key={finding.id}
                    className="group border border-zinc-900 bg-black/20 p-6 rounded-sm open:border-blue-500/60"
                  >
                    <summary className="cursor-pointer list-none">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2">
                            {finding.id} • {finding.track}
                          </p>
                          <h4 className="text-white font-bold uppercase tracking-tight">{finding.title}</h4>
                        </div>
                        <span className="shrink-0 px-3 py-2 border border-zinc-800 text-[10px] uppercase tracking-widest font-bold text-blue-200 bg-blue-500/10">
                          {finding.severity}
                        </span>
                      </div>
                      <p className="mt-3 text-zinc-400">{finding.impact}</p>
                      <p className="mt-3 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
                        Click to expand: evidence + suggested resolution
                      </p>
                    </summary>

                    <div className="mt-6 pt-6 border-t border-zinc-900">
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-3">
                            Standards Mapping
                          </p>
                          <ul className="space-y-2 text-zinc-300">
                            {finding.standards.map((standard) => (
                              <li key={standard} className="text-sm leading-relaxed">
                                {standard}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-3">
                            Evidence & Artifacts
                          </p>
                          <ul className="space-y-2 text-zinc-300">
                            {finding.evidence.map((item) => (
                              <li key={item} className="text-sm leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-300 mb-3">
                          Suggested Resolution
                        </p>
                        <ul className="space-y-2 text-zinc-300">
                          {finding.suggestedResolution.map((resolution) => (
                            <li key={resolution} className="text-sm leading-relaxed">
                              {resolution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                ))}

                {filteredFindings.length === 0 && (
                  <div className="border border-zinc-900 bg-black/20 p-6 rounded-sm text-zinc-400">
                    No findings match the current filters.
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {activeSection === "Expert Summary" && (
          <section className="mt-24 border-t border-zinc-900 pt-16">
            <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-10">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                02 / Expert Summary (NDA-safe Template)
              </h2>
              <span className="text-[10px] font-mono text-zinc-700">EXEC_SUMMARY</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 p-10 border border-zinc-900 bg-zinc-950/30">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-4">
                  Executive Readout
                </p>
                <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white leading-tight">
                  Outcome: Not Compliant <span className="text-zinc-600">with Target A/AA</span>
                </h3>
                <p className="mt-6 text-zinc-400 leading-relaxed">
                  Based on the evaluation, the representative landing experience fails multiple WCAG 2.2
                  success criteria. High-severity issues primarily impact keyboard access and Assistive
                  Technology understanding (names/labels and non-text alternatives).
                </p>
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="border border-zinc-900 bg-black/20 p-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-300 mb-2">
                      Highest Risk
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                      Task completion blockers for non-mouse users in account and navigation flows.
                    </p>
                  </div>
                  <div className="border border-zinc-900 bg-black/20 p-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-300 mb-2">
                      Fix Strategy
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                      Keyboard parity + accessible naming cleanup + alt strategy, then re-test on the
                      device/AT matrix.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="p-8 border border-zinc-900 bg-zinc-950/30">
                  <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">Device Matrix</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Windows + NVDA/JAWS, macOS + VoiceOver, keyboard-only workflows, responsive breakpoints.
                  </p>
                  <p className="mt-4 text-zinc-500 text-sm leading-relaxed">
                    iOS + VoiceOver, Android + TalkBack, touch targets, orientation, dynamic text scaling.
                  </p>
                </div>
                <div className="p-8 border border-zinc-900 bg-zinc-950/30">
                  <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                    Triage & Quality Bar
                  </p>
                  <ul className="space-y-2 text-zinc-500 text-sm leading-relaxed">
                    <li>Reject false positives (non-repro / not a defect / by-design).</li>
                    <li>De-duplicate and consolidate reports into a single actionable ticket.</li>
                    <li>Calibrate priority based on user impact, scope, and frequency.</li>
                    <li>Confirm fixes with the same evidence standard used to report the bug.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </article>
    </div>
  );
}

