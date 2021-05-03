import ReactDOM from "react-dom";
import App from "./components/App";
import reducers from "./reducers";

import { Provider } from "react-redux";
import { createStore } from "redux";

import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

if (module.hot) {
  module.hot.accept();
}

// Provider => App => Connect => SongList

// Provider
// Takes a Store as a prop and goes top of App
// It means providing all the information to Components

// Connect
// Communicates with the Provider.
