/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "15px",
      },
      colors: {
        primaryBg: "#1f2122",
        secondaryBg: "#27292a",
        primaryText: "#ffffff",
        secondaryText: "#E75E8D",
        thirdText: "#666",
      },
      backgroundImage: {
        banner: `url('src/assets/banner-bg.jpg')`,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
      placeholderColor: {
        custom: "#666",
      },
    },
  },
  plugins: [],
};
