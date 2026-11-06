import React, { useState } from 'react';
import { 
  Briefcase, Award, GraduationCap, Mail, MapPin, 
  CheckCircle2, TrendingUp, Users, ShieldCheck, DollarSign, 
  Sparkles, ChevronRight, BookOpen, Layers, Send
} from 'lucide-react';

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setContactForm({ name: '', email: '', message: '' });
  };

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
    <div className="min-h-screen bg-[#F4F6F0] text-slate-800 flex flex-col font-sans">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#0B1849] text-white shadow-xl border-b border-[#E5B83B]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5B83B] flex items-center justify-center text-[#0B1849] font-black text-xl shadow-md">
              HA
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Harsha Allakonda <span className="text-xs px-2 py-0.5 rounded bg-[#134E28] text-white font-semibold">PREPDHA</span>
              </h1>
              <p className="text-xs text-[#E5B83B] font-medium tracking-wide">Human Resources Manager & HR Tech Specialist</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
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
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#E5B83B] text-[#0B1849] shadow-lg scale-105'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section with Video/Overlay */}
      <section className="relative bg-[#0B1849] text-white overflow-hidden py-16 lg:py-24 border-b-4 border-[#E5B83B]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
          >
            <source src="/HR_professionals_shaking_hands_1cd5d1a3_1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1849] via-[#0B1849]/85 to-[#134E28]/75"></div>
          <div className="absolute inset-0 bg-[#0B1849]/30 backdrop-blur-[0.5px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#134E28] text-[#E5B83B] text-xs font-bold uppercase tracking-wider border border-[#E5B83B]/40 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#E5B83B]" /> PREPDHA Executive Portfolio
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Empowering People, <br /><span className="text-[#E5B83B]">Streamlining HR</span> Operations
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
                Results-driven Human Resources Manager at Prepdha with extensive expertise in HR Operations, End-to-End Talent Acquisition, Payroll & Statutory Compliance, POSH, and AI-driven HRIS frameworks.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="mailto:harshaallakonda1998@gmail.com" className="px-6 py-3.5 rounded-xl bg-[#E5B83B] text-[#0B1849] font-bold text-sm shadow-xl hover:bg-[#c99f2d] transition-all flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Get in Touch
                </a>
                <button onClick={() => setActiveTab('experience')} className="px-6 py-3.5 rounded-xl bg-white/10 text-white border border-white/20 font-bold text-sm backdrop-blur-md hover:bg-white/20 transition-all flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> View Experience <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#E5B83B]" /> Hyderabad, Telangana, India</div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#E5B83B]" /> harshaallakonda1998@gmail.com</div>
                <a href="https://www.linkedin.com/in/harsha-allakonda-8134813b4" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#E5B83B] transition-colors"><Linkedin className="w-4 h-4 text-[#E5B83B]" /> LinkedIn Profile</a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl space-y-6">
                <h3 className="text-lg font-bold text-[#E5B83B] border-b border-white/10 pb-3 flex items-center justify-between">
                  Key Impact Metrics <TrendingUp className="w-5 h-5" />
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#0B1849]/60 p-3.5 rounded-xl border border-[#E5B83B]/30">
                    <div className="text-2xl font-black text-[#E5B83B]">30+</div>
                    <p className="text-xs text-slate-200">Professionals recruited in a single month</p>
                  </div>
                  <div className="bg-[#0B1849]/60 p-3.5 rounded-xl border border-[#E5B83B]/30">
                    <div className="text-2xl font-black text-[#E5B83B]">35%</div>
                    <p className="text-xs text-slate-200">Improvement in attendance accuracy via HRMS</p>
                  </div>
                  <div className="bg-[#0B1849]/60 p-3.5 rounded-xl border border-[#E5B83B]/30">
                    <div className="text-2xl font-black text-[#E5B83B]">95%+</div>
                    <p className="text-xs text-slate-200">Grievance resolution within 24-48 hours</p>
                  </div>
                  <div className="bg-[#0B1849]/60 p-3.5 rounded-xl border border-[#E5B83B]/30">
                    <div className="text-2xl font-black text-[#E5B83B]">100%</div>
                    <p className="text-xs text-slate-200">Payroll accuracy & statutory tax compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Mobile Tab selector */}
        <div className="flex md:hidden overflow-x-auto space-x-2 pb-4 mb-6 scrollbar-none">
          {['overview', 'experience', 'expertise', 'certifications', 'education', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap ${
                activeTab === tab ? 'bg-[#0B1849] text-[#E5B83B]' : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200/80">
              <h2 className="text-2xl font-bold text-[#0B1849] mb-4 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#134E28]" /> Professional Summary
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                I am a results-driven Human Resources professional currently working as a Human Resources Manager at <strong>PREPDHA</strong>, with experience in HR Operations, Talent Acquisition, Payroll Management, Employee Relations, and Statutory Compliance. I specialize in streamlining HR processes, building effective recruitment strategies, strengthening employee engagement, and ensuring compliance with organizational policies and applicable labour regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200/80 border-t-4 border-t-[#0B1849]">
                <div className="w-12 h-12 rounded-xl bg-[#0B1849]/10 flex items-center justify-center text-[#0B1849] mb-4 font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1849] mb-2">Talent Acquisition</h3>
                <p className="text-sm text-slate-600">
                  End-to-end recruitment pipelines, 150+ annual interviews, 92% candidate satisfaction, and 88% offer acceptance rate.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200/80 border-t-4 border-t-[#134E28]">
                <div className="w-12 h-12 rounded-xl bg-[#134E28]/10 flex items-center justify-center text-[#134E28] mb-4 font-bold">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1849] mb-2">Payroll & HRIS</h3>
                <p className="text-sm text-slate-600">
                  Zoho People & Zoho Payroll administration, 100% payroll accuracy, statutory filings, and 35% biometric attendance improvement.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200/80 border-t-4 border-t-[#E5B83B]">
                <div className="w-12 h-12 rounded-xl bg-[#E5B83B]/20 flex items-center justify-center text-[#0B1849] mb-4 font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1849] mb-2">Compliance & POSH</h3>
                <p className="text-sm text-slate-600">
                  POSH compliance, ICC management, labour laws audit, disciplinary frameworks, and grievance resolution within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EXPERIENCE */}
        {activeTab === 'experience' && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-2xl font-bold text-[#0B1849] flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-[#134E28]" /> Professional Experience
            </h2>

            <div className="space-y-6">
              {/* Prepdha */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200/80 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#0B1849]"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#134E28] text-white">Current Role</span>
                    <h3 className="text-xl font-bold text-[#0B1849] mt-2">Human Resources Manager</h3>
                    <p className="text-[#134E28] font-semibold text-sm">Prepdha • Hyderabad, Telangana, India</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm font-semibold px-4 py-1.5 rounded-lg bg-slate-100 text-slate-700">
                    February 2026 - Present (10 months)
                  </div>
                </div>
                <ul className="space-y-3 mt-4 text-slate-700 text-sm">
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
                      <CheckCircle2 className="w-4 h-4 text-[#134E28] shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Genesys Info X */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200/80 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#134E28]"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1849]">Human Resources Executive</h3>
                    <p className="text-[#134E28] font-semibold text-sm">Genesys Info X • Hyderabad, Telangana, India</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm font-semibold px-4 py-1.5 rounded-lg bg-slate-100 text-slate-700">
                    September 2022 - January 2026 (3 years 5 months)
                  </div>
                </div>
                <ul className="space-y-3 mt-4 text-slate-700 text-sm">
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
                      <CheckCircle2 className="w-4 h-4 text-[#134E28] shrink-0 mt-1" />
                      <span>{bullet}</span>
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
            <h2 className="text-2xl font-bold text-[#0B1849] flex items-center gap-3">
              <Layers className="w-6 h-6 text-[#134E28]" /> Core HR Expertise & Competencies
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
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-[#0B1849] text-[#E5B83B] flex items-center justify-center font-bold mb-3">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-[#0B1849] text-base mb-1">{item.title}</h3>
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
              <h2 className="text-2xl font-bold text-[#0B1849] flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-[#134E28]" /> Licenses & Certifications
              </h2>
              <p className="text-sm text-slate-600">
                Verified professional credentials spanning HR operations, specialized training, and advanced AI workflow mastery.
              </p>
            </div>

            {/* SkillDeck Top Featured */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#134E28] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#E5B83B]" /> SkillDeck Bangalore (Top Featured HR Certifications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillDeckCerts.map((cert, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-[#0B1849] to-[#14255C] text-white p-6 rounded-2xl shadow-lg border-2 border-[#E5B83B] relative">
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
              <h3 className="text-lg font-bold text-[#0B1849]">Coursiv, Claude, ChatGPT, Gemini & Technical Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {advancedCerts.map((cert, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:border-[#134E28] transition-all">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase tracking-wide">
                        {cert.category}
                      </span>
                      <h4 className="font-bold text-slate-800 text-sm mt-2">{cert.title}</h4>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>{cert.issuer}</span>
                      {cert.issued && <span className="font-semibold text-[#134E28]">{cert.issued}</span>}
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
            <h2 className="text-2xl font-bold text-[#0B1849] flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#134E28]" /> Education & Academic Background
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                <span className="text-xs font-bold text-[#134E28] bg-[#134E28]/10 px-3 py-1 rounded-full">Engineering Degree</span>
                <h3 className="text-lg font-bold text-[#0B1849] mt-3">Bachelor of Technology - BTech</h3>
                <p className="text-sm font-semibold text-slate-700">Metallurgical and Materials Engineering</p>
                <p className="text-xs text-slate-500 mt-1">RGUKT Basar / Rajiv Gandhi University of Knowledge Technologies, RK Valley (RAC)</p>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
                  June 2016 - September 2020
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                <span className="text-xs font-bold text-[#E5B83B] bg-[#E5B83B]/20 px-3 py-1 rounded-full text-[#0B1849]">Pre-University</span>
                <h3 className="text-lg font-bold text-[#0B1849] mt-3">Pre University Course (PUC)</h3>
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
            <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200">
              <h2 className="text-2xl font-bold text-[#0B1849] mb-2 flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#134E28]" /> Let's Connect
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B1849] text-sm"
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B1849] text-sm"
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B1849] text-sm"
                    placeholder="Discuss HR opportunities, consulting, or talent strategy..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0B1849] text-[#E5B83B] font-bold text-sm shadow-lg hover:bg-[#14255C] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-[#0B1849] text-white py-8 border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} Harsha Allakonda • Human Resources Manager at PREPDHA</p>
          <div className="flex items-center space-x-6">
            <a href="mailto:harshaallakonda1998@gmail.com" className="hover:text-[#E5B83B] transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/harsha-allakonda-8134813b4" target="_blank" rel="noreferrer" className="hover:text-[#E5B83B] transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
