import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <About />
      <Skills />
      <Projects />
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Jakkula John Samuel Levith. All rights reserved.
      </footer>
    </div>
  );
}
