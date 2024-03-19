/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': 'var(--gradient-start)',
        'gradient-middle': 'var(--gradient-middle)',
        'gradient-end': 'var(--gradient-end)',
      },
      fontFamily: {
        "Outfit": "var(--Outfit)"
      }
    },
  },
  plugins: [],
};