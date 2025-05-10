import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Avatar,
  Grid,
  Container,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import Navbar from "./Navbar";

const navItems = [
  "Home",
  "Marketplace",
  "Schedule Pickup",
  "Trade In",
  "Learn",
];

const SchedulePickupPage = () => {
  const theme = useTheme();
  const [pickupDate, setPickupDate] = React.useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  const handleNavClick = (item) => {
    if (item === "Home") navigate("/home");
    else if (item === "Marketplace") navigate("/marketplace");
    else if (item === "Schedule Pickup") navigate("/schedulepickup");
  };

  return (
    <>
      {/* Top Navigation Bar */}
<Navbar />

      {/* Main Content */}
      <Box sx={{ p: 4, backgroundColor: "#f1f8e9" }}>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            sx={{
              color: "#2e7d32",
              fontWeight: 500,
              textAlign: "center",
              mb: 3,
            }}
          >
            Please Send Us Your Pickup Details
          </Typography>

          {/* Form */}
          <form onSubmit={handleSubmit} sx={{p: 4}}>
            <Grid spacing={2} >
              {/* Name */}
              <Grid sx={{m:4}}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  required
                />
              </Grid>

              {/* Phone */}
              <Grid sx={{m:4}}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  required
                />
              </Grid>

              {/* Email */}
              <Grid item xs={2} sx={{m:4}}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  required
                />
              </Grid>

              {/* Address */}
              <Grid item xs={2} sx={{m:4}}>
                <TextField
                  fullWidth
                  label="Your Address"
                  variant="outlined"
                  required
                />
              </Grid>

              {/* Message */}
              <Grid item xs={2} sx={{m:4}}>
                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>

              {/* Pickup Date */}
              <Grid item xs={2} sx={{m:4}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                  sx={{width:485}}
                    label="Pickup Date"
                    value={pickupDate}
                    onChange={(newDate) => setPickupDate(newDate)}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth required />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} sx={{m:4}}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </>
    
  );
};

export default SchedulePickupPage;
