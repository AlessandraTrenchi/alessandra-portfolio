"use client"; // Required for the new Mobile Menu state

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// --- DATA CONFIGURATION ---
const PROJECTS = [
  {
    id: "01",
    title: "The Last Game",
    category: ["3D Modeling", "Narrative"],
    img: "/last-game.png",
    desc: "Dante's Inferno Adaptation / Blender Asset modeling / World-Building Logic.",
    link: "/work/the-last-game",
    linkText: "Explore Project",
  },
  {
    id: "2",
    title: "Thematic Dualism",
    category: ["Interface Exp"],
    img: "/Thematic-Preview.png",
    desc: "Experimental Theme Switching / Historical vs Sci-Fi Narrative.",
    link: "/work/thematic-explorations",
    linkText: "Inspect Themes",
  },
  {
    id: "03",
    title: "GLOBALCIT / GGP",
    category: ["Design & Dev", "Data Viz"], 
    img: "/globalcit.png", 
    desc: "Lead Designer & Developer. Interactive Country Profiles, complex database tables, and EUI governance platforms.",
    link: "/work/globalcit",
    linkText: "View Data Architecture",
  },
  {
    id: "04",
    title: "RSC / GGP System",
    category: ["EUI", "Systems"],
    img: "/rsc-system-preview.jpg",
    desc: "Atomic Engineering / Redesign Consolidation / Institutional UX Architecture.",
    link: "/work/rsc-system",
    linkText: "Inspect System",
  },
  
  {
    id: "06",
    title: "Institutional Audit",
    category: ["Research"],
    img: "/audit-preview.png",
    desc: "Gap Analysis / Benchmarking / Heuristic Evaluation for Institutional Portals.",
    link: "/work/institutional-audit",
    linkText: "View Analysis",
  },
  {
    id: "07",
    title: "Stelman VR Hub",
    category: ["VR", "AI"],
    img: "/Stelman-Preview.png",
    desc: "VAE Generative Models / Interaction Architecture / Spatial UI Design.",
    link: "/work/stelman-vr",
    linkText: "Explore Journey",
  },
  {
    id: "08",
    title: "Stylekid Mobile",
    category: ["Product UX"],
    img: "/stylekid.png",
    desc: "Circular Fashion Marketplace / Wireframing & Prototyping / Parent-Centric Flows.",
    link: "/work/stylekid",
    linkText: "View UX Flow",
  },
  {
    id: "09",
    title: "EUI Table Cards",
    category: ["Editorial"],
    img: "/eui-table-cards.png",
    desc: "Wayfinding / Visual Identity / Information Hierarchy for Academic Events.",
    link: "/work/eui-table-cards",
    linkText: "View Design",
  },
  {
    id: "10",
    title: "Oplà Academy",
    category: ["EdTech UX"],
    img: "/Opla.png",
    desc: "End-to-End Product Design / Educational Dashboard / Style Guides.",
    link: "/work/opla-academy",
    linkText: "View Project",
  },
  {
    id: "11",
    title: "Trendies Jewelry",
    category: ["Luxury E-com"],
    img: "/trendies.png",
    desc: "Catalog Logic / Specialized Component Design / High-End UI Architecture.",
    link: "/work/trendies-jewelry",
    linkText: "View Strategy",
  },
  {
    id: "12",
    title: "CatchONTO",
    category: ["Ontology"],
    img: "/catch.png",
    desc: "Semantic Modeling / Formal Knowledge Representation / OWL Architecture.",
    link: "/work/catch-onto",
    linkText: "View Ontology",
  },
  {
    id: "13",
    title: "Frida Kahlo LOD",
    category: ["Semantic Web"],
    img: "/Frida.png",
    desc: "Cultural Heritage / Linked Open Data / Knowledge Extraction Architecture.",
    link: "/work/frida-lod",
    linkText: "Explore Data",
  },
  {
    id: "14",
    title: "The Invitation",
    category: ["Narrative UX"],
    img: "/Invitation-Preview.png",
    desc: "Gamified Scavenger Hunt / Branching Narratives / Cultural Experience.",
    link: "/work/the-invitation",
    linkText: "Explore Journey",
  },
  
  {
    id: "15",
    title: "Cyber Strategy",
    category: ["Reporting"],
    img: "/Cyber-Preview.png",
    desc: "Technical Communication / Stakeholder Audits / Executive Analysis.",
    link: "/work/cybersecurity-presentation",
    linkText: "View Deck",
  },
  {
    id: "16",
    title: "Lumon Industries",
    category: ["Identity"],
    img: "/severance.png",
    desc: "Corporate Minimalism / Psychological Design Architecture / Graphic Study.",
    link: "/work/severance-branding",
    linkText: "View Identity",
  },
  {
    id: "17",
    title: "Crossfit Redesign",
    category: ["Wireframing"],
    img: "/crossfit.png",
    desc: "Skeletal Design / Experience Architecture / Flow Optimization.",
    link: "/work/crossfit-redesign",
    linkText: "View Skeleton",
  },
  {
    id: "18",
    title: "Bocce Sport",
    category: ["Branding"],
    img: "/bocce.png",
    desc: "High-Impact Event Identity / Sports Communication / Visual Assets.",
    link: "/work/bocce-sport",
    linkText: "View Project",
  },
  {
    id: "19",
    title: "Smartbuy Glasses",
    category: ["Retail"],
    img: "/SmartBuyGlasses_Logo.jpg",
    desc: "Commercial Graphic Design / Product-Centric Layouts / Visual Retail Strategy.",
    link: "/work/smartbuy-glasses",
    linkText: "View Design",
  },
  {
    id: "20",
    title: "Chess Masters",
    category: ["Identity"],
    img: "/chess.png",
    desc: "Minimalist Branding / Geometric Strategy / Tournament Identity.",
    link: "/work/chess-tournament",
    linkText: "View Identity",
  },
  {
    id: "21",
    title: "The Party Edit",
    category: ["Event Identity"],
    img: "/party-flyer.png",
    desc: "Atmospheric Nightlife Branding / Social Media Visuals / Typography Study.",
    link: "/work/party-flyer",
    linkText: "View Strategy",
  },
  {
    id: "22",
    title: "Accessibility & QA",
    category: ["WCAG 2.2"],
    img: "/accessibility.png",
    desc: "Software testing / QA Strategy / Compliance audits for Global Enterprise Clients.",
    link: "/work/accessibility-qa",
    linkText: "View Case Study",
    isNDA: true,
  },
  {
    id: "23",
    title: "TELUS — Conversation Design",
    category: ["Conversational UX", "Team Lead"],
    img: null,
    desc: "Conversational design / stakeholder alignment / process improvement across distributed teams (NDA-safe).",
    link: "/work/telus-conversational-design",
    linkText: "View Role",
    isNDA: true,
  },
];

