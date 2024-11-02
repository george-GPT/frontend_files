// src/components/Header/Header.tsx
import React from "react";
import { AppBar, Link, Toolbar, Stack } from "@mui/material";
import Button from "../button/button";
import BrainIcon from "../../asset/icon/brainIconwhite";

const navigationItems = [
  {
    name: "Assessment",
    link: "/assessment",
    highlight: true, // For the highlighted item
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Research",
    link: "/research",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#4B5FCC",
        borderBottom: "1px solid",
        borderColor: "primary.400",
      }}
    >
      <Toolbar
        sx={{
          height: "106px",
          px: { xs: 2, md: 4 },
          gap: 2,
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            color: "white",
            "&:hover": {
              textDecoration: "none",
            },
          }}
        >
          <BrainIcon sx={{ fontSize: 44, color: "white" }} />
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={3}
          sx={{
            display: { xs: "none", md: "flex" },
            ml: 4,
            flex: 1,
          }}
        >
          {navigationItems.map(({ name, link, highlight }) => (
            <Link
              key={name}
              href={link}
              sx={{
                color: "white",
                textDecoration: "none",
                fontSize: "0.9375rem",
                fontWeight: 500,
                py: 1,
                px: highlight ? 2 : 0,
                borderRadius: highlight ? "8px" : "none",
                backgroundColor: highlight ? "primary.400" : "transparent",
                boxShadow: highlight ? "0px 4.8px 4.8px 0px #00000014" : "none",
                border: highlight ? "1px solid #7389ff" : "none",
                "&:hover": {
                  color: "primary.200",
                  textDecoration: "none",
                },
              }}
            >
              {name}
            </Link>
          ))}
        </Stack>

        <Stack direction="row" spacing={1}>
          <Link href="/login">
            <Button variant="neutral">Log In</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="primary">Sign Up</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
