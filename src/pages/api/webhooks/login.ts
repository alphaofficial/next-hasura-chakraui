import { hashPassword } from "@/api-handlers/auth";
import validateRoute from "@/api-handlers/validate";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * This is the login handler for the login route.
 */
export default validateRoute(function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return hashPassword(req, res);
  }
  return res.status(405).end();
});
