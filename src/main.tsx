import { PrismicProvider } from "@prismicio/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { client } from "./services/prismic";

ReactDOM.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
