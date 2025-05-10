import React, { useState } from "react";
import image1 from "../Images/e1.jpg"; // Replace with actual image paths
import image2 from "../Images/e2.webp"; // Replace with actual image paths
import image3 from "../Images/e3.jpg"; // Replace with actual image paths
import image4 from "../Images/e4.jpg"; // Replace with actual image paths
import image5 from "../Images/ear.jpg"; // Replace with actual image paths
import image6 from "../Images/jbls.png"; // Replace with actual image paths
import image7 from "../Images/cvv.webp"; // Replace with actual image paths

import Footer from "./Footer";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
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
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const navItems = [
  "Home",
  "Marketplace",
  "Schedule Pickup",
  "Trade In",
  "Learn",
];

const MarketplacePage = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleBuy = (item) => {
    setSelectedItem(item);
    setShowPaymentForm(true);
  };

  const handleBack = () => {
    setShowPaymentForm(false);
    setSelectedItem(null);
  };
  const handleLogout = () => {
    navigate("/");
  };


  const handleNavClick = (item) => {
    if (item === "Marketplace") navigate("/marketplace");
    else if (item === "Home") navigate("/home");
    else if (item === "Schedule Pickup") navigate("/schedulepickup")
  };

  const items = [
    {
      img: image1,
      title: "Blander",
    },
    {
      img: image2,
      title: "Dishes",
    },
    {
      img: image3,
      title: "Bike",
    },
    {
      img: image4,
      title: "Electric Bike",
    },
    {
      img: image5,
      title: "Bluetooth Earbuds",
    },
    {
      img: image6,
      title: "Bluetooth Earbuds",
    },
  ];

   const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Box sx={{ p: 4, backgroundColor: "#f1f8e9", minHeight: "100vh" }}>
        <Container maxWidth="md">

          {/* Show either marketplace or payment form */}
          {!showPaymentForm ? (
            <>
              {/* Search Bar Section */}
              <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 500,
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "#e8f5e9",
                    boxShadow: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: "#2e7d32", fontWeight: 500, textAlign: "center" }}
                  >
                    Search for items
                  </Typography>
                  <TextField
                    fullWidth
                    label="Search items..."
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ mb: 2, borderRadius: "12px" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon sx={{ color: "#2e7d32" }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    size="large"
                    sx={{ borderRadius: 2 }}
                  >
                    Search
                  </Button>
                </Box>
              </Box>

              {/* Available Items */}
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: "#2e7d32",
                  fontWeight: 500,
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Available Items
              </Typography>

              <Grid container spacing={4} justifyContent="center">
                {filteredItems.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{
                          width: "80%",
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
                        }}
                      />
                    </Box>
                    <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                      {item.title}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleBuy(item.title)}
                        sx={{ borderRadius: 2 }}
                      >
                        Buy
                      </Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>

            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
                <FaCcVisa size={40} color="#1a237e" />
                <FaCcMastercard size={40} color="#ff6f00" />
                <FaCcAmex size={40} color="#1565c0" />
                <FaCcDiscover size={40} color="#f57c00" />
              </Box>
              {/* Payment Form */}

              <Typography
                variant="subtitle1"
                sx={{ color: "#2e7d32", mb: 1, textAlign: "center", fontWeight: 500 }}
              >
                We accept:
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "#2e7d32", fontWeight: "bold", textAlign: "center", mb: 4 }}
              >
                Pay for {selectedItem}
              </Typography>

              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: "#e8f5e9",
                  boxShadow: 3,
                  maxWidth: 500,
                  mx: "auto",
                }}
              >
                <TextField
                  fullWidth
                  label="Cardholder Name"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Card Number"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField fullWidth label="Expiry Date" variant="outlined" placeholder="MM/YY" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="CVV"
                      variant="outlined"
                      fullWidth
                      sx={{ mb: 2 }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <img
                              src={image7} // replace with your CVV image path
                              alt="CVV info"
                              style={{ width: 30, height: 20 }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>

                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  size="large"
                  sx={{ borderRadius: 2, mt: 3 }}
                >
                  Pay Now
                </Button>

                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  sx={{ borderRadius: 2, mt: 2 }}
                  onClick={handleBack}
                >
                  Back to Marketplace
                </Button>
              </Box>
            </motion.div>
          )}
        </Container>
      </Box>
      <Footer /> {/* Add Footer here */}
    </>
  );
};

export default MarketplacePage;
