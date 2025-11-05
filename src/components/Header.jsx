import { User, Building2 } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 grid place-items-center text-white shadow-md">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-slate-500 leading-tight">ERP Candidate Portal</p>
            <h1 className="text-base font-semibold text-slate-900">Welcome to Your Journey</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-900">Alex Morgan</p>
            <p className="text-xs text-slate-500">Product Design</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 grid place-items-center">
            <User className="h-5 w-5 text-slate-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
