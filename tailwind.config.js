/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plusJarkata: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      fontSize: {
        'mid': ['0.95rem', '1.375rem']
      },
      keyframes: {
        'slide-up-fade-in': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        spinY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        'slide-up-fade-in': 'slide-up-fade-in 0.5s ease-out forwards',
        shimmer: 'shimmer 0.5s infinite',
        spinY: 'spinY 3s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

