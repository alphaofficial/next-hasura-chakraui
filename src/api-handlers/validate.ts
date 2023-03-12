import { NextApiRequest, NextApiResponse } from "next";

// protect API route
export default function validateRoute(handler: any) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    /**
     * Run some validations here
     */

    const valid = true;
    if (valid) return handler(req, res);
    res.status(401);
    res.json({ error: "Not authorized" });
  };
}
