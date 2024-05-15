import Head from "next/head";
import { useRouter } from "next/router";

export default function Custom500() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME + " - Erreru 500"}</title>
      </Head>

      <div id="blog" className="hero min-h-screen bg-base-300 border-b-primary border-b-2">
        <div className="hero-content mt-10 text-center bg-base-100 bg-opacity-20 backdrop-blur transition-shadow sm:rounded-xl">
          <div className="max-w-md">
            <h1 className="font-semibold user-select-none">{`Oh crap!`}</h1>

            <h1 className="pt-4 font-semibold user-select-none">
              <span className="chuckle" role="img" aria-labelledby="chuckle">
                🚨
              </span>
            </h1>

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
              {`Return`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
