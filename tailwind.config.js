import compress from 'vite-plugin-compress';
import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'atria-blue': '#26326d',
      },
      fontFamily: {
        'atria': ['Helvetica Regular', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'footer': { 'raw': '(max-width: 1160px )' }, // Responsive pour le footer
        'tablet': { 'raw': '(max-width: 1024px)' }, // Responsive pour tablet et latop
        'mobile': { 'raw': '(max-width: 600px)' }, // Responsive pour mobile
      },
    } 
  },
  plugins: [
    compress(),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
            fontFamily: 'Helvetica Regular',
            fontWeight: '300',
            src: 'url(https://ik.imagekit.io/cydnmyipcn/atria/HelveticaRegular_sWO-jngJo.otf?updatedAt=1692863117080)'
        }
      })
    }),
  ]
  /** @type {import('tailwindcss').Config} */
}