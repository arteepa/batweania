/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#5C4E38",
        "on-primary": "#ffffff",
        "primary-container": "#73592d",
        "on-primary-container": "#F4E8D0",
        "primary-fixed": "#EDE0C8",
        "primary-fixed-dim": "#D0C0A0",
        "on-primary-fixed": "#231A0C",
        "on-primary-fixed-variant": "#4E4230",

        secondary: "#4D6B3D",
        "on-secondary": "#ffffff",
        "secondary-container": "#A8D098",
        "on-secondary-container": "#1C3A12",
        "secondary-fixed": "#C8E6BD",
        "secondary-fixed-dim": "#9DC892",
        "on-secondary-fixed": "#0E200A",
        "on-secondary-fixed-variant": "#375428",

        tertiary: "#B87620",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#955E18",
        "on-tertiary-container": "#FFE0B5",
        "tertiary-fixed": "#FFDDA0",
        "tertiary-fixed-dim": "#E4B458",
        "on-tertiary-fixed": "#281800",
        "on-tertiary-fixed-variant": "#744C0E",

        surface: "#FAF4E8",
        "surface-bright": "#FAF4E8",
        "surface-dim": "#DDD7CB",
        "surface-variant": "#E6DCC8",
        "surface-tint": "#5C4E38",
        "surface-container": "#F0E9D8",
        "surface-container-low": "#F5EEE0",
        "surface-container-high": "#EAE3D2",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-highest": "#E3DCC8",

        "on-surface": "#1E1A10",
        "on-surface-variant": "#4C4838",
        "on-background": "#FAF4E8",
        background: "#73592d",

        outline: "#7C7868",
        "outline-variant": "#CCC7B5",
        "inverse-surface": "#34301F",
        "inverse-on-surface": "#F6F0E4",
        "inverse-primary": "#D0C0A0",

        error: "#BA1A1A",
        "on-error": "#ffffff",
        "error-container": "#FFDAD6",
        "on-error-container": "#93000A",

        "brand-dark": "#2C2416",
        "brand-cream": "#ddcf93",
      },
      fontFamily: {
        headline: ["Newsreader", "serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
