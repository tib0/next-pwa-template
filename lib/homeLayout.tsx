import HomeLayout from "@/layout/home";
import Head from "next/head";
import { ReactElement } from "react";

export function getLayout(page: ReactElement, title: string): ReactElement {
  return (
    <HomeLayout>
      <Head>
        <title>{`${title} - ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
      </Head>
      <div id="main">{page}</div>
    </HomeLayout>
  );
}
