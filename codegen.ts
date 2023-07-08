import type { CodegenConfig } from "@graphql-codegen/cli";

const { CODEGEN_SCHEMA, CODEGEN_ADMIN_SECRET } = process.env;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [CODEGEN_SCHEMA!]: {
        headers: {
          "x-hasura-admin-secret": CODEGEN_ADMIN_SECRET!,
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
    "src/client/generated/graphql.ts": {
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
        fetcher: "@/client/lib/fetcher#fetcher",
      },
    },
    "src/serverless/generated/server-sdk.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        skipTypename: true,
        scalars: {
          Date: "string",
          ObjectID: "string",
          timestamptz: "string",
          uuid: "string",
        },
      },
    },
  },
};

export default config;
