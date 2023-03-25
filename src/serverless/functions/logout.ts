import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { COOKIE_OPTIONS } from "@/common/constants";

export async function logoutHandler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("user", "", {
      ...COOKIE_OPTIONS,
      maxAge: 0,
      expires: new Date(0),
    })
  );

  return res.status(200).json({ data: null });
}
