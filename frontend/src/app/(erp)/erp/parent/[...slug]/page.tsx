"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Calendar, FileText, CreditCard, Bell, CheckCircle, Clock, BookOpen, 
  AlertCircle, ShieldAlert, Plus, Trash2, Edit2, ShieldCheck, X, RefreshCw, 
  Truck, Award, DollarSign, Archive, BarChart3, Globe, Download, Upload, Search
} from "lucide-react";

export default function DynamicParentModule() {
  const params = useParams();
  const slug = params.slug as string[];
  const moduleName = slug ? slug[0].toLowerCase() : "";

  // Parent profile contacts state
  const [parentContact, setParentContact] = useState({
    phone: "+91 94313 12345",
    email: "michael.parent@gmail.com",
    address: "123, Rosewood Avenue, Green City, New Delhi"
  });
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [tempParentContact, setTempParentContact] = useState({ ...parentContact });

  // Outstanding fee state
  const [outstandingFees, setOutstandingFees] = useState(12500);

  // Homework status tracking
  const [homeworkStatus, setHomeworkStatus] = useState([
    { subject: "Math - Algebraic Formulae", status: "PENDING", deadline: "2026-05-20" },
    { subject: "Science - Photosynthesis Project", status: "SUBMITTED", deadline: "2026-05-23" }
  ]);

  const handleUpdateContact = (e: React.FormEvent) => {
    e.preventDefault();
    setParentContact({ ...tempParentContact });
    setShowEditProfileModal(false);
    alert("Parent contact details updated successfully!");
  };

  // -------------------------------------------------------------
  // MODULE RENDER SECTIONS
  // -------------------------------------------------------------

  // 1. MY PROFILE (PARENT PROFILE)
  if (moduleName === "profile") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Parent Profile</h1>
          <button 
            onClick={() => {
              setTempParentContact({ ...parentContact });
              setShowEditProfileModal(true);
            }}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold text-sm cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Edit2 className="w-4 h-4" />
            <span>Update Details</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Parent Info Card */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 to-indigo-650" />
            <div className="w-24 h-24 bg-indigo-50 border-4 border-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-serif font-black text-3xl mx-auto mb-4 mt-2">
              MD
            </div>
            <h3 className="text-xl font-black text-slate-900">Michael Doe</h3>
            <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider mt-1">Relationship: Father</p>
            <span className="mt-3 inline-block px-3 py-1 bg-emerald-50 border border-emerald-250 text-emerald-800 text-[10px] font-black rounded-full uppercase tracking-wider">
              Linked Account
            </span>
            <div className="border-t border-slate-100 mt-6 pt-6 text-left space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Account ID:</span>
                <span className="font-mono font-bold text-slate-800">PAR-2026-401</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Linked Child:</span>
                <span className="font-bold text-slate-800">John Doe (10-A)</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wider">Parent contact details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-slate-400 font-semibold">Email ID</p>
                  <p className="font-mono font-bold text-slate-850 mt-1">{parentContact.email}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-semibold">Contact Phone</p>
                  <p className="font-bold text-slate-850 mt-1">{parentContact.phone}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-slate-400 font-semibold">Residential Address</p>
                  <p className="font-bold text-slate-850 mt-1">{parentContact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Contact Modal */}
        <AnimatePresence>
          {showEditProfileModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
                <button onClick={() => setShowEditProfileModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-lg font-bold text-slate-900 mb-6 font-serif">Update Contact Details</h3>
                <form onSubmit={handleUpdateContact} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">PARENT CONTACT PHONE</label>
                    <input required type="text" value={tempParentContact.phone} onChange={(e) => setTempParentContact({ ...tempParentContact, phone: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">PARENT RESIDENTIAL ADDRESS</label>
                    <textarea required rows={3} value={tempParentContact.address} onChange={(e) => setTempParentContact({ ...tempParentContact, address: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-lg text-sm uppercase tracking-wider mt-4">Save Changes</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 2. CHILD PROFILE (CHILD INFO)
  if (moduleName === "child") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Child's Profile</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 to-indigo-650" />
            <div className="w-24 h-24 bg-indigo-50 border-4 border-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-serif font-black text-3xl mx-auto mb-4 mt-2">
              JD
            </div>
            <h3 className="text-xl font-black text-slate-900">John Doe</h3>
            <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider mt-1">Class X-A • Roll No 24</p>
            <span className="mt-3 inline-block px-3 py-1 bg-emerald-50 border border-emerald-250 text-emerald-800 text-[10px] font-black rounded-full uppercase tracking-wider">
              Active Student
            </span>
            <div className="border-t border-slate-100 mt-6 pt-6 text-left space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Admission ID:</span>
                <span className="font-mono font-bold text-slate-800">STU-2026-084</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Blood Group:</span>
                <span className="font-bold text-slate-800">O+ Positive</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wider">Academic details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-slate-400 font-semibold">Date of Birth</p>
                  <p className="font-bold text-slate-850 mt-1">October 12, 2010</p>
                </div>
                <div>
                  <p className="text-slate-400 font-semibold">Class Teacher</p>
                  <p className="font-bold text-slate-850 mt-1">Mr. Sharma (Maths)</p>
                </div>
                <div>
                  <p className="text-slate-400 font-semibold">Transport Route</p>
                  <p className="font-bold text-slate-850 mt-1">Suriya Transit Line</p>
                </div>
                <div>
                  <p className="text-slate-400 font-semibold">Class Section</p>
                  <p className="font-bold text-slate-850 mt-1">Class X - Section A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. CHILD ATTENDANCE TRACKER
  if (moduleName === "attendance") {
    const calendarDays = Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      status: i === 4 || i === 12 || i === 25 ? "ABSENT" : "PRESENT",
    }));

    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Child Attendance</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center">
            <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider">Total Present</h3>
            <p className="text-4xl font-black text-emerald-600 mt-2">27 days</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center">
            <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider">Total Absent</h3>
            <p className="text-4xl font-black text-rose-500 mt-2">3 days</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center">
            <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider">Attendance Percentage</h3>
            <p className="text-4xl font-black text-indigo-600 mt-2">90%</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 mb-6 uppercase tracking-wider">Attendance Calendar: May 2026</h2>
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-4">
            {calendarDays.map((d) => (
              <div 
                key={d.day} 
                className={`p-3 rounded-xl text-center font-bold text-sm border flex flex-col justify-between h-20 ${
                  d.status === "PRESENT" 
                    ? "bg-emerald-50 border-emerald-100 text-emerald-800" 
                    : "bg-rose-50 border-rose-100 text-rose-800"
                }`}
              >
                <span>{d.day}</span>
                <span className="text-[8px] uppercase tracking-widest font-black">{d.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 4. HOMEWORK & ACADEMICS
  if (moduleName === "academics") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Child's Homework & Study Material</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b pb-2 uppercase tracking-wider">Homework Assignments status</h2>
            <div className="space-y-4">
              {homeworkStatus.map((hw, i) => (
                <div key={i} className="p-4 bg-slate-50 border border-slate-150 rounded-2xl flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{hw.subject}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-1">Deadline: {hw.deadline}</p>
                  </div>
                  <span className={`px-2 py-0.5 text-[9px] font-black rounded-lg border uppercase tracking-wider ${
                    hw.status === 'SUBMITTED' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-800'
                  }`}>
                    {hw.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b pb-2 uppercase tracking-wider">Shared Study Notes & Materials</h2>
            <div className="space-y-3">
              {[
                { title: "Chemistry Organic Formulas Revision Notes", type: "PDF Notes" },
                { title: "Early Pre-School Phonics Reading Guide", type: "PDF Guide" }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-50 border border-slate-150 rounded-2xl flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-850 text-sm">{item.title}</h4>
                    <p className="text-[10px] text-slate-400 font-semibold">{item.type}</p>
                  </div>
                  <button 
                    onClick={() => alert(`Downloaded file: ${item.title}.pdf successfully to parent downloads folder!`)}
                    className="p-2 text-indigo-650 hover:text-indigo-800 rounded-lg hover:bg-indigo-50 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. CLASS TIME TABLE
  if (moduleName === "timetable") {
    const mondaySched = [
      { time: "08:00 AM", subject: "Mathematics", teacher: "Mr. Sharma", room: "Room X-A" },
      { time: "09:00 AM", subject: "Chemistry Science", teacher: "Mrs. Gupta", room: "Lab 2" },
      { time: "10:00 AM", subject: "English Literature", teacher: "Ms. Davis", room: "Room X-A" }
    ];

    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Child's Schedule</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b pb-2 uppercase tracking-wider">Weekly Daily Schedule</h2>
            <div className="space-y-3">
              {mondaySched.map((item, i) => (
                <div key={i} className="p-4 bg-slate-50 border border-slate-150 rounded-2xl flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded-lg">{item.time}</span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{item.subject}</h4>
                      <p className="text-[10px] text-slate-400 font-semibold">{item.teacher}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-white border border-slate-205 shadow-sm px-2.5 py-1 rounded-lg">{item.room}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b pb-2 uppercase tracking-wider">Exam Schedules</h2>
            <div className="space-y-3">
              {[
                { exam: "Algebra Term Final", subject: "Mathematics", date: "June 15, 2026", time: "09:00 AM" },
                { exam: "Photosynthesis Assessment", subject: "Science Studies", date: "June 18, 2026", time: "10:30 AM" }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-50 border border-slate-150 rounded-2xl">
                  <h4 className="font-bold text-slate-850 text-sm">{item.exam}</h4>
                  <p className="text-[10px] text-slate-405 font-bold uppercase tracking-wide mt-0.5">{item.subject}</p>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-100 mt-3 text-xs font-semibold text-slate-500">
                    <span className="font-mono">{item.date}</span>
                    <span className="text-indigo-600 font-mono font-bold">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. RESULTS / REPORT CARDS
  if (moduleName === "results") {
    const grades = [
      { subject: "Mathematics", marks: 92, total: 100, grade: "A+" },
      { subject: "Physics", marks: 88, total: 100, grade: "A" },
      { subject: "Chemistry", marks: 85, total: 100, grade: "A" },
      { subject: "English", marks: 95, total: 100, grade: "A+" },
    ];

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Child's Term Results</h1>
          <div className="space-x-2">
            <button 
              onClick={() => alert("Downloaded PDF: John_Doe_AdmitCard.pdf successfully!")}
              className="px-4 py-2 bg-yellow-500 text-indigo-955 rounded-xl text-xs font-bold transition-colors cursor-pointer hover:bg-yellow-600"
            >
              Download Admit Card
            </button>
            <button 
              onClick={() => alert("Downloaded PDF: John_Doe_ReportCard.pdf successfully!")}
              className="px-4 py-2 bg-indigo-650 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer hover:bg-indigo-755"
            >
              Download Report Card
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 font-serif">Term 1 - Report card</h2>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">Subject</th>
                <th className="px-6 py-4 font-semibold text-center">Marks Obtained</th>
                <th className="px-6 py-4 font-semibold text-center">Total Marks</th>
                <th className="px-6 py-4 font-semibold text-right">Grade</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {grades.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-bold text-slate-800">{row.subject}</td>
                  <td className="px-6 py-4 text-center font-semibold text-indigo-600 font-mono">{row.marks}</td>
                  <td className="px-6 py-4 text-center text-slate-500 font-mono">{row.total}</td>
                  <td className="px-6 py-4 text-right"><span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-bold">{row.grade}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-slate-50 p-6 flex justify-between items-center">
            <span className="font-bold text-slate-700 uppercase text-xs tracking-wider">CGPA Score</span>
            <span className="text-xl font-black text-indigo-650">9.2 / 10.0</span>
          </div>
        </div>
      </div>
    );
  }

  // 7. FEE PORTAL
  if (moduleName === "fees") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Fee Statement & Portal</h1>
        
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm border-l-4 border-l-rose-500 flex justify-between items-center">
          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Outstanding Dues</h3>
            <p className="text-4xl font-extrabold text-slate-900 mt-2">₹{outstandingFees.toLocaleString()}</p>
            <p className="text-xs text-rose-500 font-bold mt-1">Deadline: May 25, 2026</p>
          </div>
          {outstandingFees > 0 ? (
            <button 
              onClick={() => {
                setOutstandingFees(0);
                alert("Parent transaction completed successfully via Razorpay UPI!");
              }}
              className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-lg shadow-rose-600/10"
            >
              Pay Outstanding Fees (Razorpay)
            </button>
          ) : (
            <span className="px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black rounded-lg uppercase tracking-wider inline-flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-emerald-600" /> Fully Paid
            </span>
          )}
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider">Transaction History & Receipts</h2>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">Receipt ID</th>
                <th className="px-6 py-4 font-semibold">Particulars</th>
                <th className="px-6 py-4 font-semibold">Payment Mode</th>
                <th className="px-6 py-4 font-semibold text-right">Amount Paid</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-mono font-bold text-indigo-650">#RC-2026-928</td>
                <td className="px-6 py-4 text-slate-600 font-medium">Admission Fee & Security Deposit</td>
                <td className="px-6 py-4 font-semibold text-slate-500">Razorpay UPI</td>
                <td className="px-6 py-4 text-right font-bold text-slate-900">₹45,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 8. CIRCULAR NOTICES
  if (moduleName === "notices") {
    const noticeFeed = [
      { title: "PTA Meeting Circular", date: "May 16, 2026", desc: "A mandatory Parent Teacher Association meeting will be held this Saturday to discuss exam prep." },
      { title: "Summer Sports Camp Enrollment", date: "May 10, 2026", desc: "Register today for the annual summer camp covering Football, Cricket, and Swimming." }
    ];

    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Parent Notices & Communications</h1>
        <div className="space-y-4">
          {noticeFeed.map((note, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start space-x-4">
              <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 flex-shrink-0">
                <Bell className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900">{note.title}</h3>
                  <span className="text-xs text-slate-400 font-mono font-semibold">{note.date}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{note.desc}</p>
                <button 
                  onClick={() => alert("Circular attachment successfully downloaded to your device!")}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-750 mt-3 flex items-center cursor-pointer hover:underline"
                >
                  <Download className="w-3.5 h-3.5 mr-1" /> Download Attachment (PDF)
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 9. TRANSPORT DETAILS
  if (moduleName === "transport") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Transport Details</h1>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div className="flex justify-between items-center border-b pb-3">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Bus JH-02-B-4321</h3>
              <p className="text-xs text-slate-400 font-semibold uppercase mt-0.5">Route: Suriya Transit Line</p>
            </div>
            <Truck className="w-10 h-10 text-indigo-650" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-slate-400 font-semibold">Assigned Driver</p>
              <p className="font-bold text-slate-850 mt-1">Surendra Singh</p>
            </div>
            <div>
              <p className="text-slate-400 font-semibold">Driver Contact No</p>
              <p className="font-mono font-bold text-slate-850 mt-1">+91 76543 21098</p>
            </div>
            <div>
              <p className="text-slate-400 font-semibold">Morning Pickup Time</p>
              <p className="font-mono font-bold text-emerald-600 mt-1">07:15 AM (Dumri Chowk)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 10. LIBRARY INFO
  if (moduleName === "library") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Library Cards</h1>
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">Book ID</th>
                <th className="px-6 py-4 font-semibold">Book Title</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Due Date</th>
                <th className="px-6 py-4 font-semibold text-right">Fines</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-mono font-bold text-indigo-600">B-201</td>
                <td className="px-6 py-4 font-bold text-slate-800">Concepts of Physics Vol I</td>
                <td className="px-6 py-4"><span className="px-2 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-800 text-[9px] font-black rounded-lg">Issued</span></td>
                <td className="px-6 py-4 font-mono text-xs">2026-05-25</td>
                <td className="px-6 py-4 text-right font-bold text-slate-500">₹0</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-mono font-bold text-indigo-600">B-202</td>
                <td className="px-6 py-4 font-bold text-slate-800">Pre-School Advanced Phonics</td>
                <td className="px-6 py-4"><span className="px-2 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-800 text-[9px] font-black rounded-lg">Issued</span></td>
                <td className="px-6 py-4 font-mono text-xs">2026-05-20</td>
                <td className="px-6 py-4 text-right font-bold text-rose-500">₹10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 11. DOWNLOADS
  if (moduleName === "downloads") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Downloads Hub</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "First Term Grade Sheet", type: "PDF Grade Card", file: "John_Doe_ReportCard.pdf" },
            { name: "Academic Math Worksheet - Calculus", type: "Word Document", file: "Math_Calculus_Worksheet.docx" },
            { name: "Admission Deposit Receipt", type: "PDF Receipt", file: "Admission_Deposit_Receipt.pdf" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-855 text-sm">{item.name}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{item.type}</p>
              </div>
              <button 
                onClick={() => alert(`Downloaded file: ${item.file} successfully to parent dashboard downloads!`)}
                className="p-3 bg-indigo-50 text-indigo-650 hover:bg-indigo-100 rounded-xl transition-all cursor-pointer"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Fallback Catch
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900 uppercase">{moduleName} Management</h1>
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
        <h3 className="text-lg font-bold text-slate-700 mb-2">Under Development</h3>
        <p className="text-sm text-slate-500">This module is currently being optimized for Neon PostgreSQL database operations.</p>
      </div>
    </div>
  );
}
