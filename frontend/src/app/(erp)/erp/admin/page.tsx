"use client";

import { motion } from "framer-motion";
import { Users, UserCheck, Wallet, BookOpen, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Students", value: "854", icon: Users, color: "bg-blue-500", trend: "+12%" },
    { title: "Total Teachers", value: "64", icon: UserCheck, color: "bg-emerald-500", trend: "+2%" },
    { title: "Revenue (This Month)", value: "₹12.5L", icon: Wallet, color: "bg-indigo-500", trend: "+8%" },
    { title: "Active Courses", value: "42", icon: BookOpen, color: "bg-purple-500", trend: "0%" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
        <div className="text-sm text-slate-500">Last updated: Today at 09:41 AM</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                <p className="text-xs font-semibold text-emerald-500 mt-2 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.trend} from last month
                </p>
              </div>
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-${stat.color}/30`}>
                <Icon className="w-7 h-7" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Admissions */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 lg:col-span-2">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900">Recent Admission Applications</h2>
            <button className="text-sm text-indigo-600 font-semibold hover:text-indigo-700">View All</button>
          </div>
          <div className="p-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm">
                  <th className="px-6 py-4 font-medium">Applicant Name</th>
                  <th className="px-6 py-4 font-medium">Class</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                {[
                  { name: "Rahul Sharma", class: "Class 1", date: "May 18, 2026", status: "Pending", color: "bg-amber-100 text-amber-700" },
                  { name: "Priya Singh", class: "Class 5", date: "May 17, 2026", status: "Approved", color: "bg-emerald-100 text-emerald-700" },
                  { name: "Amit Kumar", class: "Class 9", date: "May 16, 2026", status: "Reviewed", color: "bg-blue-100 text-blue-700" },
                  { name: "Sneha Gupta", class: "Class 11", date: "May 15, 2026", status: "Rejected", color: "bg-red-100 text-red-700" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">{row.name}</td>
                    <td className="px-6 py-4 text-slate-600">{row.class}</td>
                    <td className="px-6 py-4 text-slate-500">{row.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.color}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {[
              { title: "Fee Payment Received", desc: "₹45,000 from John Doe (10A)", time: "10 mins ago", color: "bg-green-500" },
              { title: "New Notice Published", desc: "Exam schedule uploaded by Principal", time: "1 hour ago", color: "bg-blue-500" },
              { title: "Staff Leave Request", desc: "Mr. Sharma requested sick leave", time: "2 hours ago", color: "bg-amber-500" },
              { title: "Database Backup", desc: "Automated backup completed successfully", time: "5 hours ago", color: "bg-indigo-500" },
            ].map((activity, i) => (
              <div key={i} className="flex relative">
                {i !== 3 && <div className="absolute top-8 left-2.5 w-0.5 h-10 bg-slate-200"></div>}
                <div className={`w-5 h-5 rounded-full ${activity.color} ring-4 ring-white flex-shrink-0 mt-1 z-10`}></div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-slate-900">{activity.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 mb-1">{activity.desc}</p>
                  <p className="text-xs text-slate-400 font-medium">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
