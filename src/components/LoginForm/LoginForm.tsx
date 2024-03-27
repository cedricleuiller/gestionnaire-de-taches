import React from "react";
import { Box, Typography, InputLabel, OutlinedInput } from "@mui/material";

export const LoginForm = () => {
  return (
    <Box
      component="form"
      autoComplete="off"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography>Connexion</Typography>
      <InputLabel htmlFor="component-outlined">Name</InputLabel>
      <OutlinedInput id="component-outlined" label="Name" />
      <InputLabel htmlFor="component-outlined">Name</InputLabel>
      <OutlinedInput id="component-outlined" label="Mail" />
      <InputLabel htmlFor="component-outlined">Name</InputLabel>
      <OutlinedInput id="component-outlined" label="Mot de Passe" />
    </Box>
  );
};
