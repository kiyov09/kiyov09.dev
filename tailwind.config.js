module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#19212c',
        'primary-dark-light': 'hsl(217deg 26% 20%)',
        'linkedin-blue': '#0072b1',
        'twitter-blue': '#1da1f2',
      },
      backgroundImage: {
        'blue-gradient':
          'linear-gradient(90deg, #4F46E5 -14.18%, #60A5FA 56.06%, #60A5FA 109.54%);',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
