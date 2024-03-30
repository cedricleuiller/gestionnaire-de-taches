import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
// import { BrowserRouter, Link } from "react-router-dom";
import { LoginForm } from "../LoginForm/LoginForm";
import { SignUpForm } from "../SignUp/SignUp";

export const HomePage: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleLogin = () => {
    setShowLoginForm(true);
  };

  const handleSignUp = () => {
    setShowSignUpForm(true);
  };
  return (
    <section id="HomePage">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        {showLoginForm ? (
          <LoginForm />
        ) : showSignUpForm ? (
          <SignUpForm />
        ) : (
          <Stack spacing={1} direction="row">
            <Button variant="contained" onClick={handleLogin}>
              Connexion
            </Button>
            <Button variant="contained" onClick={handleSignUp}>
              Inscription
            </Button>
          </Stack>
        )}
      </Box>
    </section>
  );
};
