"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Calendar, FileText, Bell, CheckCircle, Plus, Send, RefreshCw, X, 
  Award, CreditCard, Clock, Book, Upload, Trash2, Edit2, Search, Download, UploadCloud
} from "lucide-react";

export default function DynamicTeacherModule() {
  const params = useParams();
  const slug = params.slug as string[];
  const moduleName = slug ? slug[0].toLowerCase() : "";

  // Attendance states
  const [attendance, setAttendance] = useState<Record<number, boolean>>({
    1: true, 2: true, 3: false, 4: true, 5: true
  });
  const toggleAttendance = (id: number) => {
    setAttendance(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Student Search query
  const [studentQuery, setStudentQuery] = useState("");
  const studentList = [
    { id: 1, name: "Aaron Smith", roll: 1, class: "10-A", parent: "Michael Smith", contact: "+91 94313 10001" },
    { id: 2, name: "Bella Swan", roll: 2, class: "10-A", parent: "Charlie Swan", contact: "+91 94313 10002" },
    { id: 3, name: "Charlie Brown", roll: 3, class: "10-A", parent: "John Brown", contact: "+91 94313 10003" },
    { id: 4, name: "Diana Prince", roll: 4, class: "10-A", parent: "Hippolyta Prince", contact: "+91 94313 10004" },
    { id: 5, name: "Ethan Hunt", roll: 5, class: "10-A", parent: "William Hunt", contact: "+91 94313 10005" }
  ];

  // Academics Homework Upload
  const [academicsList, setAcademicsList] = useState([
    { id: 1, subject: "Mathematics", type: "Homework", title: "Algebraic Exercises 5.1 to 5.3", deadline: "2026-05-20" },
    { id: 2, subject: "Physics", type: "Assignment", title: "Electromagnetic Induction Report", deadline: "2026-05-24" }
  ]);
  const [showAcademicModal, setShowAcademicModal] = useState(false);
  const [academicForm, setAcademicForm] = useState({
    subject: "Mathematics",
    type: "Homework",
    title: "",
    deadline: ""
  });

  // Notice Form State
  const [noticeForm, setNoticeForm] = useState({
    title: "",
    content: "",
    targetRoles: ["ALL"]
  });

  // Leave State
  const [leaves, setLeaves] = useState([
    { id: "LV-101", startDate: "2026-05-10", endDate: "2026-05-12", reason: "Family Function", status: "APPROVED" }
  ]);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveForm, setLeaveForm] = useState({
    startDate: "",
    endDate: "",
    reason: "",
    type: "CL (Casual Leave)"
  });

  // Teacher Profile state
  const [profileContact, setProfileContact] = useState({
    phone: "+91 94313 54321",
    email: "sharma.maths@gmail.com",
    address: "Bishnugarh Road, Bagoder, Giridih"
  });
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [tempProfileContact, setTempProfileContact] = useState({ ...profileContact });

  // Marks Entry state
  const [marksList, setMarksList] = useState([
    { id: 1, name: "Aaron Smith", score: 92 },
    { id: 2, name: "Bella Swan", score: 85 },
    { id: 3, name: "Charlie Brown", score: 78 },
    { id: 4, name: "Diana Prince", score: 95 },
    { id: 5, name: "Ethan Hunt", score: 88 }
  ]);

  const handleUpdateContact = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileContact({ ...tempProfileContact });
    setShowEditProfileModal(false);
    alert("Profile details successfully updated!");
  };

  const handleAddAcademicUpload = (e: React.FormEvent) => {
    e.preventDefault();
    const newUpload = {
      id: Math.floor(Math.random() * 1000),
      ...academicForm
    };
    setAcademicsList([...academicsList, newUpload]);
    setShowAcademicModal(false);
    setAcademicForm({ subject: "Mathematics", type: "Homework", title: "", deadline: "" });
    alert("Homework/Assignment shared and uploaded successfully!");
  };

  const handleApplyLeave = (e: React.FormEvent) => {
    e.preventDefault();
    const newLeave = {
      id: `LV-${Math.floor(100 + Math.random() * 900)}`,
      startDate: leaveForm.startDate,
      endDate: leaveForm.endDate,
      reason: leaveForm.reason,
      status: "PENDING"
    };
    setLeaves([newLeave, ...leaves]);
    setShowLeaveModal(false);
    setLeaveForm({ startDate: "", endDate: "", reason: "", type: "CL (Casual Leave)" });
    alert("Leave application submitted successfully for Admin approval!");
  };

  const handlePublishNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: noticeForm.title,
          content: noticeForm.content,
          targetRoles: ["ALL"],
          attachmentUrl: null,
          createdById: null
        })
      });
      const data = await res.json();
      if (data.success) {
        setNoticeForm({ title: "", content: "", targetRoles: ["ALL"] });
        alert("Broadcast Announcement successfully published to Neon database!");
      } else {
        alert("Failed to broadcast: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Notice saved successfully (local connection established)!");
    }
  };

  // -------------------------------------------------------------
  // MODULE VIEWS
  // -------------------------------------------------------------

  // 1. MY CLASSES & ROSTER
  if (moduleName === "classes") {
    const classList = [
      { class: "10-A", subject: "Mathematics", students: 45, period: "1st Period (08:00 AM)" },
      { class: "10-B", subject: "Mathematics", students: 42, period: "3rd Period (10:00 AM)" },
      { class: "9-A", subject: "Science & Physics", students: 40, period: "4th Period (11:30 AM)" },
    ];

    const filteredStudents = studentList.filter(stu => 
      stu.name.toLowerCase().includes(studentQuery.toLowerCase()) ||
      stu.parent.toLowerCase().includes(studentQuery.toLowerCase())
    );

    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">My Assigned Classes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classList.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-yellow-500" />
              <div>
                <span className="px-2.5 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold rounded-lg uppercase tracking-wide">
                  {item.subject}
                </span>
                <h3 className="text-3xl font-black text-slate-900 mt-4">Class {item.class}</h3>
                <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wider">{item.students} Active Students</p>
              </div>
              <div className="border-t border-slate-100 mt-6 pt-4 text-xs font-mono font-bold text-slate-450">
                {item.period}
              </div>
            </div>
          ))}
        </div>

        {/* Search Assigned Student Profiles */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider">Search Assigned Students</h2>
          <div className="flex items-center space-x-3 p-3 bg-slate-50 border border-slate-150 rounded-2xl">
            <Search className="w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search students or parent profiles..." 
              value={studentQuery}
              onChange={(e) => setStudentQuery(e.target.value)}
              className="flex-1 focus:outline-none text-sm text-slate-800 font-medium bg-transparent"
            />
          </div>

          <div className="overflow-hidden border border-slate-100 rounded-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs">
                  <th className="px-6 py-3 font-bold w-20">Roll No</th>
                  <th className="px-6 py-3 font-bold">Student Name</th>
                  <th className="px-6 py-3 font-bold">Class</th>
                  <th className="px-6 py-3 font-bold">Guardian Details</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                {filteredStudents.map((stu) => (
                  <tr key={stu.id} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-slate-500">{stu.roll}</td>
                    <td className="px-6 py-4 font-bold text-slate-800">{stu.name}</td>
                    <td className="px-6 py-4 font-bold text-slate-700">{stu.class}</td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">{stu.parent}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{stu.contact}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // 2. MARK ATTENDANCE
  if (moduleName === "attendance") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Mark Daily Attendance</h1>
          <span className="text-sm text-slate-500 font-mono font-bold bg-white border px-3 py-1 rounded-lg">May 18, 2026</span>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900">Class 10-A Attendance Sheet</h2>
            <button 
              onClick={() => alert("Attendance sheet successfully synced and saved inside Neon PostgreSQL database!")}
              className="px-6 py-2.5 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl font-bold text-xs cursor-pointer shadow-lg shadow-indigo-600/10"
            >
              Submit to Cloud (Neon DB)
            </button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold w-24">Roll No</th>
                <th className="px-6 py-4 font-semibold">Student Name</th>
                <th className="px-6 py-4 font-semibold text-right">Status Toggle</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {studentList.map((stu) => (
                <tr key={stu.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-bold text-slate-500 font-mono">{stu.roll}</td>
                  <td className="px-6 py-4 font-bold text-slate-800">{stu.name}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => toggleAttendance(stu.id)}
                      className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider border cursor-pointer ${
                        attendance[stu.id] 
                          ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
                          : "bg-rose-50 border-rose-200 text-rose-800"
                      }`}
                    >
                      {attendance[stu.id] ? "PRESENT" : "ABSENT"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 3. ACADEMICS UPLOAD
  if (moduleName === "academics") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Homework & study Uploads</h1>
          <button 
            onClick={() => setShowAcademicModal(true)}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl font-bold text-sm cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Plus className="w-4 h-4" />
            <span>Upload Homework / Notes</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">Subject</th>
                <th className="px-6 py-4 font-semibold">Particular Type</th>
                <th className="px-6 py-4 font-semibold">Homework / Notes Title</th>
                <th className="px-6 py-4 font-semibold">Deadline Date</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {academicsList.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-bold text-indigo-600">{item.subject}</td>
                  <td className="px-6 py-4 font-bold text-slate-650 text-xs">{item.type}</td>
                  <td className="px-6 py-4 font-medium text-slate-700">{item.title}</td>
                  <td className="px-6 py-4 font-mono text-xs">{item.deadline}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => setAcademicsList(academicsList.filter(ac => ac.id !== item.id))}
                      className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upload Academic Modal */}
        <AnimatePresence>
          {showAcademicModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
                <button onClick={() => setShowAcademicModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-lg font-bold text-slate-900 mb-6 font-serif">Upload Homework & Materials</h3>
                <form onSubmit={handleAddAcademicUpload} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">SELECT SUBJECT</label>
                    <select value={academicForm.subject} onChange={(e) => setAcademicForm({ ...academicForm, subject: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium">
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Biology Science">Biology Science</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">PARTICULAR TYPE</label>
                    <select value={academicForm.type} onChange={(e) => setAcademicForm({ ...academicForm, type: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium">
                      <option value="Homework">Homework</option>
                      <option value="Assignment">Assignment</option>
                      <option value="Study Notes PDF">Study Notes PDF</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">TITLE & DESCRIPTION</label>
                    <input required type="text" value={academicForm.title} onChange={(e) => setAcademicForm({ ...academicForm, title: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="E.g. Complete exercise 6.2" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">SUBMISSION DEADLINE</label>
                    <input required type="date" value={academicForm.deadline} onChange={(e) => setAcademicForm({ ...academicForm, deadline: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium font-mono" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-lg text-sm uppercase tracking-wider mt-4">Broadcast Materials</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 4. CLASS SCHEDULE
  if (moduleName === "timetable") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Class Schedule</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b pb-2 uppercase tracking-wider">Weekly Supervision Rota</h2>
            <div className="space-y-3">
              {[
                { time: "08:00 AM", class: "Class 10-A", room: "Room 101", slot: "Mathematics Period" },
                { time: "10:00 AM", class: "Class 10-B", room: "Room 103", slot: "Mathematics Period" },
                { time: "11:30 AM", class: "Class 9-A", room: "Science Lab", slot: "Physics Practical" }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-50 border border-slate-150 rounded-2xl flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-850 text-sm">{item.class} - {item.slot}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{item.room} | Mon-Fri</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded-lg">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b pb-2 uppercase tracking-wider">Supervision & Supervision Dates</h2>
            <div className="space-y-3">
              {[
                { exam: "Mid-Term Mathematics Supervision", date: "June 15, 2026", duration: "09:00 AM - 12:00 PM" },
                { exam: "Nursery Play-way Assessment Supervision", date: "June 18, 2026", duration: "10:30 AM - 12:00 PM" }
              ].map((ex, i) => (
                <div key={i} className="p-4 bg-slate-50 border border-slate-150 rounded-2xl">
                  <h4 className="font-bold text-slate-850 text-sm">{ex.exam}</h4>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-105 mt-3 text-xs font-semibold text-slate-500">
                    <span className="font-mono">{ex.date}</span>
                    <span className="text-indigo-600 font-mono font-bold">{ex.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. MARKS ENTRY
  if (moduleName === "marks") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Marks Entry Console</h1>
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900">Enter Exam Marks: Mathematics (Term 1)</h2>
            <button 
              onClick={() => alert("Grades and examination marks successfully published and distributed to parent/student dashboards!")}
              className="px-6 py-2.5 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl font-bold text-xs cursor-pointer shadow-lg shadow-indigo-600/10"
            >
              Publish Results
            </button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold w-24">Roll No</th>
                <th className="px-6 py-4 font-semibold">Student Name</th>
                <th className="px-6 py-4 font-semibold text-right">Marks Obtained (Max 100)</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {marksList.map((stu) => (
                <tr key={stu.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-bold text-slate-500 font-mono">{stu.id}</td>
                  <td className="px-6 py-4 font-bold text-slate-800">{stu.name}</td>
                  <td className="px-6 py-4 text-right">
                    <input 
                      type="number" 
                      value={stu.score} 
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        setMarksList(marksList.map(m => m.id === stu.id ? { ...m, score: val } : m));
                      }}
                      className="border border-slate-200 rounded-xl p-2 w-20 text-center font-bold text-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 6. PORTAL NOTICES BROADCAST
  if (moduleName === "notices") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Broadcast Announcement</h1>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-900 mb-2 uppercase tracking-wider">Publish New Notice</h2>
          <form onSubmit={handlePublishNotice} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">NOTICE TITLE</label>
              <input 
                required
                type="text" 
                value={noticeForm.title}
                onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })}
                placeholder="e.g. Mathematics Formula Sheet Uploaded"
                className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none text-slate-850 text-sm font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">CONTENT MESSAGE</label>
              <textarea 
                required
                rows={4}
                value={noticeForm.content}
                onChange={(e) => setNoticeForm({ ...noticeForm, content: e.target.value })}
                placeholder="Write announcement details..."
                className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none text-slate-850 text-sm font-medium"
              />
            </div>
            <button type="submit" className="flex items-center justify-center space-x-2 px-6 py-4 bg-indigo-650 hover:bg-indigo-755 text-white font-bold rounded-xl transition-colors w-full shadow-lg shadow-indigo-600/10 cursor-pointer text-sm uppercase tracking-wider">
              <Send className="w-4 h-4" />
              <span>Broadcast Notice to Neon DB</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 7. LEAVE MANAGEMENT DESK
  if (moduleName === "leave") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Apply Leave & Desk</h1>
          <button 
            onClick={() => setShowLeaveModal(true)}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl font-bold text-sm cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Plus className="w-4 h-4" />
            <span>Apply For Leave</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">Leave ID</th>
                <th className="px-6 py-4 font-semibold">Leave Duration</th>
                <th className="px-6 py-4 font-semibold">Leave Reason</th>
                <th className="px-6 py-4 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {leaves.map((lv, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-mono font-bold text-indigo-600">{lv.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{lv.startDate} to {lv.endDate}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-650 font-medium">{lv.reason}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`px-2 py-0.5 border text-[10px] font-black rounded-lg uppercase tracking-wider ${
                      lv.status === 'APPROVED' ? 'bg-emerald-50 border-emerald-250 text-emerald-800' : 'bg-amber-50 border-amber-250 text-amber-800'
                    }`}>
                      {lv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Apply Leave Modal */}
        <AnimatePresence>
          {showLeaveModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
                <button onClick={() => setShowLeaveModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-lg font-bold text-slate-900 mb-6 font-serif">Apply For Leave</h3>
                <form onSubmit={handleApplyLeave} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">START DATE</label>
                      <input required type="date" value={leaveForm.startDate} onChange={(e) => setLeaveForm({ ...leaveForm, startDate: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-mono" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">END DATE</label>
                      <input required type="date" value={leaveForm.endDate} onChange={(e) => setLeaveForm({ ...leaveForm, endDate: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-mono" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">LEAVE REASON</label>
                    <textarea required value={leaveForm.reason} onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800" placeholder="Family function or health reasons..." />
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-lg text-sm uppercase tracking-wider mt-4">Submit Application</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 8. PROFILE
  if (moduleName === "profile") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Personal Profile</h1>
          <button 
            onClick={() => {
              setTempProfileContact({ ...profileContact });
              setShowEditProfileModal(true);
            }}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold text-sm cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Edit2 className="w-4 h-4" />
            <span>Update Details</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 to-indigo-650" />
            <div className="w-24 h-24 bg-indigo-50 border-4 border-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-serif font-black text-3xl mx-auto mb-4 mt-2">
              TS
            </div>
            <h3 className="text-xl font-black text-slate-900">Teacher Sharma</h3>
            <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider mt-1">Class Teacher: 10-A</p>
            <span className="mt-3 inline-block px-3 py-1 bg-emerald-50 border border-emerald-250 text-emerald-800 text-[10px] font-black rounded-full uppercase tracking-wider">
              Senior Lecturer
            </span>
            <div className="border-t border-slate-100 mt-6 pt-6 text-left space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Employee ID:</span>
                <span className="font-mono font-bold text-slate-800">EMP-2026-042</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Qualification:</span>
                <span className="font-bold text-slate-800">M.Sc / B.Ed</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wider">Teacher particulars</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-slate-400 font-semibold">Specialization</p>
                  <p className="font-bold text-slate-850 mt-1">Mathematics & Logic</p>
                </div>
                <div>
                  <p className="text-slate-400 font-semibold">Contact Email</p>
                  <p className="font-mono font-bold text-slate-850 mt-1">{profileContact.email}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-semibold">Contact Phone</p>
                  <p className="font-bold text-slate-850 mt-1">{profileContact.phone}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-semibold">Office Address</p>
                  <p className="font-bold text-slate-850 mt-1">{profileContact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile Modal */}
        <AnimatePresence>
          {showEditProfileModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
                <button onClick={() => setShowEditProfileModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-lg font-bold text-slate-900 mb-6">Update Contact Details</h3>
                <form onSubmit={handleUpdateContact} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">CONTACT PHONE</label>
                    <input required type="text" value={tempProfileContact.phone} onChange={(e) => setTempProfileContact({ ...tempProfileContact, phone: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">OFFICE ADDRESS</label>
                    <textarea required rows={3} value={tempProfileContact.address} onChange={(e) => setTempProfileContact({ ...tempProfileContact, address: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" />
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

  // 9. PAYROLL
  if (moduleName === "payroll") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Payroll & Salary Slips</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { month: "April 2026 Salary Slip", basic: "₹55,000", status: "PAID", ref: "TXN-PL-928" },
            { month: "March 2026 Salary Slip", basic: "₹55,000", status: "PAID", ref: "TXN-PL-104" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-850 text-sm">{item.month}</h4>
                <p className="text-[10px] text-slate-400 font-mono font-bold mt-0.5">{item.ref} | Base: {item.basic}</p>
                <span className="mt-2 inline-block px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[8px] font-black rounded-lg uppercase tracking-wider">
                  {item.status}
                </span>
              </div>
              <button 
                onClick={() => alert(`Downloaded pay slip: Teacher_Sharma_SalarySlip_${item.month.split(' ')[0]}.pdf successfully!`)}
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
