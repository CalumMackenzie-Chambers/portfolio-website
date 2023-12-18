/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/index.html",
      "./src/js/**/*.js",
    ],
    theme: {
      future: {
        hoverOnlyWhenSupported: true,
      },
      colors: {
        white: "hsla(0deg, 0%, 100%, <alpha-value>)",
        black: "hsla(0deg, 0%, 0%, <alpha-value>)",
        transparent: "transparent",
        current: "currentColor",
        base: {
          background: "hsla(var(--background), <alpha-value>)",
          foreground: "hsla(var(--foreground), <alpha-value>)",
        },
        muted: {
          background: "hsla(var(--muted-background), <alpha-value>)",
          foreground: "hsla(var(--muted-foreground), <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsla(var(--primary), <alpha-value>)",
          hover: "hsla(var(--primary-hover), <alpha-value>)",
          muted: "hsla(var(--primary-muted), <alpha-value>)",
          foreground: "hsla(var(--primary-foreground), <alpha-value>)",
        },
        danger: {
          DEFAULT: "hsla(var(--danger), <alpha-value>)",
          hover: "hsla(var(--danger-hover), <alpha-value>)",
          muted: "hsla(var(--danger-muted), <alpha-value>)",
          foreground: "hsla(var(--danger-foreground), <alpha-value>)",
        },
        border: "hsla(var(--border), <alpha-value>)",
        gray: {
          '50': 'hsla(210, 37%, 97%, <alpha-value>)',
          '100': 'hsla(214, 30%, 91%, <alpha-value>)',
          '200': 'hsla(214, 32%, 87%, <alpha-value>)',
          '300': 'hsla(212, 31%, 78%, <alpha-value>)',
          '400': 'hsla(214, 30%, 68%, <alpha-value>)',
          '500': 'hsla(217, 30%, 60%, <alpha-value>)',
          '600': 'hsla(221, 27%, 53%, <alpha-value>)',
          '700': 'hsla(224, 25%, 48%, <alpha-value>)',
          '800': 'hsla(226, 23%, 40%, <alpha-value>)',
          '900': 'hsla(224, 20%, 33%, <alpha-value>)',
          '950': 'hsla(227, 18%, 21%, <alpha-value>)',
        },
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        none: "0px",
        xs: "0.25rem",
        sm: "0.5rem",
        lg: "1rem",
        full: "9999px",
      },
      extend: {
        keyframes: {
          blink: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
          fadeInSlide: {
            '0%': {
              opacity: '0',
              transform: 'translateY(-16px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
        animation: {
          blink: "blink 1s step-end infinite",
          fadeInSlide: 'fadeInSlide 0.2s ease-out',
        },
      },
    },
    plugins: [],
  }

