import type { Config } from "tailwindcss";

// const region = (process.env.REGION || "asia") as "us" | "eu" | "asia" | "africa" | "oceania";
const region = (process.env.REGION) as "us" | "eu" | "asia" | "africa" | "oceania";

const regionColors = {
  us: {
    blue: {
      "40": "#E5F2FF",
      "50": "#8fa0e4c2",
      "100": "#F0F3FF",
      "200": "#CEE7FF",
      "300": "#d1d5db",
      "400": "#F0F3FF",
      "500": "#6b7280",
      "700": "#374151",
      "800": "#1f2937",
      default: "#5264ae",
    },
  },
  eu: {
    blue: {
      "40": "#b7d5cb",
      "50": "#11574052",
      "100": "#5a9984",
      "200": "#CEE7FF",
      "300": "#d1d5db",
      "400": "#b7d5cb",
      "500": "#6b7280",
      "700": "#374151",
      "800": "#1f2937",
      default: "#115740",
    },
  },
  asia: {
    blue: {
      "40": "#DFF9FB",
      "50": "#75D5E8",
      "100": "#00A8FF",
      "200": "#4BCFFA",
      "300": "#83D0F2",
      "400": "#67BCE3",
      "500": "#4A69BD",
      "700": "#273C75",
      "800": "#192A56",
      default: "#00A8FF",
    },
  },
  africa: {
    blue: {
      "40": "#F8EFBA",
      "50": "#F6D155",
      "100": "#FFC312",
      "200": "#F97F51",
      "300": "#EE5A24",
      "400": "#EA2027",
      "500": "#C23616",
      "700": "#A71B0E",
      "800": "#6F1E51",
      default: "#F97F51",
    },
  },
  oceania: {
    blue: {
      "40": "#7F8FA6",
      "50": "#273C75",
      "100": "#192A56",
      "200": "#40739E",
      "300": "#44BD32",
      "400": "#4CD137",
      "500": "#487EB0",
      "700": "#353B48",
      "800": "#2F3640",
      default: "#4CD137",
    },
  },
};

const colorsForRegion = regionColors[region];

const config: Config = {
  darkMode: ["class"],
  content: [
    `./src/region-${region}/**/*.{js,ts,jsx,tsx,mdx}`, // Dynamically include region-specific paths
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1420px",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(rgba(0, 290, 258, 1) 0%, rgba(0, 136, 255, 1) 32%)",
      },
      colors: {
        blue: colorsForRegion.blue,
        gray: {
          "100": "#333343",
          "200": "#575757",
          "300": "#F8F8F8",
          "500": "#6b7280",
          "700": "#374151",
          "800": "#DFDFDF",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
