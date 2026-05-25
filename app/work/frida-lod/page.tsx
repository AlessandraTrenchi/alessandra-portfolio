import Link from "next/link";

export default function FridaLOD() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500/30">
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors outline-none">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-5xl mx-auto px-6 pt-20">
        <header className="mb-24">
          <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block underline decoration-blue-500/20 decoration-4 italic">
            Knowledge Extraction & Semantic Web
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            LOD <br /> <span className="text-blue-600">Chamber.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            Digitizing Frida Kahlo's legacy through Linked Open Data, transforming archival information into a navigable semantic network.
          </p>
        </header>

        {/* Live LOD Chamber Embed */}
        <section className="mt-20 border-t border-zinc-900 pt-20">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-2 italic">01 / Live Knowledge Base</h3>
              <h4 className="text-2xl font-bold uppercase text-white">Frida Kahlo Semantic Portal</h4>
            </div>
            <a 
              href="https://fridakahlolodchamber.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-all border-b border-zinc-800 hover:border-blue-500 pb-1"
            >
              Open Project ↗
            </a>
          </div>

          <div className="relative aspect-video w-full bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group shadow-2xl">
  <iframe 
    src="https://fridakahlolodchamber.netlify.app/" 
    className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700"
    title="Frida Kahlo LOD Project"
    loading="lazy"
    style={{ border: 'none' }}
  />
</div>
        </section>

        {/* Investigation & Context */}
        <section className="grid md:grid-cols-2 gap-16 mt-32 border-t border-zinc-900 pt-20">
          <div className="space-y-6">
            <h5 className="text-blue-500 font-bold uppercase text-xs tracking-widest italic">The Extraction Process</h5>
            <p className="text-zinc-400 leading-relaxed font-light">
              This project focused on the <strong>knowledge conceptualization</strong> of Frida Kahlo's life and works. By extracting entities and properties from diverse sources, I built a structured dataset that follows LOD principles.
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="text-blue-500 font-bold uppercase text-xs tracking-widest italic">Semantic Interoperability</h5>
            <p className="text-zinc-400 leading-relaxed font-light">
              The "Chamber" acts as a bridge between human-readable narratives and machine-readable data, utilizing ontologies to ensure that the cultural heritage of the artist remains accessible and interlinked.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
