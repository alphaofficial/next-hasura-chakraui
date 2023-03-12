import { hashPassword } from "@/api-handlers/auth";
import type { NextApiRequest, NextApiResponse } from "next";

export default function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      return hashPassword(req, res);
    case "GET":
      return res.status(405).end();
    default:
      return res.status(405).end();
  }
}
