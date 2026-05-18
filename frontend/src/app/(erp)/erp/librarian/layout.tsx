"use client";

import Sidebar from "@/components/erp/Sidebar";
import TopBar from "@/components/erp/TopBar";

export default function LibrarianLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar role="librarian" />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <TopBar userName="Library Admin" role="Chief Librarian" />
        <main className="p-8 flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
}
