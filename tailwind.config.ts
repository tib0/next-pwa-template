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
          "#home": {
            "--gradient-light":
              "linear-gradient(187deg, rgba(248,253,239,1) 2%, rgba(203,110,118,0.05) 24%, rgba(203,110,118,0.05) 83%, rgba(248,253,239,1) 95%)",
            "--bg-light":
              "url(/backgrounds/wave-light.svg), var(--gradient-light), url(/backgrounds/texture-light.svg)",
            background: "var(--bg-light)",
            "background-repeat": "repeat, repeat, no-repeat",
            "background-size": "auto, auto, cover ",
            "background-blend-mode": "hue, hue, multiply",
          },
        },
        dracula: {
          ...require("daisyui/src/theming/themes")["dracula"],
          primary: "#3caba2",
          "#home": {
            "--gradient-dark":
              "linear-gradient(185deg, rgba(40,42,54,0.90) 2%, rgba(59,168,159,0) 24%, rgba(60,171,162,0.0) 80%, rgba(40,42,54,0.95) 95%)",
            "--bg-dark":
              "url(/backgrounds/wave-dark.svg), var(--gradient-dark), url(/backgrounds/texture-dark.svg)",
            " background": "var(--bg-dark)",
            "background-repeat": "repeat, repeat, no-repeat",
            "background-size": "auto, auto, cover ",
            "background-blend-mode": "hue, difference, screen",
          },
        },
      },
    ],
  },
  plugins: [typography, daisyui],
};

export default config;
