import { useEffect, useState } from "react";

export const useThemeDetect = () => {
  const getCurrentTheme = () =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;
  const [isDarkThemeByDefault, setisDarkThemeByDefault] = useState(getCurrentTheme());
  const mediaQueryListener = (e: any) => {
    setisDarkThemeByDefault(e.matches);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMediaQuery.addListener(mediaQueryListener);
      return () => darkThemeMediaQuery.removeListener(mediaQueryListener);
    } else {
      return () => {};
    }
  }, []);

  return isDarkThemeByDefault;
};

export default useThemeDetect;
