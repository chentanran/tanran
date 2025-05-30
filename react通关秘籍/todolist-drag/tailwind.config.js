/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        1000: '1000px',
        600: '600px',
        40: '40px',
        10: '10px',
      },
      height: {
        600: '600px',
        200: '200px',
        100: '100px',
        40: '40px',
        10: '10px',
      },
      margin: {
        100: '100px',
        10: '10px',
      },
      flex: {
        2: '2'
      },
      lineHeight: {
        100: '100px',
        200: '200px',
      },
    },
  },
  plugins: [],
}

