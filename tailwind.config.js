/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#0061ff",
          secondary: "#008200",
          accent: "#00a1ff",
          neutral: "#06120f",
          "base-100": "#262626",
          "base-light": "#141414",
          info: "#00deff",
          success: "#00ff79",
          warning: "#ff5600",
          error: "#d3013f",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        "base-light": "#2e2e2e",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
