"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, AlertTriangle, Clock } from "lucide-react";

export default function StudentLibrary() {
  const [issues, setIssues] = useState<any[]>([]);
  const [studentId, setStudentId] = useState(""); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would come from the auth context.
    // For demo purposes, we will try to fetch the first student from the backend or ask the user to enter their ID.
    fetchStudentIdAndIssues();
  }, []);

  const fetchStudentIdAndIssues = async () => {
    try {
      // Demo fallback: Try to get a real student ID from the API to make the page work without auth
      const res = await fetch("http://localhost:5000/api/students");
      if (res.ok) {
        const data = await res.json();
        if (data && data.length > 0) {
          const id = data[0].id;
          setStudentId(id);
          fetchIssues(id);
        } else {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const fetchIssues = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/library/issues/student/${id}`);
      if (res.ok) {
        const data = await res.json();
        setIssues(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">My Library</h1>
        <div className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 shadow-sm border border-slate-100 flex items-center">
          <BookOpen className="w-4 h-4 mr-2 text-indigo-600" />
          {issues.length} Books Issued
        </div>
      </div>

      {loading ? (
        <div className="text-center text-slate-500 py-10">Loading your library details...</div>
      ) : issues.length === 0 ? (
        <div className="text-center bg-white p-10 rounded-2xl border border-slate-100 shadow-sm">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900">No Books Issued</h3>
          <p className="text-slate-500 mt-2">You haven't borrowed any books from the library yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue: any, i: number) => {
            const dueDate = new Date(issue.dueDate);
            const today = new Date();
            const diffTime = dueDate.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            const isOverdue = diffDays < 0;
            const isDueSoon = diffDays >= 0 && diffDays <= 7;

            return (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white p-6 rounded-2xl shadow-sm border ${isOverdue ? 'border-red-200 shadow-red-100' : isDueSoon ? 'border-amber-200 shadow-amber-100' : 'border-slate-100'} relative overflow-hidden`}
              >
                {/* Status Indicator Bar */}
                <div className={`absolute top-0 left-0 w-full h-2 ${isOverdue ? 'bg-red-500' : isDueSoon ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>

                <div className="flex justify-between items-start mt-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{issue.book?.title}</h3>
                    <p className="text-sm text-slate-500">{issue.book?.author}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isOverdue ? 'bg-red-100 text-red-600' : isDueSoon ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 flex items-center"><Calendar className="w-4 h-4 mr-1" /> Issued on</span>
                    <span className="font-semibold text-slate-900">{new Date(issue.issueDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 flex items-center"><Clock className="w-4 h-4 mr-1" /> Due Date</span>
                    <span className={`font-bold ${isOverdue ? 'text-red-600' : 'text-slate-900'}`}>{dueDate.toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Notifications / Alerts */}
                {issue.status === 'ISSUED' && (
                  <div className="mt-6">
                    {isOverdue ? (
                      <div className="bg-red-50 text-red-700 p-3 rounded-lg text-xs font-semibold flex items-start">
                        <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          OVERDUE: Please return this book immediately. Fine applies.
                        </div>
                      </div>
                    ) : isDueSoon ? (
                      <div className="bg-amber-50 text-amber-700 p-3 rounded-lg text-xs font-semibold flex items-start">
                        <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          DUE SOON: This book must be returned within {diffDays} days.
                        </div>
                      </div>
                    ) : (
                      <div className="bg-slate-50 text-slate-600 p-3 rounded-lg text-xs font-medium text-center">
                        You have {diffDays} days left to return this book.
                      </div>
                    )}
                  </div>
                )}
                
                {issue.status === 'RETURNED' && (
                  <div className="mt-6 bg-emerald-50 text-emerald-700 p-3 rounded-lg text-xs font-bold text-center">
                    Returned on {new Date(issue.returnDate).toLocaleDateString()}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
