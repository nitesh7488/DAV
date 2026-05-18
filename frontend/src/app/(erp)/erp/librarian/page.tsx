"use client";

import { motion } from "framer-motion";
import { Book, Users, Calendar, TrendingUp } from "lucide-react";

export default function LibrarianDashboard() {
  const stats = [
    { title: "Total Books", value: "3,240", icon: Book, color: "bg-cyan-500", trend: "+45 this month" },
    { title: "Active Issues", value: "128", icon: Users, color: "bg-emerald-500", trend: "12 due today" },
    { title: "Overdue Books", value: "14", icon: Calendar, color: "bg-rose-500", trend: "Requires action" },
    { title: "New Arrivals", value: "42", icon: TrendingUp, color: "bg-indigo-500", trend: "Last 30 days" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Librarian Dashboard</h1>
        <div className="text-sm text-slate-500">Welcome back, Chief Librarian</div>
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
                <p className="text-xs font-semibold text-slate-500 mt-2">
                  {stat.trend}
                </p>
              </div>
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-${stat.color}/30`}>
                <Icon className="w-7 h-7" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
        <Book className="w-16 h-16 text-cyan-200 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-slate-900 mb-2">Manage Library Operations</h2>
        <p className="text-slate-500 max-w-lg mx-auto mb-6">
          Access the Library Hub to add new books to the inventory, issue books to students via their Student ID, and manage returns and overdue fines.
        </p>
        <a href="/erp/librarian/library" className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-600/30">
          Go to Library Hub
        </a>
      </div>
    </div>
  );
}
