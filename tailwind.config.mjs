/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "rgba-black": "rgba(27, 27, 27, 1)",
      },
    },
  },
  plugins: [],
};
