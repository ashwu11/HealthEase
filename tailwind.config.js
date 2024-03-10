/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: true, // Enable/disable purge
    content: ['./src/**/*.html', './src/**/*.js'], // Files to scan for classes
  },
}
