import { motion } from "framer-motion";
import { ArrowRight, Terminal, Download, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileImage } from "@/components/ui/profile-image";

const PROFILE_IMAGES = [
  `${import.meta.env.BASE_URL}images/profile-photo.jpeg`,
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract dark background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left: Text Content */}
          <div className="flex flex-col items-start max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium text-primary">
                <Terminal className="w-4 h-4" />
                Available for new opportunities
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-sm font-medium text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <Briefcase className="w-3.5 h-3.5" />
                Open to Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-6"
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
                Nilesh Biladi
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl text-foreground font-semibold mb-6"
            >
              Data Science & AI/ML Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              I work on solving real-world problems using data science, machine learning, and modern AI technologies. I build end-to-end solutions, including LLM-based applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button size="lg" asChild>
                <a href="#projects" className="group">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button size="lg" variant="ghost" asChild className="border border-border hover:bg-secondary/60">
                <a
                  href={`${import.meta.env.BASE_URL}resume/Nilesh_Biladi_Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                >
                  <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right: Profile Image with Instagram-style ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center pb-8"
          >
            <ProfileImage
              images={PROFILE_IMAGES}
              alt="Nilesh Biladi"
              size={300}
              intervalMs={3500}
            />
            <p className="mt-8 text-xs text-muted-foreground/60 tracking-wider uppercase">
              Nilesh Biladi · Data Scientist
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
