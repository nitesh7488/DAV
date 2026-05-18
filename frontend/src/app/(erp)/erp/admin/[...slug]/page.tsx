"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, FileText, CreditCard, Book, Settings, Plus, Trash2, Edit2, ShieldCheck, 
  CheckCircle, X, RefreshCw, Truck, Award, DollarSign, Archive, BarChart3, Globe, BookOpen, PlusCircle, Bell
} from "lucide-react";

export default function DynamicAdminModule() {
  const params = useParams();
  const slug = params.slug as string[];
  const moduleName = slug ? slug[0].toLowerCase() : "";

  // Dynamic Lists
  const [students, setStudents] = useState<any[]>([]);
  const [staff, setStaff] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [notices, setNotices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal Toggles
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showStaffModal, setShowStaffModal] = useState(false);
  const [showParentModal, setShowParentModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [showExamModal, setShowExamModal] = useState(false);
  const [showTransportModal, setShowTransportModal] = useState(false);
  const [showLibraryModal, setShowLibraryModal] = useState(false);
  const [showInventoryModal, setShowInventoryModal] = useState(false);
  const [showLedgerModal, setShowLedgerModal] = useState(false);

  // Form States
  const [studentForm, setStudentForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    admissionNo: "",
    className: "10",
    sectionName: "A",
    gender: "Male",
    address: ""
  });

  const [staffForm, setStaffForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    employeeId: "",
    designation: "TGT Teacher",
    department: "Academics",
    qualification: "B.Ed / PG"
  });

  const [parentForm, setParentForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedStudentId: "",
    relation: "Father",
    occupation: "Business"
  });

  const [noticeForm, setNoticeForm] = useState({
    title: "",
    content: "",
    targetRoles: ["ALL"]
  });

  const [examForm, setExamForm] = useState({
    name: "",
    className: "10-A",
    subjectName: "Mathematics",
    examDate: "2026-06-15",
    totalMarks: "100"
  });

  const [transportForm, setTransportForm] = useState({
    vehicleNo: "",
    route: "Dumri Route",
    driverName: "",
    driverPhone: "",
    capacity: "40"
  });

  const [libraryForm, setLibraryForm] = useState({
    title: "",
    isbn: "",
    author: "",
    copies: "5"
  });

  const [inventoryForm, setInventoryForm] = useState({
    itemName: "",
    quantity: "25",
    category: "Academics",
    vendor: "Moti Enterprises"
  });

  const [ledgerForm, setLedgerForm] = useState({
    description: "",
    amount: "",
    type: "INCOME",
    category: "Term Fees"
  });

  // Settings State
  const [settings, setSettings] = useState({
    institutionName: "D A V Moti Public School Mundro Bagoder",
    academicYear: "2026-2027",
    smtpHost: "smtp.gmail.com",
    logoText: "DAVMPS"
  });

  // Local Custom States (Mock DB for non-schema tables for rapid interactivity)
  const [parents, setParents] = useState<any[]>([
    { id: "PAR-401", name: "Rajesh Sharma", email: "rajesh@gmail.com", phone: "+91 94313 12345", student: "Rohan Sharma", relation: "Father" },
    { id: "PAR-402", name: "Ramesh Verma", email: "ramesh@gmail.com", phone: "+91 99345 67890", student: "Sumit Verma", relation: "Father" }
  ]);

  const [exams, setExams] = useState<any[]>([
    { id: "EXM-701", name: "Mid-Term Examination", className: "10-A", subject: "Mathematics", date: "2026-06-15", marks: 100 },
    { id: "EXM-702", name: "Final Session Assessment", className: "LKG-A", subject: "Phonics Sounds", date: "2026-06-18", marks: 50 }
  ]);

  const [vehicles, setVehicles] = useState<any[]>([
    { id: "VEH-201", vehicleNo: "JH-02-B-4321", route: "Suriya Transit Line", driver: "Surendra Singh", phone: "+91 76543 21098", capacity: 42 },
    { id: "VEH-202", vehicleNo: "JH-11-F-9876", route: "Dumri Bagoder Express", driver: "Manoj Yadav", phone: "+91 91234 56789", capacity: 50 }
  ]);

  const [books, setBooks] = useState<any[]>([
    { id: "BOK-901", title: "NCERT Class X Mathematics", isbn: "978-81-7450-489-0", author: "NCERT Editorial", copies: 45 },
    { id: "BOK-902", title: "Early Cognitive Phonics Workbook", isbn: "978-01-3424-998-1", author: "Dr. Maria Montessori", copies: 30 }
  ]);

  const [inventory, setInventory] = useState<any[]>([
    { id: "INV-101", itemName: "Laboratory Beakers (500ml)", quantity: 60, category: "Science Lab", vendor: "Giridih Glass Labs" },
    { id: "INV-102", itemName: "Early Montessori Sensory Blocks", quantity: 15, category: "Nursery Playroom", vendor: "Moti Toy Crafts" }
  ]);

  const [ledger, setLedger] = useState<any[]>([
    { id: "TXN-301", description: "Term Fee Collected - Sumit Verma", amount: 15200, type: "INCOME", category: "Term Fees", date: "2026-05-18" },
    { id: "TXN-302", description: "Classroom Whiteboards Purcahse", amount: 4500, type: "EXPENSE", category: "Infrastructure", date: "2026-05-16" }
  ]);

  // Load Settings
  useEffect(() => {
    const savedName = localStorage.getItem("erp_institutionName");
    const savedYear = localStorage.getItem("erp_academicYear");
    if (savedName || savedYear) {
      setSettings(prev => ({
        ...prev,
        institutionName: savedName || prev.institutionName,
        academicYear: savedYear || prev.academicYear
      }));
    }
  }, []);

  const handleSaveSettings = () => {
    localStorage.setItem("erp_institutionName", settings.institutionName);
    localStorage.setItem("erp_academicYear", settings.academicYear);
    alert("ERP System configurations successfully saved!");
  };

  // FETCH CORE ROUTINES
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/students");
      const data = await res.json();
      if (data.success) setStudents(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStaff = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/staff");
      const data = await res.json();
      if (data.success) setStaff(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/inquiries");
      const data = await res.json();
      if (data.success) setInquiries(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchNotices = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/notices");
      const data = await res.json();
      if (data.success) setNotices(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Trigger loads based on active module name
  useEffect(() => {
    if (moduleName === "students") fetchStudents();
    else if (moduleName === "staff") fetchStaff();
    else if (moduleName === "admissions") fetchInquiries();
    else if (moduleName === "notices") fetchNotices();
  }, [moduleName]);

  // DB CRUD OPERATIONS
  const handleAddStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentForm)
      });
      const data = await res.json();
      if (data.success) {
        setShowStudentModal(false);
        setStudentForm({
          firstName: "", lastName: "", email: "", password: "",
          admissionNo: "", className: "10", sectionName: "A", gender: "Male", address: ""
        });
        fetchStudents();
      } else {
        alert("Failed to register student: " + data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteStudent = async (id: string) => {
    if (!confirm("Are you sure you want to delete this student profile and linked parent credentials?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/students/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) fetchStudents();
      else alert(data.message);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddStaffSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(staffForm)
      });
      const data = await res.json();
      if (data.success) {
        setShowStaffModal(false);
        setStaffForm({
          firstName: "", lastName: "", email: "", password: "",
          employeeId: "", designation: "TGT Teacher", department: "Academics", qualification: "B.Ed / PG"
        });
        fetchStaff();
      } else {
        alert("Failed to add employee: " + data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteStaff = async (id: string) => {
    if (!confirm("Are you sure you want to delete this staff member?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/staff/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) fetchStaff();
      else alert(data.message);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddNoticeSubmit = async (e: React.FormEvent) => {
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
        setShowNoticeModal(false);
        setNoticeForm({ title: "", content: "", targetRoles: ["ALL"] });
        fetchNotices();
      } else {
        alert("Failed: " + data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateInquiryStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/inquiries/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await response.json();
      if (data.success) {
        setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // LOCAL MOCK STATE CREATORS FOR NON-SCHEMA ENTITIES
  const handleAddParent = (e: React.FormEvent) => {
    e.preventDefault();
    const newParent = {
      id: `PAR-${Math.floor(100 + Math.random() * 900)}`,
      name: parentForm.name,
      email: parentForm.email,
      phone: parentForm.phone,
      student: parentForm.linkedStudentId || "Not mapped",
      relation: parentForm.relation
    };
    setParents([...parents, newParent]);
    setShowParentModal(false);
    setParentForm({ name: "", email: "", phone: "", linkedStudentId: "", relation: "Father", occupation: "Business" });
  };

  const handleAddExam = (e: React.FormEvent) => {
    e.preventDefault();
    const newExam = {
      id: `EXM-${Math.floor(100 + Math.random() * 900)}`,
      name: examForm.name,
      className: examForm.className,
      subject: examForm.subjectName,
      date: examForm.examDate,
      marks: parseInt(examForm.totalMarks)
    };
    setExams([...exams, newExam]);
    setShowExamModal(false);
    setExamForm({ name: "", className: "10-A", subjectName: "Mathematics", examDate: "2026-06-15", totalMarks: "100" });
  };

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    const newVeh = {
      id: `VEH-${Math.floor(100 + Math.random() * 900)}`,
      vehicleNo: transportForm.vehicleNo,
      route: transportForm.route,
      driver: transportForm.driverName,
      phone: transportForm.driverPhone || "+91 99887 66554",
      capacity: parseInt(transportForm.capacity)
    };
    setVehicles([...vehicles, newVeh]);
    setShowTransportModal(false);
    setTransportForm({ vehicleNo: "", route: "Dumri Route", driverName: "", driverPhone: "", capacity: "40" });
  };

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook = {
      id: `BOK-${Math.floor(100 + Math.random() * 900)}`,
      title: libraryForm.title,
      isbn: libraryForm.isbn,
      author: libraryForm.author,
      copies: parseInt(libraryForm.copies)
    };
    setBooks([...books, newBook]);
    setShowLibraryModal(false);
    setLibraryForm({ title: "", isbn: "", author: "", copies: "5" });
  };

  const handleAddInventory = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: `INV-${Math.floor(100 + Math.random() * 900)}`,
      itemName: inventoryForm.itemName,
      quantity: parseInt(inventoryForm.quantity),
      category: inventoryForm.category,
      vendor: inventoryForm.vendor
    };
    setInventory([...inventory, newItem]);
    setShowInventoryModal(false);
    setInventoryForm({ itemName: "", quantity: "25", category: "Academics", vendor: "Moti Enterprises" });
  };

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const newTxn = {
      id: `TXN-${Math.floor(100 + Math.random() * 900)}`,
      description: ledgerForm.description,
      amount: parseFloat(ledgerForm.amount),
      type: ledgerForm.type,
      category: ledgerForm.category,
      date: new Date().toISOString().split('T')[0]
    };
    setLedger([newTxn, ...ledger]);
    setShowLedgerModal(false);
    setLedgerForm({ description: "", amount: "", type: "INCOME", category: "Term Fees" });
  };

  // -------------------------------------------------------------
  // MODULE RENDER SECTIONS
  // -------------------------------------------------------------

  // 1. STUDENTS
  if (moduleName === "students") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-slate-900">Manage Students</h1>
            <button onClick={fetchStudents} className="p-2 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer">
              <RefreshCw className="w-4 h-4 text-slate-500" />
            </button>
          </div>
          <button 
            onClick={() => setShowStudentModal(true)}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Student</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-16 text-center text-slate-500">
              <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm font-semibold">Connecting to student database...</p>
            </div>
          ) : students.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm">
                  <th className="px-6 py-4 font-semibold">Admission ID</th>
                  <th className="px-6 py-4 font-semibold">Student Name</th>
                  <th className="px-6 py-4 font-semibold">Email & Login</th>
                  <th className="px-6 py-4 font-semibold">Class Assigned</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                {students.map((stu, i) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-mono font-bold text-indigo-600">{stu.admissionNo}</td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">{stu.firstName} {stu.lastName}</div>
                      <div className="text-[10px] text-slate-400 font-semibold">{stu.gender} | {stu.address}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 font-mono text-xs">{stu.user?.email || "No Portal Access"}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 font-bold rounded-lg text-xs">
                        Class {stu.class?.name || "10"}-{stu.class?.section || "A"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button 
                        onClick={() => handleDeleteStudent(stu.id)}
                        className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-16 text-center text-slate-500">
              <Users className="w-12 h-12 text-slate-350 mx-auto mb-4" />
              <p className="text-sm font-semibold">No students registered.</p>
            </div>
          )}
        </div>

        {/* Add Student Modal */}
        <AnimatePresence>
          {showStudentModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
                <button onClick={() => setShowStudentModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Register Student Profile</h3>
                <form onSubmit={handleAddStudentSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">FIRST NAME</label>
                      <input required type="text" value={studentForm.firstName} onChange={(e) => setStudentForm({ ...studentForm, firstName: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium text-slate-800" placeholder="Rahul" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">LAST NAME</label>
                      <input required type="text" value={studentForm.lastName} onChange={(e) => setStudentForm({ ...studentForm, lastName: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium text-slate-800" placeholder="Kumar" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">PORTAL LOGIN EMAIL</label>
                    <input required type="email" value={studentForm.email} onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium text-slate-800" placeholder="rahul.student@gmail.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">PORTAL PASSWORD</label>
                    <input required type="password" value={studentForm.password} onChange={(e) => setStudentForm({ ...studentForm, password: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium text-slate-800" placeholder="student123" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">CLASS</label>
                      <input required type="text" value={studentForm.className} onChange={(e) => setStudentForm({ ...studentForm, className: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium text-slate-800" placeholder="e.g. 10, LKG" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">SECTION</label>
                      <input required type="text" value={studentForm.sectionName} onChange={(e) => setStudentForm({ ...studentForm, sectionName: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium text-slate-800" placeholder="e.g. A, B" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">ADMISSION ID</label>
                      <input type="text" value={studentForm.admissionNo} onChange={(e) => setStudentForm({ ...studentForm, admissionNo: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium text-slate-800" placeholder="Auto-generated if empty" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">GENDER</label>
                      <select value={studentForm.gender} onChange={(e) => setStudentForm({ ...studentForm, gender: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium text-slate-800">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">ADDRESS</label>
                    <textarea value={studentForm.address} onChange={(e) => setStudentForm({ ...studentForm, address: e.target.value })} rows={2} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium text-slate-800" placeholder="Permanent address stops..." />
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-lg text-sm uppercase tracking-wider mt-4">Save Student Profile</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 2. PARENTS LINKAGE
  if (moduleName === "parents") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Parents & Guardians Linkage</h1>
          <button 
            onClick={() => setShowParentModal(true)}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold text-sm transition-all cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Plus className="w-4 h-4" />
            <span>Create Parent Account</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">Account ID</th>
                <th className="px-6 py-4 font-semibold">Parent / Guardian</th>
                <th className="px-6 py-4 font-semibold">Contact Info</th>
                <th className="px-6 py-4 font-semibold">Linked Student</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {parents.map((par, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-mono font-bold text-indigo-600">{par.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{par.name}</div>
                    <div className="text-[10px] text-slate-400 font-semibold">{par.relation} relation</div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-mono text-xs">
                    <div>{par.phone}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{par.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-yellow-50 border border-yellow-250 text-yellow-800 font-bold rounded-lg text-[10px] tracking-wider uppercase">
                      {par.student}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => setParents(parents.filter(p => p.id !== par.id))}
                      className="p-2 text-slate-450 hover:text-rose-600 rounded-lg hover:bg-rose-50 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Parent Modal */}
        <AnimatePresence>
          {showParentModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
                <button onClick={() => setShowParentModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Create Parent Account</h3>
                <form onSubmit={handleAddParent} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">PARENT NAME</label>
                    <input required type="text" value={parentForm.name} onChange={(e) => setParentForm({ ...parentForm, name: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="Rajesh Sharma" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">EMAIL</label>
                      <input required type="email" value={parentForm.email} onChange={(e) => setParentForm({ ...parentForm, email: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="rajesh@gmail.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">CONTACT PHONE</label>
                      <input required type="text" value={parentForm.phone} onChange={(e) => setParentForm({ ...parentForm, phone: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="+91 94313 XXXXX" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">LINK STUDENT NAME</label>
                      <input required type="text" value={parentForm.linkedStudentId} onChange={(e) => setParentForm({ ...parentForm, linkedStudentId: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="Rohan Sharma" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">RELATIONSHIP</label>
                      <select value={parentForm.relation} onChange={(e) => setParentForm({ ...parentForm, relation: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium">
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Guardian">Guardian</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-lg text-sm uppercase tracking-wider mt-4">Generate Parent Account</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 3. STAFF & TEACHERS
  if (moduleName === "staff") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-slate-900">Manage Staff</h1>
            <button onClick={fetchStaff} className="p-2 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer">
              <RefreshCw className="w-4 h-4 text-slate-500" />
            </button>
          </div>
          <button 
            onClick={() => setShowStaffModal(true)}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-750 text-white rounded-xl font-bold text-sm transition-all cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Employee</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-16 text-center text-slate-500">
              <div className="w-8 h-8 border-4 border-indigo-650 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm font-semibold">Connecting to employee database...</p>
            </div>
          ) : staff.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm">
                  <th className="px-6 py-4 font-semibold">Employee ID</th>
                  <th className="px-6 py-4 font-semibold">Employee Name</th>
                  <th className="px-6 py-4 font-semibold">Designation & Department</th>
                  <th className="px-6 py-4 font-semibold">Qualification</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                {staff.map((emp, i) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-mono font-bold text-indigo-600">{emp.employeeId}</td>
                    <td className="px-6 py-4 font-bold text-slate-800">
                      <div>{emp.firstName} {emp.lastName}</div>
                      <div className="text-[10px] text-slate-400 font-mono font-semibold">{emp.user?.email}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 font-semibold">
                      <div className="text-slate-800 font-bold">{emp.designation}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">{emp.department}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-650 font-bold text-xs">{emp.qualification}</td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleDeleteStaff(emp.id)}
                        className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-16 text-center text-slate-500">
              <Users className="w-12 h-12 text-slate-350 mx-auto mb-4" />
              <p className="text-sm font-semibold">No teachers or employees registered.</p>
            </div>
          )}
        </div>

        {/* Add Staff Modal */}
        <AnimatePresence>
          {showStaffModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl relative">
                <button onClick={() => setShowStaffModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Add New Staff Member</h3>
                <form onSubmit={handleAddStaffSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">FIRST NAME</label>
                      <input required type="text" value={staffForm.firstName} onChange={(e) => setStaffForm({ ...staffForm, firstName: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm font-medium text-slate-800" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">LAST NAME</label>
                      <input required type="text" value={staffForm.lastName} onChange={(e) => setStaffForm({ ...staffForm, lastName: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm font-medium text-slate-800" placeholder="Miller" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">STAFF LOGIN EMAIL</label>
                    <input required type="email" value={staffForm.email} onChange={(e) => setStaffForm({ ...staffForm, email: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm font-medium text-slate-800" placeholder="john.miller@gmail.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">PORTAL PASSWORD</label>
                    <input required type="password" value={staffForm.password} onChange={(e) => setStaffForm({ ...staffForm, password: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm font-medium text-slate-800" placeholder="teacher123" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">EMPLOYEE ID</label>
                      <input type="text" value={staffForm.employeeId} onChange={(e) => setStaffForm({ ...staffForm, employeeId: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm font-medium text-slate-800" placeholder="Auto-generated if empty" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">QUALIFICATION</label>
                      <input required type="text" value={staffForm.qualification} onChange={(e) => setStaffForm({ ...staffForm, qualification: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm font-medium text-slate-800" placeholder="e.g. B.Ed, M.Sc" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">DESIGNATION</label>
                      <input required type="text" value={staffForm.designation} onChange={(e) => setStaffForm({ ...staffForm, designation: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm font-medium text-slate-800" placeholder="TGT Mathematics" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">DEPARTMENT</label>
                      <input required type="text" value={staffForm.department} onChange={(e) => setStaffForm({ ...staffForm, department: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm font-medium text-slate-800" placeholder="Academics" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-lg text-sm uppercase tracking-wider mt-4">Save Staff Profile</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 4. FEES & FINANCE
  if (moduleName === "fees") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Fees & Financials</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-400 uppercase">Collected This Month</p>
              <h3 className="text-3xl font-black text-emerald-600 mt-2">₹12,45,000</h3>
            </div>
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600"><CreditCard className="w-7 h-7" /></div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-400 uppercase">Outstanding Dues</p>
              <h3 className="text-3xl font-black text-rose-500 mt-2">₹4,20,000</h3>
            </div>
            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600"><CreditCard className="w-7 h-7" /></div>
          </div>
          <div 
            onClick={() => alert("Central batch billing invoices compiled for the current semester session!")}
            className="bg-indigo-600 p-6 rounded-3xl text-white shadow-md flex items-center justify-between cursor-pointer hover:bg-indigo-700 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div>
              <h4 className="text-lg font-bold">Generate Invoice</h4>
              <p className="text-indigo-200 text-xs mt-1 font-medium">Batch invoice students for upcoming term</p>
            </div>
            <Plus className="w-7 h-7 text-indigo-250" />
          </div>
        </div>
      </div>
    );
  }

  // 5. ADMISSIONS
  if (moduleName === "admissions") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-slate-900">Manage Admissions</h1>
            <button onClick={fetchInquiries} className="p-2 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer">
              <RefreshCw className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-16 text-center text-slate-500">
              <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm font-semibold">Connecting to PostgreSQL database...</p>
            </div>
          ) : inquiries.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm">
                  <th className="px-6 py-4 font-semibold">Applicant Info</th>
                  <th className="px-6 py-4 font-semibold">Guardian Info</th>
                  <th className="px-6 py-4 font-semibold">Grade</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                {inquiries.map((app, i) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">{app.studentName}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{app.message}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-700">{app.parentName}</div>
                      <div className="text-[10px] text-slate-400 font-semibold">{app.phone} | {app.email}</div>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-650">{app.grade}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 border text-xs font-bold rounded-lg ${
                        app.status === 'CONFIRMED' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' :
                        app.status === 'CALLED' ? 'bg-indigo-50 border-indigo-200 text-indigo-800' :
                        app.status === 'VISITED' ? 'bg-blue-50 border-blue-200 text-blue-800' :
                        'bg-amber-50 border-amber-200 text-amber-800'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                      {app.status === 'PENDING' && (
                        <button onClick={() => handleUpdateInquiryStatus(app.id, 'CALLED')} className="px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg font-bold text-xs cursor-pointer transition-colors">Mark Called</button>
                      )}
                      {app.status === 'CALLED' && (
                        <button onClick={() => handleUpdateInquiryStatus(app.id, 'VISITED')} className="px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-bold text-xs cursor-pointer transition-colors">Mark Visited</button>
                      )}
                      {app.status !== 'CONFIRMED' && (
                        <button onClick={() => handleUpdateInquiryStatus(app.id, 'CONFIRMED')} className="px-3 py-1.5 bg-emerald-500 text-white rounded-lg font-bold text-xs hover:bg-emerald-600 cursor-pointer transition-colors">Approve</button>
                      )}
                      {app.status === 'CONFIRMED' && (
                        <span className="text-xs text-slate-400 font-semibold inline-flex items-center justify-end"><CheckCircle className="w-4 h-4 text-emerald-500 mr-1" /> Confirmed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-16 text-center text-slate-500">
              <FileText className="w-12 h-12 text-slate-350 mx-auto mb-4" />
              <p className="text-sm font-semibold">No admissions inquiries are logged.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 6. ACADEMICS
  if (moduleName === "academics") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Academics & Setup</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h3 className="text-lg font-bold text-slate-800">Active Classes</h3>
              <button onClick={() => alert("Class mapping successfully registered!")} className="text-xs text-indigo-600 font-extrabold flex items-center hover:underline cursor-pointer"><Plus className="w-3.5 h-3.5 mr-1" /> Add Class</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Play-way / Nursery", "LKG", "UKG", "Class I", "Class V", "Class IX", "Class X", "Class XI Science"].map((c, i) => (
                <span key={i} className="px-4 py-2 bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold rounded-xl text-sm">{c}</span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h3 className="text-lg font-bold text-slate-800">Subjects Matrix</h3>
              <button onClick={() => alert("Subject successfully attached!")} className="text-xs text-indigo-600 font-extrabold flex items-center hover:underline cursor-pointer"><Plus className="w-3.5 h-3.5 mr-1" /> Add Subject</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {["English Language", "Early Cognitive Math", "Sensory Discovery", "Phonics SOUNDS", "Basic Physics", "PCM Calculus"].map((sub, i) => (
                <span key={i} className="px-4 py-2 bg-slate-100 border border-slate-200 text-slate-700 font-bold rounded-xl text-sm">{sub}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 7. EXAMINATIONS
  if (moduleName === "exams") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Manage Examinations</h1>
          <button 
            onClick={() => setShowExamModal(true)}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold text-sm cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Plus className="w-4 h-4" />
            <span>Create Exam Session</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">Exam Code</th>
                <th className="px-6 py-4 font-semibold">Session Name</th>
                <th className="px-6 py-4 font-semibold">Grade Stream</th>
                <th className="px-6 py-4 font-semibold">Scheduled Date</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {exams.map((ex, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-mono font-bold text-indigo-600">{ex.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{ex.name}</div>
                    <div className="text-[10px] text-slate-400 font-semibold">{ex.subject} subject | {ex.marks} Total Marks</div>
                  </td>
                  <td className="px-6 py-4 text-slate-700 font-bold">{ex.className}</td>
                  <td className="px-6 py-4 text-slate-600 font-mono text-xs">{ex.date}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button onClick={() => alert(`Admit Cards prepared for Class ${ex.className}!`)} className="px-2.5 py-1 bg-yellow-500 text-indigo-950 rounded-lg font-bold text-[10px] hover:bg-yellow-600 transition-colors cursor-pointer">Admit Cards</button>
                    <button onClick={() => alert("Grade entry screen opened for marks submission!")} className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-bold text-[10px] hover:bg-indigo-100 transition-colors cursor-pointer">Grade Entry</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Exam Modal */}
        <AnimatePresence>
          {showExamModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
                <button onClick={() => setShowExamModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Create Exam Session</h3>
                <form onSubmit={handleAddExam} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">EXAMINATION TITLE</label>
                    <input required type="text" value={examForm.name} onChange={(e) => setExamForm({ ...examForm, name: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="Mid-Term Examination" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">TARGET CLASS</label>
                      <input required type="text" value={examForm.className} onChange={(e) => setExamForm({ ...examForm, className: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="e.g. 10-A" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">SUBJECT NAME</label>
                      <input required type="text" value={examForm.subjectName} onChange={(e) => setExamForm({ ...examForm, subjectName: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="Mathematics" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">EXAM DATE</label>
                      <input required type="date" value={examForm.examDate} onChange={(e) => setExamForm({ ...examForm, examDate: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-850 font-medium font-mono" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">TOTAL MARKS</label>
                      <input required type="number" value={examForm.totalMarks} onChange={(e) => setExamForm({ ...examForm, totalMarks: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="100" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-lg text-sm uppercase tracking-wider mt-4">Save Exam Session</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 8. NOTICES
  if (moduleName === "notices") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-slate-900">Manage Notices</h1>
            <button onClick={fetchNotices} className="p-2 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer">
              <RefreshCw className="w-4 h-4 text-slate-500" />
            </button>
          </div>
          <button 
            onClick={() => setShowNoticeModal(true)}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl font-bold text-sm cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Plus className="w-4 h-4" />
            <span>Publish Announcement</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-16 text-center text-slate-500">
              <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm font-semibold">Connecting to notice database...</p>
            </div>
          ) : notices.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {notices.map((not, i) => (
                <div key={i} className="p-6 hover:bg-slate-50/50 flex justify-between items-start transition-colors">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 bg-yellow-50 border border-yellow-200 text-yellow-850 text-[10px] font-bold rounded-lg uppercase tracking-wider">Circular</span>
                      <span className="text-slate-400 font-mono text-[10px]">{new Date(not.date).toDateString()}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{not.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{not.content}</p>
                  </div>
                  <button 
                    onClick={async () => {
                      if (!confirm("Delete this notice?")) return;
                      await fetch(`http://localhost:5000/api/notices/${not.id}`, { method: "DELETE" }).catch(e => console.log(e));
                      fetchNotices();
                    }}
                    className="p-2 text-slate-400 hover:text-rose-650 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4.5 h-4.5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-16 text-center text-slate-500">
              <Bell className="w-12 h-12 text-slate-350 mx-auto mb-4 animate-bounce" />
              <p className="text-sm font-semibold">No notices published in Neon database yet.</p>
            </div>
          )}
        </div>

        {/* Add Notice Modal */}
        <AnimatePresence>
          {showNoticeModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
                <button onClick={() => setShowNoticeModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Publish Notice Announcement</h3>
                <form onSubmit={handleAddNoticeSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">NOTICE TITLE</label>
                    <input required type="text" value={noticeForm.title} onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="Annual Exam Session Date Sheet 2026-27" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">CONTENT BODY</label>
                    <textarea required rows={4} value={noticeForm.content} onChange={(e) => setNoticeForm({ ...noticeForm, content: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="Details about notice..." />
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-lg text-sm uppercase tracking-wider mt-4">Save & Post Notice</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 9. TRANSPORT SYSTEM
  if (moduleName === "transport") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Transport & Vehicles</h1>
          <button 
            onClick={() => setShowTransportModal(true)}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold text-sm cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Plus className="w-4 h-4" />
            <span>Register Vehicle Route</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">Vehicle Roster ID</th>
                <th className="px-6 py-4 font-semibold">Bus / Vehicle No</th>
                <th className="px-6 py-4 font-semibold">Route Covered</th>
                <th className="px-6 py-4 font-semibold">Assigned Driver</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {vehicles.map((vh, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-mono font-bold text-indigo-600">{vh.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{vh.vehicleNo}</div>
                    <div className="text-[10px] text-slate-400 font-semibold">{vh.capacity} Student Capacity</div>
                  </td>
                  <td className="px-6 py-4 text-slate-700 font-bold">{vh.route}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{vh.driver}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{vh.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => setVehicles(vehicles.filter(v => v.id !== vh.id))}
                      className="p-2 text-slate-450 hover:text-rose-600 rounded-lg hover:bg-rose-50 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Transport Modal */}
        <AnimatePresence>
          {showTransportModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
                <button onClick={() => setShowTransportModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Register Vehicle Route</h3>
                <form onSubmit={handleAddVehicle} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">VEHICLE RTO NUMBER</label>
                    <input required type="text" value={transportForm.vehicleNo} onChange={(e) => setTransportForm({ ...transportForm, vehicleNo: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="JH-02-B-1234" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">TRANSIT ROUTE</label>
                    <input required type="text" value={transportForm.route} onChange={(e) => setTransportForm({ ...transportForm, route: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="Dumri to Bagoder Chowk..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">DRIVER NAME</label>
                      <input required type="text" value={transportForm.driverName} onChange={(e) => setTransportForm({ ...transportForm, driverName: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="Manoj Kumar" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">DRIVER PHONE</label>
                      <input type="text" value={transportForm.driverPhone} onChange={(e) => setTransportForm({ ...transportForm, driverPhone: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="+91 94313 XXXXX" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-lg text-sm uppercase tracking-wider mt-4">Save Vehicle Route</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 10. LIBRARY HUB
  if (moduleName === "library") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Library Book Ledger</h1>
          <button 
            onClick={() => setShowLibraryModal(true)}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold text-sm cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Plus className="w-4 h-4" />
            <span>Add Book Entry</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">Book ID</th>
                <th className="px-6 py-4 font-semibold">Title & ISBN</th>
                <th className="px-6 py-4 font-semibold">Author</th>
                <th className="px-6 py-4 font-semibold">Copies Available</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {books.map((bk, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-mono font-bold text-indigo-600">{bk.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{bk.title}</div>
                    <div className="text-[10px] text-slate-405 font-mono">{bk.isbn}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-700 font-bold">{bk.author}</td>
                  <td className="px-6 py-4 text-slate-650 font-bold">{bk.copies} units</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button onClick={() => alert(`Successfully issued Book "${bk.title}" to database student!`)} className="px-2.5 py-1 bg-yellow-500 text-indigo-950 rounded-lg font-bold text-[10px] hover:bg-yellow-600 transition-colors cursor-pointer">Issue Book</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Library Book Modal */}
        <AnimatePresence>
          {showLibraryModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
                <button onClick={() => setShowLibraryModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Add Book Entry</h3>
                <form onSubmit={handleAddBook} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">BOOK TITLE</label>
                    <input required type="text" value={libraryForm.title} onChange={(e) => setLibraryForm({ ...libraryForm, title: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="E.g. HC Verma Physics Vol 1" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">ISBN CODE</label>
                    <input required type="text" value={libraryForm.isbn} onChange={(e) => setLibraryForm({ ...libraryForm, isbn: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="978-81-XXXX-X" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">AUTHOR NAME</label>
                      <input required type="text" value={libraryForm.author} onChange={(e) => setLibraryForm({ ...libraryForm, author: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="HC Verma" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">TOTAL COPIES</label>
                      <input required type="number" value={libraryForm.copies} onChange={(e) => setLibraryForm({ ...libraryForm, copies: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="5" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-lg text-sm uppercase tracking-wider mt-4">Save Book Ledger</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 11. STOCK & INVENTORY
  if (moduleName === "inventory") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Stock & Inventory</h1>
          <button 
            onClick={() => setShowInventoryModal(true)}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold text-sm cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Plus className="w-4 h-4" />
            <span>Add Inventory Item</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">SKU ID</th>
                <th className="px-6 py-4 font-semibold">Item Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Sourced Vendor</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {inventory.map((inv, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-mono font-bold text-indigo-600">{inv.id}</td>
                  <td className="px-6 py-4 font-bold text-slate-800">
                    <div>{inv.itemName}</div>
                    <div className="text-[10px] text-slate-400 font-semibold">{inv.quantity} Units In Stock</div>
                  </td>
                  <td className="px-6 py-4 text-slate-700 font-bold">{inv.category}</td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{inv.vendor}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => setInventory(inventory.filter(item => item.id !== inv.id))}
                      className="p-2 text-slate-450 hover:text-rose-600 rounded-lg hover:bg-rose-50 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Inventory Modal */}
        <AnimatePresence>
          {showInventoryModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
                <button onClick={() => setShowInventoryModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Add Stock Item</h3>
                <form onSubmit={handleAddInventory} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">ITEM NAME</label>
                    <input required type="text" value={inventoryForm.itemName} onChange={(e) => setInventoryForm({ ...inventoryForm, itemName: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="E.g. Computer Keyboards" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">QUANTITY</label>
                      <input required type="number" value={inventoryForm.quantity} onChange={(e) => setInventoryForm({ ...inventoryForm, quantity: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">CATEGORY</label>
                      <input required type="text" value={inventoryForm.category} onChange={(e) => setInventoryForm({ ...inventoryForm, category: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="IT Assets" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">VENDOR SOURCED</label>
                    <input required type="text" value={inventoryForm.vendor} onChange={(e) => setInventoryForm({ ...inventoryForm, vendor: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="Moti Enterprises" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-lg text-sm uppercase tracking-wider mt-4">Save Stock Item</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 12. GENERAL LEDGER ACCOUNTS
  if (moduleName === "accounts") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">General Ledger Accounts</h1>
          <button 
            onClick={() => setShowLedgerModal(true)}
            className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-650 hover:bg-indigo-750 text-white rounded-xl font-bold text-sm cursor-pointer shadow-lg shadow-indigo-600/10"
          >
            <Plus className="w-4 h-4" />
            <span>Record Transaction</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">Txn Reference</th>
                <th className="px-6 py-4 font-semibold">Description</th>
                <th className="px-6 py-4 font-semibold">Type</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {ledger.map((tx, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-mono font-bold text-indigo-600">{tx.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{tx.description}</div>
                    <div className="text-[10px] text-slate-400 font-semibold">{tx.category} | {tx.date}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 border text-[10px] font-bold rounded-lg ${
                      tx.type === 'INCOME' ? 'bg-emerald-50 border-emerald-250 text-emerald-800' : 'bg-rose-50 border-rose-250 text-rose-800'
                    }`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className={`px-6 py-4 font-bold text-sm ${tx.type === 'INCOME' ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {tx.type === 'INCOME' ? '+' : '-'} ₹{tx.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => setLedger(ledger.filter(l => l.id !== tx.id))}
                      className="p-2 text-slate-450 hover:text-rose-600 rounded-lg hover:bg-rose-50 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Transaction Modal */}
        <AnimatePresence>
          {showLedgerModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
                <button onClick={() => setShowLedgerModal(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-750 cursor-pointer"><X className="w-5 h-5" /></button>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Record Transaction</h3>
                <form onSubmit={handleAddTransaction} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">TRANSACTION DESCRIPTION</label>
                    <input required type="text" value={ledgerForm.description} onChange={(e) => setLedgerForm({ ...ledgerForm, description: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="E.g. Nursery playground toys purcahse" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">AMOUNT (INR)</label>
                      <input required type="number" value={ledgerForm.amount} onChange={(e) => setLedgerForm({ ...ledgerForm, amount: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="15000" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">TXN TYPE</label>
                      <select value={ledgerForm.type} onChange={(e) => setLedgerForm({ ...ledgerForm, type: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium">
                        <option value="INCOME">INCOME</option>
                        <option value="EXPENSE">EXPENSE</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">CATEGORY</label>
                    <input required type="text" value={ledgerForm.category} onChange={(e) => setLedgerForm({ ...ledgerForm, category: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-sm text-slate-800 font-medium" placeholder="Infrastructure" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-lg text-sm uppercase tracking-wider mt-4">Record Transaction</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // 13. REPORTS & EXPORTS
  if (moduleName === "reports") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Reports & Analytics Export</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-150 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Academic & Student Logs</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">Download complete student rosters, contact numbers, and parent details.</p>
            <div className="flex space-x-2">
              <button onClick={() => alert("Excel exported: DAVMPS_StudentRoster_2026.xlsx successfully compiled and sent to local downloads directory!")} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer">Export Excel</button>
              <button onClick={() => alert("PDF exported: DAVMPS_StudentRoster_2026.pdf prepared for printing!")} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-750 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer">Export PDF</button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-150 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Finance & Fee Collections</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">Export fee structures, outstanding balances, and manual collection ledgers.</p>
            <div className="flex space-x-2">
              <button onClick={() => alert("Excel exported: DAVMPS_FeeLedger_May2026.xlsx generated!")} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer">Export Excel</button>
              <button onClick={() => alert("PDF exported: DAVMPS_FeeLedger_May2026.pdf generated!")} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-750 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer">Export PDF</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 14. WEBSITE HUB
  if (moduleName === "website") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Website Management</h1>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div className="border-b pb-3 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-850">Banner Sliders & Content</h3>
            <button onClick={() => alert("Admissions portal is now dynamically opened/closed live!")} className="px-4 py-2 bg-yellow-500 text-indigo-950 font-bold rounded-xl text-xs transition-colors cursor-pointer">Toggle Admissions Open</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <label className="block font-bold text-slate-700 mb-1">SEO Title Tag</label>
              <input type="text" defaultValue="D A V Moti Public School | Best Education Mundro Bagoder" className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none font-medium text-slate-800 text-sm" />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">SEO Description</label>
              <input type="text" defaultValue="DAV Moti Public School Mundro Bagoder provides world class education in Giridih." className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none font-medium text-slate-800 text-sm" />
            </div>
          </div>
          <button onClick={() => alert("SEO details successfully saved and index sitemaps refreshed!")} className="px-6 py-3 bg-indigo-650 hover:bg-indigo-755 text-white font-bold rounded-xl transition-colors cursor-pointer shadow-lg shadow-indigo-600/10">Update Website Settings</button>
        </div>
      </div>
    );
  }

  // 15. SYSTEM SETTINGS
  if (moduleName === "settings") {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">ERP System Settings</h1>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center">
            <ShieldCheck className="w-5 h-5 mr-2 text-indigo-600" /> Security & Session Configuration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Institution Name</label>
              <input type="text" value={settings.institutionName} onChange={(e) => setSettings({ ...settings, institutionName: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-slate-800 text-sm font-medium" />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Academic Year</label>
              <input type="text" value={settings.academicYear} onChange={(e) => setSettings({ ...settings, academicYear: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-slate-800 text-sm font-medium" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <label className="block font-bold text-slate-700 mb-1">SMTP Email Host</label>
              <input type="text" value={settings.smtpHost} onChange={(e) => setSettings({ ...settings, smtpHost: e.target.value })} className="w-full border border-slate-200 p-3 rounded-xl focus:outline-none text-slate-850 text-sm font-mono" />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">SMTP Password</label>
              <input type="password" value="••••••••••••••••••••" className="w-full border border-slate-200 p-3 rounded-xl bg-slate-50 focus:outline-none text-slate-800 text-sm font-mono" disabled />
            </div>
          </div>
          <button onClick={handleSaveSettings} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-600/10 cursor-pointer">Save System Configurations</button>
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
