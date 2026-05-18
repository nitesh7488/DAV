"use client";

import { motion as motionElement } from "framer-motion";
import { 
  CheckCircle, Award, Compass, ShieldCheck, Heart, 
  Users, Target, BookOpen, Star, Calendar, ShieldAlert 
} from "lucide-react";

export default function About() {
  const facultyList = [
    {
      name: "Shri Moti Prasad",
      role: "Hon'ble Founder & Managing Director",
      qualification: "Social Reformer & Educationist",
      desc: "Founded the institution to democratize high-fidelity scientific learning for every rural scholar in Giridih.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Dr. Robert Wilson",
      role: "Principal & Head Academician",
      qualification: "Ph.D. in Educational Pedagogy, M.Ed.",
      desc: "Steers the central curriculum development, parent-teacher alignment, and premium school ethics policy.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Mrs. Shalini Sharma",
      role: "Head of Senior Secondary Section",
      qualification: "M.Sc. in Physics, B.Ed. (15+ Years Exp)",
      desc: "Monitors specialized board preparation and guides advanced lab research across science streams.",
      image: "https://images.unsplash.com/photo-1580894732444-8fecef2271da?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Mr. Arvind Mishra",
      role: "Head of Mathematics Department",
      qualification: "M.Sc. in Applied Mathematics, B.Ed.",
      desc: "Fosters analytical logic and guides secondary students for national competitive science olympiads.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Mrs. Rita Sen",
      role: "Primary Coordinator & Counselor",
      qualification: "M.A. in Child Psychology, B.Ed.",
      desc: "Manages early childhood play-way activities, foundation literacy, and emotional well-being.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      name: "Mr. Vikash Kumar",
      role: "Director of ICT & Computer Science",
      qualification: "B.Tech. in CSE, MCA (Tech Specialist)",
      desc: "Supervises coding classrooms (Python, Web development) and maintains secure database operations.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  const milestones = [
    { year: "2011", title: "Foundation Stone", desc: "DAVMPS laid its foundation with 80 students, aiming to elevate semi-urban schooling." },
    { year: "2015", title: "CBSE Board Affiliation", desc: "Granted formal Affiliation No. 3430383 from CBSE Board, New Delhi." },
    { year: "2019", title: "Infrastructure Upgrade", desc: "Constructed dedicated physics, chemistry, biology labs, and smart projector layouts." },
    { year: "2023", title: "Central Digital ERP Portal", desc: "Launched automated web portal logins for student results, notices feed, and online fee payments." },
    { year: "2026", title: "Scholastic Supremacy", desc: "Recognized among Giridih's elite academic campuses with 1,500+ active scholars." }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-950 text-white font-sans min-h-screen relative overflow-x-hidden">
      {/* Dynamic Glow Orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-indigo-655/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      {/* Header Banner */}
      <div className="relative py-24 mb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
            alt="School Campus" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motionElement.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl mb-4"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-300">Our Legacy & Philosophy</span>
          </motionElement.div>
          <motionElement.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-none text-white"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">DAVMPS</span>
          </motionElement.h1>
          <motionElement.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium"
          >
            D A V Moti Public School Mundro Bagoder (Affiliation No. 3430383) stands as a beacon of academic transformation, moral integrity, and advanced scientific temper.
          </motionElement.p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        
        {/* 1. DETAILED ABOUT SCHOOL SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <motionElement.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Our Core Vision & Mission</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
                <h3 className="text-lg font-bold text-indigo-400 mb-2 flex items-center">
                  <Compass className="w-5 h-5 mr-2" /> School Mission Ethos
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  We aim to blend international digital scientific systems with ancient Indian moral values, preparing rural and semi-urban talents to compete at national scales with zero technical barriers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-lg font-bold text-cyan-400 mb-2 flex items-center">
                  <Target className="w-5 h-5 mr-2" /> Central Vision
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  To remain Giridih’s most trusted CBSE benchmark school, fostering dynamic innovators, sports champions, and morally strong citizens of tomorrow.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-4">Our Foundation Pillars</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Academic Rigor", icon: ShieldCheck },
                  { title: "Character & Ethics", icon: Award },
                  { title: "Holistic Health", icon: Heart },
                  { title: "Community Service", icon: Users }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-slate-300 font-semibold text-sm">
                    <item.icon className="w-5 h-5 text-indigo-400" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </motionElement.div>
          
          <motionElement.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                alt="School Classrooms" 
                className="w-full object-cover filter brightness-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-indigo-600/90 backdrop-blur-md p-6 rounded-2xl border border-indigo-500/20 shadow-2xl hidden md:block">
              <p className="text-5xl font-black text-white mb-1">15+</p>
              <p className="text-indigo-150 text-xs font-bold uppercase tracking-wider">Years of Educational Legacy</p>
            </div>
          </motionElement.div>
        </div>

        {/* 2. CHRONOLOGICAL SCHOOL TIMELINE & MILESTONES */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 text-xs font-extrabold uppercase tracking-widest bg-indigo-900/30 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Chronicle Progress
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-6 tracking-tight">DAVMPS Milestones</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {milestones.map((milestone, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:border-indigo-550 transition-all duration-300">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{milestone.year}</span>
                <div className="mt-4">
                  <h3 className="text-base font-bold text-white mb-1">{milestone.title}</h3>
                  <p className="text-slate-450 text-xs leading-relaxed font-semibold">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. DEDICATED FACULTY DIRECTORY & TEACHER DIRECTORY */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-indigo-400 text-xs font-extrabold uppercase tracking-widest bg-indigo-900/30 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Our Educators
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-6 tracking-tight">Institutional Directory</h2>
            <p className="text-slate-400 mt-4 text-sm md:text-base">DAVMPS boasts highly experienced post-graduates, physical trainers, and dynamic ICT consultants.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyList.map((fac, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:shadow-2xl hover:shadow-indigo-500/5 hover:border-indigo-550 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 mb-6 bg-slate-900">
                    <img 
                      src={fac.image} 
                      alt={fac.name} 
                      className="w-full h-full object-cover filter brightness-[0.9] saturate-[0.8] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest mb-1 block">{fac.role}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{fac.name}</h3>
                  <p className="text-[10px] text-cyan-400 font-bold mb-4 uppercase tracking-wider">{fac.qualification}</p>
                  <p className="text-slate-400 text-xs leading-relaxed font-semibold">{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FOUNDER SPOTLIGHT PORTRAIT */}
        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden mb-20">
          <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-600/5 blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg aspect-square lg:aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Founder" 
                  className="w-full h-full object-cover filter brightness-[0.9] saturate-[0.8]"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded border border-indigo-900/30 inline-block">
                Leadership Statement
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Principal's Address</h2>
              <p className="text-indigo-300 font-bold text-lg">Shri Moti Prasad • Founder & Principal</p>
              
              <blockquote className="text-lg md:text-xl italic text-slate-300 leading-relaxed border-l-4 border-indigo-500 pl-6 my-6 font-medium">
                "Our core mission at DAVMPS is to blend modern scientific temper with ancient values of diligence. Education must not be limited to books, it must produce dynamic thinkers equipped with moral courage to solve community challenges."
              </blockquote>
              
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                We believe in providing the absolute best facilities to rural and semi-urban talents. With our integrated smart classrooms, dynamic computer labs, and fully functional online ERP portal, we ensure that students of Mundro Bagoder do not lag behind in any academic frontier.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
