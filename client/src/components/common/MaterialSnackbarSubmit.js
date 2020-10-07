import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../Layout/GlobalStyle";

const StyledAction = styled.div`
  width: ${props => props.submitting? 'initial;': '80vw;'};
  position: relative;
  height: 60px;
  display: flex;
  justify-content: flex-end;

  .message-cta-wrapper{
    padding-right: 20px;
    padding-left: 20px;
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    height: inherit;
    
    .message{
      padding-right: 20px;
      text-align: left;
      color: white;
      font-size: 18px;
    }

    @media ${device.mobileL}{

         .message{
      font-size: 13px;
      }


      width: 100%;
      max-width: ${device.mobileL};
    }
  }
`;

const StyledSnackBar = styled(Snackbar)`
  padding: 0px;
  bottom: 0px;
  left: 0px;

  .MuiSnackbarContent-root {
    width: 100%;
    padding: 0px;
    bottom: 0px;
    left: 0px;
  }
`;

const SubmitButton = styled(Button)`
  color: white !important;
  min-width: 150px !important;
  background: ${props => props.theme.colors.primary} !important;
`

function MaterialSnackbarSubmit({
  open,
  setOpen,
  severity,
  submitText,
  submittingText,
  submitting,
  message,
  callback,
  position: { horizontal, vertical },
}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <StyledSnackBar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      key={vertical + horizontal}
      onClose={handleClose}
      action={<StyledAction submitting={submitting}>
        <div className="message-cta-wrapper">
          <div className={"message"}>
            {submitting? submittingText: message}
          </div>


      {!submitting && <SubmitButton onClick={() => callback()}>{submitText} </SubmitButton>}
        </div>

      </StyledAction>}
    />
  );
}

MaterialSnackbarSubmit.defaultProps = {
  open: false,
  message: "this is message",
  submitText: "Submit",
  submittingText: "Submitting",
  submitting: false,
  callback: () => console.log("no property called callback has been passed down to MaterialSnackbarSubmit.js"),
  position: {
    vertical: "bottom",
    horizontal: "right",
  },
};

MaterialSnackbarSubmit.propTypes = {
  
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  submitText: PropTypes.string.isRequired,
  submittingText: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  position: PropTypes.shape({
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
  }),
};

export default MaterialSnackbarSubmit;
