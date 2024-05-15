import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,md,mdx}", "./components/**/*.{js,ts,jsx,tsx,md,mdx}"],
  daisyui: {
    darkTheme: "dracula",
    themes: [
      {
        lemonade: {
          ...require("daisyui/src/theming/themes")["lemonade"],
          neutral: "#212221",
          primary: "#cb6e76",
          secondary: "#6ECBC3",
          "#main": {
            "--gradient-light":
              "linear-gradient(187deg, rgba(248,253,239,1) 2%, rgba(203,110,118,0.05) 24%, rgba(203,110,118,0.05) 83%, rgba(248,253,239,1) 95%)",
            "--bg-light": "url(/backgrounds/texture-light.svg)",
            background: "var(--bg-light)",
            "background-repeat": "no-repeat",
            "background-size": "cover ",
            "background-blend-mode": "multiply",
            "min-height": "100vh",
            "border-bottom-width": "2px",
            "--tw-border-opacity": "1",
            "border-bottom-color":
              "var(--fallback-p,oklch(var(--p)/var(--tw-border-opacity)))",
            padding: "4rem 0.5rem 0.5rem 0.5rem",
          },
        },
        dracula: {
          ...require("daisyui/src/theming/themes")["dracula"],
          primary: "#3caba2",
          "#main": {
            "--gradient-dark":
              "linear-gradient(185deg, rgba(40,42,54,0.90) 2%, rgba(59,168,159,0) 24%, rgba(60,171,162,0.0) 80%, rgba(40,42,54,0.95) 95%)",
            "--bg-dark": "url(/backgrounds/texture-dark.svg)",
            " background": "var(--bg-dark)",
            "background-repeat": "no-repeat",
            "background-size": "cover ",
            "background-blend-mode": "screen",
            "min-height": "100vh",
            "border-bottom-width": "2px",
            "--tw-border-opacity": "1",
            "border-bottom-color":
              "var(--fallback-p,oklch(var(--p)/var(--tw-border-opacity)))",
            padding: "4rem 0.5rem 0.5rem 0.5rem",
          },
        },
      },
    ],
  },
  plugins: [typography, daisyui],
};

export default config;
