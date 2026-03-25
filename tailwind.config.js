/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        graycustom: {
          css:{
            "--tw-prose-headings": theme("colors.gray.800"),
            "--tw-prose-body": theme("colors.gray.600"),
          }
        }
      }),
      }
    },
  plugins: [require("@tailwindcss/typography")],
};