# todo-react-redux-offline

## Description

React / Redux Todo app with offline support and 'optimistic updates', intended to be paired with the backend service [here](https://github.com/thepeted/serverless-todo). The application is bootstrapped by [Create-react-app](https://github.com/facebook/create-react-app) with offline caching of static assets enabled.

The application implements [redux-offline](https://github.com/redux-offline/redux-offline) to remain functional offline:

- Application state in the redux store is persisted in browser storage.
- Pending or failed updates to the backend service are queued until network is available.

## Redux Dev Tools

The project supports the [Redux Dev Tools extension](https://github.com/zalmoxisus/redux-devtools-extension)

## Run locally

1.  Export the base URI of the [backend todos API](https://github.com/thepeted/serverless-todo) service to an environment variable named `REACT_APP_API_BASE`
2.  `npm start` or `yarn start`

## Build

1.  export the base URI of the [backend todos API](https://github.com/thepeted/serverless-todo) service to an environment variable named `REACT_APP_API_BASE`
2.  `npm run build` or `yarn build`
