"use client";
import Link from "next/link";
import Image from "next/image";

export default function ImreCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500">
      
      {/* NAVIGATION */}
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors outline-none focus-visible:ring-2 ring-blue-500">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-5xl mx-auto px-6 pt-20">
        
        {/* HEADER */}
        <header className="mb-24">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/20 decoration-4">
            Case Study: Technical Operations Branding
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12">
            The AI <br /> Specialist.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            "Transforming a manual labor background into a high-value Technical Operations & AI Data profile." 
          </p>
        </header>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: STRATEGY TEXT */}
          <section className="space-y-12">
            
            {/* Strategy Block */}
            <div className="border-l-4 border-blue-500 pl-8 py-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">The Strategic Audit</h4>
              <p className="text-lg md:text-xl leading-relaxed">
                Imre's value lay in his unique combination of <strong>IT System Administration</strong> and <strong>Logistics</strong>. I repositioned his "Stocktaking" work as "Operations Leadership" and his transcription work as "AI Data Specialization."
              </p>
            </div>

            {/* Impact Block */}
            <div className="border-l-4 border-zinc-800 pl-8 py-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">The Impact</h4>
              <p className="text-lg md:text-xl leading-relaxed text-zinc-400">
                By creating a "Technical Toolkit" section, we highlighted high-demand skills like <strong>RLHF</strong> and <strong>Data Labeling</strong>, moving him away from the general labor market and into the Tech Sector.
              </p>
            </div>

            {/* Downloads */}
            <div className="pt-8 flex flex-col gap-4">
              {/* Download NEW */}
              <a 
                href="/Szabo_Imre_AI_Specialist2026.pdf (1).pdf" 
                download
                className="relative inline-block w-full md:w-auto text-center px-12 py-5 
                bg-blue-600 text-white font-bold uppercase tracking-[0.2em] text-[11px] 
                transition-all duration-300 ease-out border border-blue-500
                hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)]
                active:translate-y-0
                focus-visible:ring-4 ring-blue-500/50 outline-none
                group overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative">Download Final Strategy (PDF)</span>
              </a>

              {/* Download OLD (Optional, styled differently) */}
              <a 
                href="/CV_Eng (1).docx" 
                download
                className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white border-b border-transparent hover:border-white w-max mx-auto md:mx-0 transition-colors"
              >
                Download Original File (Reference)
              </a>
            </div>
          </section>

          {/* RIGHT COLUMN: PREVIEW IMAGE */}
          <div className="w-full bg-zinc-900 border border-zinc-800 shadow-2xl rounded-sm overflow-hidden group">
            {/* IMPORTANT: Make sure to create this image. 
               Take a screenshot of the new PDF and save it as /public/imre-cv.png 
            */}
            <div className="relative w-full aspect-[1/1.414]">
                <Image 
                src="/imre.png" 
                alt="Strategic CV Design for Imre Szabo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
                />
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}