"use client";

import { Users, FileEdit, UploadCloud, Bell } from "lucide-react";

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Teacher Dashboard</h1>
        <div className="text-sm text-slate-500">Class Teacher: 10A</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">My Class Strength</p>
            <h3 className="text-3xl font-bold text-slate-900">45</h3>
          </div>
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
            <Users className="w-7 h-7" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Pending Marks</p>
            <h3 className="text-3xl font-bold text-slate-900">2</h3>
            <p className="text-xs text-rose-500 mt-1 font-semibold">Subjects pending</p>
          </div>
          <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600">
            <FileEdit className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-indigo-600 p-6 rounded-2xl shadow-md text-white flex flex-col justify-center cursor-pointer hover:bg-indigo-700 transition-colors">
          <UploadCloud className="w-6 h-6 mb-2 text-indigo-200" />
          <h3 className="text-lg font-bold">Upload Homework</h3>
        </div>

        <div className="bg-emerald-500 p-6 rounded-2xl shadow-md text-white flex flex-col justify-center cursor-pointer hover:bg-emerald-600 transition-colors">
          <Users className="w-6 h-6 mb-2 text-emerald-100" />
          <h3 className="text-lg font-bold">Mark Attendance</h3>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900">Today's Classes</h2>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-sm">
              <th className="px-6 py-4 font-medium">Time</th>
              <th className="px-6 py-4 font-medium">Class</th>
              <th className="px-6 py-4 font-medium">Subject</th>
              <th className="px-6 py-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-slate-100">
            {[
              { time: "08:00 AM", class: "10A", subject: "Science" },
              { time: "09:00 AM", class: "9B", subject: "Science" },
              { time: "10:00 AM", class: "11 (Med)", subject: "Biology" },
              { time: "11:30 AM", class: "8C", subject: "Science" }
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-900">{row.time}</td>
                <td className="px-6 py-4 text-slate-600">{row.class}</td>
                <td className="px-6 py-4 text-slate-600">{row.subject}</td>
                <td className="px-6 py-4">
                  <button className="text-indigo-600 font-bold hover:text-indigo-800">Mark Attendance</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
