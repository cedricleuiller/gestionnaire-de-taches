import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export const SignUpForm = () => {
  return (
    <Box
      component="form"
      autoComplete="off"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography gutterBottom={true} color="primary">
        Inscription
      </Typography>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        autoFocus
        required
        margin="dense"
      />
      <TextField
        id="mail"
        label="Mail"
        variant="outlined"
        required
        margin="dense"
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        required
        margin="dense"
      />
      <Button variant="contained" sx={{ marginTop: "10px" }}>
        Inscription
      </Button>
    </Box>
  );
};
