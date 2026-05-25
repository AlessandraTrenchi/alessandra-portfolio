import Link from "next/link";

export default function CatchONTO() {
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
            Formal Knowledge Representation
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            Catch <br /> <span className="text-blue-600">ONTO.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            Designing a formal conceptual model to standardize complex information domains through semantic web technologies.
          </p>
        </header>

        {/* Live Ontology Embed */}
        <section className="mt-20 border-t border-zinc-900 pt-20">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-2 italic">01 / Live Semantic Model</h3>
              <h4 className="text-2xl font-bold uppercase text-white">CatchONTO Documentation Portal</h4>
            </div>
            <a 
              href="https://alessandratrenchi.github.io/CatchONTO/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-all border-b border-zinc-800 hover:border-blue-500 pb-1"
            >
              Open Documentation ↗
            </a>
          </div>

          <div className="relative aspect-video w-full bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group shadow-2xl">
            <iframe 
              src="https://alessandratrenchi.github.io/CatchONTO/" 
              className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              title="CatchONTO Project"
              loading="lazy"
              style={{ border: 'none' }}
            />
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="grid md:grid-cols-2 gap-16 mt-32 border-t border-zinc-900 pt-20">
          <div className="space-y-6">
            <h5 className="text-blue-500 font-bold uppercase text-xs tracking-widest italic">Ontological Engineering</h5>
            <p className="text-zinc-400 leading-relaxed font-light">
              CatchONTO represents a deep dive into <strong>semantic modeling</strong>. I engineered a set of classes, properties, and axioms to define the domain's vocabulary, ensuring that the data is not only machine-readable but logically consistent.
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="text-blue-500 font-bold uppercase text-xs tracking-widest italic">Standard Compliance</h5>
            <p className="text-zinc-400 leading-relaxed font-light">
              Built using <strong>OWL (Web Ontology Language)</strong> and <strong>RDF</strong>, this project demonstrates my ability to work with W3C standards, facilitating data interoperability across different platforms and knowledge bases.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
