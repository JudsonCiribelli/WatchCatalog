/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "calc-100vh": "calc(100vh - 64px)",
        "h-500": "40.25rem",
        "h-720": "720px",
      },
      width: {
        "w-720px": "720px",
      },
      margin: {
        "m-40%": "40%",
        "m-38%": "38%",
        "m-20%": "20%",
      },
    },
  },
  plugins: [],
};
