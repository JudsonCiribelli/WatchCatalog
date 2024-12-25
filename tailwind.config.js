/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "calc-100vh": "calc(100vh - 64px)",
        "h-500": "35.25rem",
      },
    },
  },
  plugins: [],
};
