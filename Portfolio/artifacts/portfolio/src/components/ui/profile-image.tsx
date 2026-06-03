import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProfileImageProps {
  images: string[];
  alt?: string;
  size?: number;
  intervalMs?: number;
}

export function ProfileImage({
  images,
  alt = "Profile",
  size = 280,
  intervalMs = 3500,
}: ProfileImageProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  const single = images.length === 1;

  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: size, height: size }}
    >
      {/* Animated gradient ring */}
      {single ? (
        /* Continuous spinning ring for single image */
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #60a5fa, #818cf8, #a78bfa, #818cf8, #60a5fa)",
            padding: "3.5px",
            borderRadius: "50%",
            animation: "spin 3s linear infinite",
          }}
        >
          <div className="w-full h-full rounded-full bg-background" />
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </div>
      ) : (
        /* Segmented ring for multiple images */
        <svg
          viewBox="0 0 120 120"
          className="absolute inset-0 w-full h-full -rotate-90"
          style={{ filter: "drop-shadow(0 0 8px rgba(99,102,241,0.5))" }}
        >
          <defs>
            <linearGradient id="seg-grad-active" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <linearGradient id="seg-grad-seen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          {images.map((_, i) => {
            const gapDeg = 4;
            const segAngle = 360 / images.length;
            const startAngle = i * segAngle + gapDeg / 2;
            const endAngle = (i + 1) * segAngle - gapDeg / 2;
            const toRad = (d: number) => (d * Math.PI) / 180;
            const r = 54, cx = 60, cy = 60;
            const x1 = cx + r * Math.cos(toRad(startAngle));
            const y1 = cy + r * Math.sin(toRad(startAngle));
            const x2 = cx + r * Math.cos(toRad(endAngle));
            const y2 = cy + r * Math.sin(toRad(endAngle));
            const largeArc = endAngle - startAngle > 180 ? 1 : 0;
            return (
              <path
                key={i}
                d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
                fill="none"
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke={i < current ? "url(#seg-grad-seen)" : "url(#seg-grad-active)"}
                opacity={i < current ? 0.4 : 1}
              />
            );
          })}
        </svg>
      )}

      {/* Glow effect */}
      <div
        className="absolute rounded-full"
        style={{
          inset: size * 0.04,
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Photo container */}
      <div
        className="absolute rounded-full overflow-hidden border-2 border-background"
        style={{
          inset: single ? size * 0.075 : size * 0.08,
          zIndex: 1,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={alt}
            className="w-full h-full object-cover object-top"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ mixBlendMode: "normal" }}
          />
        </AnimatePresence>
      </div>

      {/* Dot indicators for multiple images */}
      {!single && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5" style={{ zIndex: 2 }}>
          {images.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-4 h-1.5 bg-primary"
                  : "w-1.5 h-1.5 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
