"use client";
import Link from "next/link";

export default function BocceSport() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500/30">
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors outline-none">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-7xl mx-auto px-6 pt-20">
        <header className="mb-24 max-w-5xl">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/30 decoration-2">
            Case Study: Comprehensive Branding
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white leading-none">
            Bocce <br /> Identity.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            Deconstructing tradition to build a high-octane visual system for a modern sports community.
          </p>
        </header>

        {/* ---------------- PART 1: THE GENERAL SYSTEM ---------------- */}
        <section className="space-y-8 mb-40">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4">
             <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">01 / The Visual Framework</h3>
             <span className="text-[10px] font-mono text-zinc-700">SYSTEM_OVERVIEW_V1.0</span>
          </div>
          <div className="relative w-full overflow-hidden rounded-sm border border-zinc-800 shadow-2xl bg-zinc-950" 
               style={{ paddingTop: '141.4286%', willChange: 'transform' }}>
            <iframe 
              loading="lazy" 
              className="absolute top-0 left-0 w-full h-full border-none grayscale hover:grayscale-0 transition-all duration-1000"
              src="https://www.canva.com/design/DAGaNy92tg8/pggRHDbxRDUhnGw20xcGUg/view?embed" 
              allowFullScreen
              allow="fullscreen"
              title="Bocce Branding System"
            ></iframe>
          </div>
          <div className="max-w-3xl py-12">
            <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-4 italic">Strategic Positioning</h4>
            <p className="text-xl text-zinc-300 font-light leading-relaxed">
              The "Glow" framework was developed to shift the perception of Bocce from a static pastime to an energetic, electronic-influenced spectacle. By leveraging luminescence and deep-space contrasts, we established a "competitive aura" that resonates with younger demographics.
            </p>
          </div>
        </section>

        {/* ---------------- PART 2: EVENT EXECUTION ---------------- */}
        <section className="space-y-8">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4">
             <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">02 / Marketing Implementation</h3>
             <span className="text-[10px] font-mono text-zinc-700">FLYER_DESIGN_FINAL</span>
          </div>
          <div className="relative w-full overflow-hidden rounded-sm border border-zinc-800 shadow-2xl bg-zinc-950" 
               style={{ paddingTop: '141.4286%', willChange: 'transform' }}>
            <iframe 
              loading="lazy" 
              className="absolute top-0 left-0 w-full h-full border-none"
              src="https://www.canva.com/design/DAGZEkdXMbs/4lde1DfE8LCNT0LHs5xMTQ/view?embed" 
              allowFullScreen
              allow="fullscreen"
              title="Bocce Tournament Flyer"
            ></iframe>
          </div>
          <div className="max-w-3xl py-12">
            <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-4 italic">Visual Impact</h4>
            <p className="text-xl text-zinc-300 font-light leading-relaxed">
              Applying the system to real-world assets: bold grotesque typography and asymmetrical grids create urgency. The layout ensures that critical tournament data is immediately digestible on high-density social feeds while maintaining brand authority.
            </p>
          </div>
        </section>

        {/* Deliverables Footer */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl border-y border-zinc-900 py-12">
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Discipline</span>
                <p className="font-bold text-white uppercase italic">Brand Identity</p>
            </div>
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Assets</span>
                <p className="font-bold text-white uppercase italic">System + Flyers</p>
            </div>
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Logic</span>
                <p className="font-bold text-white uppercase italic">Modernization</p>
            </div>
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Year</span>
                <p className="font-bold text-white uppercase italic">2026</p>
            </div>
        </div>
      </article>
    </div>
  );
}