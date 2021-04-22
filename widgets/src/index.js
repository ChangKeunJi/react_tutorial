import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import App from "./components/App.js";

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
