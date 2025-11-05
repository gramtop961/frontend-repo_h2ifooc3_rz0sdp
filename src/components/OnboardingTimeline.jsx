import { CheckCircle2, Clock, FileText, Briefcase, GraduationCap, Building2, XCircle } from "lucide-react";

const stepsData = [
  { key: "registration", title: "Registration", desc: "Create your profile and verify email.", icon: UserIcon },
  { key: "application", title: "Application Submitted", desc: "Your application is under review.", icon: FileText },
  { key: "interview", title: "Interviews", desc: "Complete scheduled interviews.", icon: Briefcase },
  { key: "offer", title: "Offer", desc: "Review and respond to your offer.", icon: CheckCircle2 },
  { key: "preboarding", title: "Pre‑boarding", desc: "Complete documentation and background checks.", icon: Building2 },
  { key: "onboarding", title: "Onboarding", desc: "Attend orientation and training.", icon: GraduationCap },
  { key: "probation", title: "Probation", desc: "Track goals and feedback.", icon: Clock },
  { key: "offboarding", title: "Offboarding", desc: "Exit interview & knowledge transfer.", icon: XCircle },
];

function UserIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function OnboardingTimeline({ currentKey = "offer" }) {
  const currentIndex = stepsData.findIndex((s) => s.key === currentKey);

  return (
    <div className="w-full bg-white border rounded-xl p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-slate-900">Your Journey</h2>
        <span className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-fuchsia-50 text-indigo-700 border border-indigo-100">
          {currentIndex + 1} / {stepsData.length} stages
        </span>
      </div>
      <ol className="relative">
        {stepsData.map((step, idx) => {
          const Icon = step.icon;
          const isDone = idx < currentIndex;
          const isCurrent = idx === currentIndex;
          return (
            <li key={step.key} className="flex gap-4 pb-5 last:pb-0 relative">
              <div className="flex flex-col items-center">
                <div className={`h-8 w-8 rounded-full grid place-items-center border shadow-sm ${
                  isDone ? "bg-emerald-50 border-emerald-200 text-emerald-600" : isCurrent ? "bg-indigo-50 border-indigo-200 text-indigo-600" : "bg-white border-slate-200 text-slate-400"
                }`}>
                  {isDone ? <CheckCircle2 className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                </div>
                {idx !== stepsData.length - 1 && (
                  <div className={`w-px flex-1 ${isDone ? "bg-emerald-200" : "bg-slate-200"}`} />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">{step.title}</p>
                <p className="text-sm text-slate-500">{step.desc}</p>
                {isCurrent && (
                  <div className="mt-2 text-xs inline-flex items-center gap-2 px-2 py-1 rounded-md bg-gradient-to-r from-indigo-50 to-fuchsia-50 text-indigo-700 border border-indigo-100">
                    <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                    In progress
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
