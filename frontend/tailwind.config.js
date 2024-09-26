/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],

  theme: {
    extend: {
      colors: {
        brown: {
          100: '#4F310E',
          200: '#3E2A0B',
          300: '#2D2308',
          400: '#1C1C05',
          500: '#0B0B02',
        },
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
    ]
 
   
  

};
