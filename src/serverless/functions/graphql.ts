import { NextApiRequest, NextApiResponse } from "next";
import { graphQLClient } from "@/serverless/lib/client";

export async function graphqlHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { query, variables } = req.body;
    const data = await graphQLClient.request(query, variables);
    res.status(200).json({ data });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ data: null });
  }
}
