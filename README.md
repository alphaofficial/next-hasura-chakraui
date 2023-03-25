# Next JS with Hasura GraphQL + React Query template

This is a template for Next.js + ChakraUI + Hasura GraphQL + React Query + TypeScript.
It supports SSR via React Query Hydrate.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before we get started, we're going to need to make sure we have a few things installed and available on our machine.

#### Node >= 12

##### MacOS

```bash
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

##### Other

See the installation guides available @ nodejs.org:

https://nodejs.org/en/download/package-manager/

### Installation

Below is a series of step by step instructions that tell you how to get a development env running.

Create a repository from this template
Create a local clone of your repository

```bash
git clone <your-repo-url>
```

Enter the project directory

```bash
cd <your-repo-name>
```

Install the dependencies

```bash
npm install
```

## Setup

### Local development

```bash
docker-compose up -d
```

This will start the docker container for hasura engine and postgres

Create a .env file

```bash
cp .env.example .env
```

Populate the .env file with your environment variables

Start the application

```bash
npm run start:dev
```

This will first sync the hasura metadata and migrations, generate the typescript types for the graphql schema and start the nextjs dev server

The project should now be available at http://localhost:3000

Launch the hasura console

```bash
npm run console
```

The console should now be available at http://localhost:9695

Unit tests

```bash
npm run test
```

### Production

For production get a free hasura cloud and connect a postgres db
Render io is a good option for db hosting

Hasura supports a lot of cloud providers

```bash
npm run build
npm run start
```

## Migrations

Hasura supports migrations via the hasura cli
Any change you make in the console will automatically generate metadata and migrations in the metadata and migrations folder
Optionally you can add your custom migration scripts in the migrations folder
Refer to the docs for more info

## Note

> The database name should be the same as the database name used in development
