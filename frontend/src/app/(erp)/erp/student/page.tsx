"use client";

import { motion } from "framer-motion";
import { Book, CheckCircle, Clock, FileText, Calendar } from "lucide-react";

export default function StudentDashboard() {
  const schedule = [
    { time: "08:00 AM", subject: "Mathematics", teacher: "Mr. Sharma", room: "Room 101" },
    { time: "09:00 AM", subject: "Science", teacher: "Mrs. Gupta", room: "Lab 2" },
    { time: "10:00 AM", subject: "English", teacher: "Ms. Davis", room: "Room 101" },
    { time: "11:00 AM", subject: "Break", teacher: "-", room: "Cafeteria" },
    { time: "11:30 AM", subject: "History", teacher: "Mr. Patel", room: "Room 101" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Welcome, John!</h1>
        <div className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 shadow-sm border border-slate-100 flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
          May 18, 2026
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Attendance Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-6">
          <div className="w-20 h-20 rounded-full border-4 border-indigo-100 flex items-center justify-center relative">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle cx="36" cy="36" r="36" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-slate-100" />
              <circle cx="36" cy="36" r="36" fill="transparent" stroke="currentColor" strokeWidth="4" strokeDasharray="226" strokeDashoffset="22" className="text-indigo-600" />
            </svg>
            <span className="text-xl font-bold text-slate-900">90%</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Attendance</h3>
            <p className="text-sm text-slate-500">You've been present for 45 out of 50 days this term.</p>
          </div>
        </div>

        {/* Next Class */}
        <div className="bg-indigo-600 p-6 rounded-2xl shadow-md text-white flex flex-col justify-center">
          <div className="flex items-center space-x-2 text-indigo-200 mb-2 font-medium text-sm">
            <Clock className="w-4 h-4" />
            <span>Up Next at 11:30 AM</span>
          </div>
          <h3 className="text-2xl font-bold mb-1">History</h3>
          <p className="text-indigo-200">Room 101 • Mr. Patel</p>
        </div>

        {/* Fees Due */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-rose-500 flex flex-col justify-center">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Fees Due</h3>
          <p className="text-3xl font-extrabold text-slate-900 mb-2">₹12,500</p>
          <p className="text-sm text-rose-500 font-medium">Due by May 25, 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Timetable */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Today's Timetable</h2>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div key={i} className={`flex items-center p-4 rounded-xl ${i === 4 ? 'bg-indigo-50 border border-indigo-100' : 'bg-slate-50 border border-slate-100'}`}>
                <div className={`w-20 flex-shrink-0 font-bold ${i === 4 ? 'text-indigo-600' : 'text-slate-500'}`}>
                  {item.time}
                </div>
                <div className="ml-4 flex-grow flex justify-between items-center">
                  <div>
                    <h4 className={`font-bold ${i === 4 ? 'text-indigo-900' : 'text-slate-900'}`}>{item.subject}</h4>
                    <p className={`text-xs ${i === 4 ? 'text-indigo-600' : 'text-slate-500'}`}>{item.teacher}</p>
                  </div>
                  <div className={`text-sm font-semibold px-3 py-1 rounded-full ${i === 4 ? 'bg-indigo-200 text-indigo-800' : 'bg-white text-slate-600 shadow-sm'}`}>
                    {item.room}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Results & Homework */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Pending Homework</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Book className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Math Assignment - Algebra</h4>
                  <p className="text-sm text-slate-500 mb-2">Complete exercises 5.1 to 5.3.</p>
                  <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-2 py-1 rounded-md">Due Tomorrow</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Science Project Report</h4>
                  <p className="text-sm text-slate-500 mb-2">Submit draft of the photosynthesis project.</p>
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">Due in 3 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
