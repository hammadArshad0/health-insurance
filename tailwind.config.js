/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        attractive: ['Playfair Display', 'Inter', 'ui-serif', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
}

