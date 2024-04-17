import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
//--- rtk
import { Provider } from "react-redux";
import store from "./09-rtk/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
