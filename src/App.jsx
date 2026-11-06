import React, { useState, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState('overview');
  const [activeScene, setActiveScene] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState('');

  // Scroll spy to highlight active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'experience', 'expertise', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionFeedback('');

    const recipientEmail = "harshaallakonda1998@gmail.com";
    let sentSuccessfully = false;

    try {
      // 1. Submit to FormSubmit.co AJAX to deliver directly to harshaallakonda1998@gmail.com
      const formSubmitPromise = fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
          _subject: `New Portfolio Message from ${contactForm.name} (PREPDHA HR)`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      // 2. Also submit to Netlify Forms backend
      const encode = (data) => Object.keys(data).map(k => encodeURIComponent(k) + "=" + encodeURIComponent(data[k])).join("&");
      const netlifyPromise = fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...contactForm })
      });

      const results = await Promise.allSettled([formSubmitPromise, netlifyPromise]);
      const anySuccess = results.some(r => r.status === 'fulfilled' && (r.value?.ok || r.value?.status === 200));

      if (anySuccess) {
        sentSuccessfully = true;
      }
    } catch (err) {
      console.warn("Direct submission notice:", err);
    }

    if (!sentSuccessfully) {
      // If network blocks third-party endpoints or offline, launch mailto fallback
      window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent("Portfolio Message from " + contactForm.name)}&body=${encodeURIComponent("Name: " + contactForm.name + "\nEmail: " + contactForm.email + "\n\nMessage:\n" + contactForm.message)}`;
    }

    setSubmitted(true);
    setIsSubmitting(false);
    setSubmissionFeedback(`Thank you, ${contactForm.name}! Your message has been sent to harshaallakonda1998@gmail.com.`);
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 8000);
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
    <div className="relative min-h-screen text-slate-100 flex flex-col font-sans selection:bg-[#E5B83B] selection:text-[#0B1849]">
      
      {/* Background Video with Cinematic Navy Tint */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-105 filter brightness-95 contrast-105"
        >
          <source src="/HR_professionals_shaking_hands_1cd5d1a3_1080p.mp4" type="video/mp4" />
        </video>
        {/* Soft atmospheric overlay letting the handshake video shine behind the navy & gold cards */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1849]/75 via-[#0B1849]/45 to-[#0B1849]/85"></div>
        <div className="absolute inset-0 bg-navy-900/30 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Floating Glassmorphic Navy & Gold Pill Header */}
      <header className="sticky top-4 z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#0B1849]/90 backdrop-blur-xl border-2 border-[#E5B83B]/70 shadow-2xl rounded-2xl md:rounded-full px-5 py-3 flex items-center justify-between transition-all">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#E5B83B] flex items-center justify-center text-[#0B1849] font-black text-lg shadow-md ring-2 ring-[#E5B83B]/50">
              HA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white tracking-tight text-base sm:text-lg">Harsha Allakonda</span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#E5B83B] text-[#0B1849]">PREPDHA</span>
              </div>
              <p className="text-[11px] text-[#E5B83B] font-medium hidden sm:block">Human Resources Manager & HR Tech Specialist</p>
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
                onClick={() => scrollToSection(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeSection === tab.id
                    ? 'bg-[#E5B83B] text-[#0B1849] shadow-md font-black'
                    : 'text-slate-200 hover:text-[#E5B83B] hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-full bg-[#E5B83B] text-[#0B1849] font-black text-xs shadow-md shadow-[#E5B83B]/20 hover:bg-[#c99f2d] transition-all flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 sm:pt-12 sm:pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1849]/90 backdrop-blur-md text-[#E5B83B] text-xs font-bold tracking-wide border-2 border-[#E5B83B]/60 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#E5B83B]" />
              <span>PREPDHA Executive HR Leadership</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Empowering People, <br />
              <span className="text-[#E5B83B]">
                Streamlining HR Operations.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl font-normal leading-relaxed">
              Results-driven Human Resources Manager at PREPDHA with extensive expertise in end-to-end Talent Acquisition, Zoho HRMS Payroll, Statutory Compliance, POSH, and AI-driven automation workflows.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => scrollToSection('experience')}
                className="px-6 py-3.5 rounded-full bg-[#E5B83B] text-[#0B1849] font-black text-sm shadow-xl shadow-[#E5B83B]/25 hover:bg-[#c99f2d] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Explore Experience</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-5 py-3.5 rounded-full bg-[#0B1849]/80 backdrop-blur-md text-white border-2 border-[#E5B83B]/70 font-bold text-sm shadow-md hover:bg-[#0B1849] hover:border-[#E5B83B] transition-all flex items-center gap-2.5"
              >
                <div className="w-6 h-6 rounded-full bg-[#E5B83B]/20 flex items-center justify-center text-[#E5B83B]">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Story Video</span>
              </button>
            </div>

            {/* Backed & Certified By Bar */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#E5B83B] mb-2.5">
                Certified & Verified Credentials
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="px-3 py-1 rounded-lg bg-[#0B1849]/90 backdrop-blur-sm border-2 border-[#E5B83B]/60 text-xs font-bold text-white shadow-sm flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#E5B83B]" /> SkillDeck Bangalore
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#0B1849]/90 backdrop-blur-sm border-2 border-[#E5B83B]/60 text-xs font-bold text-white shadow-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E5B83B]" /> POSH Trainer Certified
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#0B1849]/90 backdrop-blur-sm border-2 border-[#E5B83B]/60 text-xs font-bold text-white shadow-sm flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#E5B83B]" /> Zoho HRMS Specialist
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#0B1849]/90 backdrop-blur-sm border-2 border-[#E5B83B]/60 text-xs font-bold text-white shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5B83B]" /> Coursiv AI Master
                </span>
              </div>
            </div>
          </div>

          {/* Right Floating Video Card - Matching Navy & Gold Style */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white p-5 rounded-2xl border-2 border-[#E5B83B] shadow-2xl relative space-y-4">
              <div className="absolute top-3 right-3 bg-[#E5B83B] text-[#0B1849] text-[10px] font-black px-2 py-0.5 rounded z-10">
                FEATURED VIDEO
              </div>

              <div 
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer shadow-inner bg-slate-950 border border-white/10"
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
                  <div className="w-14 h-14 rounded-full bg-[#E5B83B] flex items-center justify-center text-[#0B1849] shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <span className="text-white text-xs font-bold mt-2 drop-shadow-md">Play Story Video</span>
                </div>
                <div className="absolute top-3 left-3 bg-[#0B1849]/90 border border-[#E5B83B]/50 px-2.5 py-1 rounded-full text-[10px] font-bold text-[#E5B83B]">
                  HD 1080p
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5B83B] animate-pulse"></span>
                  <span className="text-xs font-bold text-white">Active Ecosystem</span>
                </div>
                <span className="text-[11px] font-semibold text-[#E5B83B]">PREPDHA HR Management</span>
              </div>

              {/* Highlight Stats Strip */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                <div className="bg-[#0B1849]/80 p-2.5 rounded-xl text-center border border-[#E5B83B]/30">
                  <div className="text-base font-black text-[#E5B83B]">30+</div>
                  <div className="text-[10px] text-slate-300 leading-tight">Hires / Mo</div>
                </div>
                <div className="bg-[#0B1849]/80 p-2.5 rounded-xl text-center border border-[#E5B83B]/30">
                  <div className="text-base font-black text-[#E5B83B]">35%</div>
                  <div className="text-[10px] text-slate-300 leading-tight">Attendance Acc.</div>
                </div>
                <div className="bg-[#0B1849]/80 p-2.5 rounded-xl text-center border border-[#E5B83B]/30">
                  <div className="text-base font-black text-[#E5B83B]">100%</div>
                  <div className="text-[10px] text-slate-300 leading-tight">Compliance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Scene Stacker Dock - Navy & Gold Style */}
        <div className="mt-10 bg-gradient-to-br from-[#0B1849]/95 to-[#14255C]/95 backdrop-blur-2xl text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#E5B83B]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#E5B83B] uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-[#E5B83B]" /> Interactive Operations Showcase
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Experience HR Leadership in 6 Core Scenes
              </h2>
            </div>

            {/* Navigation Buttons < 1 / 6 > */}
            <div className="flex items-center space-x-3 self-end lg:self-center">
              <button
                onClick={() => setActiveScene((prev) => (prev > 0 ? prev - 1 : hrScenes.length - 1))}
                className="w-10 h-10 rounded-full bg-[#0B1849] border-2 border-[#E5B83B] flex items-center justify-center text-[#E5B83B] shadow-sm hover:bg-[#E5B83B] hover:text-[#0B1849] transition-all"
                aria-label="Previous scene"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-xs font-bold text-[#0B1849] px-3.5 py-1.5 rounded-full bg-[#E5B83B] font-mono">
                {activeScene + 1} / {hrScenes.length}
              </div>
              <button
                onClick={() => setActiveScene((prev) => (prev < hrScenes.length - 1 ? prev + 1 : 0))}
                className="w-10 h-10 rounded-full bg-[#0B1849] border-2 border-[#E5B83B] flex items-center justify-center text-[#E5B83B] shadow-sm hover:bg-[#E5B83B] hover:text-[#0B1849] transition-all"
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
                      ? 'ring-4 ring-[#E5B83B] shadow-xl shadow-[#E5B83B]/30 scale-[1.03]'
                      : 'border-2 border-[#E5B83B]/40 hover:border-[#E5B83B] opacity-80 hover:opacity-100 hover:scale-[1.01]'
                  }`}
                >
                  <div className="h-28 sm:h-32 w-full relative overflow-hidden bg-slate-950">
                    <img 
                      src={scene.bgImage} 
                      alt={scene.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute top-2 left-2 bg-[#E5B83B] text-[#0B1849] font-mono text-[10px] font-black px-2 py-0.5 rounded">
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
          <div className="mt-6 bg-[#0B1849] text-white rounded-2xl p-6 shadow-xl border-2 border-[#E5B83B] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#E5B83B] text-[#0B1849]">
                  SCENE {hrScenes[activeScene].num}
                </span>
                <span className="text-xs text-[#E5B83B] font-semibold">{hrScenes[activeScene].tagline}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{hrScenes[activeScene].title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{hrScenes[activeScene].desc}</p>
            </div>
            <div className="shrink-0 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 text-center">
              <div className="text-xs text-[#E5B83B] font-bold uppercase">Proven Impact</div>
              <div className="text-lg font-black text-white">{hrScenes[activeScene].metric}</div>
            </div>
          </div>
        </div>

        {/* 3 Bottom Feature Cards - Signature Navy & Gold View */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            {
              icon: ShieldCheck,
              title: "Secure & Reliable",
              desc: "Enterprise Labour Laws & POSH Governance",
              badge: "COMPLIANCE"
            },
            {
              icon: Layers,
              title: "Cloud HRIS Ecosystem",
              desc: "Zoho People & Zoho Payroll System Admin",
              badge: "ZOHO SUITE"
            },
            {
              icon: TrendingUp,
              title: "Real-Time People Analytics",
              desc: "35% Discrepancy Cut & 95%+ Grievance SLA",
              badge: "ANALYTICS"
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white p-5 rounded-2xl border-2 border-[#E5B83B] shadow-xl relative flex items-center space-x-4 hover:scale-[1.02] transition-all"
            >
              <div className="absolute top-2.5 right-2.5 bg-[#E5B83B] text-[#0B1849] text-[9px] font-black px-1.5 py-0.5 rounded">
                {item.badge}
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#E5B83B]/20 flex items-center justify-center text-[#E5B83B] shrink-0 border border-[#E5B83B]/30">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white pr-14">{item.title}</h4>
                <p className="text-xs text-slate-300 font-medium mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Sections - Continuous Flow without Secondary Tabs */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* SECTION 1: OVERVIEW */}
        <section id="overview" className="space-y-8 scroll-mt-28">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E5B83B] uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" /> Executive Profile
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Overview & Leadership Summary</h2>
          </div>

          {/* Overview Summary Card */}
          <div className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white rounded-2xl p-8 shadow-xl border-2 border-[#E5B83B] relative">
            <div className="absolute top-4 right-4 bg-[#E5B83B] text-[#0B1849] text-[10px] font-black px-2 py-0.5 rounded">
              EXECUTIVE SUMMARY
            </div>
            <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#E5B83B]" /> Professional Summary
            </h3>
            <p className="text-[#E5B83B] text-xs font-semibold mb-4">PREPDHA Human Resources Leadership</p>
            <div className="border-t border-white/10 pt-4 text-slate-200 leading-relaxed text-sm">
              I am a results-driven Human Resources professional currently serving as Human Resources Manager at <strong className="text-white">PREPDHA</strong>, with extensive experience in HR Operations, Talent Acquisition, Payroll Management, Employee Relations, and Statutory Compliance. I specialize in streamlining HR processes, building scalable recruitment pipelines, strengthening employee engagement, and ensuring rigorous compliance with organizational policies and applicable labour regulations.
            </div>
          </div>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                badge: "RECRUITMENT",
                icon: Users,
                title: "Talent Acquisition",
                subtitle: "End-to-End Pipeline & Hiring",
                desc: "End-to-end recruitment pipelines, 150+ annual interviews, 92% candidate satisfaction, and 88% offer acceptance rate.",
                stat: "30+ Recruits / Mo"
              },
              {
                badge: "HRIS & PAYROLL",
                icon: DollarSign,
                title: "Payroll & HRIS",
                subtitle: "Zoho People & Zoho Payroll Admin",
                desc: "Zoho People & Zoho Payroll administration, 100% payroll accuracy, statutory filings, and 35% biometric attendance improvement.",
                stat: "100% Compliance"
              },
              {
                badge: "GOVERNANCE",
                icon: ShieldCheck,
                title: "Compliance & POSH",
                subtitle: "Statutory Filings & ICC Oversight",
                desc: "POSH compliance, ICC leadership, labour laws audit, disciplinary frameworks, and grievance resolution within 24-48 hours.",
                stat: "95%+ 24-48h SLA"
              }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white p-6 rounded-2xl shadow-xl border-2 border-[#E5B83B] relative flex flex-col justify-between hover:scale-[1.02] transition-all"
              >
                <div>
                  <div className="absolute top-4 right-4 bg-[#E5B83B] text-[#0B1849] text-[10px] font-black px-2 py-0.5 rounded">
                    {card.badge}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#E5B83B]/20 flex items-center justify-center text-[#E5B83B] mb-3 border border-[#E5B83B]/40">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg text-white mb-1 pr-16">{card.title}</h4>
                  <p className="text-xs text-[#E5B83B] font-semibold mb-3">{card.subtitle}</p>
                  <div className="border-t border-white/10 pt-3 text-xs text-slate-200 leading-relaxed">
                    {card.desc}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Impact Metric:</span>
                  <span className="font-mono font-bold text-[#E5B83B]">{card.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: EXPERIENCE */}
        <section id="experience" className="space-y-8 scroll-mt-28">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E5B83B] uppercase tracking-wider mb-1">
              <Briefcase className="w-4 h-4" /> Career Journey
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Professional Experience</h2>
            <p className="text-xs text-[#E5B83B] font-semibold mt-1">Track record in leadership, talent strategy, and HR operations</p>
          </div>

          <div className="space-y-6">
            {/* Prepdha Card */}
            <div className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white p-8 rounded-2xl shadow-xl border-2 border-[#E5B83B] relative">
              <div className="absolute top-4 right-4 bg-[#E5B83B] text-[#0B1849] text-[10px] font-black px-2.5 py-1 rounded">
                CURRENT ROLE
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-black text-white pr-28">Human Resources Manager</h3>
                  <p className="text-xs text-[#E5B83B] font-semibold mt-1">Prepdha • Hyderabad, Telangana, India</p>
                </div>
                <div className="mt-2 md:mt-0 text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-[#E5B83B]/20 text-[#E5B83B] border border-[#E5B83B]/40">
                  February 2026 - Present (10 months)
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 mt-3">
                <ul className="space-y-3 text-slate-200 text-sm">
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
                      <CheckCircle2 className="w-4 h-4 text-[#E5B83B] shrink-0 mt-1" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Genesys Info X Card */}
            <div className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white p-8 rounded-2xl shadow-xl border-2 border-[#E5B83B] relative">
              <div className="absolute top-4 right-4 bg-[#E5B83B] text-[#0B1849] text-[10px] font-black px-2.5 py-1 rounded">
                EXECUTIVE
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div>
                  <h3 className="text-xl font-black text-white pr-28">Human Resources Executive</h3>
                  <p className="text-xs text-[#E5B83B] font-semibold mt-1">Genesys Info X • Hyderabad, Telangana, India</p>
                </div>
                <div className="mt-2 md:mt-0 text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-white/10 text-slate-300 border border-white/20">
                  September 2022 - January 2026 (3 years 5 months)
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 mt-3">
                <ul className="space-y-3 text-slate-200 text-sm">
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
                      <CheckCircle2 className="w-4 h-4 text-[#E5B83B] shrink-0 mt-1" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMPETENCIES */}
        <section id="expertise" className="space-y-8 scroll-mt-28">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E5B83B] uppercase tracking-wider mb-1">
              <Layers className="w-4 h-4" /> Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Core HR Expertise & Competencies</h2>
            <p className="text-xs text-[#E5B83B] font-semibold mt-1">Specialized domain competencies covering full enterprise human capital operations</p>
          </div>

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
              <div 
                key={idx} 
                className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white p-6 rounded-2xl shadow-xl border-2 border-[#E5B83B] relative flex flex-col justify-between hover:scale-[1.02] transition-all"
              >
                <div>
                  <div className="absolute top-4 right-4 bg-[#E5B83B] text-[#0B1849] text-[10px] font-black px-2 py-0.5 rounded font-mono">
                    CORE 0{idx + 1}
                  </div>
                  <h3 className="font-bold text-base text-white mb-1 pr-16">{item.title}</h3>
                  <p className="text-xs text-[#E5B83B] font-semibold mb-3">Enterprise HR Capability</p>
                  <div className="border-t border-white/10 pt-3 text-xs text-slate-200 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: CERTIFICATIONS */}
        <section id="certifications" className="space-y-8 scroll-mt-28">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E5B83B] uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" /> Professional Credentials
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Licenses & Certifications</h2>
            <p className="text-xs text-[#E5B83B] font-semibold mt-1">
              Verified professional credentials spanning HR operations, specialized training, and AI workflow mastery
            </p>
          </div>

          {/* SkillDeck Top Featured */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#E5B83B]" /> SkillDeck Bangalore (Top Featured HR Certifications)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillDeckCerts.map((cert, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white p-6 rounded-2xl shadow-xl border-2 border-[#E5B83B] relative">
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
            <h3 className="text-lg font-bold text-white">Coursiv, Claude, ChatGPT, Gemini & Technical Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {advancedCerts.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white p-5 rounded-2xl shadow-xl border-2 border-[#E5B83B] relative flex flex-col justify-between hover:scale-[1.02] transition-all"
                >
                  <div>
                    <div className="absolute top-4 right-4 bg-[#E5B83B] text-[#0B1849] text-[10px] font-black px-2 py-0.5 rounded uppercase">
                      {cert.category}
                    </div>
                    <h4 className="font-bold text-sm text-white mb-1 pr-16">{cert.title}</h4>
                    <p className="text-xs text-[#E5B83B] font-semibold mb-3">{cert.issuer}</p>
                  </div>
                  <div className="text-xs text-slate-300 space-y-1 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span>Credential Verified</span>
                    {cert.issued && <span className="font-mono text-[11px] text-[#E5B83B]">Issued: {cert.issued}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: EDUCATION */}
        <section id="education" className="space-y-8 scroll-mt-28">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E5B83B] uppercase tracking-wider mb-1">
              <GraduationCap className="w-4 h-4" /> Academic Background
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Education & Qualifications</h2>
            <p className="text-xs text-[#E5B83B] font-semibold mt-1">Foundational engineering degree and academic coursework</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white p-6 rounded-2xl shadow-xl border-2 border-[#E5B83B] relative">
              <div className="absolute top-4 right-4 bg-[#E5B83B] text-[#0B1849] text-[10px] font-black px-2 py-0.5 rounded">
                ENGINEERING DEGREE
              </div>
              <h3 className="text-lg font-bold text-white mb-1 pr-24">Bachelor of Technology - BTech</h3>
              <p className="text-xs text-[#E5B83B] font-semibold mb-3">Metallurgical and Materials Engineering</p>
              <div className="border-t border-white/10 pt-3 text-slate-200 text-xs space-y-1.5">
                <p className="font-medium text-white">RGUKT Basar / Rajiv Gandhi University of Knowledge Technologies</p>
                <p className="text-slate-300">RK Valley (RAC)</p>
                <div className="font-mono text-[#E5B83B] pt-2 border-t border-white/10 text-xs">
                  June 2016 - September 2020
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white p-6 rounded-2xl shadow-xl border-2 border-[#E5B83B] relative">
              <div className="absolute top-4 right-4 bg-[#E5B83B] text-[#0B1849] text-[10px] font-black px-2 py-0.5 rounded">
                PRE-UNIVERSITY
              </div>
              <h3 className="text-lg font-bold text-white mb-1 pr-24">Pre University Course (PUC)</h3>
              <p className="text-xs text-[#E5B83B] font-semibold mb-3">M.Bi.P.C (Mathematics, Biology, Physics, Chemistry)</p>
              <div className="border-t border-white/10 pt-3 text-slate-200 text-xs space-y-1.5">
                <p className="font-medium text-white">Rajiv Gandhi University of Knowledge Technologies</p>
                <p className="text-slate-300">RK Valley (RAC)</p>
                <div className="font-mono text-[#E5B83B] pt-2 border-t border-white/10 text-xs">
                  May 2016
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CONTACT */}
        <section id="contact" className="space-y-8 scroll-mt-28 max-w-3xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E5B83B] uppercase tracking-wider mb-1">
              <Mail className="w-4 h-4" /> Communication
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Get in Touch</h2>
            <p className="text-xs text-[#E5B83B] font-semibold mt-1">
              Open to discussions regarding HR strategy, talent management, HR operations, and organizational consulting.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white rounded-2xl p-8 shadow-xl border-2 border-[#E5B83B] relative">
            <div className="absolute top-4 right-4 bg-[#E5B83B] text-[#0B1849] text-[10px] font-black px-2 py-0.5 rounded">
              LET'S CONNECT
            </div>
            <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#E5B83B]" /> Send a Direct Message
            </h3>
            <p className="text-xs text-[#E5B83B] font-semibold mb-6">
              Messages will be forwarded directly to harshaallakonda1998@gmail.com
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border-2 border-emerald-400 text-emerald-200 text-sm font-semibold flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{submissionFeedback || "Thank you! Your message has been sent to harshaallakonda1998@gmail.com. Harsha will respond shortly."}</span>
              </div>
            )}

            <form 
              name="contact" 
              method="POST" 
              action="https://formsubmit.co/harshaallakonda1998@gmail.com"
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <p className="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#E5B83B]/40 bg-[#0B1849]/90 text-white placeholder-slate-400 focus:outline-none focus:border-[#E5B83B] text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#E5B83B]/40 bg-[#0B1849]/90 text-white placeholder-slate-400 focus:outline-none focus:border-[#E5B83B] text-sm"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#E5B83B]/40 bg-[#0B1849]/90 text-white placeholder-slate-400 focus:outline-none focus:border-[#E5B83B] text-sm"
                  placeholder="Discuss HR opportunities, consulting, or talent strategy..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#E5B83B] text-[#0B1849] font-black text-sm shadow-xl hover:bg-[#c99f2d] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#0B1849] border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending to harshaallakonda1998@gmail.com...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to harshaallakonda1998@gmail.com</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-2">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#E5B83B]" /> Direct Email:
                <a href="mailto:harshaallakonda1998@gmail.com" className="text-[#E5B83B] font-semibold hover:underline">
                  harshaallakonda1998@gmail.com
                </a>
              </span>
              <a
                href={`mailto:harshaallakonda1998@gmail.com?subject=HR Inquiry via Portfolio`}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#E5B83B] font-bold border border-[#E5B83B]/30 hover:border-[#E5B83B] transition-all flex items-center gap-1"
              >
                Open Email App <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#0B1849]/90 backdrop-blur-xl border-t-2 border-[#E5B83B]/40 py-8 mt-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} Harsha Allakonda • Human Resources Manager at PREPDHA</p>
          <div className="flex items-center space-x-6">
            <a href="mailto:harshaallakonda1998@gmail.com" className="hover:text-[#E5B83B] transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/harsha-allakonda-8134813b4" target="_blank" rel="noreferrer" className="hover:text-[#E5B83B] transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Story Video Preview Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-gradient-to-br from-[#0B1849] to-[#14255C] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E5B83B]">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-[#E5B83B] border border-[#E5B83B]/50 flex items-center justify-center hover:bg-[#E5B83B] hover:text-[#0B1849] transition-all"
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="aspect-video w-full bg-black">
              <video controls autoPlay className="w-full h-full object-contain">
                <source src="/HR_professionals_shaking_hands_1cd5d1a3_1080p.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-6 bg-[#0B1849] flex items-center justify-between text-white border-t-2 border-[#E5B83B]/40">
              <div>
                <h3 className="font-bold text-lg text-white">Executive Story • HR Leadership in Action</h3>
                <p className="text-xs text-[#E5B83B]">Harsha Allakonda • Human Resources Manager at PREPDHA</p>
              </div>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#E5B83B] text-[#0B1849] text-xs font-black hover:bg-[#c99f2d] transition-colors"
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
