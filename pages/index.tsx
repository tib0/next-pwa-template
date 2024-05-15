import { JSXElementConstructor, ReactElement, useState } from "react";
import type { NextPageWithLayout } from "./_app";
import { getLayout } from "@/lib/homeLayout";

const Home: NextPageWithLayout = () => {
  const [isComplete, setIsComplete] = useState(false);
  const cacheContent = async () => {
    const res = await window.serwist.messageSW({ action: "a-cool-action" });
    setIsComplete(res);
  };
  return (
    <div
      className={`
        flex flex-col items-center
        justify-center
      `}
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
        <button className="btn btn-primary shadow-lg" tabIndex={0} onClick={cacheContent}>
          {isComplete ? "Sent" : "Not sent"}
        </button>
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement<any, string | JSXElementConstructor<any>>) =>
  getLayout(page, "Home");

export default Home;
