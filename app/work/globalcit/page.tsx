"use client";
import Link from "next/link";

export default function GlobalCIT() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500/30">
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 border-b border-zinc-900/50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-7xl mx-auto px-6 pt-20">
        <header className="mb-24 max-w-5xl">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/30 decoration-2">
            Design & Front-End Development
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            GLOBALCIT <br /> <span className="text-zinc-700">Observatory.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            Designing and developing the data architecture for the world's most important citizenship law database at the EUI.
          </p>
        </header>

        {/* --- LIVE EMBED SECTION --- */}
        <section className="relative group mb-32">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4 mb-8">
             <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">01 / Live Platform</h3>
             <span className="text-[10px] font-mono text-zinc-700">INTERACTIVE_DATABASE</span>
          </div>
          
          {/* This embeds the actual live site so they can test the tables */}
          <div className="w-full h-[80vh] bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden shadow-2xl relative">
            <iframe 
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              src="https://globalcit.eu/country-profiles/"
              title="GlobalCIT Country Profiles"
              allowFullScreen
            ></iframe>
            
            {/* Overlay to encourage interaction */}
            <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur px-4 py-2 border border-zinc-800 pointer-events-none">
              <span className="text-[10px] uppercase tracking-widest text-white">Live Embed</span>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>Development Stack: WordPress / PHP / JS / SQL</span>
            <a
              href="https://globalcit.eu/country-profiles/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-white transition-colors"
            >
              Open in New Tab ↗
            </a>
          </div>
        </section>

        {/* --- DEVELOPMENT LOGIC --- */}
        <section className="max-w-5xl grid md:grid-cols-2 gap-16 border-t border-zinc-900 pt-16">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400">The Challenge</h4>
            <p className="text-lg leading-relaxed text-zinc-300 italic">
              "How do you make thousands of legal statutes readable?" The Global Governance Programme (GGP) needed a way to display complex citizenship laws that was both rigorous enough for academics and accessible enough for the public.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">The Solution</h4>
            <p className="text-lg leading-relaxed text-zinc-400">
              I acted as both <strong>Designer and Lead Developer</strong>. I architected dynamic data tables that allow users to filter laws by mode of acquisition and loss. The "Country Profiles" section integrates these tables with interactive maps, creating a unified data ecosystem.
            </p>
          </div>
        </section>

        {/* --- TECHNICAL BREAKDOWN --- */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-zinc-900 bg-zinc-950/50">
                <span className="text-blue-500 font-black text-4xl mb-4 block">01</span>
                <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Database UX</h5>
                <p className="text-zinc-500 text-sm leading-relaxed">
                    Structuring SQL queries to feed into user-friendly front-end tables with sort/filter capabilities.
                </p>
            </div>
            <div className="p-8 border border-zinc-900 bg-zinc-950/50">
                <span className="text-blue-500 font-black text-4xl mb-4 block">02</span>
                <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Visual Consistency</h5>
                <p className="text-zinc-500 text-sm leading-relaxed">
                    Applying the GGP/EUI design system to complex data sets to maintain institutional authority.
                </p>
            </div>
            <div className="p-8 border border-zinc-900 bg-zinc-950/50">
                <span className="text-blue-500 font-black text-4xl mb-4 block">03</span>
                <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Full Stack</h5>
                <p className="text-zinc-500 text-sm leading-relaxed">
                    Bridging the gap between Figma designs and final production code on the live server.
                </p>
            </div>
        </div>

      </article>
    </div>
  );
}
