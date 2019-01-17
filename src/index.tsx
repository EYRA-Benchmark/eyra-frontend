import "font-awesome/css/font-awesome.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { getSettings } from './settings';

import { UserProvider } from './context/User';

getSettings().then(() => {
  ReactDOM.render(
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>,
    document.getElementById("root") as HTMLElement
  );
})
