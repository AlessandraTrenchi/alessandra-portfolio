"use client";
import Link from "next/link";

export default function EUITableCards() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500/30">
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors outline-none">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-7xl mx-auto px-6 pt-20">
        <header className="mb-24 max-w-5xl">
          <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/30 decoration-2">
            Institutional Design & Wayfinding
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white leading-none">
            EUI Table <br /> Cards.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            Developing visual identification systems for the European University Institute (EUI), balancing institutional rigor with communicative clarity.
          </p>
        </header>

        {/* ---------------- FIGMA EMBED ---------------- */}
        <section className="relative group mb-32">
          <div className="w-full aspect-video bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden shadow-2xl">
            <iframe 
              className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/dkUQxcQwcRUYch1YOpvBW9/Table-Cards?node-id=0-1"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>EUI Visual Identity System</span>
            <a href="https://www.figma.com/design/dkUQxcQwcRUYch1YOpvBW9/Table-Cards" target="_blank" className="text-blue-500 hover:text-white transition-colors">Open in Figma ↗</a>
          </div>
        </section>

        {/* ---------------- STRATEGIC ANALYSIS ---------------- */}
        <section className="max-w-5xl grid md:grid-cols-2 gap-16 border-t border-zinc-900 pt-16">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Institutional Logic</h4>
            <p className="text-lg leading-relaxed text-zinc-300 italic">
              "Form follows hierarchy." The project for the EUI required meticulous attention to typography and white space, ensuring that academic names and titles were instantly legible during official conferences and high-level events.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Standardization</h4>
            <p className="text-lg leading-relaxed text-zinc-400">
              A modular system was created to adapt to varying text lengths and title complexities, maintaining a consistent aesthetic that reflects the prestige and authority of the European University Institute.
            </p>
          </div>
        </section>

        {/* Deliverables Summary */}
        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl border-y border-zinc-900 py-12">
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Client</span>
                <p className="font-bold text-white uppercase italic">EUI (European University Institute)</p>
            </div>
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Service</span>
                <p className="font-bold text-white uppercase italic">Editorial Design</p>
            </div>
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Output</span>
                <p className="font-bold text-white uppercase italic">Table Cards / Wayfinding</p>
            </div>
            <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Style</span>
                <p className="font-bold text-white uppercase italic">Institutional Minimal</p>
            </div>
        </div>
      </article>
    </div>
  );
}