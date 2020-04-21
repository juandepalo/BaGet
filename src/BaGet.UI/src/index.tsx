import { initializeIcons } from "@uifabric/icons";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import Keycloak, { KeycloakConfig } from "keycloak-js";
import DisplayPackage from "./DisplayPackage/DisplayPackage";
import Upload from "./Upload";

import "./index.css";
const keycloakConfig: KeycloakConfig = {
  realm: "developQCompusoft",
  url: "https://ipa.qcompusoft.com:8443/auth",
  clientId: "NugetServer",
};

const keycloak: Keycloak.KeycloakInstance = Keycloak(keycloakConfig);

// import registerServiceWorker from './registerServiceWorker';

initializeIcons();
keycloak
  .init({ onLoad: "login-required" })
  .success(() => {
    ReactDOM.render(
      <Router>
        <App>
          <Route path="/packages/:id/:version?" component={DisplayPackage} />

          <Route path="/upload" component={Upload} />
        </App>
      </Router>,
      document.getElementById("root") as HTMLElement
    );
  })
  .error((error) => console.log(error));
// registerServiceWorker();
