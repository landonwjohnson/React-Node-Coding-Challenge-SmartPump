import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import UserAccount from "./components/UserAccount";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./components/Layout/GlobalStyle";
import AuthLayout from "./components/Layout/AuthLayout";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/account"
          render={(props) => (
            <AuthLayout title={"Account"} {...props}>
              <UserAccount {...props} />
            </AuthLayout>
          )}
        />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
