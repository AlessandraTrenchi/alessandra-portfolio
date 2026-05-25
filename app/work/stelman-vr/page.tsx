"use client";
import Link from "next/link";
import Image from "next/image";

export default function StelmanVR() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500">
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors outline-none focus-visible:ring-2 ring-blue-500">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-5xl mx-auto px-6 pt-20">
        <header className="mb-24 text-center md:text-left">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/20 decoration-4 italic">Case Study: VR & Generative AI</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            Stelman <br /> Cosmogonies.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl mx-auto md:mx-0">
            "Transcending canvases: reimagining static art into immersive VR realms through Generative AI."
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <section className="space-y-12">
            <div className="border-l-4 border-blue-500 pl-8 py-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 italic">Methodology</h4>
              <p className="text-lg md:text-xl leading-relaxed">
                Implementation of <strong>Variational Autoencoders (VAE)</strong> to generate infinite outputs from image, sound, and haptic databases. The goal is to extend the starting landscape into an infinite explorable city.
              </p>
            </div>

            <div className="border-l-4 border-zinc-800 pl-8 py-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 italic">Interaction Design</h4>
              <p className="text-lg md:text-xl leading-relaxed text-zinc-400">
                Designing menu systems and touch interfaces for horizontal and vertical teleportation among fragments. Focus on <strong>Oculus Quest 2</strong> optimization to prevent motion sickness.
              </p>
            </div>
          </section>

          <div className="w-full bg-zinc-900 border border-zinc-800 shadow-2xl rounded-sm overflow-hidden group">
            <Image 
              src="/Stelman-Preview.png" 
              alt="Stelman VR Experience Preview"
              width={800} 
              height={450} 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.05]"
            />
          </div>
        </div>

        {/* Section: Full Strategy PDF Preview */}
        <section className="mt-32 border-t border-zinc-900 pt-20">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] block mb-4">Documentation</span>
              <h3 className="text-3xl md:text-5xl font-black uppercase italic text-white tracking-tighter">
                Strategy <br /> <span className="text-zinc-700">Presentation.</span>
              </h3>
            </div>
            <a 
              href="/Stelman-VR-Strategy.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-all border-b border-zinc-800 hover:border-blue-500 pb-1"
            >
              Expand PDF ↗
            </a>
          </div>

          <div className="relative aspect-video w-full bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
               <span className="text-zinc-800 font-black animate-pulse uppercase tracking-widest text-[10px]">Initializing Document Preview...</span>
            </div>
            <iframe 
              src="/Stelman-VR-Strategy.pdf#view=Fit&pagemode=none&toolbar=0" 
              className="w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-700 grayscale-[20%] group-hover:grayscale-0"
              style={{ border: 'none' }}
              title="Stelman VR Strategy Deck"
            />
          </div>
        </section>

        {/* Section: Marketplace Showcase */}
        <section className="mt-32 border-t border-zinc-900 pt-20">
          <div className="mb-12">
            <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] block mb-4">
              Visual Component Library
            </span>
            <h3 className="text-3xl md:text-5xl font-black uppercase italic text-white tracking-tighter">
              Marketplace <br /> <span className="text-zinc-700">Architecture.</span>
            </h3>
            <p className="text-zinc-400 mt-6 max-w-2xl font-light italic">
              Static analysis of marketplace components and community architecture, engineered for seamless VR environment integration.
            </p>
          </div>

          <div className="relative aspect-video w-full bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
               <span className="text-zinc-800 font-black animate-pulse uppercase tracking-widest text-xs">Loading Design Board...</span>
            </div>
            <iframe 
              className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/9etDHPa001QndCRh6q7s2y/marketplace-VR--Community-?node-id=0-1" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-6 flex justify-end">
            <a 
              href="https://www.figma.com/design/9etDHPa001QndCRh6q7s2y/marketplace-VR--Community-?node-id=0-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-colors"
            >
              Open in Figma ↗
            </a>
          </div>
        </section>

        {/* Section: Conceptualization & Planning (Presentation Mode) */}
        <section className="mt-32 border-t border-zinc-900 pt-20">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] block mb-4">
                Project Genesis
              </span>
              <h3 className="text-3xl md:text-5xl font-black uppercase italic text-white tracking-tighter">
                Conceptualization <br /> <span className="text-zinc-700">& Planning.</span>
              </h3>
              <p className="text-zinc-400 mt-6 max-w-2xl font-light italic">
                The foundational research phase: bridging Italian Fragmentism with Generative AI and spatial audio integration.
              </p>
            </div>
            <a 
              href="/CONCEPTUALIZATION&PLANNING.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-all border-b border-zinc-800 hover:border-blue-500 pb-1"
            >
              Full Screen ↗
            </a>
          </div>

          <div className="relative aspect-video w-full bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
               <span className="text-zinc-800 font-black animate-pulse uppercase tracking-widest text-[10px]">Loading Presentation Slides...</span>
            </div>
            <iframe 
              src="/CONCEPTUALIZATION&PLANNING.pdf#view=Fit&pagemode=none&toolbar=0" 
              className="w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-700"
              style={{ border: 'none' }}
              title="Stelman VR Conceptualization Deck"
            />
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-12 text-[10px] uppercase tracking-widest font-mono text-zinc-500">
            <p>• Focus: Algorithm-driven art & music pairings.</p>
            <p>• Tech Stack: Unreal Engine, Python, and VAE Models.</p>
          </div>
        </section>

        {/* Project Details Footer */}
        <section className="grid md:grid-cols-3 gap-8 border-t border-zinc-900 pt-20 mt-32">
          <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-sm">
            <h5 className="text-blue-500 font-bold text-xs uppercase mb-4 tracking-widest italic">Touch System</h5>
            <p className="text-sm text-zinc-400 leading-relaxed italic">
              Touch is the primary sense developed for generating a high sense of presence and embodiment.
            </p>
          </div>
          <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-sm">
            <h5 className="text-blue-500 font-bold text-xs uppercase mb-4 tracking-widest italic">Target Audience</h5>
            <p className="text-sm text-zinc-400 leading-relaxed italic">
              From generative artists to individuals with impairments, providing a real city simulator.
            </p>
          </div>
          <div className="p-8 bg-zinc-950 border border-zinc-100/5 rounded-sm">
            <h5 className="text-blue-500 font-bold text-xs uppercase mb-4 tracking-widest italic">User Feedback</h5>
            <p className="text-sm text-zinc-400 leading-relaxed font-mono italic">
              Multisensorial emulations including visual cues, vibrations, and audio responses.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
