// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

const hello = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    name: "Hello world !",
  });
};

export default hello;
