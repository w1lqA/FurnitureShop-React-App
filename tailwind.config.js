/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'xlg': '1100px',
        '3xl': '1600px',
        '4xl': '2000px',
        ...defaultTheme.screens,
      },
      colors: {
        'heading-color': '#244D4D',
        'heading-color-2': '#031745',
        'heading-color-3': '#3D3D3F',
        'p-color': '#5F5F64',
        'p-color-disabled': '#A9A7A6',
        'secondary-gray': '#F4F6F6',
      },
      animation: {
        'slideDown': 'slideDown 500ms ease-in',
        'slideR': 'slideR 500ms ease-in',
        'scaleIn': 'scaleIn 500ms ease-in-out',
        'slideBR': 'slideBR 500ms ease-in-out',
        'bounceRight': 'bounceRight 1s infinite'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-20%)' },
          '50%': { transform: 'translateY(5%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        slideR: {
          '0%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        scaleIn: {
          '0%': { transform: 'scaleX(0%) scaleY(0%)'},
          '100%': { transform: 'scaleX(100%) scaleY(100%)'},
        },
        slideBR: {
          '0%': { transform: 'translateY(-20%) translateX(-20%)' },
          '100%': { transform: 'translateY(0%) translateX(0%)' },
        },
        bounceRight: {
          '0%, 100%': {
              transform: 'translateX(-15%)',
              animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
              transform: 'none',
              animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      }
    },
  },
  plugins: [],
}

