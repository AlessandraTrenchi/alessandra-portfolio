"use client";
import Link from "next/link";

export default function PartyFlyer() {
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
            Social & Nightlife Branding
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white leading-none">
            The Party <br /> Edit.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            Visual rhythm and high-chroma design for event promotion, capturing the essence of local nightlife culture.
          </p>
        </header>

        {/* ---------------- OFFICIAL CANVA SMART EMBED ---------------- */}
        <div className="relative w-full overflow-hidden rounded-sm border border-zinc-800 shadow-2xl bg-zinc-950" 
             style={{ paddingTop: '141.4286%', willChange: 'transform' }}>
          <iframe 
            loading="lazy" 
            className="absolute top-0 left-0 w-full h-full border-none"
            src="https://www.canva.com/design/DAGmH27GfXk/qejRLxEARUZzyrelhZA-jA/view?embed" 
            allowFullScreen
            allow="fullscreen"
            title="MPC PRESENTS Party Flyer"
          ></iframe>
        </div>

        <div className="mt-8 flex justify-end">
            <a href="https://www.canva.com/design/DAGmH27GfXk/qejRLxEARUZzyrelhZA-jA/view" target="_blank" rel="noopener" className="text-[10px] font-bold uppercase text-zinc-500 hover:text-blue-500 transition-colors">
              Open Direct Link ↗
            </a>
        </div>

        {/* ---------------- STRATEGIC ANALYSIS ---------------- */}
        <section className="max-w-5xl mt-32 grid md:grid-cols-2 gap-16 border-t border-zinc-900 pt-16 text-left">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Atmospheric Design</h4>
            <p className="text-lg leading-relaxed text-zinc-300 italic">
              "Translating sound to sight." The visual strategy for this flyer relies on saturated color palettes and layered textures to evoke the sensory experience of a live event. The design acts as a bridge between the digital invitation and the physical venue.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Information Flow</h4>
            <p className="text-lg leading-relaxed text-zinc-400">
              In nightlife marketing, legibility is key across varying screen brightness levels. The hierarchy uses size-contrast to ensure the "MPC PRESENTS" identity and event details are absorbed immediately, even in fast-scrolling environments.
            </p>
          </div>
        </section>

        {/* Deliverables Footer */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl border-y border-zinc-900 py-12">
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Client</span>
                <p className="font-bold text-white uppercase italic">MPC Nightlife</p>
            </div>
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Deliverable</span>
                <p className="font-bold text-white uppercase italic">Event Flyer</p>
            </div>
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Style</span>
                <p className="font-bold text-white uppercase italic">High-Chroma</p>
            </div>
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Timeline</span>
                <p className="font-bold text-white uppercase italic">2026</p>
            </div>
        </div>
      </article>
    </div>
  );
}