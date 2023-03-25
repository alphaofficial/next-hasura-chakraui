import { graphqlHandler } from "@/serverless/functions/graphql";
import Handler from "@/serverless/helpers/handler";

/**
 * This is the handler for the /api/graphql
 */
const api = new Handler();
const gql = api.handler.post(graphqlHandler);

export default gql;
