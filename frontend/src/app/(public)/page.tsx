"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, BookOpen, Trophy, Users, Calendar, ArrowUpRight, 
  Bell, ShieldCheck, Sparkles, Award, Globe, Heart, CheckCircle2, 
  MapPin, Phone, HelpCircle, Star, Tv, Compass, Mail, Send, ZoomIn
} from "lucide-react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery items for preview section
  const galleryPreview = [
    { id: 1, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop", title: "DAVMPS Campus Building", category: "Campus" },
    { id: 2, src: "https://images.unsplash.com/photo-1546410531-bea4f70678d2?q=80&w=2070&auto=format&fit=crop", title: "Cultural Event Celebration", category: "Events" },
    { id: 3, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2069&auto=format&fit=crop", title: "Physics & Chemistry Lab", category: "Academics" },
    { id: 4, src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop", title: "Annual Athletic Meet", category: "Sports" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white overflow-hidden font-sans">
      
      {/* 1. ELITE HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-950">
        <div className="absolute top-[8%] left-[-12%] w-[600px] h-[600px] rounded-full bg-indigo-650/10 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-12%] w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none" />

        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-slate-950/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
            alt="DAVMPS Elite Campus" 
            className="w-full h-full object-cover filter saturate-[0.8] contrast-[1.1]"
          />
        </div>

        <div className="container relative z-20 mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-8 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-300">
                  CBSE Affiliated (No. 3430383) • Admissions 2026-27 Open
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-black tracking-tight leading-none text-white"
              >
                Inspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Excellence</span>, Shaping Destiny.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm md:text-lg text-slate-400 max-w-3xl leading-relaxed font-medium"
              >
                D A V Moti Public School Mundro Bagoder (DAVMPS) combines international educational standards with core Indian moral heritage. Empowering students of Giridih with high-tech smart classrooms and advanced research labs.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Link href="/admissions" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-indigo-600/20 flex items-center justify-center group text-xs uppercase tracking-wider">
                  Apply Online Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/erp/login" className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold transition-all duration-300 border border-white/10 flex items-center justify-center text-xs uppercase tracking-wider">
                  Central ERP Login
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-4 hidden lg:block relative">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-2xl shadow-2xl space-y-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Award className="w-36 h-36 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-white flex items-center">
                  <ShieldCheck className="w-5 h-5 mr-2 text-indigo-400" /> DAVMPS Credentials
                </h3>
                <div className="space-y-4 text-xs font-semibold">
                  <div className="flex justify-between border-b border-white/5 pb-2.5">
                    <span className="text-slate-455">Affiliation Body:</span>
                    <span className="text-indigo-300">CBSE Board New Delhi</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2.5">
                    <span className="text-slate-455">School Code:</span>
                    <span className="text-indigo-300">Affiliation No. 3430383</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2.5">
                    <span className="text-slate-455">Classes Taught:</span>
                    <span className="text-indigo-300">Nursery to XII (Sci/Comm)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-455">Special Features:</span>
                    <span className="text-indigo-300">Integrated Digital ERP</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS OVERVIEW SECTION */}
      <section className="py-16 bg-slate-900 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "1,500+", label: "Enrolled Students" },
              { val: "99.2%", label: "CBSE Board Passing Rate" },
              { val: "48+", label: "Trained Post-Graduate Faculty" },
              { val: "100%", label: "Biometric & CCTV Secured" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  {stat.val}
                </h3>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MOTTO & LEGACY MESSAGE SPOTLIGHT */}
      <section className="py-24 bg-slate-950 relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-10 items-center">
            <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-indigo-650/5 blur-[80px] pointer-events-none" />
            
            <div className="w-32 h-32 md:w-44 md:h-44 bg-indigo-900/40 rounded-full border border-indigo-500/20 flex-shrink-0 flex items-center justify-center relative">
              <Award className="w-16 h-16 text-indigo-400" />
            </div>

            <div className="space-y-4 text-center md:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400">Our Core Legacy</span>
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">"असतो मा सद्गमय, तमसो मा ज्योतिर्गमय"</h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-semibold">
                D A V Moti Public School was conceptualized with a mission to bring high-end modern digital education to the youth of Mundro Bagoder. We believe that true education does not merely load the memory of students, but awakens their intelligence to think freely and act morally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRINCIPAL MESSAGE DIRECTLY ON THE HOMEPAGE */}
      <section className="py-24 bg-slate-900 relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg aspect-square lg:aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Principal" 
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
      </section>

      {/* 5. WHY CHOOSE US / PILLARS OF EXCELLENCE */}
      <section className="py-24 bg-slate-950 relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-indigo-400 text-xs font-extrabold uppercase tracking-widest bg-indigo-900/30 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Elite Environment
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-6 tracking-tight">Why Choose DAVMPS?</h2>
            <p className="text-slate-400 mt-4 text-sm md:text-base">We foster intellectual, physical, and emotional growth inside an environment optimized for individual success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Modern Curriculum", desc: "Interactive and experiential approaches combining technology with real world problem solving." },
              { icon: Trophy, title: "Sports Excellence", desc: "Olympic-standard indoor stadium, synthetic athletic track, and specialized sports mentors." },
              { icon: Users, title: "Expert Faculty", desc: "Highly qualified educators holding PhDs and senior degrees from global institutes." },
              { icon: Globe, title: "Global Opportunities", desc: "Collaborations, international exchange programs, and professional university placement boards." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:shadow-indigo-500/5 hover:border-indigo-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-indigo-400">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-450 text-xs md:text-sm leading-relaxed font-semibold">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACADEMIC PROGRAMS MATRIX */}
      <section className="py-24 bg-slate-900 relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-indigo-400 text-xs font-extrabold uppercase tracking-widest bg-indigo-900/30 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Grade Layout
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-6 tracking-tight">Our Academic Wings</h2>
            <p className="text-slate-400 mt-4 text-sm md:text-base">DAVMPS implements comprehensive CBSE oriented grade structures from primary foundation to senior specialization.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Primary Wing", grade: "Grades I - V", desc: "Laying strong foundations with active learning methodologies, phonetics, and basic mathematics inside interactive smart environments." },
              { name: "Middle School", grade: "Grades VI - VIII", desc: "Introducing conceptual sciences, computer applications, linguistic proficiency, and structured sports routines." },
              { name: "High School", grade: "Grades IX - X", desc: "Intensive training, lab practicals, mock exam series, and rigorous counseling to ensure outstanding board exam achievements." },
              { name: "Senior Secondary", grade: "Grades XI - XII", desc: "Specialized Science (PCM/PCB) and Commerce (Accounts/Eco/Business Studies/IP) preparing students for competitive college benchmarks." }
            ].map((prog, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-indigo-550 transition-all duration-300">
                <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest bg-indigo-950/50 px-2.5 py-0.5 rounded border border-indigo-900/30 mb-4 inline-block">{prog.grade}</span>
                <h3 className="text-xl font-bold text-white mb-3">{prog.name}</h3>
                <p className="text-slate-450 text-xs md:text-sm leading-relaxed font-semibold">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CAMPUS FACILITIES & INFRASTRUCTURE */}
      <section className="py-24 bg-slate-950 relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-indigo-400 text-xs font-extrabold uppercase tracking-widest bg-indigo-900/30 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Campus Infrastructure
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-6 tracking-tight">World-Class Facilities</h2>
            <p className="text-slate-400 mt-4 text-sm md:text-base">We provide premium state-of-the-art systems to ensure that rural talents get identical exposure to metropolitan campuses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Tv, title: "Smart ICT Classrooms", desc: "Every classroom is equipped with advanced interactive touch panels, digital content modules, and projection systems to enable dynamic visual comprehension." },
              { icon: BookOpen, title: "Central Digital Library", desc: "Our high-volume library stocks over 10,000 reference books, national educational journals, and computer terminals for digital e-book access." },
              { icon: ShieldCheck, title: "Advanced Science Labs", desc: "High-spec modern physics, chemistry, biology, and composite mathematics labs featuring sophisticated equipment and professional guidance." },
              { icon: Globe, title: "Computer Science Labs", desc: "Advanced high-speed local network computer labs with personal screens for each student, fostering hands-on practice in Python and Web development." },
              { icon: Trophy, title: "Elite Playgrounds & Sports", desc: "Extensive playfields for cricket, football, volleyball, and physical training mentored by professional sports coaches." },
              { icon: Heart, title: "Safety, Security & RO Water", desc: "Round-the-clock security with extensive CCTV surveillance, biometric portals, and modern high-volume RO drinking water filtration systems." }
            ].map((facility, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-indigo-550 hover:shadow-2xl hover:shadow-indigo-650/5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mb-6">
                    <facility.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{facility.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-semibold">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CO-CURRICULAR CLUBS */}
      <section className="py-24 bg-slate-900 relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-indigo-400 text-xs font-extrabold uppercase tracking-widest bg-indigo-900/30 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Beyond Academics
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-6 tracking-tight">Co-Curricular Clubs</h2>
            <p className="text-slate-400 mt-4 text-sm md:text-base">We prioritize natural character cultivation by engaging students across four prominent institutional clubs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Science & Cyber Club", focus: "Robotics, Coding, Quizzes", desc: "Allows technical minds to experiment with coding syntax, model robotics, and participate in science exhibits." },
              { title: "Eco-Green Club", focus: "Environmental Safety", desc: "Engages students in tree plantation, waste recycling campaigns, and organic gardening inside the campus." },
              { title: "Literary & Debate Club", focus: "Public Speaking, Poetry", desc: "Develops public speaking, dramatic play, poetry recital, and competitive speech skills." },
              { title: "Cultural & Fine Arts", focus: "Music, Classical Dance", desc: "Nurtures creative aesthetics via instrumental training, classical dance recitals, and visual drawing arts." }
            ].map((club, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-cyan-500/30 transition-all duration-300">
                <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest mb-1 block">{club.focus}</span>
                <h3 className="text-lg font-bold text-white mb-3">{club.title}</h3>
                <p className="text-slate-455 text-xs leading-relaxed font-semibold">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ACADEMIC CHAMPIONS / BOARD TOPPERS */}
      <section className="py-24 bg-slate-950 relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-indigo-400 text-xs font-extrabold uppercase tracking-widest bg-indigo-900/30 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Our Pride
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-6 tracking-tight">CBSE Board Toppers</h2>
            <p className="text-slate-400 mt-4 text-sm md:text-base">We proudly acknowledge the high academic milestones achieved by our senior secondary scholars.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Aman Kumar", score: "98.2% (CGPA 10)", class: "CBSE Class X - Topper", desc: "Secured centum scores in Mathematics & Science." },
              { name: "Priya Kumari", score: "97.4% (Science)", class: "CBSE Class XII - Stream Topper", desc: "Currently pursuing Aerospace Engineering at a premium institute." },
              { name: "Rahul Dev", score: "96.8% (Commerce)", class: "CBSE Class XII - Commerce Topper", desc: "Outstanding performer in Accountancy and Business Economics." }
            ].map((topper, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300">
                <div className="absolute top-0 right-0 bg-indigo-650 px-4 py-1 rounded-bl-2xl text-[10px] font-extrabold uppercase tracking-widest text-white shadow-lg">
                  {topper.score}
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest mb-1 block">{topper.class}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{topper.name}</h3>
                  <p className="text-slate-455 text-xs leading-relaxed font-semibold">{topper.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. NOTICE BOARD & PORTAL DIRECTORY */}
      <section className="py-24 bg-slate-900 relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8 space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center">
                  <Bell className="w-6 h-6 mr-3 text-indigo-400" />
                  Important Notices
                </h2>
                <Link href="/notices" className="text-indigo-400 font-bold hover:text-indigo-300 text-xs flex items-center uppercase tracking-widest">
                  View Notice Board <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden divide-y divide-white/5">
                {[
                  { date: "May 15", title: "End of Term Examination Schedule Released", tag: "Exam" },
                  { date: "May 12", title: "Annual Sports Meet 2026 - Registration Guidelines", tag: "Sports" },
                  { date: "May 10", title: "Mandatory Parent-Teacher Meeting (PTM) Grades IX-XII", tag: "Meeting" },
                ].map((notice, i) => (
                  <div key={i} className="flex p-6 hover:bg-white/[0.02] transition-colors cursor-pointer group items-center">
                    <div className="w-16 h-16 bg-indigo-655/10 border border-indigo-500/20 text-indigo-400 rounded-2xl flex flex-col items-center justify-center font-bold mr-6 flex-shrink-0">
                      <span className="text-xs uppercase tracking-wider">{notice.date.split(" ")[0]}</span>
                      <span className="text-xl">{notice.date.split(" ")[1]}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-[9px] font-extrabold text-indigo-400 uppercase tracking-widest bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-900/30 mb-2 inline-block">
                        {notice.tag}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-slate-200 group-hover:text-indigo-400 transition-colors leading-snug">
                        {notice.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Portal Directory</h2>
              <div className="space-y-4">
                {[
                  { title: "Admission Portal", href: "/admissions", color: "bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-indigo-500/30" },
                  { title: "Parent Fee Payment", href: "/erp/parent/fees", color: "bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-emerald-500/30" },
                  { title: "Student Results", href: "/erp/student/results", color: "bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-purple-500/30" },
                ].map((link, i) => (
                  <Link key={i} href={link.href}>
                    <motion.div 
                      whileHover={{ y: -2 }}
                      className={`p-6 rounded-2xl border flex items-center justify-between transition-all font-bold cursor-pointer text-sm ${link.color}`}
                    >
                      <span>{link.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-70 text-indigo-455" />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. PHOTO GALLERY PREVIEW */}
      <section className="py-24 bg-slate-950 relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 text-center md:text-left">
            <div>
              <span className="text-indigo-400 text-xs font-extrabold uppercase tracking-widest bg-indigo-900/30 px-4 py-1.5 rounded-full border border-indigo-500/20">
                Visual Showcase
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mt-6 tracking-tight">Campus Gallery</h2>
            </div>
            <Link href="/gallery" className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all text-xs uppercase tracking-wider">
              Explore Full Gallery
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPreview.map((img) => (
              <div 
                key={img.id} 
                className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-square cursor-pointer bg-slate-900"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-indigo-450 text-[9px] font-extrabold uppercase tracking-widest mb-1">{img.category}</p>
                  <h3 className="text-white font-bold text-sm leading-snug">{img.title}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. PARENT Q&A / FAQs */}
      <section className="py-24 bg-slate-900 relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-xs font-extrabold uppercase tracking-widest bg-indigo-900/30 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Support Center
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-6 tracking-tight">Parent Helpdesk & FAQs</h2>
            <p className="text-slate-400 mt-4 text-sm md:text-base">Get instant answers regarding institutional admissions, transportation, and school syllabus criteria.</p>
          </div>

          <div className="space-y-6">
            {[
              { 
                q: "What is the admissions criteria for class XI?", 
                a: "For Class XI admissions (Science/Commerce streams), selection is strictly based on CBSE / State Board Grade X result marks followed by a counseling session." 
              },
              { 
                q: "Is there a transport service available?", 
                a: "Yes, DAVMPS provides GPS tracked institutional buses covering all primary routes across Bagoder, Dumri, Bishnugarh, and adjacent Giridih routes." 
              },
              { 
                q: "How can parents track student academic growth?", 
                a: "Every parent is allocated a secure password for our Integrated ERP Portal. Log in at /erp/parent to view live attendance records, monthly term marksheet results, and invoice payment receipts." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                <h4 className="text-base font-bold text-white flex items-start">
                  <HelpCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-slate-450 text-xs md:text-sm pl-8 leading-relaxed font-semibold">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. QUICK CONTACT & MAPS EMBED SECTION */}
      <section className="py-24 bg-slate-950 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-indigo-400 text-xs font-extrabold uppercase tracking-widest bg-indigo-900/30 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Locate & Query
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-6 tracking-tight">Connect With Campus</h2>
            <p className="text-slate-400 mt-4 text-sm md:text-base">Drop a direct message to our helpdesk or view our exact coordinates map inside Bagoder.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Contact cards & Map */}
            <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">Our Address</h3>
                    <p className="text-slate-450 text-xs font-semibold">Mundro, Bagoder, Giridih, Jharkhand - 825322, India</p>
                  </div>
                </div>

                <div className="flex p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">Helpline</h3>
                    <p className="text-slate-450 text-xs font-semibold">+91 94313 82532 • +91 98012 34567</p>
                  </div>
                </div>

                {/* GPS Transport Network & Travel Times */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">GPS Transport & Travel Times</h3>
                      <p className="text-slate-450 text-xs font-semibold">Institutional Bus fleet covering all main routes</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 pt-2 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 flex flex-col justify-center text-center">
                      <span className="text-indigo-400 text-xs">2 mins</span>
                      <span className="text-[8px] text-slate-500 mt-1">Bagoder Center</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 flex flex-col justify-center text-center">
                      <span className="text-indigo-400 text-xs">12 mins</span>
                      <span className="text-[8px] text-slate-500 mt-1">Dumri Chowk</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 flex flex-col justify-center text-center">
                      <span className="text-indigo-400 text-xs">15 mins</span>
                      <span className="text-[8px] text-slate-500 mt-1">Bishnugarh</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 flex flex-col justify-center text-center">
                      <span className="text-indigo-400 text-xs">22 mins</span>
                      <span className="text-[8px] text-slate-500 mt-1">Suriya Station</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 flex flex-col justify-center text-center">
                      <span className="text-indigo-400 text-xs">35 mins</span>
                      <span className="text-[8px] text-slate-500 mt-1">Giridih H.Q.</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-indigo-950/30 border border-indigo-500/10 flex flex-col justify-center text-center">
                      <span className="text-cyan-400 text-xs">Live GPS</span>
                      <span className="text-[8px] text-indigo-300 mt-1">Parent ERP Tracking</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="border border-white/10 rounded-3xl overflow-hidden h-72 shadow-2xl relative flex-1 min-h-[250px]">
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14589.65825227749!2d85.82390867055743!3d24.084798606478954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f40c741496a75f%3A0xc3f6b92a3449339e!2sBagodar%2C%20Jharkhand%20825322!5e0!3m2!1sen!2sin!4v1684300431320!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Quick Query Form */}
            <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
              <h3 className="text-xl font-bold text-white mb-6">Send Quick Query</h3>
              <form className="space-y-5 flex-1 flex flex-col justify-between" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white text-xs font-semibold" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white text-xs font-semibold" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white text-xs font-semibold" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-white/10 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white text-xs font-semibold resize-none" placeholder="Write your message here..."></textarea>
                  </div>
                </div>

                <button type="submit" className="w-full mt-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all text-[10px] uppercase tracking-wider flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for Gallery items */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <XIcon />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] rounded-3xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Inline Close Icon for local stability
function XIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
