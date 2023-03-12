#!/bin/bash

# Start processes, one line per process
docker-compose up -d
npm run console &
npm run dev

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?