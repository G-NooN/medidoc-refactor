import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1200px"
    },
    colors: {
      white: "#FFFFFF",
      gray: {
        100: "#E5E5E5B3",
        200: "#E5E5E580",
        300: "#E5E5E5",
        400: "#CCCCCC",
        500: "#B3B3B3",
        600: "#999999",
        700: "#878787",
        800: "#4A4A4A"
      },
      black: "#1C1C1C",
      orange: "#FF9A00",
      yellow: "#FEF4C0",
      blue: "#387ADF",
      red: "#F95F5F",
      kakao: "#FDE401"
    },
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"]
      }
    }
  },
  plugins: [
    ({ addUtilities }) => {
      const customFonts = {
        ".regular-12": {
          fontSize: "12px",
          fontWeight: 400
        },
        ".regular-13": {
          fontSize: "13px",
          fontWeight: 400
        },
        ".regular-14": {
          fontSize: "14px",
          fontWeight: 400
        },
        ".regular-16": {
          fontSize: "16px",
          fontWeight: 400
        },
        ".regular-18": {
          fontSize: "18px",
          fontWeight: 400
        },
        ".regular-20": {
          fontSize: "20px",
          fontWeight: 400
        },
        ".regular-22": {
          fontSize: "22px",
          fontWeight: 400
        },
        ".regular-24": {
          fontSize: "24px",
          fontWeight: 400
        },
        ".regular-26": {
          fontSize: "26px",
          fontWeight: 400
        },
        ".regular-28": {
          fontSize: "28px",
          fontWeight: 400
        },
        ".medium-12": {
          fontSize: "12px",
          fontWeight: 500
        },
        ".medium-13": {
          fontSize: "13px",
          fontWeight: 500
        },
        ".medium-14": {
          fontSize: "14px",
          fontWeight: 500
        },
        ".medium-16": {
          fontSize: "16px",
          fontWeight: 500
        },
        ".medium-18": {
          fontSize: "18px",
          fontWeight: 500
        },
        ".medium-20": {
          fontSize: "20px",
          fontWeight: 500
        },
        ".medium-22": {
          fontSize: "22px",
          fontWeight: 500
        },
        ".medium-24": {
          fontSize: "24px",
          fontWeight: 500
        },
        ".medium-26": {
          fontSize: "26px",
          fontWeight: 500
        },
        ".medium-28": {
          fontSize: "28px",
          fontWeight: 500
        },
        ".semibold-12": {
          fontSize: "12px",
          fontWeight: 600
        },
        ".semibold-13": {
          fontSize: "13px",
          fontWeight: 600
        },
        ".semibold-14": {
          fontSize: "14px",
          fontWeight: 600
        },
        ".semibold-16": {
          fontSize: "16px",
          fontWeight: 600
        },
        ".semibold-18": {
          fontSize: "18px",
          fontWeight: 600
        },
        ".semibold-20": {
          fontSize: "20px",
          fontWeight: 600
        },
        ".semibold-22": {
          fontSize: "22px",
          fontWeight: 600
        },
        ".semibold-24": {
          fontSize: "24px",
          fontWeight: 600
        },
        ".semibold-26": {
          fontSize: "26px",
          fontWeight: 600
        },
        ".semibold-28": {
          fontSize: "28px",
          fontWeight: 600
        },
        ".bold-12": {
          fontSize: "12px",
          fontWeight: 700
        },
        ".bold-13": {
          fontSize: "13px",
          fontWeight: 700
        },
        ".bold-14": {
          fontSize: "14px",
          fontWeight: 700
        },
        ".bold-16": {
          fontSize: "16px",
          fontWeight: 700
        },
        ".bold-18": {
          fontSize: "18px",
          fontWeight: 700
        },
        ".bold-20": {
          fontSize: "20px",
          fontWeight: 700
        },
        ".bold-22": {
          fontSize: "22px",
          fontWeight: 700
        },
        ".bold-24": {
          fontSize: "24px",
          fontWeight: 700
        },
        ".bold-26": {
          fontSize: "26px",
          fontWeight: 700
        },
        ".bold-28": {
          fontSize: "28px",
          fontWeight: 700
        }
      };

      addUtilities(customFonts);
    }
  ]
};
export default config;
