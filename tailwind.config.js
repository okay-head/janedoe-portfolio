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
            700: 'hsl(184, 60%, 75%)',
            150: 'hsl(184, 60%, 90%)',
            100: 'hsl(184, 60%, 96%)',
          },
        },
        greenAccent: {
          700: 'hsl(139, 90%, 90%)',
          150: 'hsl(139, 90%, 93.5%)',
        },
        violetAccent: {
          900: 'hsl(252, 100%, 78%)',
          700: 'hsl(252, 100%, 88%)',
          150: 'hsl(252, 100%, 94%)',
        },
        orangeAccent: {
          900: 'hsl(34, 100%, 70%)',
          700: 'hsl(34, 100%, 79%)',
          150: 'hsl(34, 100%, 86%)',
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
