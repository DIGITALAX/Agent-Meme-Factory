import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        100: "37rem",
      },
      colors: {
        negro: "#0A0A0A",
        gris: "#181818",
        ligero: "#454545",
        nubes: "#7f7f7f",
      },
      sans: [
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
export default config;
