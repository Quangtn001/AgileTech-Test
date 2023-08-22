/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        "2xl": "1120px",
      },
    },
    extend: {
      colors: {
        heading: "#212353",
        desc: "#4B5D68",
        bg_color: "#9C69E2",
      },
    },
  },
  plugins: [],
};
