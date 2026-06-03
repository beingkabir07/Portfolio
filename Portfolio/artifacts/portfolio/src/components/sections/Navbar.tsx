import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Monitor, Check } from "lucide-react";
import { useTheme, ThemeMode } from "@/hooks/use-theme";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const THEME_OPTIONS: { value: ThemeMode; label: string; icon: React.ReactNode; desc: string }[] = [
  {
    value: "light",
    label: "Light",
    icon: <Sun className="w-4 h-4" />,
    desc: "Bright white background",
  },
  {
    value: "dark",
    label: "Dark",
    icon: <Moon className="w-4 h-4" />,
    desc: "Easy on the eyes",
  },
  {
    value: "system",
    label: "System",
    icon: <Monitor className="w-4 h-4" />,
    desc: "Follows your device",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const { mode, resolvedTheme, setMode } = useTheme();
  const themeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target as Node)) {
        setThemeMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const CurrentIcon = resolvedTheme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-xl tracking-tight flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
            N
          </span>
          <span>Nilesh.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}

          {/* Theme Picker */}
          <div className="relative ml-2" ref={themeMenuRef}>
            <button
              onClick={() => setThemeMenuOpen((o) => !o)}
              aria-label="Theme options"
              className="w-9 h-9 rounded-full border border-border bg-secondary/40 hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={resolvedTheme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {CurrentIcon}
                </motion.div>
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {themeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-xl shadow-black/20 overflow-hidden"
                >
                  <div className="p-1.5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-3 py-1.5">
                      Appearance
                    </p>
                    {THEME_OPTIONS.map((opt) => {
                      const isActive = mode === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => {
                            setMode(opt.value);
                            setThemeMenuOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-foreground hover:bg-secondary/60"
                          }`}
                        >
                          <span className={`flex-shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                            {opt.icon}
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="block text-sm font-medium">{opt.label}</span>
                            <span className="block text-xs text-muted-foreground">{opt.desc}</span>
                          </span>
                          {isActive && <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <div className="relative" ref={undefined}>
            <button
              onClick={() => setThemeMenuOpen((o) => !o)}
              aria-label="Theme options"
              className="w-9 h-9 rounded-full border border-border bg-secondary/40 flex items-center justify-center text-muted-foreground"
            >
              {CurrentIcon}
            </button>
            <AnimatePresence>
              {themeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-xl overflow-hidden z-50"
                >
                  <div className="p-1.5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-3 py-1.5">
                      Appearance
                    </p>
                    {THEME_OPTIONS.map((opt) => {
                      const isActive = mode === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => {
                            setMode(opt.value);
                            setThemeMenuOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                            isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary/60"
                          }`}
                        >
                          <span className={`flex-shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                            {opt.icon}
                          </span>
                          <span className="flex-1">
                            <span className="block text-sm font-medium">{opt.label}</span>
                            <span className="block text-xs text-muted-foreground">{opt.desc}</span>
                          </span>
                          {isActive && <Check className="w-3.5 h-3.5 text-primary" />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
