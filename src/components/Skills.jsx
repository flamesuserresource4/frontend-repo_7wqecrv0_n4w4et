const skills = [
  "Python",
  "MySQL",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "RAG",
  "Prompt Engineering",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "AWS Cloud Foundations",
];

const certs = [
  "Building LLM Applications using Prompt Engineering – NVIDIA",
  "Prompt Design in Vertex AI – Google Cloud",
  "Generative AI with Diffusion Models – NVIDIA",
  "Introduction to Generative AI – AWS Educate",
];

export default function Skills() {
  return (
    <section className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-sky-400">Technical Toolkit</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-sm text-slate-200 shadow-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-emerald-400">Certifications</h3>
            <ul className="mt-4 space-y-2 text-slate-200">
              {certs.map((c) => (
                <li
                  key={c}
                  className="rounded-md border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
