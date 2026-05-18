import { Bell, Search, User } from "lucide-react";

interface TopBarProps {
  userName: string;
  role: string;
}

export default function TopBar({ userName, role }: TopBarProps) {
  return (
    <div className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-30">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search across ERP..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors text-sm"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <div className="flex items-center space-x-6 ml-4">
        <button className="relative p-2 text-slate-400 hover:text-indigo-600 transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        <div className="flex items-center space-x-3 pl-6 border-l border-slate-200">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-slate-900">{userName}</p>
            <p className="text-xs font-medium text-slate-500 uppercase">{role}</p>
          </div>
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
