import React, { useContext } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AuthUserContext from "../../../context/AuthContext";

const StyledAppBar = styled(AppBar)`
    background: ${props => props.theme.colors.primary} !important;


`;
const HeaderTitle = styled.div``;

const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

function AuthHeader({ title }) {
  const { user, handleSignOut } = useContext(AuthUserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOutClick = () => {
    setAnchorEl(null);
    handleSignOut();
  };

  return (
    <StyledAppBar position="static">
      <StyledToolBar>
        <div></div>

        {title ? <HeaderTitle>{title}</HeaderTitle> : null}

        <IconButton
          onClick={handleMenu}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </StyledToolBar>

      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSignOutClick()}>Logout</MenuItem>
      </Menu>
    </StyledAppBar>
  );
}

export default AuthHeader;
