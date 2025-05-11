import React from "react";
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
  Stack,
  CardMedia,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import sampleImage from "../Images/contactus.jpg";
import sampleImage1 from "../Images/sam.webp";
import image1 from "../Images/R1.avif";
import image2 from "../Images/R2.avif";
import image3 from "../Images/R3.avif";
import image4 from "../Images/comp.jpg";
import image5 from "../Images/sec.jpg";
import image6 from "../Images/ewaste1.png";
import image7 from "../Images/schedule.webp";
import image8 from "../Images/rebup.webp";
import image9 from "../Images/pickup.webp";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Email,
  Phone,
} from "@mui/icons-material"; // Importing Material Icons
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
const navItems = [
  "Home",
  "Marketplace",
  "Schedule Pickup",
  "Trade In",
  "Learn",
];

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>

      <Navbar />
      {/* Dummy content */}
<Box
  sx={{
    p: { xs: 3, md: 6 },
    minHeight: "500px",
    backgroundImage: `url(${sampleImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    borderRadius: 4,
    boxShadow: 6,
    overflow: "hidden",
  }}
>
  {/* Soft green overlay for freshness */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(46, 125, 50, 0.5)", // greenish overlay
      zIndex: 1,
    }}
  />

  {/* Text Content */}
  <Box
    sx={{
      position: "relative",
      zIndex: 2,
      maxWidth: "700px",
      px: { xs: 2, md: 4 },
    }}
  >
    <Typography
      variant="h3"
      gutterBottom
      sx={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700,
        letterSpacing: "1px",
        mb: 2,
      }}
    >
      Welcome to <span style={{ color: "#c8e6c9" }}>E-REVIVE!</span>
    </Typography>

    <Typography
      variant="h6"
      sx={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 400,
        mb: 3,
        color: "#f1f8e9",
      }}
    >
      Give your Old Tech a New Life — and get rewarded for it
    </Typography>

    <Typography
      variant="body1"
      sx={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "1.1rem",
        lineHeight: 1.6,
        color: "#e8f5e9",
      }}
    >
      Recycle, trade, and learn all in one smart, simple platform. Join our
      movement towards a greener future by reviving yesterday’s technology.
    </Typography>
  </Box>
</Box>




      <Box sx={{ py: 8, backgroundColor: "#e8f5e9" }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ color: "#2e7d32", fontWeight: "bold" }}
            >
              Why Choose E-REVIVE?
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: "#4e4e4e", mt: 2 }}>
              E-REVIVE is your one-stop platform to responsibly
              manage e-waste, offering rewards, refurbished
              devices, learning tools, and environmental Impact
              tracking.
            </Typography>
          </motion.div>
        </Container>
      </Box>
      <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
        <Container maxWidth="md">
          {/* Paragraph */}
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ color: "#2e7d32", fontWeight: 500 }}
          >
            What would you like to do today?
          </Typography>

          {/* Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ minWidth: 160 }}
            >
              Schedule Pickup
            </Button>
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ minWidth: 160 }}
            >
              Trade In Items
            </Button>
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ minWidth: 160 }}
            >
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "#f9fbe7" }}>
        <Container maxWidth="lg">
          {/* Section Title */}
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#33691e" }}
          >
            What We Provide
          </Typography>

          {/* Image Grid */}
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                image: image7,
                title: "Trade-in Program",
                subtitle: "Exchange old devices for rewards",
              },
              {
                image: image8,
                title: "Refurbished Marketplace",
                subtitle: "Shop affordable, certified tech",
              },
              {
                image: image9,
                title: "Schedule Pickups",
                subtitle: "Book doorstep e-waste collection",
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
              {
                image: image6,
                title: "E-waste Educational Hub",
                subtitle: "Learn and make less E-waste.",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          {/* Section Title */}
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#33691e" }}
          >
            Customer Reviews
          </Typography>

          {/* Reviews Row - Flexbox */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              flexWrap: "nowrap",
              overflowX: "auto",
              mt: 4,
            }}
          >
            {/* Review 1 */}
            <Card
              sx={{
                minWidth: 300,
                boxShadow: 3,
                borderRadius: 2,
                p: 2,
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={image1}
                alt="Review 1"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  mb: 2,
                }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Emily, Melbourne
                </Typography>
                <Typography variant="body1">
                  I traded in my old phone and got credits for a refurbished laptop.
                  So easy!
                </Typography>
                <Rating name="review-1" value={5} readOnly sx={{ mt: 1 }} /> {/* 5 stars rating */}
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card
              sx={{
                minWidth: 300,
                boxShadow: 3,
                borderRadius: 2,
                p: 2,
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={image2}
                alt="Review 2"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  mb: 2,
                }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: "bold" }}>David, VIC</Typography>
                <Typography variant="body1">
                  The pickup was smooth, and I loved seeing my impact stats on the
                  dashboard!
                </Typography>
                <Rating name="review-2" value={4} readOnly sx={{ mt: 1 }} /> {/* 4 stars rating */}
              </CardContent>
            </Card>

            {/* Review 3 */}
            <Card
              sx={{
                minWidth: 300,
                boxShadow: 3,
                borderRadius: 2,
                p: 2,
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={image3}
                alt="Review 3"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  mb: 2,
                }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Jhon, Melbourne
                </Typography>
                <Typography variant="body1">
                  E-Revive is the perfect mix of convenience, savings, and doing
                  good.
                </Typography>
                <Rating name="review-3" value={5} readOnly sx={{ mt: 1 }} /> {/* 5 stars rating */}
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>

     <Box
  sx={{
    p: { xs: 3, md: 6 },
    minHeight: "500px",
    backgroundImage: `url(${sampleImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    borderRadius: 4,
    boxShadow: 6,
    overflow: "hidden",
  }}
>
  {/* Soft dark overlay for text readability */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    }}
  />

  {/* Content */}
 <Box
  sx={{
    p: { xs: 3, md: 6 },
    minHeight: "500px",
    backgroundImage: `url(${sampleImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    boxShadow: 6,
    overflow: "hidden",
  }}
>
  {/* Dark overlay to shade the image */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)", // stronger dark shade
      zIndex: 1,
    }}
  />

  {/* Content */}
 <Box
  sx={{
    p: { xs: 3, md: 6 },
    minHeight: "500px",
    backgroundImage: `url(${sampleImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    boxShadow: 6,
    overflow: "hidden",
  }}
>
  {/* Light green overlay */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(76, 175, 80, 0.3)", // light green shade
      zIndex: 1,
    }}
  />

  {/* Content */}
  <Box
    sx={{
      position: "relative",
      zIndex: 2,
      maxWidth: "700px",
      px: { xs: 2, md: 4 },
    }}
  >
    <Typography
      variant="h3"
      gutterBottom
      sx={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700,
        mb: 2,
      }}
    >
      Contact Us
    </Typography>

    <Typography
      variant="h6"
      sx={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 400,
        mb: 3,
        color: "#e0f2f1",
      }}
    >
      We are committed to a greener future. Explore our marketplace, schedule
      pickups, or trade in old items easily. Join us in building a sustainable
      tomorrow!
    </Typography>

    {/* Contact Info */}
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          mb: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Phone sx={{ mr: 1 }} /> +1 800 123 4567
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Email sx={{ mr: 1 }} /> contact@greenfuture.com
      </Typography>
    </Box>

    {/* Social Media Links */}
    <Box>
      <IconButton
        href="https://facebook.com"
        target="_blank"
        sx={{ color: "#e0f2f1" }}
      >
        <Facebook />
      </IconButton>
      <IconButton
        href="https://twitter.com"
        target="_blank"
        sx={{ color: "#e0f2f1" }}
      >
        <Twitter />
      </IconButton>
      <IconButton
        href="https://instagram.com"
        target="_blank"
        sx={{ color: "#e0f2f1" }}
      >
        <Instagram />
      </IconButton>
    </Box>
  </Box>
</Box>

</Box>

</Box>


      <Footer />
    </>
  );
};

export default HomePage;
