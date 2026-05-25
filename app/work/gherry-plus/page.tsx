import Link from "next/link";
import Image from "next/image";

export default function GherryPlus() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors outline-none">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-5xl mx-auto px-6 pt-20">
        <header className="mb-24">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-4 block underline decoration-blue-500/20 decoration-4 italic">
            Inclusive Design and UX Audit
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            Gherry <br /> <span className="text-blue-600">Plus+.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            Designing for extremes: enhancing memory care through empathetic AI and inclusive interaction architecture.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <section className="space-y-12">
            <div className="border-l-4 border-blue-600 pl-8 py-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 italic">The Mission</h4>
              <p className="text-lg leading-relaxed text-zinc-200">
                I led the Ricorda-Mente team in optimizing the Gherry app, shifting the focus from the center of the bell curve to extreme users: individuals with severe memory loss and facial recognition challenges.
              </p>
            </div>

            <div className="border-l-4 border-zinc-800 pl-8 py-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 italic">Strategic Research</h4>
              <p className="text-lg leading-relaxed text-zinc-400">
                Through a PESTEL analysis and in-depth interviews, we mapped the needs of both family and professional caregivers, introducing Giada AI for visual, emotional, and navigational support.
              </p>
            </div>

            <section className="mt-20 border-t border-zinc-900 pt-20">
  <header className="mb-12">
    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 italic">Full Documentation</h3>
    <h4 className="text-3xl font-black uppercase text-white italic">UX Audit & Ethnographic Study</h4>
  </header>

  <div className="relative aspect-[4/3] w-full bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group">
    <iframe 
      src="/GHERRY+.pdf#view=FitH&scrollbar=0&toolbar=0&navpanes=0" 
      className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
      title="Gherry+ UX Audit"
    />
    {/* Overlay for mobile scrolling - optional but helpful */}
    <div className="absolute bottom-4 right-4">
      <a 
        href="/GHERRY+.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors shadow-2xl"
      >
        Expand Full PDF ↗
      </a>
    </div>
  </div>
</section>
          </section>

          <div className="space-y-8">
            <div className="w-full bg-zinc-900 border border-zinc-800 shadow-2xl rounded-sm overflow-hidden group">
              <Image 
                src="/GHERRY+.png" 
                alt="Gherry+ UX Research and Personas"
                width={800} 
                height={1131} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03] opacity-80 group-hover:opacity-100"
                priority
              />
            </div>
            <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-sm italic">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-4 italic">Testing Results</h5>
                <p className="text-sm text-zinc-400 leading-relaxed">
                    SUS Score: 3.8 to 4.8. Tested on 10 participants (5 elderly, 5 caregivers). We optimized the navigation flow and color contrast to ensure maximum readability and accessibility for users with impairments.
                </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
