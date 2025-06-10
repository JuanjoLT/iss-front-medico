/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         maincolor: '[#2148C0]',
//       },
//     },
//   },
//   plugins: [],
// }

// module.exports = {
//   purge: ['./index.html', './src/*/.{vue,js,ts,jsx,tsx}'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
//
// }

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maincolor: '#2148C0', // corregido
      },
    },
  },
  plugins: [],
}
