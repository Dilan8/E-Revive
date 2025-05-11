// LearnPage.js

import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Your images
import image4 from "../Images/14.jpeg";
import image5 from "../Images/lap1.jpg";
import image6 from "../Images/R1.avif";
import image7 from "../Images/sec1.jpg";
import image8 from "../Images/AI.jpg";
import image9 from "../Images/test.jpg";

// Your items array
const items = [
  {
    img: image4,
    title: "Guide E-waste",
    desc: "Guide to ewaste management",
    more: "Learn how to properly dispose and manage electronic waste to help protect the environment and conserve resources.",
  },
  {
    img: image5,
    title: "Learn",
    desc: "Learn how to recycle e-wastes.",
    more: "Understand step-by-step recycling techniques and contribute to a cleaner planet with responsible e-waste handling.",
  },
  {
    img: image6,
    title: "Daily Dose",
    desc: "Daily Dose of knowledge of e-waste management",
    more: "Stay informed with daily tips and facts about effective electronic waste management practices and innovations.",
  },
  {
    img: image7,
    title: "Quiz",
    desc: "Take a quiz now and win rewards",
    more: "Test your knowledge on sustainability and e-waste management by participating in interactive quizzes and challenges.",
  },
  {
    img: image8,
    title: "Learn more!",
    desc: "Learn more about sustainability.",
    more: "Explore deeper insights into sustainable living and discover actionable steps towards a greener future.",
  },
  {
    img: image9,
    title: "Did you know?",
    desc: "Did you know about E-waste?",
    more: "Electronic waste is the fastest-growing waste stream globally — learning about it empowers smarter, eco-friendly decisions.",
  },
];

const LearnPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          py: 6,
          minHeight: "100vh",
          background: "linear-gradient(135deg, #a5d6a7, #388e3c)",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 6, color: "white" }}
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
                    height: "200px",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                  onClick={() => handleOpen(item)}
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
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        flexGrow: 1,
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

      {/* Modal/Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#e8f5e9", // light green
            borderRadius: 3,
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#c8e6c9",
            mb: 1,
          }}
        >
          {selectedItem?.title}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {selectedItem && (
            <>
              <Box
                component="img"
                src={selectedItem.img}
                alt={selectedItem.title}
                sx={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                {selectedItem.desc}
              </Typography>
              <Typography variant="body2">{selectedItem.more}</Typography>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default LearnPage;
