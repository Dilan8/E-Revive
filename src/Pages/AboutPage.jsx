// AboutUs.js

import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ backgroundColor: "#f1f8e9", minHeight: "100vh", py: 6 }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: "bold", color: "#33691e", mb: 4 }}
                    >
                        About Us
                    </Typography>

                    <Paper
                        elevation={3}
                        sx={{
                            padding: 4,
                            borderRadius: 3,
                            backgroundColor: "#e8f5e9",
                        }}
                    >
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                            Our Mission
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We are committed to promoting sustainable e-waste management and
                            raising awareness about responsible recycling. Our platform educates
                            individuals and organizations on how to handle electronic waste in
                            ways that protect the environment and conserve valuable resources.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
                            What We Do
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Through engaging learning modules, interactive quizzes, and expert
                            insights, we empower communities to make informed decisions about
                            e-waste disposal. Our resources help you understand how to recycle,
                            refurbish, and reduce electronic waste effectively.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", mt: 3 }}>
                            Why It Matters
                        </Typography>
                        <Typography variant="body1" paragraph>
                            E-waste is one of the fastest-growing waste streams globally. Proper
                            management is essential to minimize environmental impact, recover
                            precious materials, and reduce pollution. Together, we can create a
                            cleaner, greener future.
                        </Typography>

                        <Grid
                            container
                            spacing={3}
                            sx={{
                                mt: 4,
                                alignItems: "stretch", // Ensures equal height on both items
                            }}
                        >
                            <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
                                <Paper
                                    elevation={1}
                                    sx={{
                                        padding: 2,
                                        backgroundColor: "#dcedc8",
                                        borderRadius: 2,
                                        flexGrow: 1, // Ensures full height stretch
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold", color: "#558b2f", mb: 1 }}
                                    >
                                        Vision
                                    </Typography>
                                    <Typography variant="body2">
                                        A world where electronic waste is responsibly managed and sustainability
                                        is second nature to all.
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
                                <Paper
                                    elevation={1}
                                    sx={{
                                        padding: 2,
                                        backgroundColor: "#dcedc8",
                                        borderRadius: 2,
                                        flexGrow: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold", color: "#558b2f", mb: 1 }}
                                    >
                                        Values
                                    </Typography>
                                    <Typography variant="body2">
                                        Sustainability, Education, Community, Innovation, and Environmental
                                        Stewardship.
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>


                    </Paper>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default AboutPage;
