import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import {
  Memory,
  Visibility,
  Speed,
  Psychology,
  Language,
  Assignment,
  AccessibilityNew,
  Folder,
  Settings,
  Create,
  Shuffle,
  PersonOutline,
  Groups,
  Bolt,
  RemoveRedEye,
  Hearing,
  DirectionsRun,
  School,
  Construction,
  Lightbulb,
} from "@mui/icons-material";

interface StyleItemProps {
  icon: React.ReactNode;
  text: string;
}

const StyleItem: React.FC<StyleItemProps> = ({ icon, text }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",

      gap: 1,
      mb: 2,
      pl: 10,
      cursor: "pointer",

      "&:hover": {
        "& .MuiTypography-root": {
          color: "primary.500",
          fontWeight: 700,
        },

        "& .MuiSvgIcon-root": {
          color: "primary.500",
        },
      },
      color: "primary.main",
      "& .MuiSvgIcon-root": {
        fontSize: "3.5rem",
        color: "primary.300",
      },
    }}
  >
    {icon}
    <Typography variant="body1" sx={{ color: "primary.300" }}>
      {text}
    </Typography>
  </Box>
);

const CognitiveStylesGrid: React.FC = () => {
  const cognitiveItems = [
    { icon: <Memory />, text: "Memory" },
    { icon: <Visibility />, text: "Attention" },
    { icon: <Speed />, text: "Processing Speed" },
    { icon: <Psychology />, text: "Reasoning Skills" },
    { icon: <Language />, text: "Language Skills" },
    { icon: <Assignment />, text: "Executive Functioning" },
    { icon: <AccessibilityNew />, text: "Perceptual-Motor" },
  ];

  const learningItems = [
    { icon: <Folder />, text: "Structured" },
    { icon: <Settings />, text: "Methodical" },
    { icon: <Create />, text: "Creative" },
    { icon: <Shuffle />, text: "Flexible" },
    { icon: <PersonOutline />, text: "Independent" },
    { icon: <Groups />, text: "Collaborative" },
    { icon: <Bolt />, text: "Spontaneous" },
  ];

  const workingItems = [
    { icon: <RemoveRedEye />, text: "Visual" },
    { icon: <Hearing />, text: "Auditory" },
    { icon: <DirectionsRun />, text: "Kinesthetic" },
    { icon: <School />, text: "Experiential" },
    { icon: <Assignment />, text: "Instructional" },
    { icon: <Construction />, text: "Logical" },
    { icon: <Lightbulb />, text: "Intuitive" },
  ];

  return (
    <Box sx={{ maxWidth: 1200, margin: "auto", p: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h2"
            sx={{
              color: "primary.dark",
              mb: 4,
              fontWeight: "bold",
            }}
          >
            Cognitive Profile
          </Typography>
          {cognitiveItems.map((item, index) => (
            <StyleItem key={index} icon={item.icon} text={item.text} />
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography
            variant="h2"
            sx={{
              color: "primary.dark",
              mb: 4,
              fontWeight: "bold",
            }}
          >
            Learning Styles
          </Typography>
          {learningItems.map((item, index) => (
            <StyleItem key={index} icon={item.icon} text={item.text} />
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography
            variant="h2"
            sx={{
              color: "primary.dark",
              mb: 4,
              fontWeight: "bold",
            }}
          >
            Working Styles
          </Typography>
          {workingItems.map((item, index) => (
            <StyleItem key={index} icon={item.icon} text={item.text} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CognitiveStylesGrid;
