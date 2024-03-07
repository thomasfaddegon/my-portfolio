/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        purple: "#4B4BFA",
        white: "#FFFFFF",
        black: "#141416",
        lightGrey: "#d9d7d7",
        lightBlue: "#89aaff",
        darkBlue: "#121275",
        lavendar: "#beb7fe",
      },
    },
  },
  plugins: [],
};
