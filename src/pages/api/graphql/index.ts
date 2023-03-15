import validateRoute from "@/api-helpers/validate";
import handler from "@/api-helpers/handler";
import { graphqlHandler } from "@/api-handlers/graphql";

/**
 * This is the handler for the /api/graphql
 */
const gql = handler.post(validateRoute(graphqlHandler));

export default gql;
