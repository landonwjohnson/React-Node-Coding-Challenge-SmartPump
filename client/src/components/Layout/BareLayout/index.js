import React from "react";
import PropTypes from "prop-types";
import { BareContainer, BareContent } from "./styles";
import ContextProvider from "../../../context";

const BareLayout = ({ children }) => {
  return (
    <ContextProvider>
      <BareContainer>
        <BareContent>{children}</BareContent>
      </BareContainer>
    </ContextProvider>
  );
};

BareLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BareLayout;
