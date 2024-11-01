import React from "react";
import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Ensure you're using Grid2
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BrainIconWhite from "../../asset/icon/brainIconwhite";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1e2756",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
        >
          <Grid
            component="div"
            size={{ xs: 12, md: 4 }}
            sx={{ textAlign: "center" }}
          >
            <BrainIconWhite sx={{ fontSize: 48, mb: 2 }} />
            <Box sx={{ mb: 2 }}>
              <IconButton
                aria-label="Twitter"
                sx={{ color: "white", mx: 0.3 }}
                component="a"
                href="#"
              >
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                sx={{ color: "white", mx: 0.3 }}
                component="a"
                href="#"
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="YouTube"
                sx={{ color: "white", mx: 0.3 }}
                component="a"
                href="#"
              >
                <YouTubeIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                sx={{ color: "white", mx: 0.3 }}
                component="a"
                href="#"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 4 }}>
              ©2024 MindModel All Rights Reserved
            </Typography>
          </Grid>

          <Grid
            component="div"
            size={{ xs: 12, md: 4 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Links
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Link href="#" color="inherit" underline="hover">
                Assessment
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Research
              </Link>
              <Link href="#" color="inherit" underline="hover">
                About
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid
            component="div"
            size={{ xs: 12, md: 4 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Resources
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Link href="#" color="inherit" underline="hover">
                Privacy Policy
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Terms of Service
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
