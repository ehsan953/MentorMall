/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',  // Tailwind default for small screens is 640
      'md': '768px',  // Tailwind default for medium screens is 768
      'lg': '1024px', // Tailwind default for large screens is 1024
      'xl': '1200px', // Tailwind default for extra large screens is 1280
      '2xl': '1400px', // Tailwind default for 2x extra large screens 1536
    },
    extend: {
      colors: {

        green100: '#DCFCE7',
        green500: '#22C55E',
        green800: '#166534',
        green900: '#14532D',
      },
    },
  },
  plugins: [],
}