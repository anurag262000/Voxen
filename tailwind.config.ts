import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#080808",        // The Deep Space
        glass: "rgba(26, 26, 26, 0.6)", 
        kinetic: "#00FF9C",    // Mint Action
        logic: "#7000FF",      // AI Purple
        ghost: "rgba(237, 237, 237, 0.6)", // Subdued Text
      },
      boxShadow: {
        'glow-kinetic': '0 0 20px rgba(0, 255, 156, 0.3)',
        'glow-logic': '0 0 20px rgba(112, 0, 255, 0.3)',
      },
      backgroundImage: {
        'antigravity-gradient': 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
      },
    }
  },
  plugins: [],
};

export default config;
