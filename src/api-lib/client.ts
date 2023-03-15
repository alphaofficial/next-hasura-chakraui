import axios from "axios";

const { HASURA_GRAPHQL_ADMIN_SECRET, NEXT_PUBLIC_HASURA_GRAPHQL_URL } =
  process.env;

const HASURA_CLIENT = axios.create({
  baseURL: NEXT_PUBLIC_HASURA_GRAPHQL_URL,
  headers: {
    "x-hasura-admin-secret": HASURA_GRAPHQL_ADMIN_SECRET,
  },
});

export default HASURA_CLIENT;
