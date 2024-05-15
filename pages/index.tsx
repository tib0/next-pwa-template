import { useState, type ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import HomeLayout from "@/layout/home";
import Head from "next/head";

const Page: NextPageWithLayout = () => {
  const [isComplete, setIsComplete] = useState(false);
  const cacheContent = async () => {
    const res = await window.serwist.messageSW({ action: "a-cool-action" });
    setIsComplete(res);
  };
  return (
    <div
      className={`
      pt-16 sm:pt-16 
      p-2 sm:p-4 
      flex flex-col items-center
      justify-center`}
    >
      <div className="prose w-full max-w-full sm:w-[80%] sm:max-w-4xl my-2">
        <h1>Hello world</h1>
        <span>
          <p>A GitHub Template for TypeScript-Powered Progressive Web Apps 🚀</p>
          <p>
            The NextJS PWA Template is a comprehensive GitHub template that combines the power
            of Next.js 14, Servist, DaisyUI, React, and Tailwind CSS to create cutting-edge,
            TypeScript-powered Progressive Web Apps (PWAs).
          </p>
          <p>
            This template aims to streamline the process of building and deploying PWAs on
            GitHub.
          </p>
        </span>
        <div className="btn btn-primary shadow-lg" tabIndex={0} onClick={cacheContent}>
          {isComplete ? "Sent" : "Not sent"}
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeLayout>
      <Head>
        <title>{"Home - " + process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      {page}
    </HomeLayout>
  );
};

export default Page;
