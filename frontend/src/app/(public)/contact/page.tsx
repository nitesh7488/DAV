"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Sparkles, Globe } from "lucide-react";

export default function Contact() {
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-300">Get In Touch</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-4 tracking-tight leading-none text-white"
          >
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">DAVMPS</span>
          </motion.h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium">We'd love to hear from you. Get in touch with us for any queries or institutional enrollment details.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details Panel */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-white tracking-tight">Institutional Directory</h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Our Location Address</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-semibold">
                    Mundro, Bagoder, Giridih, Jharkhand - 825322, India
                  </p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Helpline Phone</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-semibold">
                    +91 94313 82532 <br />
                    +91 98012 34567
                  </p>
                </div>
              </div>
              
              {/* Mail */}
              <div className="flex p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Official Institutional Mail</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-semibold">
                    info@davmps.in <br />
                    admissions@davmps.in
                  </p>
                </div>
              </div>
              
              {/* Timings */}
              <div className="flex p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Office Operations Hours</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-semibold">
                    Monday - Friday: 08:00 AM - 02:30 PM <br />
                    Saturday Hours: 08:00 AM - 12:30 PM
                  </p>
                </div>
              </div>

              {/* GPS Transport Network & Travel Times */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">GPS Transport & Travel Times</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-semibold">Institutional Bus fleet covering all main routes</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2.5 pt-2 text-[10px] font-bold uppercase tracking-wider text-slate-350">
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
                    <span className="text-[8px] text-indigo-300 mt-1">ERP Tracking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed inside premium card */}
            <div className="border border-white/10 rounded-3xl overflow-hidden h-72 shadow-2xl relative">
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

          {/* Interactive Form Panel */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-2xl">
            <h2 className="text-3xl font-black text-white tracking-tight mb-6">Send Direct Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-350 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-350 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-350 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-350 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all" placeholder="How can we help you?" />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-350 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all resize-none" placeholder="Write your message here..."></textarea>
              </div>
              
              <button type="submit" className="w-full py-4 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/15 text-xs uppercase tracking-wider">
                <Send className="w-4 h-4" />
                <span>Send Encrypted Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
