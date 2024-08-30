/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#4924bc', // Define a custom color name
      },
      spacing: {
        '348px': '348px', // Custom spacing values
        '97px': '97px',
        '180px': '180px',
      },
      margin: {
        '-70px': '-70px', // Custom negative margin for top
        '98px': '98px',
        '42': '42rem',   // Custom margin for left
      },
    },
  },
  plugins: [],
};
