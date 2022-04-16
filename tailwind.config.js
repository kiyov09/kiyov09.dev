module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#19212c',
      },
      backgroundImage: {
        'blue-gradient':
          'linear-gradient(90deg, #4F46E5 -14.18%, #60A5FA 56.06%, #60A5FA 109.54%);',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
