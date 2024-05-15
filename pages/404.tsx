import Head from "next/head";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME + " - 404"}</title>
      </Head>

      <div className="hero min-h-screen bg-base-300 border-b-primary border-b-2">
        <div className="hero-content mt-10 text-center bg-base-100 bg-opacity-20 backdrop-blur transition-shadow sm:rounded-xl">
          <div className="max-w-md">
            <h1 className="font-semibold user-select-none">{`Oops !`}</h1>

            <h1 className="pt-4 font-semibold user-select-none">
              <span className="chuckle" role="img" aria-labelledby="chuckle">
                🙈
              </span>
            </h1>

            <p className="py-6 text-base user-select-none">
              {`You've landed in the mysterious zone of 404 errors, where even pages hide sometimes. 🕵️‍♂️ Check your URL, and if the page is playing hide-and-seek, contact our technical team. 🚀 We're working hard to avoid these unexpected detours. Thank you for your patience and sense of adventure! 🌐✨`}
            </p>

            <p className="pb-2 font-extralight user-select-none">{`Return to the main page by following this link.`}</p>

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
    </>
  );
}
