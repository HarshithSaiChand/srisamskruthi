module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#38bdf8', // Sky 400
        maroon: '#0369a1', // Sky 700 / Darker Blue
        ivory: '#f0f9ff', // Sky 50 / Very Light Blue
        deepGold: '#075985', // Sky 800 / Deep Blue
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        serif: ['Georgia', 'Garamond', 'serif'],
      }
    },
  },
  plugins: [],
}
