import type { CodegenConfig } from "@graphql-codegen/cli";

const { NEXT_PUBLIC_HASURA_GRAPHQL_URL, HASURA_GRAPHQL_ADMIN_SECRET } =
  process.env;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [NEXT_PUBLIC_HASURA_GRAPHQL_URL!]: {
        headers: {
          "x-hasura-admin-secret": HASURA_GRAPHQL_ADMIN_SECRET!,
        },
      },
    },
  ],
  config: {
    skipTypename: true,
    enumsAsTypes: true,
    scalars: {
      numeric: "number",
    },
  },
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        noHOC: true,
        noComponents: true,
        noNamespaces: true,
        withHooks: true,
        withSubscriptionHooks: true,
        exposeQueryKeys: true, // We use it as the key for the react query without having to manually give a string.
        exposeMutationKeys: true, // We use it as the key for the react query without having to manually give a string.
        exposeFetcher: true, // exposes a fetch to use for SSR,
        fetcher: {
          endpoint: NEXT_PUBLIC_HASURA_GRAPHQL_URL!,
          fetchParams: {
            headers: {
              "Content-Type": "application/json",
              "x-hasura-admin-secret": HASURA_GRAPHQL_ADMIN_SECRET!,
            },
          },
        },
      },
    },
  },
};

export default config;
