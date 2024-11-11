import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        negro: "#0A0A0A",
        gris: "#181818",
        ligero: "#454545",
      },
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
    },
  },
  plugins: [],
};
export default config;
