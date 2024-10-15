/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Brancolor': '#17C2EC',
      },
      fontFamily: {
        'Monserit': ['Montserrat', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding:{
        DEFAULT: '35px',
        sm: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
      }
    },
  },
  plugins: [],
}
