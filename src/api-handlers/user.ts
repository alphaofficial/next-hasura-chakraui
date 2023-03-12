import maskEmail from "@/utils/mask-email";
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  name: string;
  email: boolean;
};

export type MaskUserPayload = {
  created_at: string;
  email: string;
  id: string;
  name: string;
  password: string;
  updated_at: string;
};

export function handleUserEmail(req: NextApiRequest, res: NextApiResponse) {
  console.log("triggered", "email sent");
  res.status(200).end();
}

export function handleUserMask(
  req: NextApiRequest,
  res: NextApiResponse<MaskUserPayload>
) {
  const { user } = req.body.input;
  console.log("triggered", "email masked");

  res.json({
    created_at: user.created_at,
    email: maskEmail(user.email),
    id: user.id,
    name: user.name,
    password: user.password,
    updated_at: user.updated_at,
  });
}
