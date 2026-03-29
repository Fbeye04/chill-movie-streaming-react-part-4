/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lato"', "sans-serif"],
        londrina: ['"Londrina Solid"', "sans-serif"],
      },
      colors: {
        // --- Background Colors ---
        primary: "#181a1c",
        card: "#181a1cd6",
        overlay: "#181a1cbc",

        // --- Brand Colors ---
        "brand-primary": "#0f1e93",
        "brand-danger": "#b71f1d",
        "brand-danger-hover": "#EB6765",

        // --- Text Colors ---
        secondary: "#c1c2c4",

        // --- Surface Colors ---
        "surface-dark": "#22282a",
        "surface-medium": "#2f3334",
        "surface-light": "#3d4142",

        // --- Border & Overlay ---
        "border-subtle": "#e7e3fc3b",
        "border-light": "rgba(231, 227, 252, 0.23)",
        "overlay-dark": "rgba(24, 26, 28, 0.8)",
        "overlay-medium": "rgba(24, 26, 28, 0.4)",
      },
      fontSize: {
        micro: "0.5rem",
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
