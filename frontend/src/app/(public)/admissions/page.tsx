"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, Upload, FileText, Sparkles, User, Users, ShieldCheck, 
  Mail, Phone, Home, FileUp, Info, HelpCircle, AlertCircle, Award 
} from "lucide-react";

export default function Admissions() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    grade: "",
    parentName: "",
    phone: "",
    email: "",
    address: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          studentName: `${formData.firstName} ${formData.lastName}`.trim(),
          parentName: formData.parentName,
          phone: formData.phone,
          email: formData.email,
          grade: formData.grade,
          location: formData.address,
          message: `Date of Birth: ${formData.dob}`
        })
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Unable to submit. Please verify connection to the school server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ageCriteria = [
    { grade: "Nursery / Pre-Nursery", minAge: "3 Years +", cutOff: "As of March 31 of academic session" },
    { grade: "Lower Kindergarten (LKG)", minAge: "4 Years +", cutOff: "As of March 31 of academic session" },
    { grade: "Upper Kindergarten (UKG)", minAge: "5 Years +", cutOff: "As of March 31 of academic session" },
    { grade: "Class I (Primary Wing)", minAge: "6 Years +", cutOff: "As of March 31 of academic session" },
    { grade: "Class VI (Middle School)", minAge: "11 Years +", cutOff: "Strictly backed by primary marksheet" },
    { grade: "Class XI (Senior Secondary)", minAge: "15 Years +", cutOff: "Syllabus counseling + Grade X board results" }
  ];

  const feeStructure = [
    { head: "Registration & Prospectus Fee", amount: "₹ 500", frequency: "One Time (Non-refundable)" },
    { head: "Admission & Institutional Dev Fee", amount: "₹ 5,000", frequency: "One Time (At entry)" },
    { head: "Monthly Tuition Fee (Grades I - V)", amount: "₹ 1,200", frequency: "Monthly basis" },
    { head: "Monthly Tuition Fee (Grades VI - X)", amount: "₹ 1,500", frequency: "Monthly basis" },
    { head: "Monthly Tuition Fee (Grades XI - XII Science)", amount: "₹ 2,200", frequency: "Monthly basis" },
    { head: "GPS Transport Service Fee", amount: "₹ 800 - ₹ 1,500", frequency: "Monthly (Varies with stop distance)" }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-950 text-white font-sans min-h-screen relative overflow-x-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[15%] left-[-15%] w-[600px] h-[600px] rounded-full bg-indigo-655/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl mb-4"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-300">Enrollment Portal</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-none text-white"
          >
            Admissions <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">2026-2027</span>
          </motion.h1>
          <p className="text-slate-450 max-w-2xl mx-auto text-sm md:text-base font-semibold leading-relaxed">
            Begin the digital registration process or explore comprehensive guidelines regarding admissions criteria, documents checklists, and standard school fee structures.
          </p>
        </div>

        {/* GUIDELINES & CRITERIA SEGMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-stretch">
          
          {/* Age criteria */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Info className="w-6 h-6 mr-3 text-indigo-400" /> Admissions Eligibility Matrix
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-semibold text-slate-300 divide-y divide-white/5">
                  <thead>
                    <tr className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest">
                      <th className="pb-3">Target Grade</th>
                      <th className="pb-3">Min. Age Limit</th>
                      <th className="pb-3">Cut-off Benchmark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {ageCriteria.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="py-3.5 font-bold text-white">{item.grade}</td>
                        <td className="py-3.5 text-indigo-300">{item.minAge}</td>
                        <td className="py-3.5 text-slate-450 text-[11px]">{item.cutOff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 flex p-4 rounded-xl bg-indigo-950/40 border border-indigo-900/30 text-[11px] text-indigo-250 leading-relaxed font-semibold">
              <AlertCircle className="w-4 h-4 mr-2.5 flex-shrink-0 mt-0.5" />
              <span>Please note: Selection for Class XI PCM/PCB streams is strictly subject to Grade X affiliated board results score margins followed by interview counselor sessions.</span>
            </div>
          </div>

          {/* Fee structure */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-indigo-400" /> School Fee Schedule
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-semibold text-slate-300 divide-y divide-white/5">
                  <thead>
                    <tr className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest">
                      <th className="pb-3">Fee Category</th>
                      <th className="pb-3">Standard Amount</th>
                      <th className="pb-3">Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {feeStructure.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="py-3.5 font-bold text-white">{item.head}</td>
                        <td className="py-3.5 text-cyan-400">{item.amount}</td>
                        <td className="py-3.5 text-slate-450 text-[11px]">{item.frequency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 leading-relaxed font-semibold">
              Parents can easily clear outstanding tuition, exam, or transport fee payments directly via our central **Parent ERP dashboard** inside digital payment methods.
            </div>
          </div>

        </div>

        {/* 5-STEP ADMISSION JOURNEY TIMELINE */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-xs font-extrabold uppercase tracking-widest bg-cyan-950/40 px-4 py-1.5 rounded-full border border-cyan-500/20">
              Admission Path
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-6 tracking-tight">Your 5-Step Admission Journey</h2>
            <p className="text-slate-450 mt-4 text-sm md:text-base font-semibold leading-relaxed">
              We have simplified our enrollment pathway into five transparent, stress-free milestones designed for student and parent comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/3 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-500/30 via-cyan-500/30 to-indigo-500/30 z-0" />

            {[
              { step: "01", icon: FileText, title: "Submit Enquiry", desc: "Fill out our quick online enquiry form with details of child's grade and contact info.", color: "text-indigo-400 border-indigo-500/20 bg-indigo-950/20" },
              { step: "02", icon: Phone, title: "Counselor Call", desc: "Our academic counselor will get in touch with you to explain the curriculum and options.", color: "text-cyan-400 border-cyan-500/20 bg-cyan-950/20" },
              { step: "03", icon: Users, title: "Campus Tour", desc: "Visit our campus in Mundro, Bagoder to inspect our labs, library, and interact with teachers.", color: "text-purple-400 border-purple-500/20 bg-purple-950/20" },
              { step: "04", icon: ShieldCheck, title: "Interaction", desc: "A soft, stress-free interaction session with the child followed by document validation.", color: "text-emerald-400 border-emerald-500/20 bg-emerald-950/20" },
              { step: "05", icon: Award, title: "Onboarding", desc: "Upon verification, pay fee via central parent ERP and secure your scholar's seat.", color: "text-amber-400 border-amber-500/20 bg-amber-950/20" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-6 relative z-10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between items-center text-center">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xs font-black text-slate-400">
                  {item.step}
                </div>
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-450 text-[11px] leading-relaxed font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DOCUMENT CHECKLIST MATRIX */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mb-20 backdrop-blur-2xl">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-indigo-400" /> Essential Verification Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-semibold text-slate-355">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest block mb-2">Primary ID</span>
              <h4 className="text-sm font-bold text-white mb-1">Aadhaar Card Copy</h4>
              <p className="text-slate-450 text-[11px]">Clear photocopies of Aadhaar card of both parent and target student.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest block mb-2">Age Proof</span>
              <h4 className="text-sm font-bold text-white mb-1">Birth Certificate</h4>
              <p className="text-slate-450 text-[11px]">Municipal Corporation verified official birth certificate document.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest block mb-2">Scholastic</span>
              <h4 className="text-sm font-bold text-white mb-1">Transfer Certificate</h4>
              <p className="text-slate-450 text-[11px]">Original School Leaving Certificate countersigned by authorized inspector.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest block mb-2">Recent Records</span>
              <h4 className="text-sm font-bold text-white mb-1">Affiliated Marksheet</h4>
              <p className="text-slate-450 text-[11px]">Report cards of final examinations cleared at the prior educational institute.</p>
            </div>
          </div>
        </div>

        {/* 3-STEP ONLINE ADMISSION APPLICATION WIZARD */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">Online Enrollment Form</h2>
            <p className="text-slate-450 text-xs font-semibold mt-2">Fill the secure digital application wizard below to save details in our Neon database.</p>
          </div>

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-2xl shadow-2xl text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <CheckCircle className="w-40 h-40 text-emerald-455" />
                </div>
                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-455 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-black text-white mb-4">Application Submitted!</h2>
                <p className="text-slate-400 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                  Your enquiry has been successfully logged. We have securely uploaded your information to our Neon PostgreSQL database and an academic coordinator will contact you shortly.
                </p>
                <button 
                  onClick={() => { 
                    setSuccess(false); 
                    setStep(1); 
                    setFormData({
                      firstName: "",
                      lastName: "",
                      dob: "",
                      grade: "",
                      parentName: "",
                      phone: "",
                      email: "",
                      address: ""
                    });
                  }}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-indigo-600/20 text-sm uppercase tracking-wider cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-2xl">
                {/* Step Indicators */}
                <div className="grid grid-cols-3 bg-white/[0.02] border-b border-white/5">
                  {[1, 2, 3].map((s) => (
                    <div 
                      key={s} 
                      className={`text-center py-5 font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                        step === s 
                          ? "text-indigo-400 border-b-2 border-indigo-500 bg-indigo-500/5" 
                          : "text-slate-500"
                      }`}
                    >
                      Step {s}: {s === 1 ? "Student" : s === 2 ? "Parent" : "Documents"}
                    </div>
                  ))}
                </div>

                <div className="p-8 md:p-12">
                  <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); setStep(step + 1); }}>
                    
                    {step === 1 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-355 mb-2">First Name</label>
                            <div className="relative">
                              <User className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                              <input 
                                required 
                                type="text" 
                                value={formData.firstName}
                                onChange={(e) => handleInputChange("firstName", e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all" 
                                placeholder="John" 
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-355 mb-2">Last Name</label>
                            <div className="relative">
                              <User className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                              <input 
                                required 
                                type="text" 
                                value={formData.lastName}
                                onChange={(e) => handleInputChange("lastName", e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all" 
                                placeholder="Doe" 
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-355 mb-2">Date of Birth</label>
                            <input 
                              required 
                              type="date" 
                              value={formData.dob}
                              onChange={(e) => handleInputChange("dob", e.target.value)}
                              className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all text-slate-400" 
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-355 mb-2">Applying for Class</label>
                            <select 
                              required 
                              value={formData.grade}
                              onChange={(e) => handleInputChange("grade", e.target.value)}
                              className="w-full px-4 py-4 rounded-2xl bg-slate-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-400 font-medium text-sm transition-all"
                            >
                              <option value="">Select Target Grade</option>
                              <option value="Play-way / Nursery">Play-way / Nursery</option>
                              <option value="LKG">Lower Kindergarten (LKG)</option>
                              <option value="UKG">Upper Kindergarten (UKG)</option>
                              <option value="Class I">Class I (Primary Wing)</option>
                              <option value="Class V">Class V</option>
                              <option value="Class IX">Class IX (Secondary Board)</option>
                              <option value="Class XI Science">Class XI (Science PCM/PCB)</option>
                              <option value="Class XI Commerce">Class XI (Commerce stream)</option>
                            </select>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-355 mb-2">Father's / Guardian Name</label>
                            <div className="relative">
                              <Users className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                              <input 
                                required 
                                type="text" 
                                value={formData.parentName}
                                onChange={(e) => handleInputChange("parentName", e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all" 
                                placeholder="Michael Doe" 
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-355 mb-2">Contact Number</label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                              <input 
                                required 
                                type="tel" 
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all" 
                                placeholder="+91 94313 XXXXX" 
                              />
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-355 mb-2">Email Address</label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                              <input 
                                required 
                                type="email" 
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all" 
                                placeholder="father@gmail.com" 
                              />
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-355 mb-2">Permanent Address</label>
                            <div className="relative">
                              <Home className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                              <textarea 
                                required 
                                rows={3} 
                                value={formData.address}
                                onChange={(e) => handleInputChange("address", e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white font-medium text-sm transition-all" 
                                placeholder="Mundro, Bagoder, Giridih..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <div className="bg-indigo-950/50 border border-indigo-900/30 rounded-2xl p-6 text-indigo-300 text-xs font-semibold leading-relaxed">
                          By clicking submit, you authorize D A V Moti Public School to record this academic enquiry in our Central Student Database. No files are required to be uploaded for primary counselor enquiry logs.
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {[
                            { id: "photo", label: "Passport Photograph" },
                            { id: "birth_cert", label: "Birth Certificate" },
                            { id: "previous_report", label: "Last Marksheet" }
                          ].map((doc) => (
                            <div key={doc.id} className="border border-dashed border-white/15 hover:border-indigo-500 hover:bg-white/[0.02] rounded-2xl p-6 text-center transition-all cursor-pointer relative group">
                              <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                              <FileUp className="w-8 h-8 text-slate-500 mx-auto mb-3 group-hover:text-indigo-400 transition-colors" />
                              <h3 className="font-bold text-xs text-slate-200 mb-1">{doc.label}</h3>
                              <p className="text-[10px] text-slate-500">Optional File Upload</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    <div className="mt-12 flex justify-between pt-6 border-t border-white/5">
                      {step > 1 ? (
                        <button 
                          type="button" 
                          onClick={() => setStep(step - 1)}
                          className="px-6 py-3 border border-white/15 rounded-xl text-slate-400 font-bold hover:bg-white/5 transition-colors text-xs uppercase tracking-wider cursor-pointer"
                        >
                          Back
                        </button>
                      ) : (
                        <div />
                      )}
                      
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all disabled:opacity-75 disabled:cursor-not-allowed flex items-center text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/10 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          step === 3 ? "Submit Application" : "Next Step"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
