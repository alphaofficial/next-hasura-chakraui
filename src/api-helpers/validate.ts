import { NextApiRequest, NextApiResponse } from "next";

const { NEXT_PUBLIC_CLIENT_ID } = process.env;
// protect API route
export default function validateRoute(handler: any) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.headers["x-client-id"] !== NEXT_PUBLIC_CLIENT_ID) {
      res.status(401);
      res.json({ error: "Not authorized" });
      return;
    }
    return handler(req, res);
  };
}
