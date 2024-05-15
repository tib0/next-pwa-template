import "../styles/index.css";
import React from "react";
import { Titillium_Web } from "next/font/google";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "900"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${titillium.style.fontFamily};
          }
        `}
      </style>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
