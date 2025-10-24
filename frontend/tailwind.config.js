// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       boxShadow: {
//         'navbar': '0px 7px 6.1px rgba(171, 29, 121, 0.23)', // Custom shadow
//         'top-light-pink': '0 -4px 15px rgba(255, 182, 193, 0.5)', // Light pink shadow
//       },
//       scale: {
//         '99': '0.99',
//       },
//       fontFamily: {
//         'brock-script': ['Brock Script' ], // Custom font
//         "merriweather": ['Merriweather', 'serif'],
//       },
//       colors: {
//         customPink: '#ab1d79', // Custom pink color
//       },
//       boxShadow: {
//         'custom-shadow': '0px 0px 30.242px 0px rgba(97, 8, 66, 0.05)',
//       },  
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // ✅ Add this line
  ],
  theme: {
    extend: {
      boxShadow: {
        'navbar': '0px 7px 6.1px rgba(171, 29, 121, 0.23)',
        'top-light-pink': '0 -4px 15px rgba(255, 182, 193, 0.5)',
        'custom-shadow': '0px 0px 30.242px 0px rgba(97, 8, 66, 0.05)',
      },
      scale: {
        '99': '0.99',
      },
       fontFamily: {
        'brock-script': ['Brock Script', 'cursive'],
        'merriweather': ['Merriweather', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'], // ✅ added
      },
      colors: {
        customPink: '#ab1d79',
      },
    },
  },
  // plugins: [
  //   require('flowbite/plugin'), // ✅ Add this
  // ],
}
