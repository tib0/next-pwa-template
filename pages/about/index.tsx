import { useState, type ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
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
      <div className="prose w-full max-w-full sm:w-[80%] sm:max-w-4xl">
        <div
          className={`
          text-center justify-center
          bg-base-100 bg-opacity-20 backdrop-blur 
          transition-shadow shadow-xl rounded-none sm:rounded-xl
          px-8 py-6 m-1 sm:m-5 text-base-content 
        `}
        >
          <h1 className="font-bold">About...</h1>
          <span>
            <p>A GitHub Template for TypeScript-Powered Progressive Web Apps 🚀</p>
            <p>
              The NextJS PWA Template is a comprehensive GitHub template that combines the
              power of Next.js 14, Servist, DaisyUI, React, and Tailwind CSS to create
              cutting-edge, TypeScript-powered Progressive Web Apps (PWAs).
            </p>
            <p>
              This template aims to streamline the process of building and deploying PWAs on
              GitHub.
            </p>
            <div
              role="button"
              tabIndex={0}
              className="btn btn-primary shadow-lg"
              onClick={cacheContent}
            >
              {isComplete ? "Sent" : "Not sent"}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeLayout>
      <Head>
        <title>{"About - " + process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      {page}
    </HomeLayout>
  );
};

export default Page;
