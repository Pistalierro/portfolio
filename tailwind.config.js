/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      fontFamily: {
        pangolin: ['Pangolin', 'cursive'],
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
};


