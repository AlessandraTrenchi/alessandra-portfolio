"use client";
import Link from "next/link";
import { useState } from "react";

export default function TrendiesJewelry() {
  const [activeTab, setActiveTab] = useState("design");

  const figmaLinks = {
    design: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FMT0DK31s91WCzCOW0ukaif%2FTrendies%3Fnode-id%3D0-1",
    components: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FMT0DK31s91WCzCOW0ukaif%2FTrendies%3Fnode-id%3D7-2"
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans pb-40 selection:bg-blue-500/30">
      <nav className="p-8 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 transition-colors outline-none">
          ← Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-7xl mx-auto px-6 pt-20">
        <header className="mb-24 max-w-5xl mx-auto">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block underline decoration-blue-500/30 decoration-2">
            Case Study: Luxury E-Commerce
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            Trendies.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            "Elevating the catalog." A visual redesign for luxury jewelry, focusing on high-contrast elegance and seamless product discovery.
          </p>
        </header>

        {/* ---------------- NEW: PERSONA SECTION ---------------- */}
        <section className="max-w-5xl mx-auto mb-32 border-b border-zinc-900 pb-20">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-12 italic">Target Persona: The Conscious Collector</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h5 className="text-white font-bold uppercase text-xs italic">The Profile</h5>
              <p className="text-sm text-zinc-500 leading-relaxed">
                High-net-worth individuals or aspirational consumers seeking <strong>timelessness</strong>. They value brand heritage and technical craftsmanship over seasonal trends.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold uppercase text-xs italic">Digital Behavior</h5>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Mobile-first browsing but tablet-heavy purchasing. They expect "Concierge-level" UX—fast loading, high-resolution zoom, and minimal intrusive marketing.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold uppercase text-xs italic">The Solution</h5>
              <p className="text-sm text-zinc-500 leading-relaxed">
                A "Gallery-First" interface where the UI recedes, allowing the jewelry to be the primary focus of the emotional and cognitive journey.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- NAVIGATION TABS ---------------- */}
        <section className="mb-12 sticky top-24 z-40 bg-[#0a0a0a]/90 backdrop-blur-sm py-4 border-y border-zinc-900">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            <button 
              onClick={() => setActiveTab("design")}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold pb-2 border-b-2 transition-all ${
                activeTab === "design" ? "text-blue-500 border-blue-500" : "text-zinc-600 border-transparent"
              }`}
            >
              01. Design New Wireframe
            </button>
            <button 
              onClick={() => setActiveTab("components")}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold pb-2 border-b-2 transition-all ${
                activeTab === "components" ? "text-blue-500 border-blue-500" : "text-zinc-600 border-transparent"
              }`}
            >
              02. Components
            </button>
          </div>
        </section>

        {/* ---------------- INTERACTIVE VIEWPORT ---------------- */}
        <section className="relative">
          <div className="w-full h-[85vh] bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.05)] relative">
            <iframe 
              key={activeTab} 
              style={{ border: "none" }}
              className="w-full h-full relative z-10 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              src={figmaLinks[activeTab]}
              allowFullScreen
            ></iframe>

            <div className="absolute bottom-0 w-full bg-black/90 p-6 flex justify-between items-center backdrop-blur-md border-t border-zinc-800 z-20">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-1 italic">
                  Visual Logic: {activeTab.toUpperCase()}
                </span>
                <span className="text-xs text-zinc-400 italic">"Luxury-focused interaction model."</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- STRATEGIC ANALYSIS ---------------- */}
        <section className="max-w-5xl mx-auto mt-40 grid md:grid-cols-2 gap-20">
          <div className="border-l-2 border-blue-500 pl-8 py-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4">Luxury UX Principles</h4>
            <p className="text-lg leading-relaxed text-zinc-300">
              In luxury e-commerce, white space and high-quality imagery act as a silent salesman. The Trendies wireframe minimizes UI noise to let the jewelry craftsmanship take center stage.
            </p>
          </div>
          <div className="border-l-2 border-zinc-800 pl-8 py-2 hover:border-zinc-600 transition-colors">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Scalable Components</h4>
            <p className="text-lg leading-relaxed text-zinc-400">
              The Components system was built to handle high-resolution product variations. By standardizing the grid and typography, we ensured the mobile experience feels as premium as the desktop.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}