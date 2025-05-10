import React from "react";
import { Box, Grid, Typography, Container, Paper } from "@mui/material";
import Navbar from "./Navbar";
import image4 from "../Images/14.jpeg";
import image5 from "../Images/lap1.jpg";
import image6 from "../Images/R1.avif";
import image7 from "../Images/sec1.jpg";
import image8 from "../Images/AI.jpg";
import image9 from "../Images/test.jpg";
import Footer from "./Footer";

const items = [

  {
    img: image4,
    title: "Easy Interface",
    desc: "User-friendly interface for smooth navigation.",
  },
  {
    img: image5,
    title: "Reliable Support",
    desc: "24/7 customer support to assist you anytime.",
  },
   {
    img: image6,
    title: "Fast Performance",
    desc: "User-friendly interface for smooth navigation.",
  },
  {
    img: image7,
    title: "Secure Transactions",
    desc: "24/7 customer support to assist you anytime.",
  },
  {
    img: image8,
    title: "Test Performance",
    desc: "User-friendly interface for smooth navigation.",
  },
  {
    img: image9,
    title: "AI learn",
    desc: "24/7 customer support to assist you anytime.",
  },
];

const LearnPage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ py: 6, backgroundColor: "#f9fbe7", minHeight: "100vh" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 6 }}
          >
            Learn About Our Features
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: 2,
                    borderRadius: 2,
                    height: "200px", // Ensure all cards are same height
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    sx={{
                      width: "120px",
                      height: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginRight: 2,
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      overflow: "hidden",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", lineHeight: 1.2 }}
                      noWrap
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3, // Limit to 3 lines of text
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        flexGrow: 1, // Allow description to grow to fill available space
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer/>
    </>

  );
};

export default LearnPage;
