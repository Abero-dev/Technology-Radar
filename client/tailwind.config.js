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
        'grow-down': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' }
        },
        'grow-from-top': {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'top' }
        }
      },
      animation: {
        'slide-in-top': 'slide-in-top 0.3s both',
        'grow-down': 'grow-down 0.3s ease-in-out',
        'grow-from-top': 'grow-from-top 0.3s ease-in-out',
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

