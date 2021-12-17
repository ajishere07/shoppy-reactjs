module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      custom: {
        700: "#5198EC",
        400: "#ffffff",
        200: "#E5E7EB",
        100: "#DC2626"
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
