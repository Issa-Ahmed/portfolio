/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'tomato': '#FF312E',
        'passion': '#F6AE2D',
        'coffee': '#330F0A'
      },
      fontFamily: {
        'libre-barcode': [' "Libre Barcode 39 Text" ', 'systemui'],
        'libre-extended': [' "Libre Barcode 39 Extended" ', 'systemui'],
        "major-mono": [' "Major Mono Display" ', 'monospace'],
        'baskerville': [' "Libre Baskerville" ', 'serif']
      }
    },
  },
  plugins: [],
}

