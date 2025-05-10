import React from "react";
import image1 from "../Images/e1.jpg"; // Replace with actual image paths
import image2 from "../Images/e2.webp"; // Replace with actual image paths
import image3 from "../Images/e3.jpg"; // Replace with actual image paths
import image4 from "../Images/e4.jpg"; // Replace with actual image paths
import Footer from "./Footer";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleNavClick = (item) => {
    if (item === "Marketplace") navigate("/marketplace");
    else if (item === "Home") navigate("/home");
    else if (item === "Schedule Pickup") navigate("/schedulepickup")
  };

  return (
    <>
       <Navbar />
      <Box sx={{ p: 4, backgroundColor: "#f1f8e9" }}>
        <Container maxWidth="md">
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

          {/* Images in two columns */}
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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Grid
              container
              spacing={4}
              maxWidth="md"
              sx={{ justifyContent: "center" }}
            >
              {[image1, image2, image3, image4].map((img, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={img}
                      alt={`Item ${index + 1}`}
                      style={{
                        width: "80%", // or '100%' based on preference
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
                      }}
                    />
                  </Box>
                  <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                    {`Item Description ${index + 1}`}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer /> {/* Add Footer here */}
    </>
  );
};

export default MarketplacePage;
