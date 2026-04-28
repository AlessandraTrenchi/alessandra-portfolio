"use client";
import Link from "next/link";

export default function Stylekid() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500/30">
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-5xl mx-auto px-6 pt-20">
        <header className="mb-24">
          <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block underline decoration-blue-500/20 decoration-4 italic">
            Technical Methodology & User Empowerment 
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            Style <br /> <span className="text-blue-600">Kid.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            "Reimagining the circular economy: transforming fragmented marketplaces into an immersive, user-centric experience."
          </p>
        </header>

        {/* --- NEW SECTION: THE PROCESS / WIREFRAMES --- */}
        <section className="mt-20 border-t border-zinc-900 pt-20">
          <div className="mb-12">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-2 italic">01 / The Architecture</h3>
            <h4 className="text-2xl font-bold uppercase text-white">First Wireframes & UX Flow</h4>
            <p className="text-zinc-400 mt-4 max-w-2xl font-light italic">
              Establishing the structural skeleton. For a circular fashion economy to work, the "Seller Flow" must be as frictionless as the "Buyer Flow." These wireframes prioritize speed for busy parents and clarity in marketplace navigation.
            </p>
          </div>

          <div className="relative aspect-video w-full bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group shadow-2xl">
            <iframe 
              className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/7EeDEByCRPukRfcHa7OD2M/First-Wireframes---Stylekid?node-id=0-1" 
              allowFullScreen
            />
          </div>
          <div className="mt-4 flex justify-end">
            <a 
              href="https://www.figma.com/design/7EeDEByCRPukRfcHa7OD2M/First-Wireframes---Stylekid" 
              target="_blank" 
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-colors"
            >
              Inspect UX Skeleton ↗
            </a>
          </div>
        </section>

        {/* Live Figma Mobile Prototype */}
        <section className="mt-32 border-t border-zinc-900 pt-20 flex flex-col items-center">
          <div className="w-full mb-12 flex justify-between items-end">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-2 italic">02 / Digital Prototype</h3>
              <h4 className="text-2xl font-bold uppercase text-white">Interactive User Journey</h4>
            </div>
            <a 
              href="https://www.figma.com/proto/NabWAZTjBxBZqo46bLZMZo/Digital-prototype--Stylekid?node-id=91-26" 
              target="_blank" 
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-500 transition-all border-b border-zinc-800 hover:border-blue-500 pb-1"
            >
              Open Full Screen ↗
            </a>
          </div>

          <div className="relative w-full max-w-[500px] aspect-[9/18.5] bg-zinc-950 border-[12px] border-zinc-900 rounded-[3.5rem] overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.15)] ring-1 ring-white/10">
            <iframe 
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/NabWAZTjBxBZqo46bLZMZo/Digital-prototype--Stylekid?node-id=91-26&scaling=contain&content-scaling=fixed&hide-navigation=1" 
              className="w-full h-full scale-[1.02]" 
              allowFullScreen
              title="Stylekid Interactive Prototype"
            />
          </div>
        </section>

        {/* Strategy Context Section */}
        <section className="grid md:grid-cols-2 gap-16 mt-32 border-t border-zinc-900 pt-20">
          <div className="space-y-6">
            <h5 className="text-blue-500 font-bold uppercase text-xs tracking-widest italic">Project Goals </h5>
            <p className="text-zinc-400 leading-relaxed font-light">
              The primary objective is to facilitate User Empowerment by allowing users to manage marketplace fragments creatively. 
              The interface is designed to be intuitive, enabling effortless fragment selection and mood control. 
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="text-blue-500 font-bold uppercase text-xs tracking-widest italic">User Experience </h5>
            <p className="text-zinc-400 leading-relaxed font-light">
              The user path incorporates interactive elements such as 360-degree navigation and multisensory feedback systems including visual cues and audio responses. 
              Every user choice influences the overall experience, ensuring a dynamic adventure that reflects their inner worlds. 
            </p>
          </div>
        </section>

        {/* Technical Requirements */}
        <section className="mt-20 p-8 bg-zinc-950 border border-zinc-900 rounded-sm">
           <h5 className="text-blue-500 font-bold uppercase text-xs tracking-widest italic mb-6">Technical Infrastructure </h5>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              <div>• Unreal Engine </div>
              <div>• Python </div>
              <div>• FMOD Audio </div>
              <div>• TensorFlow </div>
           </div>
        </section>
      </article>
    </div>
  );
}