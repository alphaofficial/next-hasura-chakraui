import HASURA_CLIENT from "@/api-lib/client";
import { NextApiRequest, NextApiResponse } from "next";

export async function graphqlHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await HASURA_CLIENT.post("", {
      query: req.body.query,
      variables: req.body.variables,
    });
    if (response.data) {
      res.status(200).json(response.data);
      return;
    }
    res.status(500).json({ data: null });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ data: null });
  }
}
