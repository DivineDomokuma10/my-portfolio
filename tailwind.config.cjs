/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}","./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'techBg': "url('./assets/black1.jpg')",
      }
    },
  },
  plugins: [],
}
