import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, compose, applyMiddleware } from "redux"
import { offline } from "@redux-offline/redux-offline"
import offlineConfig from "@redux-offline/redux-offline/lib/defaults"
import thunk from "redux-thunk"
import reducer from "./reducers"

import "./index.css"
import App from "./App"

// import registerServiceWorker from './registerServiceWorker';

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  )

// await fetch of persisted store before render
offlineConfig.persistCallback = render
// configure redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk), offline(offlineConfig))
)

// registerServiceWorker();
