const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      'text-black': '#243c5a',
      'text-white': '#fff',
      'text-green': '#008c8d',
      'bg-green': '#6bc2c3',
      'bg-black': '#262c3a',
      'progress-pale': '#c5eaea',
      'progress-deep': '#2bb9ba',
      'border-green': '#c5eaea',
    },
    extend: {
      backgroundImage: (theme) => ({
        'about-pc': "url('public/bg-about.png')",
        'works-1': "url('public/19Podium_generated.jpg')",
        'works-2': "url('public/logo.png')",
        'works-3': "url('public/19Podium_generated.jpg')",
        'works-4': "url('public/bg-about.png')",
        'works-4': "url('public/bg-about.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}', // srcディレクトリにあるjs,jsx,ts,tsxを監視して軽量化してくれる
  ],
};
