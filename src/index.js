import React from "react";
import ReactDOM from "react-dom";
import Phrases from "./components/Phrases";
import configureStore from "./shared/redux/configureStore";
import { Provider } from "react-redux";
import "./styles.css";
// Configuring Redux Store
const store = configureStore(window.initialState);

function App(props) {
  return (
    <Provider store={store}>
      <Phrases />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
