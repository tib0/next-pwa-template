import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "sw.ts",
  swDest: "public/sw.js",
});

const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
};
export default withSerwist(nextConfig);
