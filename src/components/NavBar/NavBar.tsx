import React from "react";
import { AppBar, Button, Toolbar } from "@mui/material";

export const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Button color="inherit" id="login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};
