"use client";
import Link from "next/link";

export default function RSCSystem() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500/30">
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-7xl mx-auto px-6 pt-20">
        <header className="mb-24 max-w-5xl">
          <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/30 decoration-2">
            Institutional Systems Engineering
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white leading-none">
            RSC / GGP <br /> <span className="text-blue-600">System.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            Engineering a robust Design System for the Global Governance Programme (GGP) at the EUI, designed for high-density academic data and long-term scalability.
          </p>
        </header>

        {/* --- THE STRATEGIC "WHY" --- */}
        <section className="max-w-4xl mb-32 border-l-4 border-blue-600 pl-8 py-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 italic">The Redesign Objective</h4>
          <p className="text-2xl text-zinc-200 font-light leading-relaxed italic">
            "Consolidation over Decoration."
          </p>
          <p className="text-zinc-400 mt-6 leading-relaxed">
            The GGP project required a complete architectural overhaul. I recognized that a simple redesign would quickly succumb to <strong>Design Debt</strong>. To solve this, I recreated the entire component library from the ground up. By centralizing UI logic into a master system, I enabled **consolidated changes**: a single update to a token now propagates across all academic dashboards and portals instantly.
          </p>
        </section>

        {/* --- FIGMA EMBEDS --- */}
        <div className="space-y-32">
          
          {/* Styles & Components Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-sm">
               <h5 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6">01 / Styles & Tokens</h5>
               <div className="aspect-video bg-zinc-900 rounded-sm overflow-hidden relative border border-zinc-800">
                  <iframe src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/YAiNplR7zf6nVFGAdk0f0h/RSC---Design-System--Copy-?node-id=2088-1516" className="w-full h-full" allowFullScreen />
               </div>
            </div>
            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-sm">
               <h5 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6">02 / Atomic Components</h5>
               <div className="aspect-video bg-zinc-900 rounded-sm overflow-hidden relative border border-zinc-800">
                  <iframe src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/YAiNplR7zf6nVFGAdk0f0h/RSC---Design-System--Copy-?node-id=1-6666" className="w-full h-full" allowFullScreen />
               </div>
            </div>
          </div>

          {/* Full System View */}
          <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-sm">
             <h5 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6">03 / Master Symbols & Information Architecture</h5>
             <div className="aspect-[21/9] bg-zinc-900 rounded-sm overflow-hidden relative border border-zinc-800">
                <iframe src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/YAiNplR7zf6nVFGAdk0f0h/RSC---Design-System--Copy-?node-id=2054-716" className="w-full h-full" allowFullScreen />
             </div>
          </div>
        </div>

        {/* --- TECHNICAL SPECS --- */}
        <section className="mt-40 grid md:grid-cols-3 gap-12 border-t border-zinc-900 pt-16 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          <div className="space-y-4">
            <p className="text-blue-500 font-black italic">Atomic Consistency</p>
            <p className="leading-relaxed">Systematized 100+ UI components to handle complex multi-column academic data without visual breakage.</p>
          </div>
          <div className="space-y-4 border-l border-zinc-900 pl-8">
            <p className="text-blue-500 font-black italic">Tokenized Values</p>
            <p className="leading-relaxed">Consolidated color and type ramps to align with EUI institutional branding while optimizing for digital accessibility.</p>
          </div>
          <div className="space-y-4 border-l border-zinc-900 pl-8">
            <p className="text-blue-500 font-black italic">Redesign Efficiency</p>
            <p className="leading-relaxed">Engineered master components to allow for "one-click" brand refreshes, reducing maintenance time by 80%.</p>
          </div>
        </section>

      </article>
    </div>
  );
}