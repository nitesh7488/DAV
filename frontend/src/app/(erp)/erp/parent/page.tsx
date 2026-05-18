"use client";

import { motion } from "framer-motion";
import { CreditCard, Calendar, Activity, Bell } from "lucide-react";
import Link from "next/link";

export default function ParentDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Parent Dashboard</h1>
        <div className="text-sm text-slate-500">Welcome back, Michael!</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Child Info */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 col-span-1 lg:col-span-2 flex items-center space-x-6">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-2xl">
            JD
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">John Doe</h3>
            <p className="text-sm text-slate-500">Class 10A • Admission: STU-2026-001</p>
            <p className="text-xs font-semibold text-emerald-500 mt-2 bg-emerald-50 inline-block px-2 py-1 rounded">Attendance: 90%</p>
          </div>
        </div>

        {/* Action Quick Links */}
        <Link href="/erp/parent/fees" className="bg-rose-500 p-6 rounded-2xl shadow-md text-white hover:bg-rose-600 transition-colors flex flex-col justify-center">
          <CreditCard className="w-8 h-8 mb-4 text-rose-100" />
          <h3 className="text-lg font-bold mb-1">Pay Fees</h3>
          <p className="text-rose-100 text-sm">₹12,500 Due by May 25</p>
        </Link>
        
        <div className="bg-indigo-600 p-6 rounded-2xl shadow-md text-white flex flex-col justify-center">
          <Activity className="w-8 h-8 mb-4 text-indigo-100" />
          <h3 className="text-lg font-bold mb-1">View Results</h3>
          <p className="text-indigo-100 text-sm">Mid-Term marks published</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Notifications */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
            <Bell className="w-5 h-5 mr-2 text-slate-400" /> Recent Updates
          </h2>
          <div className="space-y-4">
            {[
              { title: "PTM Scheduled", desc: "Parent Teacher Meeting on Saturday at 10 AM.", time: "2 days ago" },
              { title: "Transport Fee Due", desc: "Please clear the transport fee for May.", time: "5 days ago" },
              { title: "Exam Dates Released", desc: "Final examination starts from June 10.", time: "1 week ago" }
            ].map((note, i) => (
              <div key={i} className="flex flex-col border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                <h4 className="font-bold text-slate-900 text-sm">{note.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{note.desc}</p>
                <span className="text-[10px] text-slate-400 mt-2 uppercase font-semibold">{note.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-slate-400" /> Upcoming Events
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-50 p-3 rounded-xl text-center min-w-[60px]">
                <p className="text-xs text-indigo-600 font-bold uppercase">May</p>
                <p className="text-xl font-black text-indigo-900">22</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Science Exhibition</h4>
                <p className="text-xs text-slate-500">School Auditorium • 09:00 AM</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-rose-50 p-3 rounded-xl text-center min-w-[60px]">
                <p className="text-xs text-rose-600 font-bold uppercase">May</p>
                <p className="text-xl font-black text-rose-900">25</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Fee Payment Deadline</h4>
                <p className="text-xs text-slate-500">Online Portal • 11:59 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
