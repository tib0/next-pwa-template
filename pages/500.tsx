import { useRouter } from "next/router";
import { NextPageWithLayout } from "./_app";
import { ReactElement, JSXElementConstructor } from "react";
import { getLayout } from "@/lib/homeLayout";

const Custom500: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <div
      className={`
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
          <h1 className="font-semibold user-select-none">{`Oh crap!`}</h1>

          <span className="text-4xl" role="img" aria-labelledby="chuckle">
            🚨
          </span>

          <p className="py-6 text-base user-select-none">
            {`Something has gone awry on our site, and error 500 is causing a bit of chaos. 🌀 Our teams and I are working to resolve this mystery. 🕵️‍♀️ In the meantime, you can relax with a virtual cup of coffee ☕ and try again later. Thank you for your understanding and zen attitude! 🧘‍♂️🔧`}
          </p>

          <p className="pb-2 user-select-none font-extralight">
            {`Try returning to the main page by following this link.`}
          </p>

          <div
            role="button"
            className="btn shadow-xl btn-primary mt-4 p-4"
            onClick={() => router.back()}
          >
            {`Back`}
          </div>
        </div>
      </div>
    </div>
  );
};

Custom500.getLayout = (page: ReactElement<any, string | JSXElementConstructor<any>>) =>
  getLayout(page, "500");

export default Custom500;
