const { JWT_SECRET, NODE_ENV, GRAPHQL_URL, GRAPHQL_ADMIN_SECRET } =
  process.env as Record<string, string>;

const baseConfig = {
  APP_NAME: "My App",
  VERSION: "1.0.0",
  JWT: {
    SECRET: JWT_SECRET,
    EXPIRES_IN: "1d",
  },
  AWS: {
    S3: {
      BUCKET: "my-bucket",
      REGION: "us-east-1",
    },
  },
  GRAPHQL_URL,
  GRAPHQL_ADMIN_SECRET,
} as const;

const evnConfig = {
  development: {
    JWT: {
      ...baseConfig.JWT,
      EXPIRES_IN: "14d",
    },
    ENVIRONMENT: "development",
  },
  production: {
    JWT: {
      ...baseConfig.JWT,
      EXPIRES_IN: "7d",
    },
    ENVIRONMENT: "production",
  },
} as const;

type EnvKey = keyof typeof evnConfig;

const config = {
  ...baseConfig,
  ...evnConfig[(NODE_ENV as EnvKey) || "development"],
} as const;

export default config;
