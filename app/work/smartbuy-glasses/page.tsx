"use client";
import Link from "next/link";

export default function SmartbuyGlasses() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans pb-32 selection:bg-blue-500/30">
      
      {/* NAV */}
      <nav className="p-8 sticky top-0 bg-[#050505]/90 backdrop-blur-md z-50 border-b border-zinc-900/50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-blue-500 transition-colors outline-none">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-[90rem] mx-auto px-6 pt-20">
        
        {/* --- HEADER --- */}
        <header className="mb-24 max-w-5xl">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-6 block border-l-2 border-blue-500 pl-4">
            Retail Communication Strategy
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-8 text-white">
            Smartbuy <br /> Glasses.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            Driving retail conversion through visual hierarchy. A high-impact commercial design strategy optimizing product visibility and brand authority in the global eyewear market.
          </p>
        </header>

        {/* --- DIGITAL BILLBOARD (CANVA EMBED) --- */}
        <section className="mb-24">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-8 max-w-6xl">
             <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white">The Commercial Asset</h3>
             <a href="https://www.canva.com/design/DAGjqSYez3Y/view" target="_blank" rel="noopener" className="text-[10px] font-mono text-zinc-500 hover:text-blue-500 transition-colors flex items-center gap-2">
               Explore Full Resolution <span className="text-lg leading-none">↗</span>
             </a>
          </div>
          
          <div className="relative w-full max-w-6xl overflow-hidden rounded-sm border border-zinc-800 shadow-[0_0_50px_rgba(59,130,246,0.05)] bg-zinc-950 group" 
               style={{ paddingTop: '40.00%' }}>
            <iframe 
              loading="lazy" 
              className="absolute top-0 left-0 w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              src="https://www.canva.com/design/DAGjqSYez3Y/kJ1Z2lHb50b8n_G-TuVu1Q/view?embed" 
              allowFullScreen
              title="Smartbuy Glasses Commercial Flyer"
            />
          </div>
        </section>

        {/* --- STRATEGIC PILLARS --- */}
        <section className="max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-zinc-900 pt-16">
          
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold uppercase tracking-wide text-white italic">Core Logic.</h3>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">Deconstructing the layout</p>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-500">Frictionless Conversion</h4>
              <p className="text-lg leading-relaxed text-zinc-400">
                <span className="text-zinc-200 font-medium italic">"Visual clarity reduces cognitive load."</span> By engineering a strict typographic hierarchy, the layout directs the consumer's eye straight to the value proposition—cutting through the noise of high-volume retail environments.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Clinical Staging</h4>
              <p className="text-lg leading-relaxed text-zinc-400">
                The project focused on the strategic use of negative space to elevate the product's premium build quality. This minimalist staging aligns local promotional assets perfectly with Smartbuy's global brand authority.
              </p>
            </div>
          </div>

        </section>

        {/* --- DELIVERABLES FOOTER --- */}
        <div className="border-t border-zinc-900 pt-16 mt-32">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-12 text-center">Project Metadata</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-blue-500 transition-colors">Client Segment</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">Retail / E-com</p>
                </div>
                <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-blue-500 transition-colors">Format</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">Commercial Flyer</p>
                </div>
                <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-blue-500 transition-colors">Primary Focus</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">Brand Consistency</p>
                </div>
                <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-blue-500 transition-colors">Timeline</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">2025 — 2026</p>
                </div>
            </div>
        </div>

      </article>
    </div>
  );
}