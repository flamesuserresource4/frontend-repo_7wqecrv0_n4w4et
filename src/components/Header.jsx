import { Mail, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useCallback } from "react";

export default function Header() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [8, -8]);
  const rotateY = useTransform(x, [-300, 300], [-8, 8]);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  }, [x, y]);

  return (
    <header
      className="relative isolate min-h-[90vh] w-full overflow-hidden bg-slate-950"
      onMouseMove={handleMouseMove}
    >
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient aura and grid - non-interactive overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_60%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,6,23,0.4),rgba(2,6,23,0.7))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-28 sm:pt-36">
        <motion.div
          style={{ rotateX, rotateY }}
          className="w-full max-w-3xl rounded-3xl bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_10px_80px_-15px_rgba(56,189,248,0.35)]"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
            Futuristic Portfolio • AI, ML & Creativity
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Hi, I’m
            <span className="mx-2 bg-gradient-to-r from-sky-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Jakkula John Samuel Levith
            </span>
            — AI & ML Engineer in the Making
          </h1>
          <p className="mt-4 text-slate-300">
            I build intelligent systems, real-time web apps, and creative AI solutions. Currently pursuing
            a B.Tech in Artificial Intelligence & Machine Learning from Malla Reddy University, Hyderabad.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-600/30 transition hover:from-sky-400 hover:to-violet-500"
            >
              Explore My Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <MapPin className="h-4 w-4 text-sky-300" />
              Hyderabad, India
            </span>
          </div>

          {/* About blurb + contacts */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-relaxed text-slate-300">
              Passionate about applied research and product engineering. I love turning ideas into
              human‑centric AI experiences using Python, ML/DL, and modern web tech.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:jhonsamliv@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 hover:border-sky-400/30 hover:bg-slate-900/80 transition"
              >
                <Mail className="h-4 w-4 text-sky-300" />
                jhonsamliv@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/jakkula-john-samuel-levith-45241834b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 hover:border-violet-400/30 hover:bg-slate-900/80 transition"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 hover:border-fuchsia-400/30 hover:bg-slate-900/80 transition"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
