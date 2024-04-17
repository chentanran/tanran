/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      padding: {
        '1': '20px'
      }
    },
  },
  plugins: [
    require('./tailwind')
  ],
}

