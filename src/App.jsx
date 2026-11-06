import React, { useState } from 'react';
import { 
  Briefcase, Award, GraduationCap, Mail, MapPin, 
  CheckCircle2, TrendingUp, Users, ShieldCheck, DollarSign, 
  Sparkles, ChevronRight, ChevronLeft, BookOpen, Layers, Send,
  Play, Clock, Building, Check, ExternalLink
} from 'lucide-react';

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeScene, setActiveScene] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setContactForm({ name: '', email: '', message: '' });
  };

  const hrScenes = [
    {
      id: 1,
      num: "01",
      title: "Talent Acquisition & Sourcing",
      tagline: "30+ hires/mo • 150+ interviews",
      metric: "30+ Recruits / Mo",
      desc: "End-to-end recruitment pipelines, LinkedIn talent sourcing, 92% candidate satisfaction and 88% offer acceptance rate.",
      bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      icon: Users
    },
    {
      id: 2,
      num: "02",
      title: "Smart Attendance & Biometrics",
      tagline: "35% discrepancy reduction",
      metric: "35% Accuracy Boost",
      desc: "Seamless synchronization of biometric hardware with Zoho People HRMS for automated shift management and attendance audit.",
      bgImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
      icon: Clock
    },
    {
      id: 3,
      num: "03",
      title: "100% Compliant Payroll",
      tagline: "Zoho Payroll • Statutory Filings",
      metric: "100% Compliance",
      desc: "Timely monthly salary disbursements, precise TDS calculations, PF, ESI, professional tax, and zero-defect statutory filings.",
      bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      icon: DollarSign
    },
    {
      id: 4,
      num: "04",
      title: "Employee Relations & POSH",
      tagline: "24-48h resolution • ICC Lead",
      metric: "95%+ Speedy SLA",
      desc: "Certified POSH Train-the-Trainer, internal grievance mediation, disciplinary governance, and proactive employee surveys.",
      bgImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
      icon: ShieldCheck
    },
    {
      id: 5,
      num: "05",
      title: "AI in HR & Automation",
      tagline: "SkillDeck & Claude/Gemini",
      metric: "AI-Driven HRIS",
      desc: "Leveraging modern AI tools to streamline job descriptions, policy synthesis, interview evaluation rubrics, and HR analytics.",
      bgImage: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=600&q=80",
      icon: Sparkles
    },
    {
      id: 6,
      num: "06",
      title: "Governance & Operations",
      tagline: "Vendor & facility efficiency",
      metric: "15% Cost Savings",
      desc: "Standardized employee handbooks, vendor contract negotiations, asset tracking, and comprehensive facility oversight.",
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      icon: Layers
    }
  ];

  const skillDeckCerts = [
    { title: "AI in HR", issuer: "SkillDeck Bangalore", issued: "Jul 2026", id: "SD 8792/JUL/WK-4275", category: "SkillDeck Top" },
    { title: "POSH Train The Trainer", issuer: "SkillDeck Bangalore", issued: "Aug 2026", id: "SD 9958/AUG/WK-4906", category: "SkillDeck Top" },
    { title: "Labour Code Webinar", issuer: "SkillDeck Bangalore", issued: "Jul 2026", id: "SD 4333/AUG/WK-5674", category: "SkillDeck Top" }
  ];

  const advancedCerts = [
    { title: "MASTER OF CLAUDE CODE", issuer: "Coursiv", category: "AI Productivity" },
    { title: "AI MASTERY CERTIFICATE PROGRAM", issuer: "Coursiv", category: "AI Productivity" },
    { title: "MASTER OF GEMINI", issuer: "Coursiv", category: "AI Productivity" },
    { title: "Master of ChatGPT: Deep Dive", issuer: "Coursiv", category: "ChatGPT & Gemini" },
    { title: "MASTER OF CLAUDE", issuer: "Coursiv", category: "Claude" },
    { title: "MASTER OF DEEPSEEK", issuer: "Coursiv", category: "AI Business" },
    { title: "AI for Business Operations", issuer: "Coursiv", category: "AI Business" },
    { title: "Master of Stable Diffusion", issuer: "Coursiv", category: "AI Creative" },
    { title: "AI Copywriting", issuer: "Coursiv", category: "AI Creative" },
    { title: "MASTER OF MIDJOURNEY AI", issuer: "Coursiv", category: "AI Creative" },
    { title: "JavaScript", issuer: "freeCodeCamp", issued: "May 2026", category: "Technical" },
    { title: "Responsive Web Design", issuer: "freeCodeCamp", issued: "Apr 2026", category: "Technical" }
  ];

  return (
    <div className="relative min-h-screen text-slate-800 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      
      {/* SchoolStacker Luminous Full-Bleed Video Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-105 filter brightness-[0.98] contrast-[1.02]"
        >
          <source src="/HR_professionals_shaking_hands_1cd5d1a3_1080p.mp4" type="video/mp4" />
        </video>
        {/* Frosted luminous white wash for readable text & cards */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/45 to-[#F4F6F0]/95"></div>
        <div className="absolute inset-0 bg-sky-50/20 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Floating Glassmorphic Pill Header (SchoolStacker Style) */}
      <header className="sticky top-4 z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white/85 backdrop-blur-xl border border-white/80 shadow-lg shadow-slate-900/5 rounded-2xl md:rounded-full px-5 py-3 flex items-center justify-between transition-all">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B1849] flex items-center justify-center text-[#E5B83B] font-black text-lg shadow-md ring-2 ring-sky-500/20">
              HA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg">Harsha Allakonda</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">PREPDHA</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">Human Resources Manager & HR Tech Specialist</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'experience', label: 'Experience' },
              { id: 'expertise', label: 'Competencies' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id !== 'overview') {
                    document.getElementById('deep-dive-section')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#0B1849] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <a
              href="mailto:harshaallakonda1998@gmail.com"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 transition-all flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 sm:pt-12 sm:pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-sky-800 text-xs font-bold tracking-wide border border-white/80 shadow-sm">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>PREPDHA Executive HR Leadership</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Empowering People, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-700 to-[#0B1849]">
                Streamlining HR Operations.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              Results-driven Human Resources Manager at PREPDHA with extensive expertise in end-to-end Talent Acquisition, Zoho HRMS Payroll, Statutory Compliance, POSH, and AI-driven automation workflows.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => {
                  setActiveTab('experience');
                  document.getElementById('deep-dive-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Explore Experience</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-5 py-3.5 rounded-full bg-white/85 backdrop-blur-md text-slate-800 border border-white/90 font-bold text-sm shadow-md hover:bg-white hover:shadow-lg transition-all flex items-center gap-2.5"
              >
                <div className="w-6 h-6 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-600">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Story Video</span>
              </button>
            </div>

            {/* Backed & Certified By Bar (SchoolStacker style) */}
            <div className="pt-4 border-t border-slate-200/60">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-2.5">
                Certified & Verified Credentials
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="px-3 py-1 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200/80 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-sky-600" /> SkillDeck Bangalore
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200/80 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> POSH Trainer Certified
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200/80 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600" /> Zoho HRMS Specialist
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200/80 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Coursiv AI Master
                </span>
              </div>
            </div>
          </div>

          {/* Right Floating Video Card (SchoolStacker style) */}
          <div className="lg:col-span-5">
            <div className="bg-white/85 backdrop-blur-2xl rounded-3xl p-5 border border-white/90 shadow-2xl shadow-slate-900/10 space-y-4">
              <div 
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer shadow-inner bg-slate-900"
              >
                <video 
                  muted 
                  loop 
                  autoPlay 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                >
                  <source src="/HR_professionals_shaking_hands_1cd5d1a3_1080p.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sky-600 shadow-2xl group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <span className="text-white text-xs font-bold mt-2 drop-shadow-md">Play Story Video</span>
                </div>
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-800">
                  HD 1080p
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-800">Active Ecosystem</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500">PREPDHA HR Management</span>
              </div>

              {/* Quick Highlight Stats Strip */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                <div className="bg-slate-50/80 p-2.5 rounded-xl text-center border border-slate-100">
                  <div className="text-base font-black text-slate-900">30+</div>
                  <div className="text-[10px] text-slate-500 leading-tight">Hires / Mo</div>
                </div>
                <div className="bg-slate-50/80 p-2.5 rounded-xl text-center border border-slate-100">
                  <div className="text-base font-black text-emerald-700">35%</div>
                  <div className="text-[10px] text-slate-500 leading-tight">Attendance Acc.</div>
                </div>
                <div className="bg-slate-50/80 p-2.5 rounded-xl text-center border border-slate-100">
                  <div className="text-base font-black text-sky-700">100%</div>
                  <div className="text-[10px] text-slate-500 leading-tight">Compliance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SchoolStacker Interactive Scene Stacker Dock */}
        <div className="mt-10 bg-white/85 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-900/10 border border-white/90">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/70">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" /> Interactive Operations Showcase
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Experience HR Leadership in 6 Core Scenes
              </h2>
            </div>

            {/* Navigation Buttons < 1 / 6 > */}
            <div className="flex items-center space-x-3 self-end lg:self-center">
              <button
                onClick={() => setActiveScene((prev) => (prev > 0 ? prev - 1 : hrScenes.length - 1))}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm hover:bg-slate-50 hover:border-sky-500 hover:text-sky-600 transition-all"
                aria-label="Previous scene"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-xs font-bold text-slate-700 px-3 py-1.5 rounded-full bg-slate-100 font-mono">
                {activeScene + 1} / {hrScenes.length}
              </div>
              <button
                onClick={() => setActiveScene((prev) => (prev < hrScenes.length - 1 ? prev + 1 : 0))}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm hover:bg-slate-50 hover:border-sky-500 hover:text-sky-600 transition-all"
                aria-label="Next scene"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Scene Thumbnails Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6">
            {hrScenes.map((scene, idx) => {
              const isSelected = activeScene === idx;
              return (
                <div
                  key={scene.id}
                  onClick={() => setActiveScene(idx)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'ring-4 ring-sky-500 shadow-xl shadow-sky-500/20 scale-[1.03]'
                      : 'border border-slate-200 hover:border-sky-300 opacity-80 hover:opacity-100 hover:scale-[1.01]'
                  }`}
                >
                  <div className="h-28 sm:h-32 w-full relative overflow-hidden bg-slate-900">
                    <img 
                      src={scene.bgImage} 
                      alt={scene.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                      {scene.num}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <div className="text-[11px] font-bold leading-tight line-clamp-2">{scene.title}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Scene Detail Banner */}
          <div className="mt-6 bg-gradient-to-r from-slate-900 via-[#0B1849] to-slate-900 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-500 text-white">
                  SCENE {hrScenes[activeScene].num}
                </span>
                <span className="text-xs text-sky-300 font-semibold">{hrScenes[activeScene].tagline}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{hrScenes[activeScene].title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{hrScenes[activeScene].desc}</p>
            </div>
            <div className="shrink-0 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 text-center">
              <div className="text-xs text-sky-300 font-bold uppercase">Proven Impact</div>
              <div className="text-lg font-black text-[#E5B83B]">{hrScenes[activeScene].metric}</div>
            </div>
          </div>
        </div>

        {/* 3 Floating Bottom Feature Cards (Matching SchoolStacker bottom pills) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/85 backdrop-blur-xl p-5 rounded-2xl border border-white/80 shadow-lg shadow-slate-900/5 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-900">Secure & Reliable</h4>
              <p className="text-xs text-slate-500 font-medium">Enterprise Labour Laws & POSH Governance</p>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-xl p-5 rounded-2xl border border-white/80 shadow-lg shadow-slate-900/5 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-900">Cloud HRIS Ecosystem</h4>
              <p className="text-xs text-slate-500 font-medium">Zoho People & Zoho Payroll System Admin</p>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-xl p-5 rounded-2xl border border-white/80 shadow-lg shadow-slate-900/5 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-900">Real-Time People Analytics</h4>
              <p className="text-xs text-slate-500 font-medium">35% Discrepancy Cut & 95%+ Grievance SLA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Deep-Dive Section */}
      <main id="deep-dive-section" className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs Pill Bar */}
        <div className="flex overflow-x-auto space-x-2 pb-3 mb-8 scrollbar-none border-b border-slate-200/70">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'experience', label: 'Professional Experience' },
            { id: 'expertise', label: 'Core Competencies' },
            { id: 'certifications', label: 'Certifications' },
            { id: 'education', label: 'Education' },
            { id: 'contact', label: 'Contact' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#0B1849] text-white shadow-lg scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white hover:text-slate-900 border border-slate-200/80 shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-slate-900/5 border border-white/80">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-sky-600" /> Executive Summary
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                I am a results-driven Human Resources professional currently serving as Human Resources Manager at <strong>PREPDHA</strong>, with extensive experience in HR Operations, Talent Acquisition, Payroll Management, Employee Relations, and Statutory Compliance. I specialize in streamlining HR processes, building scalable recruitment pipelines, strengthening employee engagement, and ensuring rigorous compliance with organizational policies and applicable labour regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-lg shadow-slate-900/5 border border-white/80 border-t-4 border-t-sky-600">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 mb-4 font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Talent Acquisition</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  End-to-end recruitment pipelines, 150+ annual interviews, 92% candidate satisfaction, and 88% offer acceptance rate.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-lg shadow-slate-900/5 border border-white/80 border-t-4 border-t-emerald-600">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 font-bold">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Payroll & HRIS</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Zoho People & Zoho Payroll administration, 100% payroll accuracy, statutory filings, and 35% biometric attendance improvement.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-lg shadow-slate-900/5 border border-white/80 border-t-4 border-t-amber-500">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4 font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Compliance & POSH</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  POSH compliance, ICC leadership, labour laws audit, disciplinary frameworks, and grievance resolution within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EXPERIENCE */}
        {activeTab === 'experience' && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-sky-600" /> Professional Experience
            </h2>

            <div className="space-y-6">
              {/* Prepdha */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-slate-900/5 border border-white/80 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b from-sky-500 to-[#0B1849]"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-sky-100 text-sky-800">Current Role</span>
                    <h3 className="text-2xl font-black text-slate-900 mt-2">Human Resources Manager</h3>
                    <p className="text-sky-700 font-bold text-sm">Prepdha • Hyderabad, Telangana, India</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-xs font-bold px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-mono">
                    February 2026 - Present (10 months)
                  </div>
                </div>
                <ul className="space-y-3 mt-5 text-slate-700 text-sm">
                  {[
                    "Lead end-to-end HR operations, including employee onboarding, attendance management, payroll processing, employee records, and HR administration using Zoho People and Zoho Payroll.",
                    "Oversee attendance and biometric systems for 20+ employees, reducing attendance discrepancies by 35% and improving payroll accuracy.",
                    "Process monthly payroll with 100% accuracy while ensuring timely salary disbursement and statutory and tax compliance.",
                    "Resolve 95%+ employee grievances within 24-48 hours, strengthening employee satisfaction and workplace engagement.",
                    "Spearhead end-to-end talent acquisition, successfully recruiting 30+ professionals within a single month through LinkedIn and other recruitment channels.",
                    "Facilitate 150+ interviews annually, partnering with leadership and hiring stakeholders to achieve 92% candidate satisfaction and an 88% offer acceptance rate.",
                    "Build strategic talent pipelines for critical positions, reducing urgent hiring turnaround time by 50%.",
                    "Develop and implement HR policies, employee handbooks, and workplace procedures, ensuring 100% compliance with applicable labour regulations.",
                    "Drive POSH compliance initiatives, conduct employee awareness programs, and oversee Internal Complaints Committee (ICC) activities.",
                    "Conduct HR compliance audits and ensure adherence to labour laws, statutory filings, and organizational policies.",
                    "Strengthen workplace governance through POSH, Disciplinary, and Employee Welfare Committees.",
                    "Oversee administrative operations, vendor management, and facility support, reducing operational costs by 15%."
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Genesys Info X */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-slate-900/5 border border-white/80 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b from-slate-400 to-slate-700"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Human Resources Executive</h3>
                    <p className="text-slate-600 font-bold text-sm">Genesys Info X • Hyderabad, Telangana, India</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-xs font-bold px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-mono">
                    September 2022 - January 2026 (3 years 5 months)
                  </div>
                </div>
                <ul className="space-y-3 mt-5 text-slate-700 text-sm">
                  {[
                    "Maintained and updated HRIS records for 20-50 employees, ensuring data accuracy, confidentiality, and compliance with organizational policies.",
                    "Conducted 50 employee engagement surveys and analyzed feedback to identify opportunities for improving employee satisfaction and workplace experience.",
                    "Researched HR best practices and industry trends, recommending improvements to organizational policies, procedures, and HR operations.",
                    "Liaised with multiple departments to address employee queries, resolve workplace concerns, and strengthen internal HR communication.",
                    "Supported performance management and evaluation processes for 50 employees, ensuring accurate documentation and timely review coordination.",
                    "Conducted 30 employee exit interviews, analyzed feedback, and identified opportunities to improve employee retention and workplace practices.",
                    "Identified operational bottlenecks and recommended process improvements to streamline HR workflows and enhance organizational efficiency.",
                    "Facilitated employee relations and grievance resolution through effective communication, mediation, and conflict management.",
                    "Administered employee leave requests in accordance with applicable employment regulations and organizational policies.",
                    "Supported 50 professional development and training initiatives to enhance employee capabilities, strengthen workforce skills, and encourage career growth."
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COMPETENCIES */}
        {activeTab === 'expertise' && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Layers className="w-6 h-6 text-sky-600" /> Core HR Expertise & Competencies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "HR Operations & Generalist Functions", desc: "End-to-end HR workflows, policy deployment, employee records, and administrative governance." },
                { title: "Talent Acquisition & Recruitment", desc: "Sourcing, LinkedIn recruitment pipelines, stakeholder partnering, interviewing, and offer management." },
                { title: "Payroll & Administration", desc: "Zoho Payroll execution, salary disbursement, tax calculations, and compensation structuring." },
                { title: "Statutory Compliance & Labour Laws", desc: "Labour regulations adherence, compliance audits, statutory filings, and provident fund oversight." },
                { title: "Employee Relations & Engagement", desc: "Grievance handling (24-48h turnaround), engagement surveys, mediation, and retention strategies." },
                { title: "Performance Management", desc: "Appraisal cycle coordination, evaluation documentation, and feedback analysis for 50+ staff." },
                { title: "HR Policies & Documentation", desc: "Employee handbooks, onboarding contracts, NDAs, and corporate compliance procedures." },
                { title: "POSH Compliance & ICC Management", desc: "Prevention of Sexual Harassment awareness programs, committee governance, and training." },
                { title: "HRMS (Zoho People & Zoho Payroll)", desc: "System administration, biometric attendance sync, leave tracking, and data integrity." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-lg shadow-slate-900/5 border border-white/80 hover:shadow-xl hover:scale-[1.01] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-black mb-3">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CERTIFICATIONS */}
        {activeTab === 'certifications' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-sky-600" /> Licenses & Certifications
              </h2>
              <p className="text-sm text-slate-600">
                Verified professional credentials spanning HR operations, specialized training, and advanced AI workflow mastery.
              </p>
            </div>

            {/* SkillDeck Top Featured */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" /> SkillDeck Bangalore (Top Featured HR Certifications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillDeckCerts.map((cert, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white p-6 rounded-3xl shadow-xl border-2 border-[#E5B83B] relative">
                    <div className="absolute top-4 right-4 bg-[#E5B83B] text-[#0B1849] text-[10px] font-black px-2 py-0.5 rounded">
                      FEATURED
                    </div>
                    <h4 className="font-bold text-lg text-white mb-1 pr-12">{cert.title}</h4>
                    <p className="text-xs text-[#E5B83B] font-semibold mb-3">{cert.issuer}</p>
                    <div className="text-xs text-slate-300 space-y-1 pt-3 border-t border-white/10">
                      <p>Issued: {cert.issued}</p>
                      <p className="font-mono text-[11px] text-[#E5B83B]">ID: {cert.id}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Advanced Certifications */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-slate-900">Coursiv, Claude, ChatGPT, Gemini & Technical Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {advancedCerts.map((cert, idx) => (
                  <div key={idx} className="bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-sky-500 transition-all">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase tracking-wide">
                        {cert.category}
                      </span>
                      <h4 className="font-bold text-slate-800 text-sm mt-2">{cert.title}</h4>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>{cert.issuer}</span>
                      {cert.issued && <span className="font-semibold text-sky-700">{cert.issued}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: EDUCATION */}
        {activeTab === 'education' && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-sky-600" /> Education & Academic Background
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-lg shadow-slate-900/5 border border-white/80">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">Engineering Degree</span>
                <h3 className="text-lg font-bold text-slate-900 mt-3">Bachelor of Technology - BTech</h3>
                <p className="text-sm font-semibold text-slate-700">Metallurgical and Materials Engineering</p>
                <p className="text-xs text-slate-500 mt-1">RGUKT Basar / Rajiv Gandhi University of Knowledge Technologies, RK Valley (RAC)</p>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
                  June 2016 - September 2020
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-lg shadow-slate-900/5 border border-white/80">
                <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full">Pre-University</span>
                <h3 className="text-lg font-bold text-slate-900 mt-3">Pre University Course (PUC)</h3>
                <p className="text-sm font-semibold text-slate-700">M.Bi.P.C (Mathematics, Biology, Physics, Chemistry)</p>
                <p className="text-xs text-slate-500 mt-1">Rajiv Gandhi University of Knowledge Technologies, RK Valley (RAC)</p>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
                  May 2016 - May 2016
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: CONTACT */}
        {activeTab === 'contact' && (
          <div className="space-y-8 animate-fadeIn max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-slate-900/5 border border-white/80">
              <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                <Mail className="w-6 h-6 text-sky-600" /> Let's Connect
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Open to discussions regarding HR strategy, talent management, HR operations, and people development. Send a message directly below!
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 text-sm bg-white/80"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 text-sm bg-white/80"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 text-sm bg-white/80"
                    placeholder="Discuss HR opportunities, consulting, or talent strategy..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-xl border-t border-slate-200/80 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Harsha Allakonda • Human Resources Manager at PREPDHA</p>
          <div className="flex items-center space-x-6">
            <a href="mailto:harshaallakonda1998@gmail.com" className="hover:text-sky-600 transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/harsha-allakonda-8134813b4" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Story Video Preview Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-all"
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="aspect-video w-full bg-black">
              <video controls autoPlay className="w-full h-full object-contain">
                <source src="/HR_professionals_shaking_hands_1cd5d1a3_1080p.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-6 bg-slate-900 flex items-center justify-between text-white border-t border-white/10">
              <div>
                <h3 className="font-bold text-lg">Executive Story • HR Leadership in Action</h3>
                <p className="text-xs text-slate-400">Harsha Allakonda • Human Resources Manager at PREPDHA</p>
              </div>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-colors"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
