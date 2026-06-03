import { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "dark" | "light" | "system";

interface ThemeContextValue {
  mode: ThemeMode;
  resolvedTheme: "dark" | "light";
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: "dark",
  resolvedTheme: "dark",
  setMode: () => {},
});

function getSystemTheme(): "dark" | "light" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(resolved: "dark" | "light") {
  const root = document.documentElement;
  if (resolved === "light") {
    root.classList.add("light");
    root.classList.remove("dark");
  } else {
    root.classList.add("dark");
    root.classList.remove("light");
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    return (localStorage.getItem("theme-mode") as ThemeMode) ?? "dark";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">(() => {
    const stored = (localStorage.getItem("theme-mode") as ThemeMode) ?? "dark";
    return stored === "system" ? getSystemTheme() : stored;
  });

  useEffect(() => {
    const resolved = mode === "system" ? getSystemTheme() : mode;
    setResolvedTheme(resolved);
    applyTheme(resolved);
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  useEffect(() => {
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const resolved = e.matches ? "dark" : "light";
      setResolvedTheme(resolved);
      applyTheme(resolved);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode]);

  const setMode = (m: ThemeMode) => setModeState(m);

  return (
    <ThemeContext.Provider value={{ mode, resolvedTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
