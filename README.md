# Next JS + ChakraUI + GraphQL + React Query + TypeScript templatae

This is a template for Next.js + ChakraUI + GraphQL + React Query + TypeScript.
It supports SSR via React Query Hydrate.

## Getting Started

### Installation

```bash
npm install
```

### Development

This will start the docker container for hasura and postgres, launch the console and start the app

```bash
npm run start:dev
```

### Production

```bash
npm run build
npm run start
```

## Other

### Setting hasura actions url locally **(optional)**

Open a tunnel using ngrok or cloudflare to the running app and add the https host to hasura
You can add this from the admin dashboard or from env

## Applying migrations and metadata to fresh db
