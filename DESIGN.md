---
colors:
  primary: "hsl(243 75% 59%)"
  background: "hsl(0 0% 100%)"
  surface: "hsl(0 0% 100%)"
  muted: "hsl(240 5% 96%)"
  text: "hsl(240 10% 9%)"
  text-muted: "hsl(240 4% 46%)"
  border: "hsl(240 6% 90%)"
  destructive: "hsl(0 72% 51%)"
  success: "hsl(152 60% 36%)"
  warning: "hsl(35 92% 45%)"
  info: "hsl(211 80% 50%)"

  dark:
    background: "hsl(240 10% 4%)"
    surface: "hsl(240 8% 7%)"
    muted: "hsl(240 5% 13%)"
    text: "hsl(0 0% 96%)"
    text-muted: "hsl(240 5% 62%)"
    border: "hsl(240 5% 16%)"
    primary: "hsl(239 84% 70%)"
    destructive: "hsl(0 70% 58%)"
    success: "hsl(152 55% 48%)"
    warning: "hsl(38 92% 56%)"
    info: "hsl(211 85% 62%)"

  themes:
    indigo: "hsl(243 75% 59%)"
    blue: "hsl(221 83% 53%)"
    purple: "hsl(262 83% 58%)"
    green: "hsl(152 60% 36%)"
    orange: "hsl(24 90% 50%)"

typography:
  font-families:
    sans: "'Be Vietnam Pro', ui-sans-serif, system-ui, sans-serif"

  weights:
    regular: 400
    medium: 500
    semibold: 600
    bold: 700

radii:
  sm: "calc(var(--radius) - 4px)"
  md: "calc(var(--radius) - 2px)"
  lg: "var(--radius)" # 0.625rem (10px)
  xl: "calc(var(--radius) + 4px)" # 14px
  full: "9999px"
---

# EduPlatform / Azota LMS — Minimal Design System

## Visual Identity & Intent

The interface follows a **modern minimal** aesthetic inspired by Linear, Vercel, and Notion:
- **Zero visual clutter**: No decorative gradients, heavy drop shadows, or bouncy scale animations.
- **Single-font system**: **Be Vietnam Pro** across headings, body, and controls for native Vietnamese legibility and crisp hierarchy via weight (`400` / `500` / `600`) and tracking (`tracking-tight` on headings).
- **Neutral Zinc palette + Indigo accent**: Pure, high-contrast neutral surfaces (`background`, `card`, `muted`, `border`) paired with a calm Indigo accent (`--primary: 243 75% 59%`) and semantic status tokens (`success`, `warning`, `info`, `destructive`).
- **3-tier border radius**:
  - Controls (`Button`, `Input`, `Select`, `Tabs`): `rounded-lg` (`10px`)
  - Containers (`Card`, `Modal`, panels): `rounded-xl` (`14px`)
  - Badges & avatars: `rounded-full`
- **Unified primitives**: `<Button>` and `<SaaSButton>` share a single variant system.
