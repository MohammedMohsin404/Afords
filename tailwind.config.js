/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if your folder structure is different
  ],
  theme: {
    extend: {
      colors: {
        primary: "##1263AD", // ✅ Your primary color
      },
    },
  },
  plugins: [],
};
