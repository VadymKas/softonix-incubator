import type { Config } from 'tailwindcss'
import { colors } from './tailwind.colors'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: '#0f172a',
      yellow: '#FAF8ED',
      orange: '#F66F4D',
      blue: '#2E476B',
      peach: '#EE8162',
      'header-main': '#2d3134',
      'text-main': '#5b5f62',
      'text-secondary': '#9498a4',
      'text-third': '#939597',
      'semi-white': 'rgba(255, 255, 255, 0.7)',
      'semi-black': 'rgba(0, 0, 0, 0.9)',
      'semi-transparent': 'rgba(0, 0, 0, 0.3)',
      'semi-orange': '#ffd482',
      'text-footer': '#676a6c'
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      secondary: ['Poppins', 'sans-serif'],
      third: ['Sen', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
} satisfies Config
