import { User, Building2, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-20">
      <div className="h-1 bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-amber-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-600 grid place-items-center text-white shadow-md">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-indigo-600 font-semibold">ez's candidate portal</p>
            <h1 className="text-base font-semibold text-slate-900">A premium dashboard for your journey</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative h-9 w-9 rounded-lg border grid place-items-center text-slate-600 hover:bg-slate-50">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-rose-500 text-white text-[10px] grid place-items-center">3</span>
          </button>
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-900">Aarav Gupta</p>
            <p className="text-xs text-slate-500">Product Design • Bengaluru</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-100 to-rose-100 grid place-items-center">
            <User className="h-5 w-5 text-slate-700" />
          </div>
        </div>
      </div>
    </header>
  );
}
