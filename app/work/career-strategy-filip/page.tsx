"use client";
import Link from "next/link";
import Image from "next/image";

export default function FilipCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500/30">
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors outline-none focus-visible:ring-2 ring-blue-500">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-5xl mx-auto px-6 pt-20">
        <header className="mb-24">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/30 decoration-2">
            Case Study: Strategic Positioning
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            The <br /> <span className="text-zinc-800 stroke-zinc-700 stroke-1">Fixer.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            "Bridging the gap between complex technical systems and user needs." 
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <section className="space-y-12 order-2 lg:order-1">
            
            {/* Insight 01 */}
            <div className="border-l-2 border-blue-500 pl-8 py-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4">The Strategic Audit</h4>
              <p className="text-lg md:text-xl leading-relaxed text-zinc-300">
                Filip had 6+ years of experience in connectivity and troubleshooting. I moved his narrative from "Customer Care" to <strong className="text-white">"Technical Support Specialist"</strong> to reflect his ability to resolve critical issues promptly.
              </p>
            </div>

            {/* Insight 02 */}
            <div className="border-l-2 border-zinc-800 pl-8 py-2 hover:border-zinc-600 transition-colors">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">The Implementation</h4>
              <p className="text-lg md:text-xl leading-relaxed text-zinc-400">
                I emphasized his mastery of <strong className="text-white">CRM (Salesforce/Zendesk)</strong> and his role as a liaison between multiple internal teams. We proved he is a proactive problem-solver in high-volume environments.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8 text-center md:text-left">
              <a 
                href="/Filip.pdf" 
                download 
                className="relative inline-block w-full md:w-auto text-center px-12 py-5 
                bg-zinc-100 text-black font-bold uppercase tracking-[0.2em] text-[11px] 
                transition-all duration-300 ease-out
                hover:bg-blue-600 hover:text-white hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]
                focus-visible:ring-4 ring-blue-500/50 outline-none
                group overflow-hidden rounded-sm"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative">Download CV Strategy (PDF)</span>
              </a>
            </div>
          </section>

          {/* Visual Asset */}
          <div className="w-full bg-zinc-900 border border-zinc-800 shadow-2xl rounded-sm overflow-hidden group order-1 lg:order-2">
            <div className="relative">
                <Image 
                src="/Filip.png" 
                alt="Strategic CV Design for Filip Filipov"
                width={800} 
                height={1131} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02] opacity-90 group-hover:opacity-100"
                priority
                />
                {/* Overlay gradient for better blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}