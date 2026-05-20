/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdecd8',
          200: '#fad5ae',
          300: '#f6b87a',
          400: '#f19142',
          500: '#ee7520',
          600: '#de5d16',
          700: '#b94613',
          800: '#953816',
          900: '#793014',
        },
        warm: {
          50: '#fdfcfb',
          100: '#faf7f3',
          200: '#f5efe7',
          300: '#ede3d4',
          400: '#e2d0b8',
          500: '#d4ba99',
          600: '#c4a37d',
          700: '#a88765',
          800: '#8c6f56',
          900: '#755c4a',
        },
        brown: {
          50: '#faf8f6',
          100: '#f5f0eb',
          200: '#e8dfd5',
          300: '#d7c7b8',
          400: '#c2a892',
          500: '#ae8d70',
          600: '#9b755a',
          700: '#7f5f4a',
          800: '#684f41',
          900: '#564338',
        },
      },
      fontFamily: {
        sans: ['PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
