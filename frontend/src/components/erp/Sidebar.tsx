import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BookOpen, Home, Users, CreditCard, Calendar, Bell, Settings, LogOut, FileText, 
  Book, Truck, Award, DollarSign, Archive, BarChart3, Globe, ShieldAlert, Clock
} from "lucide-react";

interface SidebarProps {
  role: "admin" | "teacher" | "student" | "parent" | "librarian";
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const getLinks = () => {
    switch (role) {
      case "admin":
        return [
          { name: "Dashboard", href: "/erp/admin", icon: Home },
          { name: "Students", href: "/erp/admin/students", icon: Users },
          { name: "Parents Linkage", href: "/erp/admin/parents", icon: Users },
          { name: "Staff & Teachers", href: "/erp/admin/staff", icon: Users },
          { name: "Fees & Finance", href: "/erp/admin/fees", icon: CreditCard },
          { name: "Admissions", href: "/erp/admin/admissions", icon: FileText },
          { name: "Academics Setup", href: "/erp/admin/academics", icon: Book },
          { name: "Examinations", href: "/erp/admin/exams", icon: Award },
          { name: "Circulars & Notices", href: "/erp/admin/notices", icon: Bell },
          { name: "Transport System", href: "/erp/admin/transport", icon: Truck },
          { name: "Library Hub", href: "/erp/admin/library", icon: BookOpen },
          { name: "Stock & Inventory", href: "/erp/admin/inventory", icon: Archive },
          { name: "General Ledger", href: "/erp/admin/accounts", icon: DollarSign },
          { name: "Reports & Analytics", href: "/erp/admin/reports", icon: BarChart3 },
          { name: "Website Hub", href: "/erp/admin/website", icon: Globe },
          { name: "System Settings", href: "/erp/admin/settings", icon: Settings },
        ];
      case "student":
        return [
          { name: "Dashboard", href: "/erp/student", icon: Home },
          { name: "My Profile", href: "/erp/student/profile", icon: Users },
          { name: "Attendance Tracker", href: "/erp/student/attendance", icon: Calendar },
          { name: "Homework & Notes", href: "/erp/student/academics", icon: Book },
          { name: "Class Time Table", href: "/erp/student/timetable", icon: Clock },
          { name: "Results & Admit", href: "/erp/student/results", icon: Award },
          { name: "Fees & Payment", href: "/erp/student/fees", icon: CreditCard },
          { name: "Circular Notices", href: "/erp/student/notices", icon: Bell },
          { name: "Transport Details", href: "/erp/student/transport", icon: Truck },
          { name: "Library Cards", href: "/erp/student/library", icon: BookOpen },
          { name: "Downloads Hub", href: "/erp/student/downloads", icon: Archive },
        ];
      case "parent":
        return [
          { name: "Dashboard", href: "/erp/parent", icon: Home },
          { name: "My Profile", href: "/erp/parent/profile", icon: Users },
          { name: "Child Profile", href: "/erp/parent/child", icon: Users },
          { name: "Child Attendance", href: "/erp/parent/attendance", icon: Calendar },
          { name: "Homework & Notes", href: "/erp/parent/academics", icon: Book },
          { name: "Class Time Table", href: "/erp/parent/timetable", icon: Clock },
          { name: "Results & Admit", href: "/erp/parent/results", icon: Award },
          { name: "Fees & Payment", href: "/erp/parent/fees", icon: CreditCard },
          { name: "Circular Notices", href: "/erp/parent/notices", icon: Bell },
          { name: "Transport Details", href: "/erp/parent/transport", icon: Truck },
          { name: "Library Cards", href: "/erp/parent/library", icon: BookOpen },
          { name: "Downloads Hub", href: "/erp/parent/downloads", icon: Archive },
        ];
      case "teacher":
        return [
          { name: "Dashboard", href: "/erp/teacher", icon: Home },
          { name: "My Classes", href: "/erp/teacher/classes", icon: Users },
          { name: "Mark Attendance", href: "/erp/teacher/attendance", icon: Calendar },
          { name: "Academics Upload", href: "/erp/teacher/academics", icon: Book },
          { name: "Class Schedule", href: "/erp/teacher/timetable", icon: Clock },
          { name: "Marks Entry", href: "/erp/teacher/marks", icon: FileText },
          { name: "Portal Notices", href: "/erp/teacher/notices", icon: Bell },
          { name: "Leave Desk", href: "/erp/teacher/leave", icon: Calendar },
          { name: "My Profile", href: "/erp/teacher/profile", icon: Users },
          { name: "Payroll Slips", href: "/erp/teacher/payroll", icon: CreditCard },
        ];
      case "librarian":
        return [
          { name: "Library Dashboard", href: "/erp/librarian", icon: Home },
          { name: "Library Hub", href: "/erp/librarian/library", icon: BookOpen },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  return (
    <div className="w-64 bg-indigo-950 text-white h-screen flex flex-col fixed left-0 top-0 overflow-y-auto border-r border-indigo-900 shadow-xl scrollbar-thin scrollbar-thumb-indigo-800">
      <div className="p-6 flex items-center space-x-3 border-b border-indigo-900 bg-indigo-950 sticky top-0 z-10">
        <div className="bg-white/10 p-2 rounded-xl">
          <BookOpen className="w-6 h-6 text-yellow-500 animate-pulse" />
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-yellow-500 font-serif">DAVMPS ERP</h2>
          <p className="text-[10px] text-slate-350 uppercase tracking-widest font-black">{role} Command</p>
        </div>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1">
        {links.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-indigo-950 font-bold shadow-md shadow-yellow-500/10" 
                  : "text-indigo-150 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${
                isActive ? "text-indigo-950" : "text-yellow-500/80"
              }`} />
              <span className="font-semibold text-xs tracking-wide">{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-indigo-900 bg-indigo-950 sticky bottom-0 z-10">
        <Link
          href="/erp/login"
          className="flex items-center space-x-3 px-4 py-3 rounded-xl text-indigo-200 hover:bg-rose-600 hover:text-white transition-all duration-200 font-bold"
        >
          <LogOut className="w-5 h-5 text-rose-500" />
          <span className="font-semibold text-xs tracking-wider uppercase">Logout</span>
        </Link>
      </div>
    </div>
  );
}
