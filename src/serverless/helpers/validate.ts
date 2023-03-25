import { NextApiRequest, NextApiResponse } from "next";

export default function validateRoute(handler: any) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // check if the request is coming from the same origin

    // run validations

    return handler(req, res);
  };
}
