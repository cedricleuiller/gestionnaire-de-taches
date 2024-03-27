import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { BrowserRouter, Link } from "react-router-dom";
import { LoginForm } from "../LoginForm/LoginForm";

export const HomePage = () => {
  const handleLogin = () => {
    <LoginForm />;
    console.log(<LoginForm />);
  };
  const handleSignUp = () => {
    console.log("hello you 2");
  };
  return (
    <section id="HomePage">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Stack spacing={1} direction="row">
          <BrowserRouter>
            <Button
              component={Link}
              to={"/loginForm/LoginForm"}
              variant="contained"
              onClick={handleLogin}
              href={"/"}
            >
              Connexion
            </Button>
            <Button variant="contained" onClick={handleSignUp}>
              Inscription
            </Button>
          </BrowserRouter>
        </Stack>
      </Box>
    </section>
  );
};
