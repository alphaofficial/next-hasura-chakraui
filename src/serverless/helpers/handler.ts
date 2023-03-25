import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

/**
 * Handler class
 * Because api routes are serverless functions, we need to create
 * a new instance of next-connect for each request.
 */
export class Handler {
  handler = nc<NextApiRequest, NextApiResponse>({
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
}

export default Handler;
