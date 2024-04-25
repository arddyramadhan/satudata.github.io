/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      // padding: "20px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        primary: "#EE1B22",
        dark: "#0F172A",
      },
      // screens: { "2xl": "1280px" },
    },
  },
  plugins: [],
};
