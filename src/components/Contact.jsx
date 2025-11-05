import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks! Your message has been noted.");
  };

  return (
    <section className="relative bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.12),transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-sky-300 sm:text-3xl">Let’s build something intelligent</h2>
          <p className="mt-3 text-slate-300">Reach out for collaborations, internships, or research projects.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Floating links */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:jhonsamliv@gmail.com"
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl ring-1 ring-white/10 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 ring-1 ring-white/10">
                  <Mail className="h-5 w-5 text-sky-200" />
                </span>
                <div>
                  <p className="text-sm text-slate-300">Email</p>
                  <p className="font-medium">jhonsamliv@gmail.com</p>
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/jakkula-john-samuel-levith-45241834b/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl ring-1 ring-white/10 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 ring-1 ring-white/10">
                  <Linkedin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-slate-300">LinkedIn</p>
                  <p className="font-medium">/in/jakkula-john-samuel-levith</p>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl ring-1 ring-white/10 transition hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 ring-1 ring-white/10">
                  <Github className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-slate-300">GitHub</p>
                  <p className="font-medium">github.com</p>
                </div>
              </div>
            </a>
          </div>

          {/* 3D Contact form */}
          <form
            onSubmit={handleSubmit}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_20px_80px_-15px_rgba(99,102,241,0.35)]"
          >
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-500/10 via-violet-500/10 to-fuchsia-500/10" />
            <div className="relative grid gap-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-400/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-violet-400/40"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Message</label>
                <textarea
                  required
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-fuchsia-400/40"
                  placeholder="Tell me about your idea..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:from-sky-400 hover:to-violet-500"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              {status && <p className="text-center text-sm text-emerald-300">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
