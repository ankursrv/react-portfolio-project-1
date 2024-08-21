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
    },
  },
  plugins: [],
}
