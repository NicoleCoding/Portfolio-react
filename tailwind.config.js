/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Open Sans', 'sans-serif'], // You can give it any name like 'custom'
      },
      backgroundImage: {
        'hero-background': "url('./assets/Galaxy.jpeg')",
        'skills-background': "url('./assets/Space.jpeg')",
        'contact-form-background': "url('./assets/Supernova.jpeg')"
      },
  },
  plugins: [],
}
}