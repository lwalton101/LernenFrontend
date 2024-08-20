/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg: "#FFFFFF",
        primary: "#E2BFD9",
        primary_mid: "#C8A1E0",
        primary_dark: "#674188",
        secondary:"#0B5D83"
      },
      padding:{
        "15px": "15px",
        "10px": "10px"
      }

    },
  },
  plugins: [],
}
