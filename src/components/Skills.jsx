import { Cpu, Brain, Database, Bot, Code } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: Code },
  { name: "Machine Learning", icon: Brain },
  { name: "Deep Learning", icon: Brain },
  { name: "Generative AI", icon: Bot },
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Code },
  { name: "MySQL", icon: Database },
];

const certs = [
  { org: "NVIDIA", title: "Building LLM Apps with Prompt Engineering" },
  { org: "Google Cloud", title: "Prompt Design in Vertex AI" },
  { org: "NVIDIA", title: "Generative AI with Diffusion Models" },
  { org: "AWS Educate", title: "Introduction to Generative AI" },
];

export default function Skills() {
  return (
    <section className="relative bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.12),transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-sky-300 sm:text-3xl">Skills & Certifications</h2>
          <p className="mt-3 text-slate-300">Holographic chips and interactive badges themed for AI.</p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl ring-1 ring-white/10"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/15 via-violet-500/10 to-fuchsia-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-sky-200" />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Core Skill</p>
                  <h3 className="text-lg font-medium text-slate-100">{name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {certs.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="[perspective:1000px]"
            >
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="relative h-36 w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] [transform-style:preserve-3d] backdrop-blur-xl"
              >
                {/* front */}
                <div className="absolute inset-0 grid place-items-center [backface-visibility:hidden]">
                  <div>
                    <p className="text-sm text-slate-300">Certification</p>
                    <h4 className="mt-1 text-lg font-semibold text-sky-200">{c.org}</h4>
                    <p className="mt-1 px-6 text-sm text-slate-300">{c.title}</p>
                  </div>
                </div>
                {/* back */}
                <div className="absolute inset-0 grid place-items-center rounded-2xl bg-gradient-to-br from-sky-600/20 to-violet-600/20 ring-1 ring-white/10 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="px-6 text-sm text-slate-200">
                    Earned by completing hands-on labs and assessments in modern GenAI tooling.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
