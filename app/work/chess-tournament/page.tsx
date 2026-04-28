"use client";
import Link from "next/link";

export default function ChessTournament() {
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
        <header className="mb-32 max-w-5xl">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-6 block border-l-2 border-blue-500 pl-4">
            Adaptive Visual Strategy
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-8 text-white">
            Chess <br /> Perspectives.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            The art of contextual adaptation. A comparative study in event branding, designing two polar opposite identities for the same strategic mind game.
          </p>
        </header>

        {/* --- VERSION 01: THE INDUSTRIAL BLITZ --- */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Colonna Testo (Sticky su Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div className="border-b border-zinc-900 pb-4">
               <span className="text-[10px] font-mono text-zinc-600 block mb-2">EDITION: BLITZ_SOCIAL</span>
               <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white">01 / The Industrial Blitz</h3>
            </div>
            <div>
              <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-4">Raw & Unforgiving</h4>
              <p className="text-lg text-zinc-400 font-light leading-relaxed mb-6">
                Tailored for the underground venue <span className="text-zinc-200 font-medium italic">Monkey Factory</span>, this identity strips away the quiet, academic prestige traditionally associated with chess. 
              </p>
              <p className="text-lg text-zinc-400 font-light leading-relaxed">
                We positioned it as a raw, high-stakes urban clash. Leveraging heavy contrast, brutalist typography, and industrial aesthetics, the visual language perfectly encapsulates the aggressive, adrenaline-fueled tension of a 5+3' Blitz tournament.
              </p>
            </div>
          </div>

          {/* Colonna Immagine (Canva Embed) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-sm border border-zinc-800 shadow-[0_0_40px_rgba(59,130,246,0.05)] bg-zinc-950 group" 
                 style={{ paddingTop: '100%' }}>
              {/* Effetto Hover: Da bianco/nero a colori */}
              <iframe 
                loading="lazy" 
                className="absolute top-0 left-0 w-full h-full border-none grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                src="https://www.canva.com/design/DAGKKIHUr8Q/RW-kxPgeXv1y6xCMeXfc5w/view?embed" 
                allowFullScreen
                title="Urban Chic Chess Flyer"
              />
            </div>
          </div>
        </section>

        {/* --- VERSION 02: THE ORGANIC GAMBIT --- */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Colonna Testo (Sticky su Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 lg:order-last">
            <div className="border-b border-zinc-900 pb-4">
               <span className="text-[10px] font-mono text-zinc-600 block mb-2">EDITION: ORGANIC_COMMUNITY</span>
               <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white">02 / The Organic Gambit</h3>
            </div>
            <div>
              <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-4">Empathic & Accessible</h4>
              <p className="text-lg text-zinc-400 font-light leading-relaxed mb-6">
                A stark pivot from the industrial noise. This identity explores the "Human Nature" of the game, shifting the focus from the battle on the board to the people sitting across from each other.
              </p>
              <p className="text-lg text-zinc-400 font-light leading-relaxed">
                The visual architecture breathes. Using softer spatial balances, organic layouts, and empathic messaging, it rebrands chess not as a war, but as a silent, shared psychological dialogue. Designed to foster community over conflict.
              </p>
            </div>
          </div>

          {/* Colonna Immagine (Canva Embed) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[450px] overflow-hidden rounded-sm border border-zinc-800 shadow-[0_0_40px_rgba(59,130,246,0.05)] bg-zinc-950" 
                 style={{ paddingTop: '141.46%' }}>
              <iframe 
                loading="lazy" 
                className="absolute top-0 left-0 w-full h-full border-none opacity-90 hover:opacity-100 transition-opacity duration-500"
                src="https://www.canva.com/design/DAGYJ6vCAP8/THA5cw4V2B9WQ2peGwkSAw/view?embed" 
                allowFullScreen
                title="Human Nature Chess Flyer"
              />
            </div>
          </div>
        </section>

        {/* --- DELIVERABLES FOOTER --- */}
        <div className="border-t border-zinc-900 pt-16">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-12 text-center">Project Metadata</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-blue-500 transition-colors">Discipline</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">Brand Strategy</p>
                </div>
                <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-blue-500 transition-colors">Assets</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">Event Flyers</p>
                </div>
                <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-blue-500 transition-colors">Core Logic</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">Contextual Shift</p>
                </div>
                <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 group-hover:text-blue-500 transition-colors">Timeline</span>
                    <p className="font-bold text-white uppercase text-sm tracking-wide">2024 — 2026</p>
                </div>
            </div>
        </div>

      </article>
    </div>
  );
}