import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      // colors: {
      //   gray: {
      //     0: "#FFFFFF",
      //     25: "#FCFCFD",
      //     50: "#F9FAFB",
      //     100: "#F2F4F7",
      //     200: "#E4E7EC",
      //     300: "#D0D5DD",
      //     400: "#98A2B3",
      //     500: "#667085",
      //     600: "#475467",
      //     700: "#344054",
      //     800: "#1D2939",
      //     900: "#101828",
      //     950: "#0C111D",
      //   },
      //   blue: {
      //     25: "!!#0C111D",
      //     50: "!#EFF4FF",
      //     100: "!#E0EAFF",
      //     200: "!#C7D7FE",
      //     300: "!#A4BCFD",
      //     400: "!#528BFF",
      //     500: "!#6172F3",
      //     600: "!#444CE7",
      //     700: "!#3538CD",
      //     800: "!#2D31A6",
      //     900: "!#2D3282",
      //     950: "!#1F2358",
      //   },
      // },
      // fontSize: {
      //   display2Xl: ["!72px", { lineHeight: "!90px" }],
      //   displayXl: ["!60px", { lineHeight: "!72px" }],
      //   displayLg: ["!48px", { lineHeight: "!60px" }],
      //   displayMd: ["!36px", { lineHeight: "!44px" }],
      //   displaySm: ["!30px", { lineHeight: "!38px" }],
      //   textXl: ["!20px", { lineHeight: "!30px" }],
      //   textLg: ["!18px", { lineHeight: "!28px" }],
      //   textMd: ["!16px", { lineHeight: "!24px" }],
      //   textSm: ["!14px", { lineHeight: "!20px" }],
      //   textXs: ["!12px", { lineHeight: "!16px" }],
      //   textXxs: ["!10px", { lineHeight: "!12px" }],
      // },
    },
  },
  variants: {
    extend: {
      innerHeight: ["last"],
      outerHeight: ["last"],
      eight: ["last"],
    },
  },
  plugins: [require("daisyui")],
};
export default config;
