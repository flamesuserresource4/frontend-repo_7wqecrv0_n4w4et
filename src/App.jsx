import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Header />
      <main className="relative z-0">
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <footer className="border-t border-slate-800/60 bg-slate-950 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Jakkula John Samuel Levith. All rights reserved.
      </footer>
    </div>
  );
}
