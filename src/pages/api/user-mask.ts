// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleUserMask, MaskUserPayload } from "@/handlers/user";
import type { NextApiRequest, NextApiResponse } from "next";

// this webhook is triggered before the user is created
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MaskUserPayload>
) {
  switch (req.method) {
    case "POST":
      return handleUserMask(req, res);
    case "GET":
      return res.status(405).end();
    default:
      return res.status(405).end();
  }
}
