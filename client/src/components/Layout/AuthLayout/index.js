import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import PropTypes from "prop-types";
import { AuthProvider } from "../../../context/AuthContext";
import { ErrorsProvider } from "../../../context/ErrorsContext";
import { AuthContainer, AuthContent } from "./styles";
import AuthHeader from "./AuthHeader";
import ContextProvider from "../../../context";

const AuthLayout = (props) => {
  let {children, title} = props;
  return (
    <ContextProvider {...props}>
      <AuthContainer>
        <AuthHeader title={title} />
        <AuthContent>{children}</AuthContent>
      </AuthContainer>
    </ContextProvider>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default AuthLayout;
