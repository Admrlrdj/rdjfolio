/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3f48cc',
        secondary: '#64748b',
        tertiary: '#99d9ea',
        quaternary: '#cbd5e1',
        dark: '#0f172a'
      }
    },
  },
  plugins: [],
}