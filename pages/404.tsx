import { useRouter } from "next/router";
import { NextPageWithLayout } from "./_app";
import { ReactElement, JSXElementConstructor } from "react";
import { getLayout } from "@/lib/homeLayout";

const Custom404: NextPageWithLayout = () => {
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
          <h1 className="font-semibold user-select-none">{`Oops !`}</h1>

          <span className="text-4xl" role="img" aria-labelledby="monkey-face">
            🙈
          </span>

          <p className="text-base user-select-none">
            {`You've landed in the mysterious zone of 404 errors, where even pages hide sometimes. 🕵️‍♂️ Check your URL, and if the page is playing hide-and-seek, contact our technical team. 🚀 We're working hard to avoid these unexpected detours. Thank you for your patience and sense of adventure! 🌐✨`}
          </p>

          <p className="font-extralight user-select-none">{`Return to the main page by following this link.`}</p>

          <div
            role="button"
            className="btn shadow-xl btn-primary p-4"
            onClick={() => router.back()}
          >
            {`Back`}
          </div>
        </div>
      </div>
    </div>
  );
};

Custom404.getLayout = (page: ReactElement<any, string | JSXElementConstructor<any>>) =>
  getLayout(page, "404");

export default Custom404;
