
import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  CheckCircle2, 
  ChevronRight,
  Layers,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
  Clock,
  ShieldAlert,
  Search,
  ArrowUpRight
} from 'lucide-react';

const CALENDLY_LINK = "https://calendly.com/stratai-growth/operations-assessment";

const StrataiLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 sm:gap-4 ${className} group`}>
    <div className="flex items-end gap-1 sm:gap-1.5 h-5 sm:h-8">
      <div className="w-1.5 sm:w-2.5 h-3 bg-[#FF9900] rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
      <div className="w-1.5 sm:w-2.5 h-5 bg-[#FF9900] rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-1.5 sm:w-2.5 h-full bg-[#FF9900] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
    </div>
    <span className="text-lg sm:text-2xl font-black tracking-tighter text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Stratai.io</span>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-3 sm:py-4 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl' : 'py-5 sm:py-10'}`}>
      <div className="container mx-auto px-4 sm:px-8 md:px-12 flex justify-between items-center">
        <StrataiLogo className="cursor-pointer" />
        <button 
          onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-premium px-4 py-2.5 sm:px-8 sm:py-3 text-[9px] sm:text-xs tracking-widest whitespace-nowrap"
        >
          Book Assessment
        </button>
      </div>
    </nav>
  );
};

interface ScrollRevealProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  // Added key to fix TS errors in loops where key is passed as a prop
  key?: React.Key;
}

