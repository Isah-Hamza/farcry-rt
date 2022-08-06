/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1200",
        "2xl": "1440px",
      }, //screen ends here
      colors: {
        primaryBlue: "#3E4095",
        gold: "#F59134",
        paleOrange: "hsl(25, 100%, 94%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
      }, //color ends here
    }, //extend ends here
  }, //theme ends here
  plugins: [],
};
