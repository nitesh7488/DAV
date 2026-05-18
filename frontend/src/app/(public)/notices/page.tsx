"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Download, Search, Sparkles, ChevronDown, ChevronUp, Calendar } from "lucide-react";

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedNoticeId, setExpandedNoticeId] = useState<number | null>(null);

  const notices = [
    { 
      id: 1, 
      title: "End of Term Board Examination Schedule Released", 
      date: "2026-05-15", 
      category: "Exam", 
      type: "PDF", 
      size: "2.4 MB",
      desc: "The final affiliated CBSE board exams for class X and XII will commence from June 12, 2026. The full date-sheet, seating matrix, and center instructions are available in this official download. Please ensure all student dues are cleared before admit card collections."
    },
    { 
      id: 2, 
      title: "Annual Sports Meet 2026 - Registration Guidelines", 
      date: "2026-05-12", 
      category: "Sports", 
      type: "Link",
      desc: "Registrations for the Annual Sports Meet 'Khel Utsav 2026' are officially open! Students from Primary to Senior Secondary wings can register for track events, basketball, badminton, chess, and long jump. Contact your designated physical education trainers for entry forms."
    },
    { 
      id: 3, 
      title: "Mandatory Parent-Teacher Meeting (PTM) for Grades IX-XII", 
      date: "2026-05-10", 
      category: "General", 
      type: "PDF", 
      size: "1.1 MB",
      desc: "A mandatory PTM will be held on Saturday, May 24, 2026, starting at 08:30 AM inside the main auditorium. Discussion points include periodic test results, board exam registration documents validation, attendance updates, and summer project schedules."
    },
    { 
      id: 4, 
      title: "Summer Camp enrollment details and schedules", 
      date: "2026-05-05", 
      category: "Events", 
      type: "PDF", 
      size: "3.5 MB",
      desc: "Unlock creative potentials this summer! Join our high-end 15-day summer training camp featuring advanced robot coding (Arduino), instrumental music, public speaking, speech debate, and fine arts classes. Registrations end on May 30."
    },
    { 
      id: 5, 
      title: "Revised School Bus Routes and stop lists for Session 2026-27", 
      date: "2026-04-28", 
      category: "Transport", 
      type: "PDF", 
      size: "5.2 MB",
      desc: "To accommodate new student enrollments, we have revised the central school bus routes. New stops have been added in Suriya and Dumri. View this document to check your designated route number, pick-up times, monthly charges, and driver contact cards."
    },
    { 
      id: 6, 
      title: "Inter-School Debate Competition and cultural team selection lists", 
      date: "2026-04-20", 
      category: "Events", 
      type: "Notice",
      desc: "The final selection trials for the upcoming CBSE National Debate Competition will take place in the digital seminar hall on May 2. Shortlisted candidates from preparatory rounds must report to their house captains by 09:00 AM."
    },
  ];

  const filteredNotices = notices.filter(n => {
    const matchesCategory = activeTab === "All" || n.category === activeTab;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (category: string) => {
    if (category === "All") return notices.length;
    return notices.filter(n => n.category === category).length;
  };

  const toggleNotice = (id: number) => {
    setExpandedNoticeId(expandedNoticeId === id ? null : id);
  };

  return (
    <div className="pt-24 pb-16 bg-slate-950 text-white font-sans min-h-screen relative overflow-x-hidden">
      {/* Background Glows */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-indigo-655/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      {/* Header Banner */}
      <div className="relative py-20 mb-16 overflow-hidden border-b border-white/5">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl mb-4"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-300">Circular Directory</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-4 tracking-tight leading-none text-white"
          >
            Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Notices</span>
          </motion.h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium">Keep updated with the daily announcements, calendar modifications, and sports timetables.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Filters & Search controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-thin scrollbar-thumb-white/10">
              {["All", "Exam", "Events", "Sports", "General", "Transport"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all duration-300 text-xs uppercase tracking-wider cursor-pointer ${
                    activeTab === tab 
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/15 border border-indigo-500/30" 
                      : "bg-white/5 text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  {tab} <span className={`ml-1 text-[10px] font-extrabold ${activeTab === tab ? 'text-indigo-200' : 'text-slate-500'}`}>({getCategoryCount(tab)})</span>
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Search circulars..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all placeholder-slate-500"
              />
              <Search className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          {/* Notices Feed */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-2xl divide-y divide-white/5 shadow-2xl">
            <AnimatePresence mode="popLayout">
              {filteredNotices.length > 0 ? (
                filteredNotices.map((notice, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.05 }}
                    key={notice.id} 
                    className="p-6 hover:bg-white/[0.02] transition-colors flex flex-col group cursor-pointer"
                    onClick={() => toggleNotice(notice.id)}
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-start">
                        <div className="hidden sm:flex flex-shrink-0 w-14 h-14 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl items-center justify-center text-indigo-400 mr-5">
                          <Bell className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded border ${
                              notice.category === 'Exam' ? 'bg-rose-950/50 border-rose-900/30 text-rose-400' :
                              notice.category === 'Sports' ? 'bg-emerald-950/50 border-emerald-900/30 text-emerald-400' :
                              notice.category === 'Events' ? 'bg-purple-950/50 border-purple-900/30 text-purple-400' :
                              'bg-blue-950/50 border-blue-900/30 text-blue-400'
                            }`}>
                              {notice.category}
                            </span>
                            <span className="text-xs text-slate-500 font-semibold flex items-center">
                              <Calendar className="w-3.5 h-3.5 mr-1" />
                              {new Date(notice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                          </div>
                          <h3 className="text-base md:text-lg font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">
                            {notice.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        {notice.type === "PDF" ? (
                          <button 
                            className="hidden md:flex items-center justify-center space-x-2 px-5 py-3 bg-white/5 hover:bg-white/15 border border-white/5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-slate-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Download className="w-4 h-4 text-indigo-455" />
                            <span>Download PDF <span className="text-[10px] font-medium text-slate-550 ml-1">({notice.size})</span></span>
                          </button>
                        ) : (
                          <button 
                            className="hidden md:flex items-center justify-center space-x-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-indigo-600/10"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Read Guidelines</span>
                          </button>
                        )}

                        <div className="text-slate-500 group-hover:text-white transition-colors">
                          {expandedNoticeId === notice.id ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedNoticeId === notice.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-4 pt-4 border-t border-white/5 text-xs md:text-sm text-slate-400 leading-relaxed font-semibold pl-0 sm:pl-19"
                        >
                          <p className="mb-4">{notice.desc}</p>
                          <div className="flex md:hidden pt-2">
                            {notice.type === "PDF" ? (
                              <button 
                                className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-white/5 hover:bg-white/15 border border-white/5 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all text-slate-300"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Download className="w-4 h-4 text-indigo-450" />
                                <span>Download PDF ({notice.size})</span>
                              </button>
                            ) : (
                              <button 
                                className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all shadow-lg"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span>Read Guidelines</span>
                              </button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="p-16 text-center text-slate-500">
                  <Bell className="w-12 h-12 mx-auto text-slate-600 mb-4 animate-bounce" />
                  <p className="text-base font-bold text-slate-400">No official notices match your category filters or search query.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
