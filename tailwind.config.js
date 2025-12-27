/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ['"Abril Fatface"', 'cursive'],
      },
      colors: {
        school: {
          red: "#8B0000",
          secondary: "#f5e4c9",
        }
      },
    },
  },
  plugins: [],
}

