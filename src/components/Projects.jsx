import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Study Buddy (Study Hub)",
    desc:
      "A real-time collaborative platform for students with chat, file sharing, screen sharing, and voice chat.",
  },
  {
    title: "Comic-Sync Virtual Browser",
    desc:
      "A synchronized virtual browser powered by Flask, Socket.IO, and Playwright for group web exploration, comic reading, and video watching with live chat.",
  },
  {
    title: "AI Chatbot Powered by OpenAI",
    desc:
      "A Python-based chatbot that combines OpenAI with Imagga to enable intelligent, conversational interactions with visual understanding.",
  },
  {
    title: "Multiple Disease Prediction System",
    desc:
      "A machine learning web app built with Flask to predict Diabetes, Heart Disease, and Parkinson’s using classical ML techniques.",
  },
];

export default function Projects() {
  return (
    <section className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-end justify-between">
          <h3 className="text-xl font-semibold tracking-tight text-violet-400">Selected Projects</h3>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-lg border border-slate-800 bg-slate-950/60 p-5 shadow-sm transition hover:border-slate-700 hover:bg-slate-950"
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-slate-300" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
