import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureFakeBackend } from "./helps/fake-backend";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddle from "redux-saga";
import rootReduce from "./redux/reducers";
import rootSaga from "./redux/sagas";
import { Provider } from "react-redux";

configureFakeBackend();

const saga = createSagaMiddle();
const store = createStore(
  rootReduce,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(rootSaga);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
