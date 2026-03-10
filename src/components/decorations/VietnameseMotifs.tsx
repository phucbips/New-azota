import { motion } from "framer-motion";

/** Flowing vine/leaf border — horizontal */
export const VineBorder = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 1200 80"
    fill="none"
    className={`w-full ${flip ? "rotate-180" : ""} ${className}`}
    preserveAspectRatio="none"
  >
    {/* Main vine stem */}
    <path
      d="M0 40 C100 20, 200 60, 300 35 S500 55, 600 40 S800 20, 900 45 S1100 25, 1200 40"
      stroke="hsl(var(--primary))"
      strokeWidth="2.5"
      strokeOpacity="0.35"
      fill="none"
    />
    {/* Secondary vine */}
    <path
      d="M0 50 C150 30, 250 65, 400 45 S600 60, 750 42 S950 30, 1200 48"
      stroke="hsl(var(--nova-banana))"
      strokeWidth="1.5"
      strokeOpacity="0.2"
      fill="none"
    />
    {/* Small leaves along the vine */}
    {[100, 250, 420, 580, 730, 900, 1050].map((x, i) => (
      <g key={i} transform={`translate(${x}, ${30 + (i % 2 === 0 ? -10 : 10)})`}>
        <path
          d={i % 2 === 0
            ? "M0 10 Q8 -5, 16 10 Q8 15, 0 10Z"
            : "M0 5 Q10 -8, 20 5 Q10 12, 0 5Z"
          }
          fill={i % 3 === 0 ? "hsl(var(--nova-banana))" : "hsl(var(--primary))"}
          fillOpacity={0.18 + (i % 3) * 0.06}
          transform={`rotate(${-30 + i * 15})`}
        />
      </g>
    ))}
    {/* Lotus buds */}
    {[180, 500, 820].map((x, i) => (
      <g key={`lotus-${i}`} transform={`translate(${x}, ${35 + (i % 2 === 0 ? 5 : -5)})`}>
        <ellipse cx="0" cy="0" rx="5" ry="9" fill="hsl(var(--nova-lotus))" fillOpacity="0.25" transform="rotate(-15)" />
        <ellipse cx="4" cy="-1" rx="5" ry="9" fill="hsl(var(--nova-lotus))" fillOpacity="0.18" transform="rotate(15)" />
        <ellipse cx="2" cy="1" rx="3" ry="5" fill="hsl(var(--secondary))" fillOpacity="0.2" transform="rotate(5)" />
      </g>
    ))}
  </svg>
);

/** Corner vine decoration */
export const CornerVine = ({ className = "", position = "top-left" }: { className?: string; position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const transforms: Record<string, string> = {
    "top-left": "",
    "top-right": "scale(-1, 1)",
    "bottom-left": "scale(1, -1)",
    "bottom-right": "scale(-1, -1)",
  };

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={`pointer-events-none ${className}`}
      style={{ transform: transforms[position] }}
    >
      {/* Curving vines */}
      <path d="M0 80 Q30 70, 50 50 Q70 30, 80 0" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeOpacity="0.3" fill="none" />
      <path d="M0 140 Q50 120, 80 80 Q110 40, 140 0" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
      <path d="M0 110 Q40 95, 65 65 Q90 35, 110 0" stroke="hsl(var(--nova-banana))" strokeWidth="1" strokeOpacity="0.15" fill="none" />
      {/* Leaves */}
      <path d="M40 60 Q50 45, 60 55 Q50 65, 40 60Z" fill="hsl(var(--primary))" fillOpacity="0.22" />
      <path d="M70 35 Q82 22, 90 35 Q80 42, 70 35Z" fill="hsl(var(--nova-banana))" fillOpacity="0.2" />
      <path d="M25 95 Q38 80, 45 95 Q35 105, 25 95Z" fill="hsl(var(--primary))" fillOpacity="0.18" />
      <path d="M90 55 Q100 42, 108 55 Q98 62, 90 55Z" fill="hsl(var(--nova-sage))" fillOpacity="0.25" />
      {/* Banana leaf shape */}
      <path d="M15 130 Q25 105, 50 110 Q30 120, 15 130Z" fill="hsl(var(--nova-banana))" fillOpacity="0.15" />
      {/* Lotus flower */}
      <g transform="translate(55, 80)">
        <ellipse cx="-4" cy="0" rx="6" ry="12" fill="hsl(var(--nova-lotus))" fillOpacity="0.18" transform="rotate(-30)" />
        <ellipse cx="0" cy="0" rx="5" ry="11" fill="hsl(var(--nova-lotus))" fillOpacity="0.15" transform="rotate(0)" />
        <ellipse cx="4" cy="-1" rx="6" ry="12" fill="hsl(var(--nova-lotus))" fillOpacity="0.18" transform="rotate(30)" />
        <circle cx="0" cy="2" r="3" fill="hsl(var(--secondary))" fillOpacity="0.3" />
      </g>
      {/* Berries / dots */}
      <circle cx="30" cy="75" r="2.5" fill="hsl(var(--secondary))" fillOpacity="0.25" />
      <circle cx="100" cy="25" r="2" fill="hsl(var(--nova-lotus))" fillOpacity="0.2" />
      <circle cx="60" cy="105" r="1.5" fill="hsl(var(--secondary))" fillOpacity="0.2" />
    </svg>
  );
};

