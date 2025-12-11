export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        purple: {
          primary: '#6D28D9',
          secondary: '#7C3AED',
          light: '#A855F7',
        },
      },
    },
  },
  plugins: [],
}
