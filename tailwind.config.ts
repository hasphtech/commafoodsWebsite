import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        comma: {
          red: "#A32D2D",
          "red-dark": "#791F1F",
          "red-light": "#FCEBEB",
          amber: "#BA7517",
          "amber-light": "#FAEEDA",
          cream: "#F9F0E4",
          "cream-light": "#FFFDF8",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
