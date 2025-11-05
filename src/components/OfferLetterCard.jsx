import { useState } from "react";
import { FileText, Check, X, CalendarDays } from "lucide-react";

export default function OfferLetterCard() {
  const [status, setStatus] = useState("pending"); // pending | accepted | declined

  const handleAction = (next) => {
    setStatus(next);
  };

  return (
    <div className="bg-white border rounded-xl p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white grid place-items-center shadow-sm">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Offer Letter</h3>
            <p className="text-sm text-slate-500">Senior Product Designer · San Francisco · Full‑time</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-500">Issued</p>
          <p className="text-sm font-medium text-slate-900 inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" /> 12 Oct 2025</p>
        </div>
      </div>

      <div className="mt-4 text-sm text-slate-600 leading-relaxed">
        Welcome to our team. Your compensation includes a competitive base salary, performance bonus, and comprehensive benefits. Please review the attached terms before responding.
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {status === "pending" && (
          <>
            <button onClick={() => handleAction("accepted")} className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <Check className="h-4 w-4" /> Accept Offer
            </button>
            <button onClick={() => handleAction("declined")} className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-white text-slate-700 border hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300">
              <X className="h-4 w-4" /> Decline
            </button>
            <a href="#" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium underline decoration-indigo-200 underline-offset-4">View full terms</a>
          </>
        )}

        {status === "accepted" && (
          <div className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Check className="h-4 w-4" /> Offer accepted — welcome aboard!
          </div>
        )}

        {status === "declined" && (
          <div className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-rose-50 text-rose-700 border border-rose-200">
            <X className="h-4 w-4" /> You declined the offer. Contact HR to revisit options.
          </div>
        )}
      </div>
    </div>
  );
}
