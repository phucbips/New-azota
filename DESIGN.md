---
colors:
  primary: "#185ee0"
  secondary: "#f5a623"
  background: "#f4f5f0"
  surface: "#f8f9f6"
  text: "#1b3127"
  text-muted: "#677e71"
  border: "#d3d8cd"
  destructive: "#f03e3e"

  dark:
    background: "#101914"
    surface: "#141e18"
    text: "#e8edea"
    text-muted: "#8e9994"
    border: "#27312c"
    primary: "#4382f6"
    secondary: "#c88515"
    destructive: "#7e1d1d"

  themes:
    blue: "#185ee0"
    purple: "#7c2be9"
    green: "#16a34a"
    orange: "#fb923c"

typography:
  font-families:
    display: "'Playfair Display', serif"
    body: "'Be Vietnam Pro', sans-serif"

  weights:
    regular: 400
    medium: 500
    semibold: 600
    bold: 700
    extrabold: 800

radii:
  small: "0.5rem"
  medium: "0.625rem"
  large: "0.75rem"
  xl: "1rem"
  2xl: "1.5rem"
  full: "9999px"

spacing:
  container-padding: "2rem"

motion:
  float: "float 3s ease-in-out infinite"
  fade-in: "fade-in 0.2s ease-out"
  zoom-in: "zoom-in 0.2s ease-out"
  accordion-down: "accordion-down 0.2s ease-out"
  accordion-up: "accordion-up 0.2s ease-out"

---

# Taste of Vietnam Learning Management System

## Visual Identity & Intent

The Taste of Vietnam Learning Management System pairs traditional elegance with modern usability. It embraces a sophisticated contrast between its typographic choices to communicate both authority (for educational content) and approachability (for user interfaces).

### Typography
The application relies on a dual-font strategy:
- **Playfair Display**: Used exclusively for headings, titles, and display elements. Its high-contrast serif nature lends a premium, editorial, and slightly traditional feel, reflecting the depth and richness of the educational content.
- **Be Vietnam Pro**: Employed for all body text, UI components, inputs, and functional text. As a clean, highly legible sans-serif, it ensures maximum readability across devices and gives the interface a crisp, modern finish.

### Color & Theming
The color system is built around a subdued, almost earthy neutral palette that allows the content to stand out.
- **Light Mode**: Features warm, slightly tinted off-whites (`#f4f5f0`) paired with deep, forest-green blacks for text (`#1b3127`), creating a comfortable, low-glare reading environment.
- **Dark Mode**: Shifts to rich, dark pine tones (`#101914`) rather than harsh pure blacks, maintaining the natural feel.

A defining feature of the design system is its **pluggable primary themes**. While Blue (`#185ee0`) is the default accent, the system gracefully supports Purple, Green, and Orange variants. These primary colors are used sparingly—primarily for call-to-action buttons, active states, and focus rings—drawing the eye only when necessary.

### Shape & Elevation
The UI favors friendly, approachable shapes. Heavy use of rounded corners (radii up to `1.5rem` / `2xl` for large cards and containers) softens the interface. Cards and popovers sit slightly above the background using subtle borders (`#d3d8cd`) rather than heavy drop shadows, resulting in a flat but structured visual hierarchy.

### Motion
Motion is used purposefully to enhance interactivity without overwhelming the user:
- **Floating**: A slow, infinite 3-second float animation is applied to specific elements to add a touch of liveliness.
- **Micro-interactions**: Crisp `0.2s ease-out` animations handle fade-ins and zoom-ins for modals, menus, and accordion expansions, ensuring the system feels snappy and responsive.

### Overall Vibe
The design is intended to feel like an interactive textbook—authoritative yet accessible, structured yet inviting. The blending of serif headings with modern sans-serif body text against warm neutral backgrounds creates an environment optimized for focus and learning.
