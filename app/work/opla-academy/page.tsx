"use client";
import Link from "next/link";
import { useState } from "react";

export default function OplaAcademy() {
  const [activeTab, setActiveTab] = useState("styleguide");

  // These are the exact embed links based on the Node IDs you provided
  const figmaLinks = {
    styleguide: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FDK9MB2TvzB1Q0rQ2pg6gJt%2FOpl%25C3%25A0-Academy%3Fnode-id%3D0-1",
    mockup: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FDK9MB2TvzB1Q0rQ2pg6gJt%2FOpl%25C3%25A0-Academy%3Fnode-id%3D1-3",
    wireframe: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FDK9MB2TvzB1Q0rQ2pg6gJt%2FOpl%25C3%25A0-Academy%3Fnode-id%3D140-699",
    components: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FDK9MB2TvzB1Q0rQ2pg6gJt%2FOpl%25C3%25A0-Academy%3Fnode-id%3D42-94"
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
            Case Study: Interaction Architecture
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-12 text-white">
            Oplà <br /> Academy.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic max-w-2xl">
            "Design Governance." A modular educational ecosystem built from atomic foundations to high-fidelity experience.
          </p>
        </header>

        {/* ---------------- NAVIGATION TABS (EXACT LAYER ORDER) ---------------- */}
        <section className="mb-12 sticky top-24 z-40 bg-[#0a0a0a]/90 backdrop-blur-sm py-4 border-y border-zinc-900">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {[
              { id: "styleguide", label: "01. Style Guide" },
              { id: "mockup", label: "02. Hifi Wireframe - Mockup" },
              { id: "wireframe", label: "03. Lo-fi wireframe" },
              { id: "components", label: "04. Components" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all pb-2 border-b-2 ${
                  activeTab === tab.id 
                  ? "text-blue-500 border-blue-500" 
                  : "text-zinc-600 border-transparent hover:text-zinc-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* ---------------- INTERACTIVE FIGMA VIEWPORT ---------------- */}
        <section className="relative">
          <div className="w-full h-[85vh] bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.05)] relative">
            
            {/* Loading Indicator */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <span className="text-zinc-900 font-mono text-[10px] uppercase tracking-widest animate-pulse">
                    Initializing Layer: {activeTab.toUpperCase()}
                </span>
            </div>

            <iframe 
              key={activeTab} 
              style={{ border: "none" }}
              className="w-full h-full relative z-10 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              src={figmaLinks[activeTab]}
              allowFullScreen
            ></iframe>

            {/* Viewport Info Bar */}
            <div className="absolute bottom-0 w-full bg-black/90 p-6 flex justify-between items-center backdrop-blur-md border-t border-zinc-800 z-20">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-1 italic">
                  Active System Node: {activeTab.toUpperCase()}
                </span>
                <span className="text-xs text-zinc-500 italic font-light tracking-wide">
                   "Live architecture inspection."
                </span>
              </div>
              <a 
                href="https://www.figma.com/design/DK9MB2TvzB1Q0rQ2pg6gJt/Opl%C3%A0-Academy" 
                target="_blank"
                className="px-6 py-2 border border-zinc-700 hover:border-blue-500 text-[10px] font-bold uppercase tracking-widest text-white transition-colors bg-zinc-900/50"
              >
                Full Project ↗
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- SYSTEM DOCUMENTATION ---------------- */}
        <section className="max-w-5xl mx-auto mt-40 grid md:grid-cols-2 gap-20">
          <div className="border-l-2 border-blue-500 pl-8 py-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4">Scalable Foundations</h4>
            <p className="text-lg leading-relaxed text-zinc-300">
              The project utilizes a strict <strong>Style Guide</strong> to govern all high-fidelity <strong>Mockups</strong>. This ensures that typography, color tokens, and spacing remain consistent across the entire Academy ecosystem.
            </p>
          </div>
          <div className="border-l-2 border-zinc-800 pl-8 py-2 hover:border-zinc-600 transition-colors">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Atomic Architecture</h4>
            <p className="text-lg leading-relaxed text-zinc-400">
              From <strong>Lo-fi wireframes</strong> to master <strong>Components</strong>, every design asset follows an atomic hierarchy. This methodology reduces technical debt and facilitates seamless developer hand-off.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}