/** Floating leaf element with animation */
export const FloatingLeaf = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 40 60"
    fill="none"
    className={`pointer-events-none ${className}`}
    animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 5, repeat: Infinity, delay }}
  >
    <path
      d="M20 5 Q35 20, 30 40 Q25 55, 20 55 Q15 55, 10 40 Q5 20, 20 5Z"
      fill="hsl(var(--primary))"
      fillOpacity="0.12"
    />
    <path d="M20 10 Q20 35, 20 50" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.2" />
    <path d="M20 20 Q27 18, 28 25" stroke="hsl(var(--primary))" strokeWidth="0.7" strokeOpacity="0.15" fill="none" />
    <path d="M20 30 Q13 28, 12 33" stroke="hsl(var(--primary))" strokeWidth="0.7" strokeOpacity="0.15" fill="none" />
  </motion.svg>
);

/** Banana leaf decoration */
export const BananaLeaf = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 120 200"
    fill="none"
    className={`pointer-events-none ${className}`}
    style={flip ? { transform: "scaleX(-1)" } : undefined}
  >
    <path
      d="M60 10 Q90 50, 85 100 Q80 150, 60 190 Q55 150, 50 100 Q45 50, 60 10Z"
      fill="hsl(var(--nova-banana))"
      fillOpacity="0.12"
    />
    <path d="M60 15 Q60 100, 60 185" stroke="hsl(var(--nova-banana))" strokeWidth="1.5" strokeOpacity="0.2" />
    {/* Leaf veins */}
    {[40, 70, 100, 130, 160].map((y, i) => (
      <path
        key={i}
        d={i % 2 === 0
          ? `M60 ${y} Q75 ${y - 8}, 80 ${y}`
          : `M60 ${y} Q45 ${y - 8}, 40 ${y}`
        }
        stroke="hsl(var(--nova-banana))"
        strokeWidth="0.8"
        strokeOpacity="0.15"
        fill="none"
      />
    ))}
  </svg>
);

/** Detailed lotus flower */
export const DetailedLotus = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const scale = size === "sm" ? 0.6 : size === "lg" ? 1.4 : 1;
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      className={`pointer-events-none ${className}`}
      style={{ transform: `scale(${scale})` }}
    >
      {/* Outer petals */}
      <ellipse cx="50" cy="35" rx="12" ry="28" fill="hsl(var(--nova-lotus))" fillOpacity="0.12" transform="rotate(-35, 50, 35)" />
      <ellipse cx="50" cy="35" rx="12" ry="28" fill="hsl(var(--nova-lotus))" fillOpacity="0.12" transform="rotate(35, 50, 35)" />
      {/* Mid petals */}
      <ellipse cx="50" cy="35" rx="10" ry="24" fill="hsl(var(--nova-lotus))" fillOpacity="0.15" transform="rotate(-18, 50, 35)" />
      <ellipse cx="50" cy="35" rx="10" ry="24" fill="hsl(var(--nova-lotus))" fillOpacity="0.15" transform="rotate(18, 50, 35)" />
      {/* Center petal */}
      <ellipse cx="50" cy="35" rx="8" ry="22" fill="hsl(var(--nova-lotus))" fillOpacity="0.18" />
      {/* Center dot */}
      <circle cx="50" cy="38" r="5" fill="hsl(var(--secondary))" fillOpacity="0.3" />
      <circle cx="50" cy="38" r="2.5" fill="hsl(var(--secondary))" fillOpacity="0.4" />
      {/* Stem */}
      <path d="M50 55 Q48 65, 50 75" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.2" />
    </svg>
  );
};

