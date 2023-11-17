/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        // Gruvbox dark colors
        "gruvbox-bg": "#282828",
        "gruvbox-fg": "#fbf1c7",
        "gruvbox-red": "#fb4934",
        "gruvbox-green": "#b8bb26",
        "gruvbox-yellow": "#fabd2f",
        "gruvbox-blue": "#83a598",
        "gruvbox-purple": "#d3869b",
        "gruvbox-aqua": "#8ec07c",
        "gruvbox-gray": "#928374",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
