import Header from "./components/Header";
import OnboardingTimeline from "./components/OnboardingTimeline";
import OfferLetterCard from "./components/OfferLetterCard";
import InsightsPanel from "./components/InsightsPanel";
import { Rocket } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(40%_50%_at_100%_0%,rgba(99,102,241,0.10),transparent_60%),radial-gradient(30%_40%_at_0%_0%,rgba(217,70,239,0.10),transparent_60%)] from-slate-50 to-white text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-8 space-y-6">
          <div className="p-5 sm:p-6 border rounded-xl bg-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-200 to-fuchsia-200 opacity-60" />
            <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-200 to-rose-200 opacity-60" />
            <div className="relative">
              <h2 className="text-xl font-semibold tracking-tight">Welcome, Aarav — here’s your dashboard</h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Track progress from registration to offboarding, manage your offer, and learn about the company — all in one premium, distraction‑free space.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-2 rounded-md">
                <Rocket className="h-4 w-4" />
                <span className="text-sm font-medium">Next milestone: Pre‑boarding</span>
              </div>
            </div>
          </div>

          <OnboardingTimeline currentKey="offer" />
          <OfferLetterCard />
        </section>

        <aside className="lg:col-span-4">
          <InsightsPanel />
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border bg-gradient-to-br from-emerald-50 to-teal-50">
              <p className="text-xs text-emerald-700">Buddy</p>
              <p className="text-sm font-semibold text-emerald-900">Neha Iyer</p>
            </div>
            <div className="p-4 rounded-xl border bg-gradient-to-br from-rose-50 to-amber-50">
              <p className="text-xs text-rose-700">HR Partner</p>
              <p className="text-sm font-semibold text-rose-900">Rahul Verma</p>
            </div>
          </div>
        </aside>
      </main>

      <footer className="py-6 border-t mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
          © {new Date().getFullYear()} EZ Technologies Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
