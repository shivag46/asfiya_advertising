/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '25rem',
      },
      boxShadow: {
        '3xl': ' 0 15px 35px rgba(0, 0, 0, 0.1),0 3px 10px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
