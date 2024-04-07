/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      jost: 'Jost, sans-serif;',
      urbanist: "'Urbanist', sans-serif;",
      firaCode: '"Fira Code", monospace;',
    },
    // later remove the extended colors and only keep current colors
    extend: {
      colors: {
        teal: {
          base: {
            700: 'hsl(184, 60%, 83%)',
            400: 'hsl(184, 60%, 88%)',
            200: 'hsl(184, 60%, 92%)',
            150: 'hsl(184, 60%, 94.5%)',
            100: 'hsl(184, 60%, 96%)',
          },
        },
        greenAccent: {
          700: 'hsl(139, 90%, 90%)',
          150: 'hsl(139, 90%, 95%)',
        },
        violetAccent: {
          900: 'hsl(252, 100%, 78%)',
          700: 'hsl(252, 100%, 88%)',
          150: 'hsl(252, 100%, 94%)',
        },
        text: {
          primary: 'hsla(0, 0%, 0%, 0.898)',
          lighter: 'hsl(0, 0%, 49%)',
          subtitle: 'hsla(0, 0%, 0%, 0.75)',
        },
      },
      screens: {
        xs: '430px',
      },
    },
  },
}
