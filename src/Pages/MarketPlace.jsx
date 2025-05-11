// MarketplacePage.jsx
import React, { useState } from "react";
import image1 from "../Images/lap3.avif";
import image2 from "../Images/Mobile.jpg";
import image3 from "../Images/moni2.jpg";
import image4 from "../Images/pix.png";
import image5 from "../Images/ear.jpg";
import image6 from "../Images/len.jpg";
import image7 from "../Images/cvv.webp";

import Footer from "./Footer";
import Navbar from "./Navbar";

import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  Dialog,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from "react-icons/fa";
import { motion } from "framer-motion";

const MarketplacePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Dialog popup
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogItem, setDialogItem] = useState(null);

  const handleBuy = (item) => {
    setSelectedItem(item);
    setShowPaymentForm(true);
  };

  const handleBack = () => {
    setShowPaymentForm(false);
    setSelectedItem(null);
  };

  const handleImageClick = (item) => {
    setDialogItem(item);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setDialogItem(null);
  };

  // Items with Title + Description + Price
  const items = [
    {
      img: image1,
      title: "HP 17-cp3001",
      description: "Second hand, 3 months usage, 1 year warranty",
      price: "$4500",
    },
    {
      img: image2,
      title: "Iphone 11",
      description: "Second hand, 2 months usage, 2 year Apple warranty",
      price: "$1000",
    },
    {
      img: image3,
      title: "ViewSonic Monitor",
      description: "Second hand, 2 months usage, 2 year warranty",
      price: "$300",
    },
    {
      img: image4,
      title: "Pixel 9 Pro",
      description: "Brand New, 128GB, 2 year warranty, 16GB RAM",
      price: "$2999",
    },
    {
      img: image5,
      title: "Bluetooth Earbuds Sonic",
      description: "Second hand, 2 months usage, No warranty",
      price: "$350",
    },
    {
      img: image6,
      title: "Legion",
      description: "Brand New, 128GB, 2 year warranty, 16GB RAM",
      price: "$890",
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
          {!showPaymentForm ? (
            <>
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
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: "#ffffff",
                        borderRadius: 2,
                        boxShadow: 2,
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          marginBottom: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleImageClick(item)}
                      />
                      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#4e4e4e", mb: 1 }}>
                        {item.description}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "#2e7d32", fontWeight: "bold", mb: 2 }}>
                        {item.price}
                      </Typography>
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
               <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "#2e7d32", fontWeight: "bold", textAlign: "center", mb: 4 }}
              >
                Pay for {selectedItem}
              </Typography>
               <Typography
                variant="subtitle1"
                sx={{ color: "#2e7d32", mb: 1, textAlign: "center", fontWeight: 500 }}
              >
                We accept:
              </Typography>
              
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
                <FaCcVisa size={40} color="#1a237e" />
                <FaCcMastercard size={40} color="#ff6f00" />
                <FaCcAmex size={40} color="#1565c0" />
                <FaCcDiscover size={40} color="#f57c00" />
              </Box>

             
             

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
                              src={image7}
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

        {/* Dialog popup */}
        <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
          {dialogItem && (
            <Box sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ mb: 2, textAlign: "center", color: "#2e7d32" }}>
                {dialogItem.title}
              </Typography>
              <Box
                component="img"
                src={dialogItem.img}
                alt={dialogItem.title}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: 2,
                  mb: 2,
                }}
              />
              <Typography variant="body1" sx={{ textAlign: "center", color: "#4e4e4e", mb: 1 }}>
                {dialogItem.description}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "center", color: "#2e7d32", fontWeight: "bold", mb: 2 }}>
                Price: {dialogItem.price}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ borderRadius: 2, mx: 1 }}
                  onClick={() => {
                    handleBuy(dialogItem.title);
                    handleDialogClose();
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ borderRadius: 2, mx: 1 }}
                  onClick={handleDialogClose}
                >
                  Close
                </Button>
              </Box>
            </Box>
          )}
        </Dialog>

      </Box>
      <Footer />
    </>
  );
};

export default MarketplacePage;
