import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import App from "./components/App";

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
