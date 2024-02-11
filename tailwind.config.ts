import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero': "url('/image/bg.jpg')",
        "btn-color": "linear-gradient(267.28deg, #7B61FF 24%, #AA82FF 73.95%)",
        "hero-main": " linear-gradient(360deg, rgba(28, 28, 40, 0.8) 0%, rgba(28, 28, 40, 0) 77.78%)"

      },
      colors: {
        "theme-bg": "#1C1C28",
      }
    },
  },
  plugins: [],
};
export default config;
