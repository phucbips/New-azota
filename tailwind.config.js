/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '24px', // 24px horizontal padding based on Genesis specs
      screens: {
        '2xl': '1280px', // Container max width: 1280px
      },
    },
    extend: {
      fontFamily: {
        display: ['"General Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'], // Fallback map
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          hover: 'hsl(var(--primary-hover))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
        neutral: 'hsl(var(--neutral))',
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '6px',
        xs: '4px',
        full: '9999px',
      },
      spacing: {
        '0': '0',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
      fontSize: {
        'xs': ['11px', { lineHeight: '1rem' }], // Overline
        'sm': ['12px', { lineHeight: '1.25rem' }], // Caption
        'base': ['13px', { lineHeight: '1.5rem' }], // Small
        'lg': ['14px', { lineHeight: '1.5rem' }], // Default/Inputs
        'xl': ['15px', { lineHeight: '1.5rem' }], // Body
        '2xl': ['24px', { lineHeight: '2rem' }], // Subhead
        '3xl': ['32px', { lineHeight: '2.5rem' }], // Section heading
        '4xl': ['60px', { lineHeight: '1.1' }], // Headline
        '5xl': ['72px', { lineHeight: '1.1' }], // Display
      },
      boxShadow: {
        'card-hover': '0 8px 30px rgba(0,0,0,0.08)',
        'btn-hover': '0 4px 12px rgba(99,102,241,0.35)',
        'focus-ring': '0 0 0 3px rgba(99,102,241,0.12)',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.03em',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'float': {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'zoom-in': {
          from: { opacity: 0, transform: 'scale(0.95)' },
          to: { opacity: 1, transform: 'scale(1)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.2s ease-out',
        'zoom-in': 'zoom-in 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
