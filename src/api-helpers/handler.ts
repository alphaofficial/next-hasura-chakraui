import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, _req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Server could not process the request");
  },
  onNoMatch: (req, res) => {
    res
      .status(404)
      .end(`There was no match for the requested endpoint, ${req.url}`);
  },
});

export default handler;
