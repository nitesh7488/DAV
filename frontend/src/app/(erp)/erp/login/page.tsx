"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, User, Lock, Eye, EyeOff, ShieldCheck, Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [role, setRole] = useState("STUDENT");
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium loading animation
    setTimeout(() => {
      setIsSubmitting(false);
      router.push(`/erp/${role.toLowerCase()}`);
    }, 1500);
  };

  // Dynamic colors depending on the selected role to provide a wow experience!
  const getRoleTheme = () => {
    switch (role) {
      case "ADMIN":
        return {
          glow: "shadow-indigo-500/20 border-indigo-500/30",
          button: "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30",
          text: "text-indigo-600",
          bg: "bg-indigo-50",
          accent: "indigo"
        };
      case "TEACHER":
        return {
          glow: "shadow-amber-500/20 border-amber-500/30",
          button: "bg-amber-600 hover:bg-amber-700 shadow-amber-600/30",
          text: "text-amber-600",
          bg: "bg-amber-50",
          accent: "amber"
        };
      case "STUDENT":
        return {
          glow: "shadow-purple-500/20 border-purple-500/30",
          button: "bg-purple-600 hover:bg-purple-700 shadow-purple-600/30",
          text: "text-purple-600",
          bg: "bg-purple-50",
          accent: "purple"
        };
      case "PARENT":
        return {
          glow: "shadow-emerald-500/20 border-emerald-500/30",
          button: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30",
          text: "text-emerald-600",
          bg: "bg-emerald-50",
          accent: "emerald"
        };
      case "LIBRARIAN":
        return {
          glow: "shadow-cyan-500/20 border-cyan-500/30",
          button: "bg-cyan-600 hover:bg-cyan-700 shadow-cyan-600/30",
          text: "text-cyan-600",
          bg: "bg-cyan-50",
          accent: "cyan"
        };
      default:
        return {
          glow: "shadow-indigo-500/20 border-indigo-500/30",
          button: "bg-indigo-600 hover:bg-indigo-700",
          text: "text-indigo-600",
          bg: "bg-indigo-50",
          accent: "indigo"
        };
    }
  };

  const theme = getRoleTheme();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans">
      {/* Decorative premium background glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-lg z-10">
        {/* Animated Brand Header */}
        <div className="text-center mb-8">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-4"
          >
            <BookOpen className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h2 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-extrabold text-white tracking-tight"
          >
            DAVMPS ERP
          </motion.h2>
          <p className="text-slate-400 text-sm mt-2">
            Secure multi-role central portal
          </p>
        </div>

        {/* Glassmorphic Central Login Card */}
        <motion.div
          layout
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className={`bg-white/10 backdrop-blur-2xl py-8 px-6 sm:px-10 rounded-3xl border shadow-2xl transition-all duration-500 ${theme.glow}`}
        >
          {/* Theme Indicator Badge */}
          <div className="flex justify-center mb-6">
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${theme.text} ${theme.bg} border border-current`}>
              {role} Space
            </span>
          </div>

          {/* Premium Tabbed Role Selector */}
          <div className="grid grid-cols-5 gap-1 p-1 bg-white/5 border border-white/10 rounded-2xl mb-8 relative">
            {["STUDENT", "PARENT", "TEACHER", "ADMIN", "LIBRARIAN"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`relative py-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 z-10 ${
                  role === r 
                    ? "text-white bg-white/10 border border-white/10 shadow-lg" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="userId" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                {role === "STUDENT" ? "Admission Number" : role === "TEACHER" ? "Employee ID" : role === "LIBRARIAN" ? "Librarian ID" : "Username / Email"}
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="userId"
                  type="text"
                  required
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 text-white sm:text-sm bg-white/5 border border-white/10 rounded-2xl placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all font-medium"
                  placeholder={`Enter your ${role.toLowerCase()} ID...`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Password
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-12 py-4 text-white sm:text-sm bg-white/5 border border-white/10 rounded-2xl placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all font-medium"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-300 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-slate-400 hover:text-slate-300 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="flex items-center text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded bg-white/5 border border-white/10 text-indigo-600 focus:ring-0 focus:ring-offset-0 mr-2 cursor-pointer"
                />
                Remember me
              </label>
              <a href="#" className="font-semibold text-slate-300 hover:text-white transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-4 rounded-2xl text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${theme.button}`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Authenticate Session</span>
                </>
              )}
            </button>
          </form>

          {/* Secure lock footer */}
          <div className="mt-8 border-t border-white/5 pt-6 text-center">
            <span className="inline-flex items-center text-xs text-slate-500 font-semibold tracking-wider uppercase">
              <Check className="w-4 h-4 mr-1 text-emerald-500" />
              256-Bit Encrypted Link Active
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
