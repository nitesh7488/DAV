import Link from "next/link";
import { BookOpen, MapPin, Phone, Mail, Globe, Hash } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-white">
              <div className="bg-indigo-600 p-2 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">DAVMPS</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              Empowering students with quality education, modern infrastructure, and a vision for a brighter tomorrow at D A V Moti Public School.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors"><Hash className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-indigo-400 transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-indigo-400 transition-colors">Admissions</Link></li>
              <li><Link href="/notices" className="hover:text-indigo-400 transition-colors">Notice Board</Link></li>
              <li><Link href="/gallery" className="hover:text-indigo-400 transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">ERP Portals</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/erp/student" className="hover:text-indigo-400 transition-colors">Student Portal</Link></li>
              <li><Link href="/erp/parent" className="hover:text-indigo-400 transition-colors">Parent Portal</Link></li>
              <li><Link href="/erp/teacher" className="hover:text-indigo-400 transition-colors">Teacher Portal</Link></li>
              <li><Link href="/erp/admin" className="hover:text-indigo-400 transition-colors">Admin Dashboard</Link></li>
              <li><Link href="/careers" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>Mundro, Bagoder, Giridih, Jharkhand - 825322</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>+91 94313 82532</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>info@davmps.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} D A V Moti Public School Mundro Bagoder. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
