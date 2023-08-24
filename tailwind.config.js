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
      }
    },
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
}