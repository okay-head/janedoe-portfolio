/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      jost: 'Jost, sans-serif;',
      urbanist: "'Urbanist', sans-serif;",
      readex: "'Readex Pro', sans-serif;",
    },
    extend: {
      colors: {
        teal: {
          base: {
            700: 'hsl(184, 60%, 83%)',
            400: 'hsl(184, 60%, 90%)',
            200: 'hsl(184, 60%, 94%)',
          },
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
