import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anonymous': ['"Anonymous Pro"', 'Courier New', 'monospace'],
        'brand': ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        'brand-gray': '#888888',
        'brand-dark': '#373737',
        'brand-black': '#222222',
        'brand-light': '#ededed',
      },
    },
  },
  plugins: [],
};
export default config;
