import { handleUserEmail } from "@/api-handlers/user";
import type { NextApiRequest, NextApiResponse } from "next";
import validateRoute from "@/api-handlers/validate";

/**
 * This is the handler for the /api/webhooks/email-user route.
 */
export default validateRoute(function emailUserHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return handleUserEmail(req, res);
  }
  return res.status(405).end();
});
