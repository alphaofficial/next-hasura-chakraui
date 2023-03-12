import { hashPassword } from "@/api-handlers/auth";
import validateRoute from "@/api-handlers/validate";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * @description This is the register handler
 */
export default validateRoute(function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return hashPassword(req, res);
  }
  return res.status(405).end();
});
