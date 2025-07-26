/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         code: ['Fira Code', 'Consolas', 'Menlo', 'Courier New', 'monospace'],
        terminal: ['Source Code Pro', 'monospace'],
        hackish: ['JetBrains Mono', 'monospace'],
        fancy: ['"Poppins"', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
        code: ['"Fira Code"', 'monospace'],
      },
       keyframes: {
        highlight: {
          '0%, 100%': { backgroundColor: 'transparent', color: 'inherit' },
          '50%': { backgroundColor: '#facc15', color: '#000' }, // yellow highlight
        },
      },
      animation: {
        highlight: 'highlight 2s ease-in-out infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [ require("tailwindcss-animate")],
};
