"use client";
import Link from "next/link";

export default function ThematicWeb() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans pb-32 selection:bg-blue-500/30">
      
      {/* --- NAV --- */}
      <nav className="p-8 sticky top-0 bg-[#050505]/90 backdrop-blur-md z-50 border-b border-zinc-900/50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-blue-500 transition-colors outline-none">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-[90rem] mx-auto px-6 pt-20">
        
        {/* --- HEADER --- */}
        <header className="mb-20 max-w-5xl mx-auto text-center">
          <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6 block underline decoration-blue-500/20 decoration-4 italic">
            Front-End Development & Art Direction
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-8 text-white">
            Thematic <br /> <span className="text-blue-600">Dualism.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-3xl mx-auto">
            A high-contrast web experiment exploring how UI architecture can completely transform emotional states, shifting from our darkest historical hour to a dystopian future.
          </p>
        </header>

        {/* --- LIVE PROJECT EMBED (CENTERED) --- */}
        <section className="mb-32 flex flex-col items-center mt-20 border-t border-zinc-900 pt-20">
          <div className="mb-8 text-center">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-2 italic">01 / Live Preview</h3>
            <h4 className="text-2xl font-bold uppercase text-white mb-4">Interactive Web Experience</h4>
            <a 
              href="https://ahsanv101.github.io/WebDev/index.html" 
              target="_blank" 
              rel="noopener"
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-all border-b border-zinc-800 hover:border-blue-500 pb-1"
            >
              Open Fullscreen ↗
            </a>
          </div>
          
          <div className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-sm border border-zinc-800 shadow-[0_0_50px_rgba(37,99,235,0.05)] bg-zinc-950 group">
            <div className="absolute inset-0 flex items-center justify-center -z-10 bg-[#0a0a0a]">
               <span className="text-zinc-700 font-mono animate-pulse uppercase tracking-widest text-xs">
                 Connecting to GitHub Pages...
               </span>
            </div>
            <iframe 
              src="https://ahsanv101.github.io/WebDev/index.html" 
              className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              title="Thematic Web Project"
              loading="lazy"
            />
          </div>
        </section>

        {/* --- NARRATIVE & INSPIRATION --- */}
        <div className="max-w-6xl mx-auto border-t border-zinc-900 pt-24 mb-32">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white italic mb-16 text-center">Curating the Aesthetic.</h2>
            
            {/* STAGE 1: BLACK PLAGUE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
                <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
                    <h4 className="text-red-700 font-bold uppercase text-[10px] tracking-widest">Epoch 01: The Dark Ages</h4>
                    <h3 className="text-2xl font-bold uppercase tracking-wide text-white">The Black Plague</h3>
                </div>
                <div className="lg:col-span-7 space-y-6">
                    <p className="text-lg text-zinc-400 font-light leading-relaxed">
                        I curated the first state of the website to reflect the raw, visceral despair of the 14th century. My objective was to make the UI feel historically infected and macabre.
                    </p>
                    <p className="text-lg text-zinc-400 font-light leading-relaxed">
                        I personally selected and implemented fractured medieval typography, harsh sepia contrasts, and motifs like tears of blood. Every color hex and CSS rule in this state was explicitly chosen to evoke a sense of inevitable doom and physical decay.
                    </p>
                </div>
            </div>

            {/* STAGE 2: ALIEN INVASION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 lg:order-last">
                    <h4 className="text-cyan-500 font-bold uppercase text-[10px] tracking-widest">Epoch 02: The Distant Future</h4>
                    <h3 className="text-2xl font-bold uppercase tracking-wide text-white">Alien Invasion</h3>
                </div>
                <div className="lg:col-span-7 space-y-6">
                    <p className="text-lg text-zinc-400 font-light leading-relaxed">
                        A violent thematic leap. By toggling the website's state, the DOM is completely overtaken by an otherworldly threat. I drew heavy inspiration from the video game <span className="text-zinc-200 font-medium italic">Cyberpunk 2077</span> and sci-fi brutalism.
                    </p>
                    <p className="text-lg text-zinc-400 font-light leading-relaxed">
                        I transformed the visual language entirely, shifting to high-saturation neons, techno-futurist geometry, and aggressive digital overlays. It proves my core thesis: the emotional resonance of a platform can be entirely rewritten without altering its fundamental HTML skeleton.
                    </p>
                </div>
            </div>
        </div>

        {/* --- TECHNICAL & METADATA FOOTER --- */}
        <div className="border-t border-zinc-900 pt-16">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-12 text-center">Technical Architecture</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-blue-500 transition-colors">Stack</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">HTML / CSS / JS</p>
                </div>
                <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-blue-500 transition-colors">Role</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">Sole Art Director</p>
                </div>
                <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-blue-500 transition-colors">Theme</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">Historical vs Sci-Fi</p>
                </div>
                <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-blue-500 transition-colors">Hosting</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">GitHub Pages</p>
                </div>
            </div>
        </div>

      </article>
    </div>
  );
}