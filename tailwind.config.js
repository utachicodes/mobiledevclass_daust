/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          "brand-navy": "#0a2342",   // example deep navy
          "brand-orange": "#f97316", // example accent
          "brand-cream": "#fdf6e3",  // optional background
        },
      },
    },
    plugins: [],
  };