const MOODBOARDS = [
  { id: 1, title: "Cyber-Tech", url: "https://www.canva.com/design/DAG-xkJIfNw/view", img: "/mood1.png" },
  { id: 2, title: "Luxury Minimal", url: "https://www.canva.com/design/DAG7ZAfnb-E/view", img: "/mood2.png" },
  { id: 3, title: "Organic UI", url: "https://www.canva.com/design/DAGwl5IT8oQ/view", img: "/mood3.png" },
  { id: 4, title: "Editorial", url: "https://www.canva.com/design/DAG2tmy_7fs/view", img: "/mood4.png" },
  { id: 5, title: "Brutalist", url: "https://www.canva.com/design/DAGFHt7FxOw/view", img: "/mood5.png" }
];

// --- COMPONENTS ---

type Project = {
  id: string;
  title: string;
  category: string[];
  img: string | null;
  desc: string;
  link: string | null;
  linkText?: string;
  isNDA?: boolean;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const staggerClass = index % 2 !== 0 ? "md:mt-32" : "";
  
  return (
    <article className={`group space-y-6 ${staggerClass}`}>
      <div className="aspect-video bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden relative transition-all duration-500 group-hover:border-blue-500 shadow-2xl text-left">
        {project.img ? (
          <Image 
            src={project.img} 
            alt={project.title} 
            fill 
            className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" 
          />
        ) : (
          <div className="absolute top-4 right-4 px-3 py-1 bg-zinc-900 text-[8px] uppercase tracking-widest text-zinc-500 rounded-full cursor-default">
            NDA Protected
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center font-black text-white/5 text-9xl italic pointer-events-none group-hover:text-blue-500/10 transition-colors">
          {project.id}
        </div>
      </div>

      <div className="flex justify-between items-start text-left">
        <h3 className="text-2xl font-bold uppercase text-white tracking-tighter">{project.title}</h3>
        <div className="flex gap-2 flex-wrap justify-end">
          {project.category.map((cat, i) => (
            <span key={i} className="px-3 py-1 bg-zinc-900 text-zinc-400 text-[9px] uppercase font-bold tracking-widest rounded-full border border-zinc-800 cursor-default hover:border-blue-500 transition-colors">
              {cat}
            </span>
          ))}
        </div>
      </div>

      <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest leading-loose mb-6 italic text-left">
        {project.desc}
      </p>

      {project.link && (
        <Link 
          href={project.link} 
          className="relative inline-block px-8 py-3 bg-zinc-900 text-blue-500 font-bold text-xs uppercase tracking-widest border border-blue-500/20 hover:border-blue-500 transition-all overflow-hidden group/btn text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <span className="relative z-10">{project.linkText}</span>
          <span className="absolute inset-0 bg-blue-500/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
        </Link>
      )}
    </article>
  );
};

type ServiceCardProps = {
  number: string;
  title: string;
  desc: string;
};

const ServiceCard = ({ number, title, desc }: ServiceCardProps) => (
  <div className="p-8 border border-white/10 hover:bg-white/5 transition-all group">
    <h4 className="font-bold uppercase tracking-widest text-blue-300 text-xs mb-4 italic">
      {number} / {title}
    </h4>
    <p className="text-blue-50 font-medium text-lg leading-snug italic">{desc}</p>
  </div>
);

// --- MAIN PAGE ---

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-blue-500 underline-offset-4">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-zinc-900/50" aria-label="Main Navigation">
        <div className="px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm">
            AT.
          </Link>
          
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
            <a href="#work" className="hover:text-white transition-colors tracking-widest focus:outline-none focus:text-blue-500">Portfolio</a>
            <a href="#about" className="hover:text-white transition-colors tracking-widest focus:outline-none focus:text-blue-500">The Architect</a>
            <a href="#management" className="hover:text-white transition-colors tracking-widest focus:outline-none focus:text-blue-500">Management</a>
          </div>

          <button 
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✕" : "MENU"}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-zinc-800 p-8 flex flex-col gap-6 text-center text-xs uppercase tracking-[0.2em] font-bold">
            <a href="#work" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-blue-500">Portfolio</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-blue-500">The Architect</a>
            <a href="#management" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-blue-500">Management</a>
          </div>
        )}
      </nav>

      <main id="main-content">
        
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-center px-8 pt-32 pb-20 max-w-7xl mx-auto">
          <header className="space-y-8">
            <span className="text-blue-500 font-mono text-xs tracking-widest uppercase block">
              UX Strategy & AI Intents @ Telus International & Applause
            </span>
            <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter uppercase italic text-white break-words">
              Design <br />
              <span className="text-zinc-900 stroke-zinc-700 stroke-1 hover:text-blue-600 transition-all duration-700 cursor-default">
                & SYSTEMS.
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-zinc-400 max-w-4xl font-light leading-snug">
              I bridge <span className="text-white italic">Digital Humanities</span> and <span className="text-white italic">Communication Sciences</span> with technical execution. 
              From building complex design systems to managing AI intents, I translate complexity into human-centric value.
            </p>
          </header>
        </section>

        {/* About Section */}
        <section id="about" className="px-8 py-20 md:py-32 max-w-7xl mx-auto border-t border-zinc-900">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-sm mx-auto bg-zinc-900 rounded-sm overflow-hidden group border border-zinc-800 hover:border-blue-500 transition-colors">
                    <Image 
                        src="/ale.jpg" 
                        alt="Alessandra Trenchi" 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 text-left">
                        <p className="text-xs font-mono uppercase tracking-widest text-blue-500 mb-1">Alessandra Trenchi</p>
                        <p className="text-xl font-bold italic text-white">Digital Humanist.</p>
                    </div>
                </div>

                <div className="space-y-12 text-left">
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-6 italic">The Architect</h2>
                        <h3 className="text-4xl md:text-5xl font-black italic uppercase leading-[0.9] text-white tracking-tighter">
                            Logic meets <br/> <span className="text-zinc-600">Intuition.</span>
                        </h3>
                    </div>
                    <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                        <p>I  design interfaces & I structure information. My background in <strong className="text-white font-bold">Communication & Digital Humanities</strong> allows me to see the code behind the culture.</p>
                        <p>Whether it's training AI models for <strong className="text-white font-bold">Telus</strong> or ensuring accessibility for <strong className="text-white font-bold">Applause</strong>, I bring a rigorous precision to the chaotic world of tech.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-900">
                        <div><span className="block text-3xl font-black text-white">4+</span><span className="text-xs uppercase tracking-widest text-zinc-500">Years Exp</span></div>
                        <div><span className="block text-3xl font-black text-white">EN/IT</span><span className="text-xs uppercase tracking-widest text-zinc-500">Bilingual</span></div>
                        <div><span className="block text-3xl font-black text-white">∞</span><span className="text-xs uppercase tracking-widest text-zinc-500">Curiosity</span></div>
                    </div>
                </div>
            </div>
        </section>

        {/* Work Grid */}
        <section id="work" className="px-8 py-20 md:py-32 max-w-7xl mx-auto border-t border-zinc-900">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-20">Strategic Projects</h2>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-24 md:gap-y-40">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Management Section */}
        <section id="management" className="bg-blue-950 text-white py-20 md:py-40 px-8">
          <div className="max-w-7xl mx-auto text-left">
            <h2 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter mb-20 leading-none italic border-b border-white/20 pb-10">
              Proactive <br /> Management.
            </h2>
            <div className="grid md:grid-cols-3 gap-16">
              <ServiceCard 
                number="01" 
                title="Career Strategy" 
                desc="Engineering professional career assets and competitive CVs that transform personal stories into high-value market products." 
              />
              <ServiceCard 
                number="02" 
                title="UX Audits" 
                desc="Evaluations of institutional portals and complex digital services to ensure accessibility, logic, and operational efficiency." 
              />
              <ServiceCard 
                number="03" 
                title="Visual Design" 
                desc="High-impact visual communication for events, tournaments, and high-end retail branding for international audiences." 
              />
            </div>

            {/* CV Gallery */}
            <div className="mt-32 pt-20 border-t border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300 mb-12 italic text-left">
                Case Study: Competitive Branding
              </h3>
              {/* Changed to grid-cols-3 to fit Imre's card */}
              <div className="grid md:grid-cols-3 gap-12">
                <div className="p-12 bg-blue-900 border border-white/10 rounded-sm group transition-all hover:bg-blue-800 text-left">
                  <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-white italic">Project: AI Data Specialist</h4>
                  <p className="text-blue-100 mb-6 font-light italic text-xl">"Rebranding a multilingual specialist to dominate the AI training and RLHF market."</p>
                  <Link href="/work/career-strategy-alexandrina" className="text-white font-bold text-xs uppercase tracking-widest border-b border-white pb-1 hover:text-blue-300 hover:border-blue-300 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded-sm">
                    View Strategy
                  </Link>
                </div>
                
                {/* NEW: IMRE'S CARD */}
                <div className="p-12 bg-blue-900 border border-white/10 rounded-sm group transition-all hover:bg-blue-800 text-left">
                  <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-white italic">Project: Operations Lead</h4>
                  <p className="text-blue-100 mb-6 font-light italic text-xl">"Turning a manual labor background into a Technical Operations profile."</p>
                  <Link href="/work/imre-cv" className="text-white font-bold text-xs uppercase tracking-widest border-b border-white pb-1 hover:text-blue-300 hover:border-blue-300 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded-sm">
                    View Strategy
                  </Link>
                </div>

                <div className="p-12 bg-blue-900 border border-white/10 rounded-sm group transition-all hover:bg-blue-800 text-left">
                  <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-white italic">Project: Tech Support Lead</h4>
                  <p className="text-blue-100 mb-6 font-light italic text-xl">"Positioning a customer success pro as a technical 'Fixer' for high-volume environments."</p>
                  <Link href="/work/career-strategy-filip" className="text-white font-bold text-xs uppercase tracking-widest border-b border-white pb-1 hover:text-blue-300 hover:border-blue-300 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded-sm">
                    View Strategy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Moodboards */}
        <section className="max-w-7xl mx-auto px-6 mt-60 border-t border-zinc-900 pt-32 pb-40 text-left">
          <div className="mb-20">
            <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] block mb-4 italic">
              Visual Research & Art Direction
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-white leading-none">
              The Moodboard <br /> Archive.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {MOODBOARDS.map((mood) => (
              <a 
                key={mood.id} 
                href={mood.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative aspect-[3/4] bg-zinc-900 border border-zinc-800 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
              >
                <div className="relative w-full h-full opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                  <Image src={mood.img} alt={mood.title} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
                </div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/90 via-transparent to-transparent z-10">
                  <span className="text-[8px] font-mono text-blue-500 uppercase tracking-widest mb-1 italic">Moodboard_{mood.id}</span>
                  <h4 className="text-white font-bold uppercase text-xs tracking-tighter transition-opacity">{mood.title} ↗</h4>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-8 py-40 max-w-7xl mx-auto text-center bg-[#0a0a0a]">
          <h2 className="text-[12vw] font-black uppercase tracking-tighter mb-12 italic text-zinc-800 leading-none">
            Contact.
          </h2>
          <p className="text-zinc-500 mb-12 font-mono uppercase tracking-widest text-xs italic">
            Strategic inquiries & Digital Humanities Consultancy:
          </p>
          <a 
            href="mailto:alessandratrenchi9@gmail.com" 
            className="text-2xl md:text-6xl font-black text-blue-500 underline decoration-blue-500/20 hover:decoration-blue-500 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2"
          >
            alessandratrenchi9@gmail.com
          </a>
        </section>
      </main>

      <footer className="px-8 py-12 border-t border-zinc-900 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600 flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">
        <span>Bologna / Sofia — International</span>
        <span>© 2026 Alessandra Trenchi</span>
      </footer>
    </div>
  );
}
