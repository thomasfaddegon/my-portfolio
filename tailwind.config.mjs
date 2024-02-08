/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        purple: "#4B4BFA",
        white: "#FFFFFF",
        black: "#000000",
        darkBlue: "#121275",
      },
    },
  },
  plugins: [],
};
