import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  Button,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Slider from "react-slick";

// Import react-slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import image4 from "../Images/14.jpeg";
import image5 from "../Images/iPhone-11.webp";
import image6 from "../Images/screen.webp";
import image7 from "../Images/lap.jpg";
import image8 from "../Images/pixel.jpg";
import image9 from "../Images/Azure.jfif";
import image10 from "../Images/view.jpg";
import image11 from "../Images/pix.png";


const items = [
  {
    image: image7,
    title: "HP Lap T00-ti",
  },
  {
    image: image4,
    title: "Iphone 16",
  },
  {
    image: image5,
    title: "Iphone 11",
  },
  {
    image: image8,
    title: "Pixel 8",
  },
  {
    image: image9,
    title: "Aero Gaming Notebook",
  },
  {
    image: image10,
    title: "ViewSonic VX2776",
  },
  {
    image: image6,
    title: "Monitor with keyboard",
  },
];

const TradeIn = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [capacity, setCapacity] = useState("");
  const [processor, setProcessor] = useState("");
  const [memory, setMemory] = useState("");
  const [version, setVersion] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);

 const filteredItems = items.filter((item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  const handleConfirm = () => {
    console.log({ capacity, processor, memory, version });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageVisible(true);
    console.log({ name, phone, email, address });
  };

  // Carousel settings
const settings = {
  dots: true,
  infinite: filteredItems.length > 3,  // disable infinite if less than 4
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 960, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
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

          {/* Search bar */}
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
          <Box sx={{
            '& .slick-slide > div': {
              padding: '0 8px', // Adds gap between cards (16px total)
            },
            '& .slick-dots li button:before': {
              color: '#3a511e',
            },
            '& .slick-dots li.slick-active button:before': {
              color: '#3a511e',
            },
          }}>
            {/* Carousel */}
            <Slider {...settings}>
              {filteredItems.map((item, index) => (
                <Box key={index} sx={{ px: 5, py: 1 }}>
                  <Card
                    sx={{
                      boxShadow: 3,
                      borderRadius: 2,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 6,
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={item.image}
                      alt={item.title}
                      sx={{ objectFit: 'contain', backgroundColor: '#f5f5f5' }}
                    />
                    <CardContent sx={{ padding: 2 }}>
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
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                      <Button variant="contained" color="primary">
                        Select
                      </Button>
                    </Box>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Box>


          {/* Can't find device section */}
          <Box sx={{ mt: 10, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              Can't Find Your Device?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Send us the details and we’ll get back to you.
            </Typography>

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

      {/* Select Device Details */}
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

          <Box display="flex" justifyContent="center" gap={4} sx={{ mb: 6, flexWrap: "wrap" }}>
            {/* Capacity */}
            <Box sx={{ width: "200px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                Capacity
              </Typography>
              <Select
                fullWidth
                variant="outlined"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
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
                onChange={(e) => setProcessor(e.target.value)}
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
                onChange={(e) => setMemory(e.target.value)}
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
                onChange={(e) => setVersion(e.target.value)}
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

      {/* Pickup Address */}
      <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#33691e" }}
          >
            Confirm Your Pickup Address
          </Typography>

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

              <Grid item xs={12} sm={6} md={4}>
                <Button type="submit" variant="contained" color="primary" sx={{ width: "100%" }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>

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
