import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#43a047", color: "white", py: 3, mt: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} GreenGo. All Rights Reserved.
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="/privacy" color="inherit" sx={{ mx: 2 }}>
            Privacy Policy
          </Link>
          |
          <Link href="/terms" color="inherit" sx={{ mx: 2 }}>
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