/** Cloud swirl — Vietnamese traditional */
export const CloudSwirl = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 160 60" fill="none" className={`pointer-events-none ${className}`}>
    <path
      d="M10 40 Q20 20, 40 30 Q50 10, 70 25 Q85 5, 100 25 Q120 10, 140 30 Q155 20, 150 40"
      stroke="hsl(var(--secondary))"
      strokeWidth="1.5"
      strokeOpacity="0.2"
      fill="none"
    />
    <path
      d="M25 45 Q35 30, 55 38 Q70 22, 90 35 Q110 20, 130 38"
      stroke="hsl(var(--secondary))"
      strokeWidth="1"
      strokeOpacity="0.15"
      fill="none"
    />
  </svg>
);

/** Lotus flower decoration (legacy compat) */
export const LotusDecor = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 60" fill="none" className={`pointer-events-none ${className}`}>
    {/* Petals */}
    <ellipse cx="40" cy="30" rx="10" ry="22" fill="hsl(var(--nova-lotus))" fillOpacity="0.15" transform="rotate(-25, 40, 30)" />
    <ellipse cx="40" cy="30" rx="10" ry="22" fill="hsl(var(--nova-lotus))" fillOpacity="0.12" transform="rotate(0, 40, 30)" />
    <ellipse cx="40" cy="30" rx="10" ry="22" fill="hsl(var(--nova-lotus))" fillOpacity="0.15" transform="rotate(25, 40, 30)" />
    {/* Center */}
    <circle cx="40" cy="32" r="5" fill="hsl(var(--secondary))" fillOpacity="0.25" />
    {/* Stem */}
    <path d="M40 45 Q38 55, 40 60" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.2" />
  </svg>
);

/** Section divider with Vietnamese motif */
export const MotifDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
    <svg viewBox="0 0 80 30" fill="none" className="h-6 w-16 flex-shrink-0">
      {/* Lotus-inspired diamond */}
      <path d="M40 3 L50 15 L40 27 L30 15Z" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" fill="hsl(var(--primary))" fillOpacity="0.05" />
      {/* Mini lotus petals */}
      <ellipse cx="40" cy="15" rx="4" ry="8" fill="hsl(var(--nova-lotus))" fillOpacity="0.15" transform="rotate(-20, 40, 15)" />
      <ellipse cx="40" cy="15" rx="4" ry="8" fill="hsl(var(--nova-lotus))" fillOpacity="0.15" transform="rotate(20, 40, 15)" />
      <circle cx="40" cy="15" r="3" fill="hsl(var(--secondary))" fillOpacity="0.3" />
      {/* Side lines */}
      <path d="M15 15 L28 15" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.2" />
      <path d="M52 15 L65 15" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.2" />
      {/* Tiny leaves */}
      <path d="M20 13 Q23 9, 26 13 Q23 16, 20 13Z" fill="hsl(var(--primary))" fillOpacity="0.15" />
      <path d="M54 13 Q57 9, 60 13 Q57 16, 54 13Z" fill="hsl(var(--primary))" fillOpacity="0.15" />
    </svg>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
  </div>
);

/** Tropical vine for section borders */
export const TropicalVine = ({ className = "", side = "left" }: { className?: string; side?: "left" | "right" }) => (
  <svg
    viewBox="0 0 60 400"
    fill="none"
    className={`pointer-events-none ${className}`}
    style={side === "right" ? { transform: "scaleX(-1)" } : undefined}
  >
    {/* Main curving vine */}
    <path
      d="M30 0 Q10 50, 25 100 Q40 150, 20 200 Q5 250, 25 300 Q45 350, 30 400"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      strokeOpacity="0.2"
      fill="none"
    />
    {/* Leaves along vine */}
    {[60, 140, 220, 300, 380].map((y, i) => (
      <g key={i} transform={`translate(${i % 2 === 0 ? 15 : 35}, ${y})`}>
        <path
          d={i % 2 === 0
            ? "M0 0 Q-15 -10, -5 -20 Q5 -10, 0 0Z"
            : "M0 0 Q15 -10, 5 -20 Q-5 -10, 0 0Z"
          }
          fill={i % 3 === 0 ? "hsl(var(--nova-banana))" : "hsl(var(--primary))"}
          fillOpacity="0.15"
        />
      </g>
    ))}
    {/* Lotus buds */}
    {[100, 250].map((y, i) => (
      <g key={`bud-${i}`} transform={`translate(${i === 0 ? 22 : 28}, ${y})`}>
        <ellipse cx="0" cy="0" rx="4" ry="8" fill="hsl(var(--nova-lotus))" fillOpacity="0.15" transform="rotate(-10)" />
        <ellipse cx="3" cy="0" rx="4" ry="8" fill="hsl(var(--nova-lotus))" fillOpacity="0.12" transform="rotate(10)" />
      </g>
    ))}
  </svg>
);
