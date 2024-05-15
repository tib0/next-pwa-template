import Meta from "@/components/meta";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" style={{ scrollBehavior: "smooth" }} lang="en">
      <Head>
        <Meta />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
