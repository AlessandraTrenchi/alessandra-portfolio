import Link from "next/link";

export default function CybersecurityProject() {
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
          <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block underline decoration-blue-500/20 decoration-4 italic">
            Technical Communication & Cyber Strategy
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            Cyber <br /> <span className="text-blue-600">Strategy.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            Translating complex technical audits into high-impact executive decks for stakeholder decision-making.
          </p>
        </header>

        {/* The Live PDF Preview */}
        <section className="mt-20 border-t border-zinc-900 pt-20">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-2 italic">01 / Executive Deck</h3>
              <h4 className="text-2xl font-bold uppercase text-white">Technical Analysis Preview</h4>
            </div>
            <a 
              href="/Cybersecurity-Presentation.pdf" 
              target="_blank" 
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-all border-b border-zinc-800 hover:border-blue-500 pb-1"
            >
              Open Full Screen ↗
            </a>
          </div>

          <div className="relative aspect-video w-full bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group">
            {/* Loading state indicator */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
               <span className="text-zinc-800 font-black animate-pulse uppercase tracking-widest text-xs">Loading Secure Document...</span>
            </div>
            
            <iframe 
              src="/Cybersecurity-Presentation.pdf#view=FitH&toolbar=0" 
              className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700 grayscale-[20%] group-hover:grayscale-0"
              title="Cybersecurity Strategy Presentation"
            />
          </div>
          
          <p className="mt-8 text-zinc-500 font-mono text-[10px] uppercase tracking-widest leading-loose max-w-2xl">
            Note: This document summarizes vulnerability assessments, risk mitigation roadmaps, and 
            compliance framework implementations (ISO 27001/NIST).
          </p>
        </section>

        {/* Strategy Context Section */}
        <section className="grid md:grid-cols-2 gap-16 mt-32">
          <div className="space-y-6">
            <h5 className="text-blue-500 font-bold uppercase text-xs tracking-widest italic">The Challenge</h5>
            <p className="text-zinc-400 leading-relaxed font-light">
              Technical audits are often too dense for C-suite executives. My role was to bridge the gap: 
              distilling weeks of security testing into a 15-minute strategic briefing.
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="text-blue-500 font-bold uppercase text-xs tracking-widest italic">The Outcome</h5>
            <p className="text-zinc-400 leading-relaxed font-light">
              Clearer visibility on infrastructure risks, improved budget allocation for security tools, 
              and a unified communication protocol between the DevOps team and board members.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}