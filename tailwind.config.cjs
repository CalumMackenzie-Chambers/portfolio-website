const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      orange: colors.orange,
      green: colors.emerald,
      purple: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Lora", "serif"],
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
