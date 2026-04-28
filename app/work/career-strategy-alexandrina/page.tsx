import Link from "next/link";
import Image from "next/image";

export default function SaniCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500">
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors outline-none focus-visible:ring-2 ring-blue-500">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-5xl mx-auto px-6 pt-20">
        <header className="mb-24">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/20 decoration-4">Case Study: AI Lifecycle Branding</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12">
            AI <br /> Alchemy.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            "Expert in high-fidelity data annotation and transcription for LLM training." 
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <section className="space-y-12">
            <div className="border-l-4 border-blue-500 pl-8 py-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">The Strategic Audit</h4>
              <p className="text-lg md:text-xl leading-relaxed">
                Alexandrina's value lies in her multilingual mastery. I positioned her <strong>Fine Arts</strong> background as "Technical Artistry," proving her precision for high-accuracy RLHF.
              </p>
            </div>

            <div className="border-l-4 border-zinc-800 pl-8 py-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">The Impact</h4>
              <p className="text-lg md:text-xl leading-relaxed text-zinc-400">
                By emphasizing her work at <strong>TELUS International</strong>, we showcased her ability to correct phonetics and cultural nuances at a 98%+ accuracy rate.
              </p>
            </div>

            <div className="pt-8 text-center md:text-left">
              <a 
                href="/Sani.pdf" 
                download
                className="relative inline-block w-full md:w-auto text-center px-12 py-5 
                bg-black text-white font-bold uppercase tracking-[0.2em] text-[11px] 
                transition-all duration-300 ease-out border border-zinc-800
                hover:-translate-y-1 hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)]
                active:translate-y-0
                focus-visible:ring-4 ring-blue-500/50 outline-none
                group overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative">Download Full PDF Strategy</span>
              </a>
            </div>
          </section>

          <div className="w-full bg-zinc-900 border border-zinc-800 shadow-2xl rounded-sm overflow-hidden group">
            <Image 
              src="/Sani.png" 
              alt="Strategic CV Design for Alexandrina Koleva"
              width={800} 
              height={1131} 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
          </div>
        </div>
      </article>
    </div>
  );
}