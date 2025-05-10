import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Import images
import image4 from "../Images/14.jpeg";
import image5 from "../Images/lap1.jpg";
import image6 from "../Images/R1.avif";
import image7 from "../Images/lap.jpg";
import Footer from "./Footer";

const items = [
  {
    image: image7,
    title: "Trade-in Program",
    subtitle: "Exchange old devices for rewards",
  },
  {
    image: image4,
    title: "Component Extraction",
    subtitle: "Recover valuable parts sustainably",
  },
  {
    image: image5,
    title: "Secure Data Wipe",
    subtitle: "Your data, safely erased.",
  },
];

const TradeIn = () => {
  const [searchTerm, setSearchTerm] = useState("");
    // State hooks to manage selected values for Capacity, Processor, and Memory
  const [capacity, setCapacity] = useState("");
  const [processor, setProcessor] = useState("");
  const [memory, setMemory] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
   const [version, setVersion] = useState(""); // New state for Version

  // Handle Confirm button click
  const handleConfirm = () => {
    // You can add your logic here, like sending the data to an API or logging it
    console.log({
      capacity,
      processor,
      memory,
      version,
    });
  };

   const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [messageVisible, setMessageVisible] = useState(true);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload on form submission

    // Show confirmation message
    setMessageVisible(true);

    // You can also perform further logic like sending data to an API here
    console.log({
      name,
      phone,
      email,
      address,
    });
  };
  return (
    <>
      <Navbar />
      <Box sx={{ py: 8, backgroundColor: "#f9fbe7" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#33691e" }}
          >
            Select Your Device Here
          </Typography>

          {/* Search Input with icon on right */}
          <Box display="flex" justifyContent="center" my={4}>
            <TextField
              label="Search Device"
              variant="outlined"
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: "300px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Grid with 4 items */}
          <Grid container spacing={4} justifyContent="center">
            {filteredItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{ color: "text.secondary" }}
                    >
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* Can't Find Section */}
          {/* Can't Find Section */}
          <Box sx={{ mt: 10, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              Can't Find Your Device?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Send us the details and we’ll get back to you.
            </Typography>

            {/* Contact Form */}
            <Box
              component="form"
              sx={{
                maxWidth: 500,
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                backgroundColor: "#ffffff",
                p: 4,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <TextField label="Name" variant="outlined" fullWidth required />
              <TextField label="Phone" variant="outlined" fullWidth required />
              <TextField label="Email" variant="outlined" fullWidth required />
              <TextField
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />

              {/* Centered Submit Button */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#33691e",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Select Your Device Details */}
<Box sx={{ py: 8, backgroundColor: "#e8f5e9" }}>
  <Container maxWidth="lg">
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{ fontWeight: "bold", color: "#33691e" }}
    >
      Select Your Device Details
    </Typography>

    {/* Dropdowns for Capacity, Processor, and Memory */}
    <Box sx={{ py: 8, backgroundColor: "#e8f5e9" }}>
        <Container maxWidth="lg">
       

          {/* Dropdowns for Capacity, Processor, Memory, and Version */}
          <Box display="flex" justifyContent="center" gap={4} sx={{ mb: 6 }}>
            {/* Capacity */}
            <Box sx={{ width: "200px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                Capacity
              </Typography>
              <Select
                fullWidth
                variant="outlined"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)} // Use setCapacity to update state
              >
                <MenuItem value="">Select Capacity</MenuItem>
                <MenuItem value="64GB">64GB</MenuItem>
                <MenuItem value="128GB">128GB</MenuItem>
                <MenuItem value="256GB">256GB</MenuItem>
                <MenuItem value="512GB">512GB</MenuItem>
              </Select>
            </Box>

            {/* Processor */}
            <Box sx={{ width: "200px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                Processor
              </Typography>
              <Select
                fullWidth
                variant="outlined"
                value={processor}
                onChange={(e) => setProcessor(e.target.value)} // Use setProcessor to update state
              >
                <MenuItem value="">Select Processor</MenuItem>
                <MenuItem value="Intel i5">Intel i5</MenuItem>
                <MenuItem value="Intel i7">Intel i7</MenuItem>
                <MenuItem value="AMD Ryzen 5">AMD Ryzen 5</MenuItem>
                <MenuItem value="AMD Ryzen 7">AMD Ryzen 7</MenuItem>
              </Select>
            </Box>

            {/* Memory */}
            <Box sx={{ width: "200px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                Memory
              </Typography>
              <Select
                fullWidth
                variant="outlined"
                value={memory}
                onChange={(e) => setMemory(e.target.value)} // Use setMemory to update state
              >
                <MenuItem value="">Select Memory</MenuItem>
                <MenuItem value="4GB">4GB</MenuItem>
                <MenuItem value="8GB">8GB</MenuItem>
                <MenuItem value="16GB">16GB</MenuItem>
                <MenuItem value="32GB">32GB</MenuItem>
              </Select>
            </Box>

            {/* Version */}
            <Box sx={{ width: "200px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                Version
              </Typography>
              <Select
                fullWidth
                variant="outlined"
                value={version}
                onChange={(e) => setVersion(e.target.value)} // Use setVersion to update state
              >
                <MenuItem value="">Select Version</MenuItem>
                <MenuItem value="1.0">1.0</MenuItem>
                <MenuItem value="1.1">1.1</MenuItem>
                <MenuItem value="2.0">2.0</MenuItem>
                <MenuItem value="2.1">2.1</MenuItem>
              </Select>
            </Box>
          </Box>

          {/* Confirm Button */}
          <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleConfirm}
              sx={{ width: "200px", fontWeight: "bold" }}
            >
              Confirm
            </Button>
          </Box>
        </Container>
      </Box>
  </Container>
</Box>
 <Box sx={{ py: 8, backgroundColor: "#FFFF" }}>
        <Container maxWidth="lg">
          {/* Confirm Your Pic Address Section */}
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#33691e" }}
          >
            Confirm Your Pickup Address
          </Typography>

          {/* Form for Name, Phone, Email, Address */}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ mb: 3 }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  sx={{ mb: 3 }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ mb: 3 }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Address"
                  variant="outlined"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  sx={{ mb: 3 }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: "100%" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>

          {/* Confirmation Message */}
          {messageVisible && (
            <Box mt={4} textAlign="center">
              <Typography variant="h4" color="success.main">
                Wait for your loyalty discount!
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
<Footer />
    </>
  );
};

export default TradeIn;
