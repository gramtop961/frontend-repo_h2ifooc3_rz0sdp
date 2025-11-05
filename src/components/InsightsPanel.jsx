import { useState } from "react";
import { MessageSquare, HelpCircle, Shield } from "lucide-react";

const feedback = [
  {
    author: "Kiran (Hiring Manager)",
    message:
      "Excellent portfolio walkthrough. For onboarding, start with the Design System guide — it will accelerate your first sprint.",
    time: "2d ago",
  },
  {
    author: "Kiran (Hiring Manager)",
    message:
      "We’ll pair you with a buddy in week one. Drop any questions here — we watch this closely.",
    time: "3d ago",
  },
];

const faqs = [
  { q: "When does my health insurance start?", a: "Coverage begins on your first working day." },
  { q: "What laptop will I receive?", a: "MacBook Pro 14'' (or equivalent) with standard accessories." },
  { q: "Is remote work supported?", a: "We operate hybrid. Coordinate with your manager for schedules." },
];

const policies = [
  { title: "Code of Conduct", desc: "Professional standards and behavior expectations across the organization." },
  { title: "Leave Policy (India)", desc: "Annual, sick, casual, and parental leave details as per policy." },
  { title: "Security & Privacy", desc: "Data handling, device policies, and security best practices." },
];

export default function InsightsPanel() {
  const [tab, setTab] = useState("feedback");

  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <div className="px-5 sm:px-6 pt-5 sm:pt-6 border-b bg-gradient-to-r from-slate-50 to-white">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTab("feedback")}
            className={`px-3 py-2 text-sm rounded-md border ${
              tab === "feedback"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
            }`}
          >
            <MessageSquare className="h-4 w-4 inline mr-2" /> Manager Notes
          </button>
          <button
            onClick={() => setTab("faqs")}
            className={`px-3 py-2 text-sm rounded-md border ${
              tab === "faqs"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
            }`}
          >
            <HelpCircle className="h-4 w-4 inline mr-2" /> FAQs
          </button>
          <button
            onClick={() => setTab("policies")}
            className={`px-3 py-2 text-sm rounded-md border ${
              tab === "policies"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
            }`}
          >
            <Shield className="h-4 w-4 inline mr-2" /> Policies
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {tab === "feedback" && (
          <ul className="space-y-4">
            {feedback.map((f, idx) => (
              <li key={idx} className="p-4 border rounded-lg bg-gradient-to-br from-indigo-50/60 to-fuchsia-50/60">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-slate-900">{f.author}</p>
                  <span className="text-xs text-slate-500">{f.time}</span>
                </div>
                <p className="text-sm text-slate-700">{f.message}</p>
              </li>
            ))}
          </ul>
        )}

        {tab === "faqs" && (
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <details key={idx} className="group border rounded-lg p-4 bg-white">
                <summary className="cursor-pointer list-none flex items-center justify-between text-sm font-medium text-slate-900">
                  {item.q}
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        )}

        {tab === "policies" && (
          <ul className="space-y-3">
            {policies.map((p, idx) => (
              <li key={idx} className="p-4 border rounded-lg hover:bg-slate-50">
                <p className="text-sm font-medium text-slate-900">{p.title}</p>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
