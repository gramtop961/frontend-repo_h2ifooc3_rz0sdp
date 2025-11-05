import Header from "./components/Header";
import OnboardingTimeline from "./components/OnboardingTimeline";
import OfferLetterCard from "./components/OfferLetterCard";
import InsightsPanel from "./components/InsightsPanel";
import { Rocket } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-6">
          <div className="p-5 sm:p-6 border rounded-xl bg-white relative overflow-hidden">
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-indigo-200 to-violet-200 opacity-60" />
            <div className="flex items-start justify-between gap-4 relative">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold tracking-tight">Your personalized onboarding hub</h2>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                  Track progress from registration to offboarding, manage your offer, and learn about the company — all in one premium, distraction‑free space.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-2 rounded-md">
                <Rocket className="h-4 w-4" />
                <span className="text-sm font-medium">Next milestone: Offer</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <OnboardingTimeline currentKey="offer" />
            <OfferLetterCard />
          </div>
          <div className="lg:col-span-1">
            <InsightsPanel />
          </div>
        </section>
      </main>

      <footer className="py-6 border-t mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
          © {new Date().getFullYear()} Acme Corp. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
