import { User, Mail, MapPin, Linkedin, Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-sky-400">
              <Rocket className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-semibold tracking-wide uppercase">Portfolio Spotlight</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Jakkula John Samuel Levith
            </h1>
            <p className="mt-3 max-w-3xl text-base text-slate-300 sm:text-lg">
              Computer Science student specializing in Artificial Intelligence & Machine Learning
            </p>
            <div className="mt-6 grid gap-3 text-slate-300 sm:flex sm:flex-wrap">
              <a
                href="mailto:jhonsamliv@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm hover:border-slate-600 hover:bg-slate-800 transition"
              >
                <Mail className="h-4 w-4" />
                jhonsamliv@gmail.com
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm">
                <MapPin className="h-4 w-4" />
                Hyderabad, Telangana, India
              </span>
              <a
                href="https://www.linkedin.com/in/jakkula-john-samuel-levith-45241834b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm hover:border-slate-600 hover:bg-slate-800 transition"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.15),transparent_40%)]" />
    </header>
  );
}
