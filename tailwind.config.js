/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "exact-768": { raw: "(width: 768px)" }, // Matches exactly 768px
      },
    },
  },
  plugins: [],
};
