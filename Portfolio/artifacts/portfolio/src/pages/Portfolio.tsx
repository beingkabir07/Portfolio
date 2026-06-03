import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Nilesh Biladi. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
