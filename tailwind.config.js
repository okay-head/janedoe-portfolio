/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      lato: 'Lato, sans-serif;',
      jost: 'Jost, sans-serif;',
    },
    extend: {
      colors: {
        teal: {
          base: 'hsl(184, 60%, 83%)',
          base2: 'hsl(184, 60%, 90%)',
        },
        text: {
          primary: 'hsla(0, 0%, 0%, 0.898)',
          lighter: 'hsl(0, 0%, 49%)',
        },
      },
      screens: {
        xs: '430px',
      },
    },
  },
}
