// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff', // Define a custom primary color
        success: '#28a745', // Define a custom success color
        danger: '#dc3545', // Define a custom danger color
        gray: {
          100: '#f8f9fa', // Custom light gray
          200: '#e9ecef', // Custom gray
          300: '#ced4da', // Custom dark gray
          400: '#adb5bd', // Custom darker gray
          500: '#6c757d', // Custom text color
          600: '#495057', // Custom dark text color
          700: '#343a40', // Custom background color
          800: '#212529', // Custom dark background color
          900: '#121212', // Custom very dark background color
        },
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/path/to/your/image.jpg')", // Custom background image
        'gradient-purple-blue': 'linear-gradient(180deg, #805ad5 0%, #8b5cf6 100%)', // Custom gradient
        'gradient-red-orange': 'linear-gradient(180deg, #f43f5e 0%, #ff7e56 100%)', // Another custom gradient
      }),
    },
  },
  plugins: [],
};
