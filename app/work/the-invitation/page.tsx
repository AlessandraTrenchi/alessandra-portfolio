"use client";
import Link from "next/link";
import Image from "next/image";

export default function TheInvitation() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500/30">
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors outline-none focus-visible:ring-2 ring-blue-500">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-7xl mx-auto px-6 pt-20">
        <header className="mb-24 max-w-5xl mx-auto">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/30 decoration-2">
            Case Study: Interaction Design
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            The <br /> Invitation.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            "An escape in time: Gamifying the museum experience through Baroque Bologna."
          </p>
        </header>

        {/* ---------------- CONTEXT & INSIGHTS ---------------- */}
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto mb-32">
          
          {/* Text Content Column */}
          <section className="space-y-12">
            
            {/* Insight 1 */}
            <div className="border-l-2 border-blue-500 pl-8 py-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4">The Challenge</h4>
              <p className="text-lg leading-relaxed text-zinc-300">
                Developing a gamified app that encourages exploration of the palace while managing complex character interactions and object histories.
              </p>
            </div>

            {/* Insight 2 */}
            <div className="border-l-2 border-zinc-800 pl-8 py-2 hover:border-zinc-600 transition-colors">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">UX Innovation</h4>
              <p className="text-lg leading-relaxed text-zinc-400">
                Created a custom character creation suite with pronoun selection and physical customization, followed by a QR-code-driven scavenger hunt to unlock branching narrative endings.
              </p>
            </div>
          </section>

          {/* Visual Column (Image Only - No Buttons) */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden shadow-2xl group relative">
              <Image 
                src="/Invitation-Preview.png" 
                alt="The Invitation Wireframe Preview"
                width={800} 
                height={1131} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent pointer-events-none" />
            </div>
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-right">
              Fig. 01 — Narrative Wireframe
            </p>
          </div>
        </div>

        {/* ---------------- EMBED 01: THE STRATEGY (PDF) ---------------- */}
        <section className="border-t border-zinc-900 pt-20 pb-20">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-2 italic">01 / The Strategy</h3>
              <h4 className="text-2xl font-bold uppercase text-white italic">UX Case Study</h4>
            </div>
          </div>

          <div className="w-full h-[85vh] bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden relative group shadow-2xl">
             <iframe 
                src="/The-Invitation-Strategy.pdf#view=FitH&toolbar=0&navpanes=0" 
                className="w-full h-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                title="The Invitation Strategy PDF"
             />
             
             {/* Info Bar */}
             <div className="absolute bottom-0 w-full bg-black/90 p-6 flex justify-between items-center backdrop-blur-md border-t border-zinc-800 z-10 pointer-events-none">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-1">Doc Type: PDF</span>
                  <span className="text-xs text-zinc-400 italic">"Scroll to read full analysis."</span>
                </div>
             </div>
          </div>
        </section>

        {/* ---------------- EMBED 02: THE LIVE SITE (WIX) ---------------- */}
        <section className="border-t border-zinc-900 pt-20 pb-20">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-2 italic">02 / Live Interface</h3>
              <h4 className="text-2xl font-bold uppercase text-white italic">Interactive Prototype</h4>
            </div>
            <a 
              href="https://digitalk0nflict.wixsite.com/theinvitation" 
              target="_blank"
              className="hidden md:block text-[10px] uppercase tracking-widest text-zinc-500 hover:text-blue-500 border-b border-zinc-800 hover:border-blue-500 pb-1 transition-all"
            >
              Open in New Tab ↗
            </a>
          </div>

          <div className="w-full h-[85vh] bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden relative group shadow-[0_0_100px_rgba(37,99,235,0.05)]">
             
             {/* Loading Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <span className="text-zinc-800 font-mono text-[10px] uppercase tracking-widest animate-pulse">Loading External Interface...</span>
             </div>

             <iframe 
                src="https://digitalk0nflict.wixsite.com/theinvitation" 
                className="w-full h-full relative z-10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                title="The Invitation Live Site"
                loading="lazy"
                allow="autoplay; fullscreen"
             />

             {/* Info Bar */}
             <div className="absolute bottom-0 w-full bg-black/90 p-6 flex justify-between items-center backdrop-blur-md border-t border-zinc-800 z-20 pointer-events-none">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-1">Status: Live</span>
                  <span className="text-xs text-zinc-400 italic">"Interact directly within the viewport."</span>
                </div>
                <a 
                    href="https://digitalk0nflict.wixsite.com/theinvitation" 
                    target="_blank"
                    className="pointer-events-auto px-6 py-2 border border-zinc-700 hover:border-blue-500 text-[10px] font-bold uppercase tracking-widest text-white transition-colors bg-zinc-900/50"
                >
                   Fullscreen ↗
                </a>
             </div>
          </div>
        </section>

      </article>
    </div>
  );
}