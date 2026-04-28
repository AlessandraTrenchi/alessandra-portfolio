"use client";
import Link from "next/link";
import Image from "next/image";

export default function SeveranceBranding() {
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
            Case Study: Narrative Branding
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            The <br /> Severance.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            "The work is mysterious and important." Translating psychological alienation into a coordinated visual system.
          </p>
        </header>

        {/* ---------------- STRATEGIC ANALYSIS ---------------- */}
        <div className="max-w-5xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="border-l-2 border-blue-500 pl-8 py-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4">Narrative Extraction</h4>
              <p className="text-lg leading-relaxed text-zinc-300">
                The design utilizes the numerical system of Macrodata Refinement to evoke the duality of identity. The goal was to create a "visual uniform" for the existential worker.
              </p>
            </div>
            <div className="border-l-2 border-zinc-800 pl-8 py-2 hover:border-zinc-600 transition-colors">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Visual Contrapasso</h4>
              <p className="text-lg leading-relaxed text-zinc-400">
                Specular pictograms with a fractured texture symbolize the leak between professional life (Innie) and private life (Outie). The central light point represents the moment of transition.
              </p>
            </div>
          </div>

        </div>

        {/* ---------------- EMBED: GRAPHIC ARCHIVE (PDF) ---------------- */}
        <section className="border-t border-zinc-900 pt-20 pb-20">
          <div className="mb-12">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-2 italic">01 / Design Logic</h3>
            <h4 className="text-2xl font-bold uppercase text-white italic">Data Refinement Schematics</h4>
          </div>

          <div className="w-full h-[85vh] bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden relative group">
             <iframe 
                src="/severance.pdf#view=FitH&toolbar=0&navpanes=0" 
                className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                title="Severance Design Archive"
             />
             <div className="absolute bottom-0 w-full bg-black/90 p-6 flex justify-between items-center backdrop-blur-md border-t border-zinc-800 z-20">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest italic">
                  "Grid Analysis: Corporate Data Logic"
                </span>
             </div>
          </div>
        </section>

        {/* ---------------- GALLERY: EXPORTED MODELS ---------------- */}
        <section className="border-t border-zinc-900 pt-20">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-12 italic text-center">Export Models</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0a0a0a] border border-zinc-800 p-12 rounded-sm flex flex-col items-center">
                <Image src="/severance-b.png" alt="Black Model" width={500} height={500} className="w-full h-auto opacity-90" />
                <p className="mt-8 text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Dark Variant (severance-b.png)</p>
            </div>
            <div className="bg-[#f0f0f0] p-12 rounded-sm flex flex-col items-center">
                <Image src="/severance-w.png" alt="White Model" width={500} height={500} className="w-full h-auto" />
                <p className="mt-8 text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em]">Light Variant (severance-w.png)</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}