"use client";
import Image from "next/image";
import Link from "next/link";

export default function EUITableCards() {
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
        <header className="mb-24 max-w-5xl">
          <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/30 decoration-2">
            Institutional Design & Wayfinding
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white leading-none">
            EUI Table <br /> Cards.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            Developing visual identification systems for the European University Institute (EUI), balancing institutional rigor with communicative clarity.
          </p>
          <p className="mt-8 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
            NDA-safe version. Private design files and internal links are not embedded.
          </p>
        </header>

        {/* ---------------- NDA-SAFE PREVIEW ---------------- */}
        <section className="relative group mb-32 border-t border-zinc-900 pt-16">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
              01 / Visual System Preview
            </h3>
            <span className="text-[10px] font-mono text-zinc-700">WAYFINDING</span>
          </div>

          <div className="w-full aspect-video bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden shadow-2xl relative">
            <Image
              src="/eui-table-cards.png"
              alt="EUI table cards — institutional wayfinding preview"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400 mb-2 italic">
                Editorial + Identity
              </p>
              <p className="text-white font-bold uppercase tracking-tight">
                Hierarchy • Readability • Institutional Tone
              </p>
            </div>
          </div>

          <div className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>Deliverable preview only — private Figma file not shared publicly.</span>
          </div>
        </section>

        {/* ---------------- STRATEGIC ANALYSIS ---------------- */}
        <section className="max-w-5xl grid md:grid-cols-2 gap-16 border-t border-zinc-900 pt-16">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Institutional Logic</h4>
            <p className="text-lg leading-relaxed text-zinc-300 italic">
              "Form follows hierarchy." The project for the EUI required meticulous attention to typography and white space, ensuring that academic names and titles were instantly legible during official conferences and high-level events.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Standardization</h4>
            <p className="text-lg leading-relaxed text-zinc-400">
              A modular system was created to adapt to varying text lengths and title complexities, maintaining a consistent aesthetic that reflects the prestige and authority of the European University Institute.
            </p>
          </div>
        </section>

        <section className="mt-24 border-t border-zinc-900 pt-16">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
              02 / What I Owned
            </h2>
            <span className="text-[10px] font-mono text-zinc-700">DELIVERY</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <details className="group border border-zinc-900 bg-black/20 p-6 rounded-sm open:border-blue-500/60">
              <summary className="cursor-pointer list-none">
                <h3 className="text-white font-bold uppercase tracking-tight">System Rules</h3>
                <p className="mt-2 text-zinc-400">Grid, hierarchy, and scale constraints.</p>
              </summary>
              <div className="mt-6 pt-6 border-t border-zinc-900 text-zinc-300 space-y-2">
                <p className="text-sm leading-relaxed">A modular layout that adapts to long names, titles, and academic roles.</p>
                <p className="text-sm leading-relaxed">Typography and spacing tuned for distance readability in event contexts.</p>
              </div>
            </details>

            <details className="group border border-zinc-900 bg-black/20 p-6 rounded-sm open:border-blue-500/60">
              <summary className="cursor-pointer list-none">
                <h3 className="text-white font-bold uppercase tracking-tight">Production Assets</h3>
                <p className="mt-2 text-zinc-400">Print-ready outputs + variants.</p>
              </summary>
              <div className="mt-6 pt-6 border-t border-zinc-900 text-zinc-300 space-y-2">
                <p className="text-sm leading-relaxed">Template variants for different event formats and role types.</p>
                <p className="text-sm leading-relaxed">Consistency checks and final delivery packaging.</p>
              </div>
            </details>
          </div>
        </section>

        {/* Deliverables Summary */}
        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl border-y border-zinc-900 py-12">
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Client</span>
                <p className="font-bold text-white uppercase italic">EUI (European University Institute)</p>
            </div>
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Service</span>
                <p className="font-bold text-white uppercase italic">Editorial Design</p>
            </div>
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Output</span>
                <p className="font-bold text-white uppercase italic">Table Cards / Wayfinding</p>
            </div>
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Style</span>
                <p className="font-bold text-white uppercase italic">Institutional Minimal</p>
            </div>
        </div>
      </article>
    </div>
  );
}
