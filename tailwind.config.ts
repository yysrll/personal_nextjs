import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-pattern': "url('/background/bbblurry-blue.svg')",
        'hero-pattern-full': "url('/background/bbblurry-blue-full.svg')",
        'hero-pattern-bottom': "url('/background/bbblurry-blue-bottom.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
