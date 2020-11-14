// module.exports = {
//   future: {
//     removeDeprecatedGapUtilities: true,
//     purgeLayersByDefault: true,
//   },
//   purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
//   theme: {
//     screens: {
//       sm: '640px',
//       md: '768px',
//       lg: '1024px',
//       xl: '1300px',
//     },
//   },
// }

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {},
  plugins: [],
}
