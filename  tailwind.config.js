/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // <== crucial for next-themes
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
      },
    },
    plugins: [],
  }
  