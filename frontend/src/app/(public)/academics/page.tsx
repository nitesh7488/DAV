"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, GraduationCap, Layout, Clock, Calendar, ShieldCheck, 
  ArrowRight, Award, Compass, ShieldAlert, CheckCircle2, ChevronRight 
} from "lucide-react";

export default function Academics() {
  const [activeTab, setActiveTab] = useState("books");
  const programs = [
    { 
      name: "Primary Wing", 
      grade: "Grades I - V", 
      desc: "Laying strong foundations with active learning methodologies, phonetics, environmental studies, and basic mathematics inside interactive smart classrooms.",
      subjects: ["English Communicative", "Hindi Vyakaran", "Mathematics Foundation", "Environmental Studies (EVS)", "Computer Awareness", "Moral Education"]
    },
    { 
      name: "Middle School", 
      grade: "Grades VI - VIII", 
      desc: "Introducing conceptual sciences, computer applications, linguistic proficiency, and structured sports routines to develop analytical thinking.",
      subjects: ["Linguistics (English, Hindi, Sanskrit)", "Integrated Sciences (Physics, Chem, Bio)", "Social Sciences (History, Civics, Geo)", "Mathematics & Algebra", "Computer Coding Foundation", "Arts & Craft"]
    },
    { 
      name: "High School Curriculum", 
      grade: "Grades IX - X (CBSE Board Affiliated)", 
      desc: "Intensive training, lab practicals, mock exam series, and rigorous counseling to ensure outstanding board exam achievements and holistic growth.",
      subjects: ["English Language & Literature", "Hindi Course A / Sanskrit", "Mathematics (Standard / Basic)", "Science (Physics, Chemistry, Biology)", "Social Science (Hist, Geo, Pol Sci, Eco)", "Information Technology (Code 402)"]
    },
    { 
      name: "Senior Secondary Streams", 
      grade: "Grades XI - XII (CBSE Specialized)", 
      desc: "Specialized streams in Science and Commerce preparing students for NEET, JEE, CUET, and premier national university benchmarks.",
      subjects: [
        "Science Stream: Physics, Chemistry, Mathematics, Biology, Computer Science, English Core",
        "Commerce Stream: Accountancy, Business Studies, Economics, Informatic Practices (IP), English Core"
      ]
    }
  ];

  const examSchemes = [
    { term: "Periodic Assessment I (PA-1)", period: "July Cycle", weightage: "10% Weightage", desc: "Written tests, subject enrichment activities, and notebook submissions." },
    { term: "Half-Yearly Examination (Term-1)", period: "September Cycle", weightage: "40% Weightage", desc: "Formal descriptive exams covering 50% of the affiliated syllabus." },
    { term: "Periodic Assessment II (PA-2)", period: "December Cycle", weightage: "10% Weightage", desc: "Focuses on syllabus progression post Term-1 with special doubt clearing boards." },
    { term: "Annual Board / Final Examination (Term-2)", period: "February / March Cycle", weightage: "40% Weightage", desc: "Comprehensive final term covering full board aligned curriculum parameters." }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-950 text-white font-sans min-h-screen relative overflow-x-hidden">
      {/* Background Glows */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-indigo-655/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      {/* Header Banner */}
      <div className="relative py-24 mb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
            alt="Academics" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl mb-4"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-300">Intellectual Development</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-none text-white"
          >
            Academics at <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">DAVMPS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium"
          >
            A highly structured CBSE board-oriented pedagogy optimized to combine hard conceptual sciences with modern digital lab execution.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Programs Columns */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-white tracking-tight flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-indigo-400" />
                Our Detailed Pedagogy
              </h2>
              <p className="text-slate-450 text-sm leading-relaxed font-semibold">
                D A V Moti Public School follows a comprehensive syllabus layout designed under CBSE board norms. Below is the detailed structure of academic streams and core subjects.
              </p>
            </div>

            {/* PRE-PRIMARY WING SPECIAL SECTION (RIS REFERENCE) */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6">
                <div>
                  <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-900/30">
                    Foundation Years
                  </span>
                  <h3 className="text-2xl font-black text-white mt-2">Early Childhood Pre-Primary Wing</h3>
                </div>
                <span className="text-xs text-slate-400 font-semibold md:text-right">Nursery, Junior KG & Senior KG (Ages 3-5)</span>
              </div>

              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                Our early education model is specifically built around interactive sensory experiences to transition children into active learners. We highlight **four main pillars** of early cognitive development:
              </p>

              {/* Tab Toggles */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-white/5 pb-6">
                {[
                  { id: "books", label: "Play-Way Books", desc: "Cognitive Materials" },
                  { id: "spaces", label: "Sensory Spaces", desc: "Interactive Environments" },
                  { id: "actions", label: "Creative Action", desc: "Kinesthetic Puppetry" },
                  { id: "sounds", label: "Phonic Sounds", desc: "Linguistic Audio" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-indigo-600/10 border-indigo-500 text-white shadow-xl shadow-indigo-600/5"
                        : "bg-slate-900/40 border-white/5 text-slate-400 hover:bg-slate-900 hover:border-white/15"
                    }`}
                  >
                    <span className="block text-xs font-bold leading-snug">{tab.label}</span>
                    <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">{tab.desc}</span>
                  </button>
                ))}
              </div>

              {/* Tab Display Content */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-semibold leading-relaxed text-slate-300">
                {activeTab === "books" && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center"><BookOpen className="w-4 h-4 text-indigo-400 mr-2" /> Books & Early Numeracy Materials</h4>
                    <p className="text-slate-450 leading-relaxed font-medium">
                      Our early years curriculum features graphic-rich activity books, high-volume visual flash cards, e-learning digital modules, and custom drawing sheets that encourage tactile cognitive connection without strain.
                    </p>
                  </div>
                )}
                {activeTab === "spaces" && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center"><Layout className="w-4 h-4 text-indigo-400 mr-2" /> Theme-Based Spaces & Classrooms</h4>
                    <p className="text-slate-450 leading-relaxed font-medium">
                      Children learn best in visual settings. We provide custom-designed theme playrooms, safe soft-floored indoor playhouses, private sandbox areas, and regularly organize educational school garden picnics and outdoor field trips.
                    </p>
                  </div>
                )}
                {activeTab === "actions" && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center"><Award className="w-4 h-4 text-indigo-400 mr-2" /> Creative Actions, Puppetry & Play</h4>
                    <p className="text-slate-450 leading-relaxed font-medium">
                      We bring academic storytelling to life! Teachers perform weekly hand-puppetry dramas, arrange clay modeling sessions, coordinate group dance rehearsals, and lead festive enactment celebrations that build child self-confidence.
                    </p>
                  </div>
                )}
                {activeTab === "sounds" && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center"><Clock className="w-4 h-4 text-indigo-400 mr-2" /> Phonics & Articulation Audios</h4>
                    <p className="text-slate-450 leading-relaxed font-medium">
                      Language building is standard sound training. We integrate systematic phonics schedules, rhythmic auditory rhyming boards, and advanced visual-audio projections to guide proper English and Hindi pronunciation.
                    </p>
                  </div>
                )}
              </div>

              {/* Assessment Sub-card */}
              <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/10 space-y-2">
                <h4 className="text-xs font-bold text-indigo-300 flex items-center">
                  <ShieldCheck className="w-4 h-4 text-indigo-400 mr-2" /> Specialized Two-Tier Evaluation Strategy
                </h4>
                <p className="text-slate-400 text-[11px] leading-relaxed font-medium">
                  We reject highly stressful academic rankings for toddlers. Instead, we follow:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-[10px] text-slate-350">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 font-semibold">
                    <span className="block font-bold text-cyan-400 uppercase tracking-wider mb-1">Monthly Progress Sheets</span>
                    Tracks motor skills, vocabulary articulation, physical coordination, and moral peer alignment indices.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 font-semibold">
                    <span className="block font-bold text-cyan-400 uppercase tracking-wider mb-1">Dual Term Assessment Reviews</span>
                    Relaxed diagnostic checksheets completed in October (pre-Diwali) and March, ensuring foundational compliance for primary wings.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {programs.map((prog, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{prog.name}</h3>
                    <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest bg-indigo-950/50 px-2.5 py-0.5 rounded border border-indigo-900/30">
                      {prog.grade}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-semibold mb-6">{prog.desc}</p>
                  
                  {/* Subjects pill lists */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Core Subject Combinations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {prog.subjects.map((sub, sIdx) => (
                        <span key={sIdx} className="text-xs bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-lg text-slate-300 font-semibold flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-indigo-450 flex-shrink-0" />
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Assessment Framework */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Compass className="w-6 h-6 mr-2 text-indigo-400" /> Continuous and Comprehensive Evaluation (CCE)
              </h3>
              <p className="text-slate-450 text-xs md:text-sm leading-relaxed font-semibold">
                To guarantee structured scholastic and co-scholastic progress, we implement a highly methodical continuous assessment strategy throughout the academic year.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {examSchemes.map((scheme, sIdx) => (
                  <div key={sIdx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/25 transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-bold text-white leading-snug">{scheme.term}</h4>
                      <span className="text-[9px] font-extrabold text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/30">{scheme.weightage}</span>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-2">{scheme.period}</span>
                    <p className="text-slate-450 text-xs leading-relaxed font-semibold">{scheme.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-3xl font-black text-white tracking-tight flex items-center">
              <Calendar className="w-8 h-8 mr-3 text-indigo-400" />
              Information
            </h2>
            
            <div className="space-y-6">
              {/* Timing Card */}
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                <div className="flex items-center mb-4 text-indigo-400">
                  <Clock className="w-6 h-6 mr-3" />
                  <h3 className="text-lg font-bold text-white">Daily Timing Matrix</h3>
                </div>
                <ul className="space-y-3 text-xs text-slate-400 font-semibold">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Monday - Friday:</span> <span className="text-indigo-300">08:00 AM - 02:00 PM</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Saturday Timing:</span> <span className="text-indigo-300">08:00 AM - 12:00 PM</span></li>
                  <li className="flex justify-between text-rose-500 font-bold"><span>Sunday Schedule:</span> <span>School Closed</span></li>
                </ul>
              </div>

              {/* Lab details card */}
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center text-indigo-400">
                  <ShieldCheck className="w-6 h-6 mr-2" /> Research Labs
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-semibold">
                  Science competence begins inside the laboratory. Our school provides dedicated and highly modern Physics, Chemistry, Biology, and Computer Labs featuring senior lab instructors guiding each student dynamically.
                </p>
                <div className="space-y-2 text-xs font-semibold text-slate-350">
                  <div className="flex items-center"><ChevronRight className="w-4 h-4 text-indigo-455 mr-1" /> Physics Lab (Equipped with optical benches)</div>
                  <div className="flex items-center"><ChevronRight className="w-4 h-4 text-indigo-455 mr-1" /> Chemistry Lab (Standard reagent supply)</div>
                  <div className="flex items-center"><ChevronRight className="w-4 h-4 text-indigo-455 mr-1" /> Biology Lab (Advanced slides & specimens)</div>
                  <div className="flex items-center"><ChevronRight className="w-4 h-4 text-indigo-455 mr-1" /> ICT Computer Lab (Personal screen per student)</div>
                </div>
              </div>

              {/* Dynamic Calendar Downloader */}
              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-3xl border border-indigo-500/20 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Layout className="w-24 h-24 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white flex items-center">
                  Academic Calendar
                </h3>
                <p className="text-indigo-200 text-xs font-semibold leading-relaxed">
                  Download the comprehensive DAVMPS academic events, monthly examinations, board schedules, and official holiday list for session 2026-2027.
                </p>
                <button className="w-full bg-white text-indigo-900 font-extrabold py-3.5 rounded-xl hover:bg-slate-100 transition-colors shadow-lg text-xs uppercase tracking-wider">
                  Download Calendar PDF
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
