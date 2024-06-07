/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src//app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
      },
      height: {
        'screen-minus-nav': 'calc(100vh - 85px)',
      },
      colors: {
        'primary-default': '#0C111D',
        'secondary-default': '#E5B80B',
        'success-default': '#66CB9F',
        featuresbg: '#FEF9F6',
        iconbg: '#FDF3ED',
        'tertiary-default': '#808080',
      },
      backgroundImage: {
        buildings: "url('/assets/images/buildings.png')",
        newsletter: "url('/assets/images/newsletter_background.jpeg')",
      },
      keyframes: {
        typing: {
          '0%': { width: 0 },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderRightColor: 'transparent' },
        },
        curve: {
          from: { strokeDashoffset: 326.56 },
          to: { strokeDashoffset: 55 },
        },
        marquee: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            // transform: 'translateX(-100%)',
            transform: 'translateX(calc(-100% - 32px))',
          },
        },
        appear: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        'marquee-1': 'marquee 5s linear infinite',
        'marquee-4': 'marquee 4s  infinite',
        curve: 'curve 3.5s ease-in-out',
        appear: 'appear 2s',
        typing:
          'typing 2s steps(22) infinite, blink .5s step-end infinite alternate',
        blink: 'blink .5s step-end infinite alternate',
      },
      boxShadow: {
        neutral: '0px 2px 9px 0px rgba(50, 71, 92, 0.10)',
        secondary: '0px 2px 9px 0px rgba(203, 96, 21, 0.25)',
      },
      fontSize: {
        xxs: ['10px', '16px'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
});
