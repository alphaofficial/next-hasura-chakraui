// Seems to be a problem with graphql-request 5.2.0, pinning it to 5.1.0 fixes the problem
import { GraphQLClient } from "graphql-request";
import { getSdk } from "@/serverless/generated/server-sdk";
import config from "@/common/config";

export const graphQLClient = new GraphQLClient(config.GRAPHQL_URL, {
  headers: {
    "x-hasura-admin-secret": config.GRAPHQL_ADMIN_SECRET,
  },
});

const graphqlSDK = getSdk(graphQLClient);
export default graphqlSDK;
