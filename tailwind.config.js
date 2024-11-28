/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        hoverColor: '#E64337'
      },
      fontFamily: {
        pangolin: ['Pangolin', 'cursive'],
        roboto: ['Roboto', 'sans-serif']
      },
      animation: {
        'background': 'backgroundAnimation 20s ease-in-out infinite'
      },
      keyframes: {
        backgroundAnimation: {
          '0%, 100%': {transform: 'scale(1) translateY(0)'},
          '50%': {transform: 'scale(1.1) translateY(-10px)'}
        }
      },
      textShadow: {
        'default': '0 0 10px rgba(0, 255, 255, 0.5)',
        'strong': '0 0 10px #ffffff, 0 0 20px #ffffff'
      }
    }
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
        },
        '.text-shadow-strong': {
          textShadow: '0 0 10px #ffffff, 0 0 20px #ffffff'
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
};


