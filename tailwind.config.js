/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
    },
    colors: {
      white1: "#ffffff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "gray-50": "#f9fafb",
      "gray-100": "#f3f4f6",
      "gray-200": "#e5e7eb",
      "gray-300": "#d1d5db",
      "gray-400": "#9ca3af",
      "gray-500": "#6b7280",
      "gray-600": "#4b5563",
      "gray-700": "#374151",
      "gray-800": "#1f2937",
      "gray-900": "#111827",
      "gray-950": "#030712",
      "gray-custom1": "#fafafa",
      "gray-custom2": "#595959",
      "gray-custom3": "#767676",
      "gray-custom4": "#dddddd",
      "blue-100": "#dbeafe",
      "blue-500": "#3b82f6",
      "blue-700": "#1d4ed8",
      "blue-800": "#1e40af",
      "blue-900": "#1e3a8a",
      "slate-custom1": "#2A2B2E",
      "slate-custom2": "#2a2a2e",
      "slate-custom3": "#202023",
      "slate-custom4": "#c7c8cc",
      "slate-custom5": "#3b3c3d",
    },
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.938rem", "1.25rem"],
      base: ["1.063rem", "1.5rem"],
      lg: ["1.188rem", "2rem"],
      xl: ["1.25rem", "2rem"],
      "2xl": ["1.375rem", "2rem"],
    },
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "Helvetica", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: "#E1E1E1",
          },
        },
        DEFAULT: {
          css: {
            maxWidth: "100ch",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
