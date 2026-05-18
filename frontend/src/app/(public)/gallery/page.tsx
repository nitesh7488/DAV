"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Sparkles } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; category: string } | null>(null);

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop", category: "Campus", title: "DAVMPS Main Administrative Building" },
    { id: 2, src: "https://images.unsplash.com/photo-1546410531-bea4f70678d2?q=80&w=2070&auto=format&fit=crop", category: "Events", title: "Annual Cultural Day & Celebration 2025" },
    { id: 3, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2069&auto=format&fit=crop", category: "Academics", title: "Physics & Chemistry Advanced Lab" },
    { id: 4, src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop", category: "Sports", title: "Inter-School Basketball Tournament Championship" },
    { id: 5, src: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1964&auto=format&fit=crop", category: "Academics", title: "Central Digital Library (10,000+ Volume Capacity)" },
    { id: 6, src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop", category: "Campus", title: "Next-Gen Computer Application Lab" },
    { id: 7, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop", category: "Events", title: "National Science Exhibition Showcase" },
    { id: 8, src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop", category: "Sports", title: "DAVMPS Annual Athletic Meet Ceremony" },
  ];

  const filteredImages = activeFilter === "All" ? images : images.filter(img => img.category === activeFilter);

  return (
    <div className="pt-24 pb-16 bg-slate-950 text-white font-sans min-h-screen relative overflow-x-hidden">
      {/* Background Glow Orbs */}
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-300">Campus Chronicles</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-4 tracking-tight leading-none text-white"
          >
            Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Gallery</span>
          </motion.h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium">Explore visual moments of academic excellence, campus festivals, and competitive sports achievements.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Campus", "Academics", "Events", "Sports"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all duration-300 text-xs uppercase tracking-wider ${
                activeFilter === filter 
                  ? "bg-indigo-650 text-white shadow-lg border border-indigo-500/30" 
                  : "bg-white/5 text-slate-450 hover:text-white border border-white/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-square cursor-pointer bg-slate-900"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-indigo-400 text-[10px] font-extrabold uppercase tracking-widest mb-1">{img.category}</p>
                    <h3 className="text-white font-bold text-sm leading-snug">{img.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer bg-white/5 border border-white/10 p-3 rounded-full hover:bg-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <motion.img 
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10 }}
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full max-h-[65vh] object-contain rounded-3xl border border-white/10 shadow-2xl"
              />
              <div className="mt-4 p-5 rounded-2xl bg-slate-900 border border-white/5 w-full flex items-center justify-between shadow-2xl backdrop-blur-xl">
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-950/40 px-2.5 py-0.5 rounded border border-indigo-900/30">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white font-bold text-base mt-2">{selectedImage.title}</h3>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
