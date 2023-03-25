import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import cookie from "cookie";
import { UserRegister } from "@/common/types";
import graphqlSDK from "@/serverless/lib/client";
import { COOKIE_OPTIONS } from "@/common/constants";

export async function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, email, password }: UserRegister = req.body;

    const userResponse = await graphqlSDK.UserByEmail({ email });

    if (userResponse.users.length) {
      res.status(409).json({ data: null, message: "Email already registered" });
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const createUserResponse = await graphqlSDK.CreateUser({
      email,
      password: hashedPassword,
      name,
    });

    const user = createUserResponse.insertUsersOne;

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("user", JSON.stringify(user), COOKIE_OPTIONS)
    );

    return res.status(200).json({ data: user });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ data: null });
  }
}
