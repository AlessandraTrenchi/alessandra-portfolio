"use client";
import Link from "next/link";

export default function CrossfitRedesign() {
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
            Case Study: Interaction Architecture
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            The <br /> Protocol.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            "Optimizing the athlete's journey: Mapping the skeletal logic of a seamless gym experience."
          </p>
        </header>

        {/* ---------------- STRATEGIC ANALYSIS ---------------- */}
        <div className="max-w-5xl mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="border-l-2 border-blue-500 pl-8 py-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4">The Friction</h4>
              <p className="text-lg leading-relaxed text-zinc-300">
                Gym ecosystems often bury utility under marketing. The goal was to strip the interface down to its essential logic: <strong>WOD access and slot booking</strong>.
              </p>
            </div>

            <div className="border-l-2 border-zinc-800 pl-8 py-2 hover:border-zinc-600 transition-colors">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Wireframing Logic</h4>
              <p className="text-lg leading-relaxed text-zinc-400">
                Focusing on <strong>Low-Fidelity Blueprints</strong> allowed for rapid iteration of user flows. By centering the schedule module, we minimize the cognitive load for athletes.
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- NEW: TECHNICAL DEEP DIVE ---------------- */}
        <section className="max-w-5xl mx-auto mb-32 grid md:grid-cols-3 gap-12 border-t border-zinc-900 pt-20">
            <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-4">01 / The Persona</h5>
                <p className="text-sm text-zinc-400 leading-relaxed italic">
                    Designed for the "High-Intensity User"—an athlete who values speed over aesthetic flourishes. Efficiency is the primary UX goal.
                </p>
            </div>
            <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-4">02 / Information Hierarchy</h5>
                <p className="text-sm text-zinc-400 leading-relaxed italic">
                    The WOD (Workout of the Day) is prioritized at the top of the mobile view to prevent unnecessary scrolling during time-sensitive moments.
                </p>
            </div>
            <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-4">03 / Navigation Nodes</h5>
                <p className="text-sm text-zinc-400 leading-relaxed italic">
                    A bottom-fixed navigation menu ensures 1-thumb accessibility, allowing users to switch between 'Book' and 'Results' instantly.
                </p>
            </div>
        </section>

        {/* ---------------- EMBED: LIVE FIGMA BOARD ---------------- */}
        <section className="border-t border-zinc-900 pt-20 pb-20">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-2 italic">04 / The Blueprint</h3>
              <h4 className="text-2xl font-bold uppercase text-white italic">Interactive Wireframe Board</h4>
            </div>
          </div>

          <div className="w-full h-[85vh] bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden relative group shadow-[0_0_100px_rgba(37,99,235,0.05)]">
             <iframe 
                style={{border: "none"}}
                className="w-full h-full relative z-10 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FrGp6lcx2rr6zLPEqeUCNTI%2FCrossfit-wireframe-redesign-Desktop-and-Mobile%3Fnode-id%3D0-1%26t%3D6ZrApQ1WebcbyfeJ-1" 
                allowFullScreen
             ></iframe>

             {/* Bottom Navigation Bar */}
             <div className="absolute bottom-0 w-full bg-black/90 p-6 flex justify-between items-center backdrop-blur-md border-t border-zinc-800 z-20 pointer-events-none">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-1">Architecture: Figma</span>
                  <span className="text-xs text-zinc-400 italic">"Inspect the skeletal logic of the mobile and desktop flows."</span>
                </div>
                <a 
                    href="https://www.figma.com/board/rGp6lcx2rr6zLPEqeUCNTI/Crossfit-wireframe-redesign-Desktop-and-Mobile?node-id=0-1&p=f&t=6ZrApQ1WebcbyfeJ-0" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto px-6 py-2 border border-zinc-700 hover:border-blue-500 text-[10px] font-bold uppercase tracking-widest text-white transition-colors bg-zinc-900/50"
                >
                   Open Full Board ↗
                </a>
             </div>
          </div>
        </section>
      </article>
    </div>
  );
}
