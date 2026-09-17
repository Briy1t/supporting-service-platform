import { LayoutDashboard } from "lucide-react";

export default function BrandLogo({ className = "" }) {
  return (
    <a href="/" className={`flex items-center gap-2.5 group cursor-pointer ${className}`}>
      <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-all duration-300 shadow-md shadow-cyan-500/10">
        <LayoutDashboard className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="text-xl font-extrabold tracking-wider text-white font-sans group-hover:text-cyan-300 transition-colors">
        SUPPORTING
      </span>
    </a>
  );
}