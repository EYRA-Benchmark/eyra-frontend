import "font-awesome/css/font-awesome.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import { getSettings, settings } from "./settings";

import { UserProvider } from "./context/User";
import { comicApi } from "./services/comicApi";

import axios from "./services/SetUpAxios";

getSettings().then(() => {
  comicApi.setBaseURL(settings.backendURL);
  axios.defaults.baseURL = settings.backendURL;
  ReactDOM.render(
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>,
    document.getElementById("root") as HTMLElement
  );
});
