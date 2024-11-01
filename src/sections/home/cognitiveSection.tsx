import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
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

const Item = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  cursor: "pointer",
  "&:hover": {
    "& .MuiTypography-root": {
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.main,
    },
  },
  color: theme.palette.primary.main,
  "& .MuiSvgIcon-root": {
    fontSize: "3.5rem",
    color: theme.palette.primary.light,
  },
}));

interface StyleItemProps {
  icon: React.ReactNode;
  text: string;
}

const StyleItem: React.FC<StyleItemProps> = ({ icon, text }) => (
  <Item>
    {icon}
    <Typography variant="body1">{text}</Typography>
  </Item>
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
      <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
        <Grid size={{ sm: 12, md: 4 }}>
          <Typography
            variant="h2"
            sx={{ color: "primary.dark", mb: 2, fontWeight: "bold" }}
          >
            Cognitive Profile
          </Typography>
          {cognitiveItems.map((item, index) => (
            <StyleItem key={index} icon={item.icon} text={item.text} />
          ))}
        </Grid>

        <Grid size={{ sm: 12, md: 4 }}>
          <Typography
            variant="h2"
            sx={{ color: "primary.dark", mb: 2, fontWeight: "bold" }}
          >
            Learning Styles
          </Typography>
          {learningItems.map((item, index) => (
            <StyleItem key={index} icon={item.icon} text={item.text} />
          ))}
        </Grid>

        <Grid size={{ sm: 12, md: 4 }}>
          <Typography
            variant="h2"
            sx={{ color: "primary.dark", mb: 2, fontWeight: "bold" }}
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
