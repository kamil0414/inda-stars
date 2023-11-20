import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-transparent':
          'linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)), url("/img/card-background.png")',
      },
      boxShadow: {
        xl: '0px 4px 30px 0px rgba(0, 0, 0, 0.10)',
      },
      colors: {
        'black-10': '#EAEAE9',
        'black-20': '#D4D4D3',
        'black-40': '#AAA9A8',
        'black-100': '#2A2825',
        'indigo-400': '#9295DC',
        'indigo-500': '#6C71E0',
        'pink-300': '#F69BC8',
        'pink-400': '#F682D1',
        'rose-400': '#FB817B',
        'violet-200': '#D6D2F9',
        'violet-300': '#B7BBFF',
      },
      fontFamily: {
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        tighter: '-.6px',
        tight: '-.4px',
      },
    },
    screens: {
      sm: '640px',
      md: '772px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1366px',
    },
  },
  plugins: [],
};
export default config;
