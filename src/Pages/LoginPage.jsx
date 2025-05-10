// src/pages/LoginPage.jsx

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Avatar,
  Link,
  Stack,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: perform login auth
    navigate("/home");
  };

  const handleForgot = () => {
    navigate("/forgot-password");
  };

  const handleRegisterOpen = () => setShowRegister(true);
  const handleRegisterClose = () => setShowRegister(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // TODO: perform registration logic
    setShowRegister(false);
    navigate("/home");
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#e8f5e9",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Card sx={{ maxWidth: 400, width: "100%", boxShadow: 5, borderRadius: 3 }}>
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Avatar sx={{ m: 1, bgcolor: "#43a047" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                Sign In
              </Typography>

              {/* Social Login Buttons */}
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <IconButton onClick={() => console.log('Login with Facebook')}><FacebookIcon color="primary" /></IconButton>
                <IconButton onClick={() => console.log('Login with Google')}><GoogleIcon sx={{ color: '#DB4437' }} /></IconButton>
                <IconButton onClick={() => console.log('Login with Twitter')}><TwitterIcon color="info" /></IconButton>
              </Stack>
              <Divider sx={{ width: '100%', mb: 2 }} />

              <Box component="form" onSubmit={handleLogin} sx={{ width: "100%" }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                  <Link component="button" variant="body2" onClick={handleForgot}>
                    Forgot password?
                  </Link>
                  <Link component="button" variant="body2" onClick={handleRegisterOpen}>
                    Register
                  </Link>
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#43a047",
                    "&:hover": { backgroundColor: "#388e3c" },
                  }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Register Dialog with greenish background */}
      <Dialog
        open={showRegister}
        onClose={handleRegisterClose}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { backgroundColor: '#e8f5e9' } }}
      >
        <DialogTitle sx={{ backgroundColor: '#c8e6c9' }}>Register</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleRegisterSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="reg-name"
              label="Full Name"
              name="name"
              autoComplete="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="reg-email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="reg-password"
              label="Password"
              type="password"
              id="reg-password"
              autoComplete="new-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="reg-confirm"
              label="Confirm Password"
              type="password"
              id="reg-confirm"
              autoComplete="new-password"
            />
            <DialogActions sx={{ px: 0, pt: 2 }}>
              <Button onClick={handleRegisterClose}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary">Register</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginPage;