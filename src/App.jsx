import React, { useState, useEffect } from 'react';
import {
  Briefcase, Award, GraduationCap, Mail, MapPin,
  CheckCircle2, TrendingUp, Users, ShieldCheck, DollarSign,
  Sparkles, ChevronRight, ChevronLeft, BookOpen, Layers, Send,
  Play, Clock, Building, Check, ExternalLink, ArrowRight, Star,
  Home, Phone
} from 'lucide-react';

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
  </svg>
);

export default function App() {
  const validPages = ['overview', 'experience', 'competencies', 'certifications', 'education', 'contact'];

  const getPageFromHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    return validPages.includes(hash) ? hash : 'overview';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);
  const [activeScene, setActiveScene] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState('');

  // Handle client-side hash change for back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = `/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionFeedback('');

    const recipientEmail = "harshaallakonda1998@gmail.com";
    let sentSuccessfully = false;

    try {
      // 1. Submit directly via FormSubmit.co AJAX to harshaallakonda1998@gmail.com
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

      // 2. Also submit to Netlify Forms backend if deployed on Netlify
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
      window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent("Portfolio Message from " + contactForm.name)}&body=${encodeURIComponent("Name: " + contactForm.name + "\nEmail: " + contactForm.email + "\n\nMessage:\n" + contactForm.message)}`;
    }

    setSubmitted(true);
    setIsSubmitting(false);
    setSubmissionFeedback(`Thank you, ${contactForm.name}! Your message has been sent successfully.`);
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 8000);
  };

  const hrScenes = [
    {
      id: 1,
      num: "01",
      title: "Talent Acquisition & Executive Sourcing",
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

  const hrPortals = [
    {
      title: "Talent Acquisition Portal",
      subtitle: "Empower Sourcing, Eliminate Vacancies",
      desc: "Give your organization the strategic talent pipelines needed to scale teams rapidly. Automate candidate screening, streamline interviewing, and maximize offer acceptances.",
      icon: Users,
      points: [
        "End-to-end recruitment pipelines with 30+ monthly hires",
        "150+ annual executive & engineering interviews",
        "92% candidate satisfaction rating & 88% offer acceptance",
        "Urgent hiring turnaround times reduced by 50%"
      ]
    },
    {
      title: "HRIS & Biometrics Hub",
      subtitle: "Automated Attendance & Shift Governance",
      desc: "Seamlessly integrate biometric hardware with Zoho People HRMS. Eliminate manual timesheet errors and deliver accurate attendance records for error-free payroll inputs.",
      icon: Clock,
      points: [
        "Biometric system synchronization for 20+ workforce",
        "Attendance discrepancies slashed by 35%",
        "Real-time shift schedules, leave & holiday calendars",
        "Accurate employee data management across the lifecycle"
      ]
    },
    {
      title: "Finance & Payroll Management",
      subtitle: "Automated Disbursement & Zero-Defect Compliance",
      desc: "Streamline monthly compensation operations. Disburse salaries on schedule, execute flawless tax withholdings, and manage statutory filings without spreadsheet headaches.",
      icon: DollarSign,
      points: [
        "100% payroll accuracy managed on Zoho Payroll",
        "PF, ESI, Professional Tax, and TDS calculations",
        "Timely salary disbursement and electronic pay slips",
        "Comprehensive statutory audits and labour code compliance"
      ]
    },
    {
      title: "Employee Relations & POSH",
      subtitle: "Workplace Safety & Proactive Grievance Resolution",
      desc: "Build an inclusive, respectful workplace culture. Lead Internal Complaints Committees (ICC), enforce disciplinary protocols, and mediate concerns before they escalate.",
      icon: ShieldCheck,
      points: [
        "Certified POSH Train-the-Trainer (SkillDeck Bangalore)",
        "Internal Complaints Committee (ICC) oversight",
        "95%+ employee grievances resolved in 24-48 hours",
        "Employee engagement surveys with actionable feedback loops"
      ]
    },
    {
      title: "AI in HR & Automation Hub",
      subtitle: "Generative AI Workflows for Modern HR",
      desc: "Harness modern LLMs and generative AI to draft compelling job descriptions, automate policy syntheses, and analyze people metrics in seconds.",
      icon: Sparkles,
      points: [
        "SkillDeck Bangalore certified in AI in HR",
        "Coursiv AI Mastery across Claude, Gemini & ChatGPT",
        "Automated rubrics, interview scorecards, and email digests",
        "Rapid HR policy drafting and documentation workflows"
      ]
    },
    {
      title: "Operations & Facility Management",
      subtitle: "Administrative Governance & Cost Optimization",
      desc: "Oversee office administration, vendor service contracts, and facility amenities to maintain high-functioning, budget-conscious organizational operations.",
      icon: Building,
      points: [
        "Vendor contract negotiations reducing operational costs by 15%",
        "Asset allocation, hardware tracking, and onboarding kits",
        "Employee handbook deployment and workplace safety standards",
        "Disciplinary and employee welfare governance committees"
      ]
    }
  ];

  const skillDeckCerts = [
    { title: "AI in HR", issuer: "SkillDeck Bangalore", issued: "Jul 2026", id: "SD 8792/JUL/WK-4275", category: "Featured" },
    { title: "POSH Train The Trainer", issuer: "SkillDeck Bangalore", issued: "Aug 2026", id: "SD 9958/AUG/WK-4906", category: "Featured" },
    { title: "Labour Code Webinar", issuer: "SkillDeck Bangalore", issued: "Jul 2026", id: "SD 4333/AUG/WK-5674", category: "Featured" }
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

  const pagesNav = [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'competencies', label: 'Competencies' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-sky-500 selection:text-white">

      {/* Luminous Full-Bleed Video Background (Increased Transparency) */}
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
        {/* Airy daylight frosted glass wash allowing video to shine through with high transparency */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/35 to-slate-50/80 backdrop-blur-[0.5px]"></div>
        <div className="absolute inset-0 bg-sky-50/15"></div>
      </div>

      {/* Floating Glassmorphic Pill Header as True Page Links */}
      <header className="sticky top-4 z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white/75 backdrop-blur-2xl border border-white/70 shadow-lg shadow-slate-900/5 rounded-2xl md:rounded-full px-5 py-3 flex items-center justify-between transition-all">
          <div
            onClick={() => navigateTo('overview')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform">
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

          {/* Desktop True Page Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {pagesNav.map((page) => (
              <button
                key={page.id}
                onClick={() => navigateTo(page.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${currentPage === page.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
              >
                {page.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateTo('contact')}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>

        {/* Mobile Page Navigator Pills */}
        <div className="flex lg:hidden overflow-x-auto space-x-1.5 mt-2.5 px-1 py-1.5 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-md scrollbar-none">
          {pagesNav.map((page) => (
            <button
              key={page.id}
              onClick={() => navigateTo(page.id)}
              className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${currentPage === page.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-white/60'
                }`}
            >
              {page.label}
            </button>
          ))}
        </div>
      </header>

      {/* VIEWPORT CONTENT CONTAINER */}
      <div className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* ========================================================= */}
        {/* PAGE 1: OVERVIEW (Home View with Hero Section & Metrics) */}
        {/* ========================================================= */}
        {currentPage === 'overview' && (
          <div className="space-y-12 animate-fadeIn">

            {/* Hero Section */}
            <section className="pt-4 pb-4 sm:pt-8 sm:pb-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Left Hero Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-sky-800 text-xs font-bold tracking-wide border border-white/80 shadow-sm">
                    <Sparkles className="w-4 h-4 text-sky-600" />
                    <span>PREPDHA Executive HR Leadership</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                    Power Every Team. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700">
                      Elevate Every Potential.
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                    Results-driven Human Resources Manager at PREPDHA unifying talent acquisition, attendance & biometrics, payroll accuracy, statutory compliance, and generative AI into one intelligent framework that helps organizations work smarter and people achieve more.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      onClick={() => navigateTo('experience')}
                      className="px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                    >
                      <span>Explore Experience</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="px-5 py-3.5 rounded-full bg-white/80 backdrop-blur-md text-slate-800 border border-white/80 font-bold text-sm shadow-md hover:bg-white hover:shadow-lg transition-all flex items-center gap-2.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-600">
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </div>
                      <span>Watch Story Video</span>
                    </button>
                  </div>

                  {/* Backed & Certified By Bar */}
                  <div className="pt-4 border-t border-slate-200/60">
                    <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-2.5">
                      BACKED & CERTIFIED BY
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="px-3 py-1.5 rounded-xl bg-white/75 backdrop-blur-md border border-white/70 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-sky-600" /> SkillDeck Bangalore
                      </span>
                      <span className="px-3 py-1.5 rounded-xl bg-white/75 backdrop-blur-md border border-white/70 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> POSH Trainer Certified
                      </span>
                      <span className="px-3 py-1.5 rounded-xl bg-white/75 backdrop-blur-md border border-white/70 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-blue-600" /> Zoho HRMS Specialist
                      </span>
                      <span className="px-3 py-1.5 rounded-xl bg-white/75 backdrop-blur-md border border-white/70 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Coursiv AI Master
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Floating Video Card */}
                <div className="lg:col-span-5">
                  <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-5 border border-white/80 shadow-2xl shadow-slate-900/10 space-y-4">
                    <div
                      onClick={() => setIsVideoModalOpen(true)}
                      className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer shadow-inner bg-slate-950"
                    >
                      <video
                        muted
                        loop
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                      >
                        <source src="/HR_professionals_shaking_hands_1cd5d1a3_1080p.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sky-600 shadow-2xl group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all">
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </div>
                        <span className="text-white text-xs font-bold mt-2 drop-shadow-md">HR World</span>
                      </div>
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-800 shadow-sm">
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
                      <div className="bg-white/60 backdrop-blur-sm p-2.5 rounded-2xl text-center border border-white/80">
                        <div className="text-base font-black text-slate-900">30+</div>
                        <div className="text-[10px] text-slate-500 leading-tight">Hires / Mo</div>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm p-2.5 rounded-2xl text-center border border-white/80">
                        <div className="text-base font-black text-emerald-600">35%</div>
                        <div className="text-[10px] text-slate-500 leading-tight">Attendance Acc.</div>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm p-2.5 rounded-2xl text-center border border-white/80">
                        <div className="text-base font-black text-sky-600">100%</div>
                        <div className="text-[10px] text-slate-500 leading-tight">Compliance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signature Interactive Scene Stacker Dock (SchoolStacker style) */}
              <div className="mt-10 bg-white/75 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-900/8 border border-white/70">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/60">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
                      <Sparkles className="w-4 h-4" /> Interactive Operations Showcase
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      Experience HR Leadership in 6 Powerful Scenes
                    </h2>
                  </div>

                  {/* Navigation Buttons < 1 / 6 > */}
                  <div className="flex items-center space-x-3 self-end lg:self-center">
                    <button
                      onClick={() => setActiveScene((prev) => (prev > 0 ? prev - 1 : hrScenes.length - 1))}
                      className="w-10 h-10 rounded-full bg-white/80 border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm hover:bg-white hover:border-sky-500 hover:text-sky-600 transition-all"
                      aria-label="Previous scene"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="text-xs font-bold text-slate-700 px-3 py-1.5 rounded-full bg-slate-100/80 font-mono">
                      {activeScene + 1} / {hrScenes.length}
                    </div>
                    <button
                      onClick={() => setActiveScene((prev) => (prev < hrScenes.length - 1 ? prev + 1 : 0))}
                      className="w-10 h-10 rounded-full bg-white/80 border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm hover:bg-white hover:border-sky-500 hover:text-sky-600 transition-all"
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
                        className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${isSelected
                            ? 'ring-4 ring-sky-500 shadow-xl shadow-sky-500/25 scale-[1.03]'
                            : 'border border-slate-200/80 hover:border-sky-300 opacity-80 hover:opacity-100 hover:scale-[1.01]'
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
                <div className="mt-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
                    <div className="text-xs text-sky-300 font-bold uppercase">Proven Metric</div>
                    <div className="text-lg font-black text-white">{hrScenes[activeScene].metric}</div>
                  </div>
                </div>
              </div>

              {/* 3 Floating Bottom Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/75 backdrop-blur-xl p-5 rounded-2xl border border-white/70 shadow-lg shadow-slate-900/5 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">Secure & Reliable</h4>
                    <p className="text-xs text-slate-500 font-medium">Enterprise Labour Laws & POSH Governance</p>
                  </div>
                </div>

                <div className="bg-white/75 backdrop-blur-xl p-5 rounded-2xl border border-white/70 shadow-lg shadow-slate-900/5 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600 shrink-0">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">Cloud Based HRIS</h4>
                    <p className="text-xs text-slate-500 font-medium">Zoho People & Zoho Payroll System Admin</p>
                  </div>
                </div>

                <div className="bg-white/75 backdrop-blur-xl p-5 rounded-2xl border border-white/70 shadow-lg shadow-slate-900/5 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">Real-Time Analytics</h4>
                    <p className="text-xs text-slate-500 font-medium">35% Discrepancy Cut & 95%+ Grievance SLA</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Overview Detail Cards (Increased Transparency) */}
            <div className="space-y-6">
              <div className="bg-white/75 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-900/5 border border-white/70">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Executive Overview</span>
                    <h3 className="text-2xl font-black text-slate-900">Professional Summary</h3>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-normal">
                  I am a results-driven Human Resources professional currently serving as Human Resources Manager at <strong className="text-slate-900 font-bold">PREPDHA</strong>, with extensive experience spanning HR Operations, Talent Acquisition, Payroll Management, Employee Relations, and Statutory Compliance. I specialize in streamlining organizational processes, building scalable recruitment pipelines, strengthening workplace engagement, and ensuring rigorous compliance with organizational policies and applicable labour regulations.
                </p>
              </div>

              {/* 3 Core Pillar Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/75 backdrop-blur-xl p-6 rounded-3xl border border-white/70 shadow-lg shadow-slate-900/5 flex flex-col justify-between hover:bg-white/85 transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 font-bold border border-sky-100">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Talent Acquisition</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      End-to-end recruitment pipelines, 150+ annual executive interviews, 92% candidate satisfaction, and 88% offer acceptance rate.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-400 uppercase">Impact Metric</span>
                    <span className="text-sky-700 font-mono">30+ Hires / Mo</span>
                  </div>
                </div>

                <div className="bg-white/75 backdrop-blur-xl p-6 rounded-3xl border border-white/70 shadow-lg shadow-slate-900/5 flex flex-col justify-between hover:bg-white/85 transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 font-bold border border-emerald-100">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Payroll & HRIS</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Zoho People & Zoho Payroll administration, 100% payroll accuracy, statutory filings, and 35% biometric attendance improvement.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-400 uppercase">Impact Metric</span>
                    <span className="text-emerald-700 font-mono">100% Accuracy</span>
                  </div>
                </div>

                <div className="bg-white/75 backdrop-blur-xl p-6 rounded-3xl border border-white/70 shadow-lg shadow-slate-900/5 flex flex-col justify-between hover:bg-white/85 transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 font-bold border border-amber-100">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Compliance & POSH</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      POSH compliance, ICC leadership, labour laws audit, disciplinary frameworks, and grievance resolution within 24-48 hours.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-400 uppercase">Impact Metric</span>
                    <span className="text-amber-700 font-mono">95%+ 24-48h SLA</span>
                  </div>
                </div>
              </div>

              {/* Navigation Action Card */}
              <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold">Explore Detailed Professional Experience</h4>
                  <p className="text-xs sm:text-sm text-sky-100 mt-1">Review full bullet points, metrics, and achievements at PREPDHA & Genesys Info X.</p>
                </div>
                <button
                  onClick={() => navigateTo('experience')}
                  className="px-6 py-3 rounded-full bg-white text-slate-900 font-black text-xs shadow-lg hover:bg-sky-50 transition-all flex items-center gap-2 shrink-0"
                >
                  <span>View Experience</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 2: EXPERIENCE (Dedicated View with Full Bullets)     */}
        {/* ========================================================= */}
        {currentPage === 'experience' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Page Header Banner */}
            <div className="bg-white/75 backdrop-blur-2xl rounded-3xl p-8 shadow-xl shadow-slate-900/5 border border-white/70">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
                <button onClick={() => navigateTo('overview')} className="hover:underline flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" /> Home
                </button>
                <span>/</span>
                <span>Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Professional Experience</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Demonstrated leadership in fast-paced corporate environments, leading talent acquisition, HRIS payroll, statutory audits, and employee engagement.
              </p>
            </div>

            {/* Experience Cards */}
            <div className="space-y-6">
              {/* Role 1: PREPDHA */}
              <div className="bg-white/75 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-white/70 shadow-xl shadow-slate-900/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b from-sky-500 to-blue-600"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-200/60">
                  <div>
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">Current Role</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">Human Resources Manager</h3>
                    <p className="text-sky-700 font-bold text-sm sm:text-base">Prepdha • Hyderabad, Telangana, India</p>
                  </div>
                  <div className="text-xs font-mono font-bold px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 text-slate-700 shadow-sm shrink-0">
                    February 2026 - Present (10 months)
                  </div>
                </div>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="bg-white/60 p-3 rounded-2xl border border-white/80 text-center">
                    <div className="text-xl font-black text-sky-600">30+</div>
                    <div className="text-[11px] text-slate-500">Recruits in 1 Month</div>
                  </div>
                  <div className="bg-white/60 p-3 rounded-2xl border border-white/80 text-center">
                    <div className="text-xl font-black text-emerald-600">35%</div>
                    <div className="text-[11px] text-slate-500">Attendance Accuracy</div>
                  </div>
                  <div className="bg-white/60 p-3 rounded-2xl border border-white/80 text-center">
                    <div className="text-xl font-black text-blue-600">100%</div>
                    <div className="text-[11px] text-slate-500">Payroll Accuracy</div>
                  </div>
                  <div className="bg-white/60 p-3 rounded-2xl border border-white/80 text-center">
                    <div className="text-xl font-black text-amber-600">95%+</div>
                    <div className="text-[11px] text-slate-500">Grievance SLA (24-48h)</div>
                  </div>
                </div>

                {/* Responsibilities Bullets */}
                <ul className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed">
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
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Role 2: Genesys Info X */}
              <div className="bg-white/75 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-white/70 shadow-xl shadow-slate-900/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-slate-400"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-200/60">
                  <div>
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">Executive Experience</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">Human Resources Executive</h3>
                    <p className="text-slate-600 font-bold text-sm sm:text-base">Genesys Info X • Hyderabad, Telangana, India</p>
                  </div>
                  <div className="text-xs font-mono font-bold px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 text-slate-700 shadow-sm shrink-0">
                    September 2022 - January 2026 (3 years 5 months)
                  </div>
                </div>

                <ul className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed">
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
                      <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 3: COMPETENCIES (Dedicated View with Portals & Skills) */}
        {/* ========================================================= */}
        {currentPage === 'competencies' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Page Header Banner */}
            <div className="bg-white/75 backdrop-blur-2xl rounded-3xl p-8 shadow-xl shadow-slate-900/5 border border-white/70">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
                <button onClick={() => navigateTo('overview')} className="hover:underline flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" /> Home
                </button>
                <span>/</span>
                <span>Competencies</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Core HR Expertise & Competencies</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Full-spectrum human capital capabilities structured into dedicated stakeholder portals and core HR technical domains.
              </p>
            </div>

            {/* 6 Dedicated Stakeholder Portals */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Functional Architecture & Portals</h3>
                <p className="text-slate-500 text-xs sm:text-sm">Structured operational systems deployed across organizational departments.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hrPortals.map((portal, idx) => {
                  const IconComp = portal.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/75 backdrop-blur-xl p-7 rounded-3xl border border-white/70 shadow-xl shadow-slate-900/5 hover:bg-white/85 hover:shadow-2xl hover:border-sky-300 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-5 shadow-sm">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-1">{portal.title}</h4>
                        <p className="text-xs font-bold text-sky-600 mb-3">{portal.subtitle}</p>
                        <p className="text-xs text-slate-600 leading-relaxed mb-6">{portal.desc}</p>
                      </div>

                      <div className="pt-5 border-t border-slate-100 space-y-2.5">
                        {portal.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 9 Core HR Domain Skills Breakdown */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Core HR Technical Domains</h3>
                <p className="text-slate-500 text-xs sm:text-sm">Foundational generalist competencies ensuring statutory and operational excellence.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { title: "HR Operations & Generalist Functions", desc: "End-to-end HR workflows, policy deployment, employee records, and administrative governance." },
                  { title: "Talent Acquisition & Recruitment", desc: "Sourcing, LinkedIn recruitment pipelines, stakeholder partnering, interviewing, and offer management." },
                  { title: "Payroll & Compensation Administration", desc: "Zoho Payroll execution, salary disbursement, tax calculations, and compensation structuring." },
                  { title: "Statutory Compliance & Labour Laws", desc: "Labour regulations adherence, compliance audits, statutory filings, PF, ESI, PT, and gratuity." },
                  { title: "Employee Relations & Engagement", desc: "Grievance handling (24-48h turnaround), engagement surveys, mediation, and retention strategies." },
                  { title: "Performance Management", desc: "Appraisal cycle coordination, evaluation documentation, and feedback analysis for 50+ staff." },
                  { title: "HR Policies & Documentation", desc: "Employee handbooks, onboarding contracts, NDAs, and corporate compliance procedures." },
                  { title: "POSH Compliance & ICC Management", desc: "Prevention of Sexual Harassment awareness programs, committee governance, and training." },
                  { title: "HRMS (Zoho People & Zoho Payroll)", desc: "System administration, biometric attendance sync, leave tracking, and data integrity." }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/75 backdrop-blur-xl p-6 rounded-3xl border border-white/70 shadow-lg shadow-slate-900/5 hover:bg-white/85 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xs">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-bold text-sky-600 uppercase">Core Capability</span>
                    </div>
                    <h4 className="font-bold text-base text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 4: CERTIFICATIONS (Dedicated View)                    */}
        {/* ========================================================= */}
        {currentPage === 'certifications' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Page Header Banner */}
            <div className="bg-white/75 backdrop-blur-2xl rounded-3xl p-8 shadow-xl shadow-slate-900/5 border border-white/70">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
                <button onClick={() => navigateTo('overview')} className="hover:underline flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" /> Home
                </button>
                <span>/</span>
                <span>Certifications</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Licenses & Certifications</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Verified professional credentials spanning HR operations, specialized statutory compliance, and cutting-edge generative AI mastery.
              </p>
            </div>

            {/* SkillDeck Bangalore Featured Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-600" />
                <h3 className="text-2xl font-bold text-slate-900">SkillDeck Bangalore (Top Featured HR Certifications)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillDeckCerts.map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-white/75 backdrop-blur-2xl p-7 rounded-3xl border border-sky-200 shadow-xl shadow-sky-500/5 relative hover:border-sky-500 hover:bg-white/85 transition-all"
                  >
                    <div className="absolute top-5 right-5 bg-sky-100 text-sky-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-sky-200">
                      TOP FEATURED
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold mb-4">
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1 pr-14">{cert.title}</h4>
                    <p className="text-xs text-sky-600 font-semibold mb-4">{cert.issuer}</p>
                    <div className="text-xs text-slate-500 space-y-1.5 pt-4 border-t border-slate-100">
                      <p><span className="font-medium text-slate-700">Issued:</span> {cert.issued}</p>
                      <p className="font-mono text-[11px] text-slate-700"><span className="font-sans font-medium text-slate-700">ID:</span> {cert.id}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Advanced Certifications (Coursiv, Claude, Gemini, ChatGPT, etc.) */}
            <div className="space-y-4 pt-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Coursiv AI Mastery & Technical Certifications</h3>
                <p className="text-slate-500 text-xs sm:text-sm">Specialized certifications in Claude Code, Gemini, ChatGPT, and Web Development.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {advancedCerts.map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-white/75 backdrop-blur-xl p-5 rounded-2xl border border-white/70 shadow-sm hover:shadow-md hover:border-sky-400 hover:bg-white/85 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 uppercase">
                          {cert.category}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 mb-1">{cert.title}</h4>
                      <p className="text-xs text-slate-500">{cert.issuer}</p>
                    </div>
                    <div className="text-xs text-slate-400 pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                      <span>Verified Credential</span>
                      {cert.issued && <span className="font-mono text-[11px] text-sky-700 font-semibold">Issued: {cert.issued}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 5: EDUCATION (Dedicated View)                         */}
        {/* ========================================================= */}
        {currentPage === 'education' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Page Header Banner */}
            <div className="bg-white/75 backdrop-blur-2xl rounded-3xl p-8 shadow-xl shadow-slate-900/5 border border-white/70">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
                <button onClick={() => navigateTo('overview')} className="hover:underline flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" /> Home
                </button>
                <span>/</span>
                <span>Education</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Education & Academic Background</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Rigorous technical and engineering academic foundation from state university institute of national importance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* BTech */}
              <div className="bg-white/75 backdrop-blur-2xl p-8 rounded-3xl border border-white/70 shadow-xl shadow-slate-900/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-sky-800 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">Engineering Degree</span>
                    <GraduationCap className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Bachelor of Technology - BTech</h3>
                  <p className="text-base font-semibold text-slate-700 mt-1">Metallurgical and Materials Engineering</p>

                  <div className="border-t border-slate-100 pt-4 mt-4 text-slate-600 text-sm space-y-2">
                    <p className="font-semibold text-slate-800">RGUKT Basar / Rajiv Gandhi University of Knowledge Technologies</p>
                    <p className="text-xs text-slate-500">RK Valley (RAC)</p>
                    <p className="text-xs text-slate-600 leading-relaxed pt-2">
                      Four-year comprehensive engineering program emphasizing analytical problem-solving, structural mechanics, material kinetics, and process optimization.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400 uppercase">Duration</span>
                  <span className="text-sky-700 font-mono">June 2016 - September 2020</span>
                </div>
              </div>

              {/* PUC */}
              <div className="bg-white/75 backdrop-blur-2xl p-8 rounded-3xl border border-white/70 shadow-xl shadow-slate-900/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">Pre-University</span>
                    <GraduationCap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Pre University Course (PUC)</h3>
                  <p className="text-base font-semibold text-slate-700 mt-1">M.Bi.P.C (Mathematics, Biology, Physics, Chemistry)</p>

                  <div className="border-t border-slate-100 pt-4 mt-4 text-slate-600 text-sm space-y-2">
                    <p className="font-semibold text-slate-800">Rajiv Gandhi University of Knowledge Technologies</p>
                    <p className="text-xs text-slate-500">RK Valley (RAC)</p>
                    <p className="text-xs text-slate-600 leading-relaxed pt-2">
                      Two-year intensive pre-university science and mathematics foundation preparing for engineering entrance examinations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400 uppercase">Graduated</span>
                  <span className="text-emerald-700 font-mono">Completed May 2016</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 6: CONTACT (Dedicated View)                           */}
        {/* ========================================================= */}
        {currentPage === 'contact' && (
          <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
            {/* Page Header Banner */}
            <div className="bg-white/75 backdrop-blur-2xl rounded-3xl p-8 shadow-xl shadow-slate-900/5 border border-white/70 text-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
                <button onClick={() => navigateTo('overview')} className="hover:underline flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" /> Home
                </button>
                <span>/</span>
                <span>Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Let's Connect</h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-1">
                Open to executive discussions regarding HR strategy, talent acquisition, payroll compliance, or consulting partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

              {/* Direct Info Cards */}
              <div className="md:col-span-5 space-y-4">
                <div className="bg-white/75 backdrop-blur-2xl p-6 rounded-3xl border border-white/70 shadow-xl space-y-4">
                  <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">Contact Details</h3>

                  <div className="space-y-3.5 text-xs sm:text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Location</div>
                        <div className="text-slate-500">Hyderabad, Telangana, India</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">LinkedIn Profile</div>
                        <a
                          href="https://www.linkedin.com/in/harsha-allakonda-8134813b4"
                          target="_blank"
                          rel="noreferrer"
                          className="text-sky-600 font-semibold hover:underline"
                        >
                          View LinkedIn Profile
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                        <Building className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Current Organization</div>
                        <div className="text-slate-500">PREPDHA (Human Resources Manager)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white p-6 rounded-3xl shadow-xl">
                  <div className="text-xs uppercase font-bold text-sky-200">Response SLA</div>
                  <div className="text-2xl font-black mt-1">24 - 48 Hours</div>
                  <p className="text-xs text-sky-100 mt-2 leading-relaxed">
                    All inquiries submitted through this portal are dispatched directly to Harsha's primary inbox for immediate review.
                  </p>
                </div>
              </div>

              {/* Form Card */}
              <div className="md:col-span-7">
                <div className="bg-white/75 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-900/10 border border-white/70">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Send a Message</h3>
                  <p className="text-slate-500 text-xs sm:text-sm mb-6">
                    Fill out the form below to connect directly with Harsha Allakonda.
                  </p>

                  {submitted && (
                    <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2 animate-fadeIn">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{submissionFeedback || "Thank you! Your message has been sent to harshaallakonda1998@gmail.com."}</span>
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
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-sm"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-sm"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-sm"
                        placeholder="Discuss HR opportunities, consulting, or talent strategy..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-white/75 backdrop-blur-2xl border-t border-white/60 py-10 mt-16 text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-black text-xs shadow-sm">
              HA
            </div>
            <p className="font-semibold text-slate-700">© {new Date().getFullYear()} Harsha Allakonda • Human Resources Manager at PREPDHA</p>
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={() => navigateTo('contact')} className="hover:text-sky-600 transition-colors">Contact</button>
            <a href="https://www.linkedin.com/in/harsha-allakonda-8134813b4" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-colors flex items-center gap-1">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
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
                <h3 className="font-bold text-lg text-white">Executive Story • HR Leadership in Action</h3>
                <p className="text-xs text-slate-400">Harsha Allakonda • Human Resources Manager at PREPDHA</p>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition-colors"
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
