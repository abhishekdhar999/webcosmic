/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   './src/pages/**/*.{js,ts,jsx,tsx}',
  //   './src/components/**/*.{js,ts,jsx,tsx}',
  //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  // ],
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}