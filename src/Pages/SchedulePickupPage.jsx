// src/pages/SchedulePickupPage.jsx

import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

// Import the wallpaper image
import wasteBg from '../Images/waste.jpg';

const SchedulePickupPage = () => {
  const [pickupDate, setPickupDate] = React.useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          p: 4,
          minHeight: '100vh',
          backgroundImage: `
            linear-gradient(rgba(0, 100, 0, 0.5), rgba(0, 100, 0, 0.5)),
            url(${wasteBg})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.92)', // slightly stronger white for better contrast
            borderRadius: 3,
            boxShadow: 6,
            p: 4,
          }}
        >
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

          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField label="Full Name" variant="outlined" fullWidth required />
              <TextField label="Email Address" variant="outlined" fullWidth required />
              <TextField label="Phone Number" variant="outlined" fullWidth required />
              <TextField label="Your Address" variant="outlined" fullWidth required />
              <TextField label="Your Message" variant="outlined" fullWidth multiline rows={4} />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Pickup Date"
                  value={pickupDate}
                  onChange={(newDate) => setPickupDate(newDate)}
                  renderInput={(params) => <TextField {...params} fullWidth required />}
                />
              </LocalizationProvider>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="secureDataWipe" color="primary" />}
                  label="Secure Data Wipe"
                />
                <FormControlLabel
                  control={<Checkbox name="componentExtraction" color="primary" />}
                  label="Component Extraction"
                />
              </FormGroup>

              <Button type="submit" variant="contained" color="success">
                Submit
              </Button>
            </Box>
          </form>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default SchedulePickupPage;
