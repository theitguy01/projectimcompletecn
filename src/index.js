import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import movies from "./reducers";

import "./index.css";
import App from "./component/App";
import movies from "./reducers";

const store = createStore(movies);
console.log("store", store);
console.log("STATE", store.getState());

store.dispatch({
  type: "ADD_MOVIES",
  movies: [{ name: "Superman " }]
});

ReactDOM.render(<App />, document.getElementById("root"));

// state resides in store
// ui , actions , reducers , store
// ui is the component folder
