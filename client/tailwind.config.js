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
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' }
        },
        'rotacion-section-gradient': {
          'from': { opacity: '0', transform: 'rotateY(270deg)' },
          'to': { opacity: '1', transform: 'rotateY(360deg)' },
        },
        'show-modal': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'hide-modal': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'slide-in-top': 'slide-in-top 0.3s both',
        'grow-down': 'grow-down 0.3s ease-in-out',
        'slide-down': 'slide-down 2s infinite ease-in-out',
        'grow-from-top': 'grow-from-top 0.3s ease-in-out',
        'rotacion-section-gradient': 'rotacion-section-gradient 1.2s ease-in-out',
        'show-modal': 'show-modal 0.5s ease forwards',
        'hide-modal': 'hide-modal 0.5s ease forwards',
      },
      fontFamily: {
        custom: ['Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
      },
      boxShadow: {
        'navLiShadow': '0 0 10px 10px #613bba',
      },
      textShadow: {
        'home-title-shadow': '15px 0px 10px rgba(0, 0, 0, 1)',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.text-shadow': {
        'text-shadow': '15px 0px 10px rgba(0, 0, 0, 1)',
      },
      '.rotate-y-180': {
        'transform': 'rotateY(180deg)',
      }
    })
  },
  ],
}

