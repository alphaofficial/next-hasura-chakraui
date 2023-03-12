// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleUserMask, MaskUserPayload } from "@/api-handlers/user";
import validateRoute from "@/api-handlers/validate";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * This is the handler for the user-mask webhook.
 */
export default validateRoute(function handler(
  req: NextApiRequest,
  res: NextApiResponse<MaskUserPayload>
) {
  if (req.method === "POST") {
    return handleUserMask(req, res);
  }
  return res.status(405).end();
});
