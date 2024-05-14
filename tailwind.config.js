/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      'blue-dark': '#1E6F9F',
      blue: '#4EA8DE',
      'purple-dark': '#5E60CE',
      purple: '#8284FA',
      'gray-700': '#0D0D0D',
      'gray-600': '#1A1A1A',
      'gray-500': '#262626',
      'gray-400': '#333333',
      'gray-300': '#808080',
      'gray-200': '#D9D9D9',
      'gray-150': '#eaeaea',
      'gray-100': '#F2F2F2',
      danger: '#E25858',
      transparent: 'transparent',
    },
  },
  plugins: [],
}
