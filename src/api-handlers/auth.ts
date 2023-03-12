import { MutationRegisterArgs } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

export function hashPassword(req: NextApiRequest, res: NextApiResponse) {
  const { user }: MutationRegisterArgs = req.body.input;
  let hashPassword = bcrypt.hashSync(user.password, 10);
  user.password = hashPassword;

  // success
  return res.json({
    ...user,
  });
}
