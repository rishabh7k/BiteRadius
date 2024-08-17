// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       animation: {
//         fadeInOut: 'fadeInOut 15s infinite',
//       },
//       keyframes: {
//         fadeInOut: {
//           '0%, 33%, 100%': { opacity: '0' },
//           '5%, 28%': { opacity: '1' },
//         },
//     },
//   },
//   plugins: [],
// };

// export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadeInOut: "fadeInOut 15s infinite",
      },
      keyframes: {
        fadeInOut: {
          "0%, 33%, 100%": { opacity: "0" },
          "5%, 28%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
