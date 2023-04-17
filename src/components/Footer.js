import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/download.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="150px" height="150px" />
        <Typography variant="h5" pb="30px" mt="10px">
          Made by Wonil Lee using JavaScript Mastery
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
