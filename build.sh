#!/bin/bash

# Start processes, one line per process
export NODE_OPTIONS="" &&
npm i -g hasura-cli --save &&
npm run metadata:apply &&
npm run migration:apply &&
npm run metadata:apply &&
npm run generate &&
next build