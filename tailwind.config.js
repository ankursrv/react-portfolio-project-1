/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-gradient': 'linear-gradient(121deg, #2559cd 9%, #1c4cc8 41%, #0f38c1 80%)',
      },
      colors: {
        'black-primary': '#131313',
        'orange-primary': '#FFDB44',
      },
      scale: {
        '115': '1.15',
      },
      boxShadow :{
        'shadow-primary': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'shadow-secondary': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
}