const ScrollReveal = ({ children, className = "", delay = 0 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 sm:translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto text-center max-w-6xl relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-12">
            <span className="badge-premium text-[7px] sm:text-[10px] whitespace-nowrap">Industrial OS / v2.5.0 Deployment</span>
          </div>
          
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-[1.1] sm:leading-[0.85] tracking-tighter uppercase mb-6 sm:mb-12">
            <span className="text-reveal block">AI-POWERED</span>
            <span className="orange-gradient block">SYSTEMS.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-sm sm:text-lg md:text-2xl text-white/50 mb-10 sm:mb-20 font-medium leading-relaxed px-2 sm:px-8">
            Custom operational brains for production, procurement, and planning — built for reliability and real-world factory constraints.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-24 w-full max-w-5xl mx-auto text-left px-2 sm:px-4">
            {[
              { icon: Workflow, text: "Auditable workflows replacing manual coordination." },
              { icon: Layers, text: "One operational brain for ERP, machines, and staff." },
              { icon: Zap, text: "Throughput optimization without legacy system replacement." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group p-4 border border-white/5 bg-white/[0.02] md:border-0 md:bg-transparent md:border-l md:border-white/10 md:pt-6 md:pl-6">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9900] shrink-0" />
                <p className="text-[9px] sm:text-[11px] font-bold uppercase tracking-widest text-white/40 leading-snug">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <button 
              onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-premium w-full sm:w-auto px-8 sm:px-12 py-4.5 sm:py-6 text-xs sm:text-base shadow-xl"
            >
              Book Assessment
            </button>
            <button 
               onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline w-full sm:w-auto px-8 sm:px-12 py-4.5 sm:py-6 text-xs sm:text-base flex items-center justify-center gap-3 group border-white/10"
            >
              See How It Works
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 sm:py-40 md:py-60 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-24 md:gap-40 items-start">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[1] sm:leading-[0.9] mb-8 sm:mb-12">
              THE REAL PAIN ISN'T <br className="hidden sm:block" /> TECHNOLOGY. <br />
              <span className="text-white/20">IT'S COORDINATION.</span>
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-[#FF9900] mb-8 sm:mb-12"></div>
            <p className="text-white/40 text-base sm:text-xl font-medium leading-relaxed max-w-md">
              Production data in one system, planning in another, procurement in Excel. These are not people problems. They are system design failures.
            </p>
          </ScrollReveal>
          
          <div className="grid gap-6 sm:gap-12">
            {[
              { title: "Siloed Intelligence", desc: "Process flows exist only in people's heads, creating massive operational fragility." },
              { title: "Manual Firefighting", desc: "Too much follow-up, status checks, and approvals consuming engineering bandwidth." },
              { title: "Outdated Visibility", desc: "Reporting takes days and is already obsolete by the time it reaches the board." }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group border-b border-white/5 pb-8 sm:pb-12">
                  <span className="mono text-[#FF9900] text-[9px] sm:text-xs font-bold mb-3 sm:mb-4 block">PROTOCOL 0{i+1}</span>
                  <h4 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-white mb-2 sm:mb-4">{item.title}</h4>
                  <p className="text-white/40 text-xs sm:text-sm leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  return (
    <section className="py-20 sm:py-40 md:py-60 bg-[#050505] px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal className="text-center mb-16 sm:mb-32">
          <h6 className="badge-premium mb-6 sm:mb-8 text-[8px] sm:text-[10px]">The Orchestration Layer</h6>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 sm:mb-8 leading-tight sm:leading-none">
            AN OPERATIONAL BRAIN <br className="hidden sm:block" />
            <span className="orange-gradient">FOR YOUR FACTORY.</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed px-2 sm:px-4">
            We don't replace your ERP. We build the automation layer that orchestrates it. n8n + AI Agents become the central control center.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {[
            { 
              title: "Connect", 
              desc: "Machines, People, Software, and Data connected by real-time workflows.",
              icon: Search
            },
            { 
              title: "Orchestrate", 
              desc: "AI Agents monitor workflows and govern processes based on your specific logic.",
              icon: Settings
            },
            { 
              title: "Governor", 
              desc: "Exception-based reporting and decision alerts for total operational command.",
              icon: ShieldCheck
            }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 150} className="h-full">
              <div className="glass-card p-8 sm:p-12 text-left relative overflow-hidden group h-full flex flex-col">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/5 rounded-full mb-6 sm:mb-8 group-hover:border-[#FF9900]/30 transition-all duration-500">
                  <item.icon className="w-5 h-5 text-[#FF9900]" />
                </div>
                <h4 className="text-lg sm:text-2xl font-black uppercase mb-3 sm:mb-6 tracking-tight">{item.title}</h4>
                <p className="text-white/40 text-[11px] sm:text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-[#FF9900] sm:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  Deploy Protocol <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const AutomationGrid = () => {
  const categories = [
    { title: "Production", points: ["MO tracking", "WIP visibility", "Bottleneck alerts", "Dispatch priority"] },
    { title: "Quality", points: ["QC workflows", "Deviation tracking", "Audit logs", "Approval chains"] },
    { title: "Procurement", points: ["Auto PR → PO", "Low stock alerts", "Vendor follow-ups", "Batch tracking"] },
    { title: "Reporting", points: ["Real-time dashboards", "Ops summary bots", "Exception alerts", "Decision triggers"] }
  ];

  return (
    <section id="use-cases" className="py-20 sm:py-40 md:py-60 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="mb-12 sm:mb-24">
          <h2 className="text-3xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 sm:mb-12">WHAT WE <br /> <span className="text-white/20">AUTOMATE.</span></h2>
          <div className="h-px w-full bg-white/5"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {categories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 100} className="border-b sm:border-r border-white/5 last:border-r-0 p-8 sm:p-12 hover:bg-white/[0.03] transition-colors group">
              <h4 className="text-base sm:text-xl font-black uppercase mb-6 sm:mb-10 tracking-widest text-[#FF9900] group-hover:translate-x-1 transition-transform">{cat.title}</h4>
              <ul className="space-y-4 sm:space-y-6">
                {cat.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-4 text-[9px] sm:text-xs font-bold uppercase tracking-widest text-white/50">
                    <div className="w-1 h-1 bg-white/20 rounded-full shrink-0 mt-1.5"></div>
                    {p}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Operations Mapping", desc: "We map your real floor-level workflows and coordination points." },
    { title: "System Architecture", desc: "Design the logic layer, rules, exceptions, and ownership flows." },
    { title: "Integrate & Build", desc: "Connect n8n + AI Agents to your legacy ERP and spreadsheets." },
    { title: "Harden & Scale", desc: "Set up logging, retries, alerts, and enterprise-grade auditing." }
  ];

  return (
    <section className="py-20 sm:py-40 md:py-60 px-4 sm:px-6 bg-[#030303]">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-16 sm:mb-32">
          <h2 className="text-3xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">HOW WE <br /> <span className="text-white/20">OPERATE.</span></h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 150} className="text-left group">
              <div className="text-4xl sm:text-6xl font-black text-white/5 mono mb-4 sm:mb-8 group-hover:text-[#FF9900]/20 transition-all duration-500">0{i+1}</div>
              <h4 className="text-base sm:text-xl font-black uppercase mb-3 text-[#FF9900] tracking-tight">{step.title}</h4>
              <p className="text-white/40 text-[11px] sm:text-sm leading-relaxed">{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', size: '', pain: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    console.log('Submission Received:', formData);
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setTimeout(() => {
      window.location.href = CALENDLY_LINK;
    }, 1000);
  };

  return (
    <section id="assessment" className="py-20 sm:py-40 md:py-60 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FF9900]/5 pointer-events-none opacity-30"></div>
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-24 md:gap-40 items-center relative z-10">
          <ScrollReveal>
            <h6 className="badge-premium mb-6 sm:mb-8 text-[8px] sm:text-[10px]">Secure Assessment Diagnostics</h6>
            <h2 className="text-3xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[1] sm:leading-[0.85] mb-8 sm:mb-12">
              FIND YOUR <br className="hidden sm:block" /> BIGGEST <br className="hidden sm:block" /> <span className="text-[#FF9900]">BOTTLENECK.</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-xl font-medium leading-relaxed max-w-md">
              Book a factory automation assessment. We'll identify exactly where coordination friction is breaking your scale.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-card p-6 xs:p-10 md:p-16 relative overflow-hidden rounded-sm border-white/10 shadow-3xl">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-[#FF9900]/5 blur-3xl rounded-full"></div>
              {status === 'success' ? (
                <div className="text-center py-16 sm:py-24">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FF9900] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black uppercase mb-4 tracking-tight">Transmission Success</h3>
                  <p className="text-white/40 mono text-[9px] sm:text-xs uppercase tracking-[0.4em]">Routing to project bridge...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12">
                  <div className="space-y-6 sm:space-y-8">
                    <div className="group">
                      <label className="mono text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">Director Name</label>
                      <input 
                        required 
                        className="form-input text-base sm:text-xl border-white/5" 
                        placeholder="Your Full Name" 
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
                      <div className="group">
                        <label className="mono text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">Work Email</label>
                        <input 
                          required type="email" 
                          className="form-input text-base sm:text-xl border-white/5" 
                          placeholder="name@factory.com"
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="group">
                        <label className="mono text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">Direct Phone</label>
                        <input 
                          required type="tel" 
                          className="form-input text-base sm:text-xl border-white/5" 
                          placeholder="+1 000 000 0000"
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="mono text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">Primary Constraint</label>
                      <textarea 
                        required 
                        className="form-input h-20 sm:h-32 resize-none text-sm sm:text-lg border-white/5" 
                        placeholder="Describe your biggest operational bottleneck..."
                        onChange={e => setFormData({...formData, pain: e.target.value})}
                      ></textarea>
                    </div>
                  </div>
                  
                  <button type="submit" disabled={status === 'submitting'} className="btn-premium w-full py-4 sm:py-7 text-xs sm:text-base">
                    {status === 'submitting' ? 'Encrypting Data...' : 'Request Assessment'}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 sm:py-24 border-t border-white/5 bg-black px-4 sm:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <StrataiLogo className="mb-6" />
            <p className="text-white/30 text-xs sm:text-base font-medium leading-relaxed">
              Industrial AI Systems Engineering for modern manufacturers. We build high-reliability operational brains for ambitious factories worldwide.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end text-left md:text-right gap-6">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {['Automation', 'Orchestration', 'Governance', 'Optimization'].map(link => (
                <span key={link} className="text-[7px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">{link}</span>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-white/40 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em]">EST. 2024 / PROTOCOL ALPHA / v2.5.0</p>
              <p className="text-white/10 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">© Stratai.io // Systems Engineering Deployment</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#FF9900]/30 selection:text-white bg-black">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <AutomationGrid />
      
      {/* Visual Intermission */}
      <section className="py-24 sm:py-48 md:py-64 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,0,0.03)_0%,transparent_70%)]"></div>
        <ScrollReveal>
          <h3 className="text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-10 sm:mb-20 tracking-tighter text-white max-w-5xl mx-auto leading-[1.1] px-2">
            WE DON'T AUTOMATE CHAOS. <br className="hidden sm:block" /> <span className="text-[#FF9900]">WE FIX THE SYSTEM FIRST.</span>
          </h3>
          <div className="mono text-[7px] sm:text-[10px] text-white/20 uppercase tracking-[0.5em] font-bold">
            The Industrial Systems Engineering Mandate
          </div>
        </ScrollReveal>
      </section>

      <Process />
      
      {/* Strategic Selection Filter */}
      <section className="py-20 sm:py-40 md:py-60 px-4 sm:px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <ScrollReveal>
              <div className="glass-card p-8 sm:p-12 border-l-4 border-l-[#FF9900] h-full flex flex-col">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF9900] mb-8" />
                <h4 className="text-xl sm:text-3xl font-black uppercase mb-6 sm:mb-8 tracking-tighter">IDEAL PARTNER:</h4>
                <ul className="space-y-4 sm:space-y-6 flex-grow">
                  {[
                    "Operational maturity focus",
                    "Engineering coordination pain",
                    "Ready for predictable execution",
                    "Systemic process infrastructure"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/60 font-bold uppercase text-[8px] sm:text-[10px] tracking-[0.2em] leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-[#FF9900] rounded-full shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-card p-8 sm:p-12 border-l-4 border-l-white/10 h-full opacity-60 flex flex-col grayscale group hover:grayscale-0 transition-all duration-500">
                <ShieldAlert className="w-10 h-10 sm:w-12 sm:h-12 text-white/20 mb-8 group-hover:text-red-500/50 transition-colors" />
                <h4 className="text-xl sm:text-3xl font-black uppercase mb-6 tracking-tighter">INCOMPATIBLE:</h4>
                <ul className="space-y-4 sm:space-y-6 flex-grow">
                  {[
                    "One-off chatbot requests",
                    "Magic tool fix hunters",
                    "Resistant to process change",
                    "Fragmented leadership buy-in"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/30 font-bold uppercase text-[8px] sm:text-[10px] tracking-[0.2em] leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-white/10 rounded-full shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />
      
      <style>{`
        * { scroll-behavior: smooth; }
        
        .text-reveal {
          background: linear-gradient(to bottom, #fff 40%, rgba(255,255,255,0.4));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          display: inline-block;
        }

        .orange-gradient {
          background: linear-gradient(135deg, #FF9900 0%, #FF6600 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          display: inline-block;
        }

        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 640px) {
          .text-reveal, .orange-gradient {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
