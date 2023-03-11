// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleUserEmail } from "@/handlers/user";
import type { NextApiRequest, NextApiResponse } from "next";

// this webhook is triggered when a user is created
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return handleUserEmail(req, res);
    case "GET":
      return res.status(405).end();
    default:
      return res.status(405).end();
  }
}
