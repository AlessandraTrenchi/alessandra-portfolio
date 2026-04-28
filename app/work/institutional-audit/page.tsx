"use client";
import Link from "next/link";

export default function RSCSystem() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans pb-32 selection:bg-emerald-500/30">
      
      {/* --- NAV --- */}
      <nav className="p-8 sticky top-0 bg-[#050505]/90 backdrop-blur-md z-50 border-b border-zinc-900/50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-emerald-500 transition-colors outline-none">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-[90rem] mx-auto px-6 pt-20">
        
        {/* --- HEADER --- */}
        <header className="mb-24 max-w-5xl">
          <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.2em] mb-6 block border-l-2 border-emerald-500 pl-4">
            Institutional Systems Engineering
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-8 text-white">
            RSC / GGP <br /> System.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            An architecture for global governance. I transformed the EUI's technical debt into a centralized system, progressing from a critical UI audit to the engineering of a scalable master library.
          </p>
        </header>

        {/* --- PHASE 01: THE INVESTIGATION (FIGJAM) --- */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="border-b border-zinc-900 pb-4">
               <span className="text-[10px] font-mono text-zinc-600 block mb-2">STEP 01</span>
               <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Visual Audit & Scoping</h3>
            </div>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
                The project began by mapping the chaos. Through this comprehensive FigJam audit, I analyzed every active dashboard to identify visual inconsistencies and critical UX bottlenecks.
            </p>
            <p className="text-lg text-zinc-400 font-light leading-relaxed font-serif italic border-l border-emerald-900 pl-4 text-emerald-500/80">
                "You cannot build scalable order without first mapping the structure of the disorder."
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-zinc-800 shadow-[0_0_50px_rgba(16,185,129,0.05)] bg-zinc-950">
              <iframe 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FArQGSKHIB2NfcDUii9aHcA%2FAudit---notes%3Fnode-id%3D0-1" 
                className="w-full h-full opacity-90"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* --- PHASE 02: THE DNA (STYLES) --- */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6 lg:order-last">
            <div className="border-b border-zinc-900 pb-4">
               <span className="text-[10px] font-mono text-zinc-600 block mb-2">STEP 02</span>
               <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Text Styles & Design DNA</h3>
            </div>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
                I defined the core foundation: a strict typographic hierarchy and an accessible color scale. These "Tokens" act as the DNA of the system, ensuring every academic dashboard speaks the exact same visual language.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950">
              <iframe 
                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/YAiNplR7zf6nVFGAdk0f0h/RSC---Design-System--Copy-?node-id=2088-1516" 
                className="w-full h-full opacity-90"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* --- PHASE 03: THE ENGINE (MASTER SYMBOLS - ALTERNATING LAYOUT) --- */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="border-b border-zinc-900 pb-4">
               <span className="text-[10px] font-mono text-zinc-600 block mb-2">STEP 03</span>
               <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white">Master Symbols & Organisms</h3>
            </div>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
                I engineered complex, responsive master symbols designed to handle dynamic institutional data. By centralizing the technical logic of these components, I enabled true scalability.
            </p>
            <p className="text-lg text-zinc-400 font-light leading-relaxed font-serif italic border-l border-emerald-900 pl-4 text-emerald-500/80">
                A single systemic update propagates instantly across the entire EUI ecosystem.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950 shadow-[0_0_60px_rgba(16,185,129,0.08)]">
              <iframe 
                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/YAiNplR7zf6nVFGAdk0f0h/RSC---Design-System--Copy-?node-id=2054-716" 
                className="w-full h-full opacity-90"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* --- PHASE 04: THE BLUEPRINTS (PAGES) --- */}
        <section className="mb-40 border-t border-zinc-900 pt-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono text-zinc-600 block mb-2">STEP 04</span>
            <h2 className="text-3xl md:text-6xl font-black uppercase text-white italic mb-6">Page Blueprints.</h2>
            <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
                Finally, the assembly. Here the system comes to life through functional page frames, where component consistency ensures a seamless, frictionless user experience for researchers and stakeholders.
            </p>
          </div>

          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-sm border border-zinc-800 shadow-[0_0_80px_rgba(16,185,129,0.1)] bg-zinc-950">
            <iframe 
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/YAiNplR7zf6nVFGAdk0f0h/RSC---Design-System--Copy-?node-id=0-1" 
              className="w-full h-full opacity-90"
              allowFullScreen
            />
          </div>
        </section>

        {/* --- METADATA FOOTER --- */}
        <div className="border-t border-zinc-900 pt-16">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-12 text-center">System Architecture Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="group text-center">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-emerald-500 transition-colors">Framework</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">Atomic Design</p>
                </div>
                <div className="group text-center">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-emerald-500 transition-colors">Tools</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">Figma / FigJam</p>
                </div>
                <div className="group text-center">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-emerald-500 transition-colors">Scalability</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">Master Symbols</p>
                </div>
                <div className="group text-center">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-emerald-500 transition-colors">Client</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">EUI / RSCAS</p>
                </div>
            </div>
        </div>

      </article>
    </div>
  );
}