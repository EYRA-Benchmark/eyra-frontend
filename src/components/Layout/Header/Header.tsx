import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";

export interface IProps {
  classes?: string;
  menuClicked: () => void;
}

function Header({ classes, menuClicked }: IProps) {
  return (
    <AppBar position="fixed">
      <Toolbar style={{ padding: "0 12px" }}>
        <IconButton aria-label="Menu" onClick={menuClicked}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
