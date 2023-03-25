import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import cookie from "cookie";
import { UserLogin } from "@/common/types";
import graphqlSDK from "@/serverless/lib/client";
import { COOKIE_OPTIONS } from "@/common/constants";

export async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password }: UserLogin = req.body;
    if (!email || !password) {
      res
        .status(400)
        .json({ data: null, message: "Please enter email and password" });
      return;
    }

    const userResponse = await graphqlSDK.UserByEmail({ email });

    if (userResponse.users.length === 0) {
      res.status(404).json({ data: null });
      return;
    }

    if (userResponse.users.length > 1) {
      res.status(500).json({ data: null });
      return;
    }

    const user = userResponse.users[0];
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect) {
      res
        .status(400)
        .json({ data: null, message: "Email or password is not correct" });
      return;
    }

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("user", JSON.stringify(user), {
        ...COOKIE_OPTIONS,
        maxAge: 60 * 60 * 24 * 7, // 1 week
      })
    );
    return res.status(200).json({ data: user });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ data: null });
  }
}
