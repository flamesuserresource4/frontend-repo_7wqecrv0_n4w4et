import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Study Buddy",
    desc:
      "Real-time collaborative study platform with chat, screen share, voice, and shared notes.",
    live: "#",
    code: "#",
    tags: ["WebRTC", "Socket.IO", "React", "Node"],
  },
  {
    title: "Comic-Sync Virtual Browser",
    desc:
      "Synchronized virtual browser for shared exploration, comics, and media with live chat.",
    live: "#",
    code: "#",
    tags: ["Flask", "Playwright", "Sockets"],
  },
  {
    title: "AI Chatbot",
    desc:
      "Intelligent assistant combining OpenAI and visual understanding for rich conversations.",
    live: "#",
    code: "#",
    tags: ["OpenAI", "Python", "Vision"],
  },
  {
    title: "Disease Prediction",
    desc:
      "ML web app predicting Diabetes, Heart Disease, and Parkinson’s using classical ML.",
    live: "#",
    code: "#",
    tags: ["Scikit-learn", "Flask", "Pandas"],
  },
];

export default function Projects() {
  return (
    <section className="relative bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.12),transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-violet-300 sm:text-3xl">Selected Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Interactive 3D cards with live preview and source links.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6, rotateX: 2.5, rotateY: -2.5 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/15 via-violet-500/10 to-fuchsia-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-slate-400" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500/80 to-violet-600/80 px-3.5 py-2 text-xs font-medium text-white hover:from-sky-500 hover:to-violet-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Preview
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={p.code}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-slate-200 hover:border-white/20"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
