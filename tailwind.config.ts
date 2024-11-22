import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "var(--background)",
        highlights: "var(--text-highlights)",
        overshadowed: "var(--text-overshadowed)",
      },
      keyframes: {
        'center-bounce': {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(calc(50vw - 100px))' },
          '50%': { transform: 'translateX(0)' },
          '75%': { transform: 'translateX(calc(-50vw + 100px))' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'center-bounce': 'center-bounce 50s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
