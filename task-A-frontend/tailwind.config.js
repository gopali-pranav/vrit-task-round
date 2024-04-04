/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01A3E0",
        headertext: "#3C3D3D",
        herobgcolor: "#F5F6F6",
        herotextcolor: "#6B6D6F",
        "hero-paragraph": "#4E4F50",
        icons: "#01A3E0",
        iconsbg: "#DEF3FF",
        bordercolor: "#E6E7E7",
        clientprofile: "#86888A",
        feedbackbg: "#04334D",
        footerbg: "#252527",
        lorem: "#AFB0B1",
      },
    },
  },
  plugins: [],
};
