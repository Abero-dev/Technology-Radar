/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'slide-in-top': {
          '0%': {
            transform: 'translateY(-50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-in-top': 'slide-in-top 0.3s both',
      },
      fontFamily: {
        custom: ['Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
      },
      boxShadow: {
        navLiShadow: '0 0 10px 10px #613bba',
      },
    },
  },
  plugins: [],
}

