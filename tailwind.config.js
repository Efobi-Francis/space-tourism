/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '768px',
      'lg': '1440px'
    },
    fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'barlow-Condensed': ['Barlow Condensed', 'sans-serif'],
      'bellefair': ['Bellefair', 'serif']
    },
    extend: {
      backgroundImage: {
        'mobile-home': "url('/src/assets/home/background-home-mobile.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

