## What and Why

- ### What is it :question:

  - Express app, React app (vite), with Typescript :heart:

- ### But why :question: :question:
  - Because I like the express / react / typescript combo, but hate setting it up :poop:
  - I also like the hot refreshing of server and client, and luckily, this allows both, while still building to a single app, and not by just refreshing the server to refresh the page, but and actual client server that refreshes the page

## Getting started

1. Fork the repository
1. Clone from you're freshly forked repository
1. Install packages and run dev
   - for `npm` (node 18.11.0 is what I'm using)
   ```sh
   $ npm ci
   $ npm run dev
   ```
   - for `yarn` (yarn 1.22.19 is what I'm using)
   ```sh
   $ yarn
   $ yarn run dev
   ```
1. Thats it for development :tada:

## Scripts

- #### To run them with `npm`, use `$ npm run {script-name}`

- #### To run them with `yarn`, use `$ yarn {script-name}`

```json
    // runs the backend dev server with hot refresh 
    "dev-backend": "nodemon --quiet backend/entry.ts",
    // runs the frontend dev server, with hot refresh 
    "dev-frontend": "vite",
    // runs the previous to commands concurrently, which means hot refresh for both 
    "dev": "concurrently \"yarn run dev-frontend\" \"yarn run dev-backend\"",
    // builds the backend to build folder
    "build-backend": "cd backend && tsc",
    // builds the frontend to build/public folder
    "build-frontend": "cd frontend && tsc && cd .. && vite build",
    // runs previous two commands
    "build": "yarn build-backend && yarn build-frontend",
    // called automatically when running prod command for a fresh build
    "preprod": "yarn run build",
    // sets NODE_ENV to production, and runs the app
    "prod": "NODE_ENV=production node build/entry.js",
    // used when debugging build to prevent recreating build folder with prod script
    "debug-build": "NODE_ENV=production DEBUG=* node build/entry.js"
```
