// src/components/common/Button/Button.tsx
import React from "react";
import { Button as MuiButton, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ButtonProps } from "./type";
import { Opacity } from "@mui/icons-material";

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  isLoading = false,
  children,
  sx,
  disabled,
  ...props
}) => {
  const buttonStyles = () => ({
    root: {
      borderRadius: "8px",
      textTransform: "none" as const,
      fontFamily: "Inter",
      transition: "all 0.2s ease-in-out",
      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },
    },
    ...(variant === "neutral" && {
      backgroundColor: "#5D76FF",
      color: "secondary.100",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "500",
      padding: "8px 22px",

      "&:hover": {
        backgroundColor: "#6f85f7",
      },
    }),
    ...(variant === "primary" && {
      backgroundColor: "#585AE4",
      color: "secondary.100",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "500",
      padding: "8px 20px",
      border: "2px solid white",

      "&:hover": {
        backgroundColor: "#686ad6",
      },
    }),
    ...(variant === "success" && {
      backgroundColor: "#229F4C",
      color: "secondary.100",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "500",
      padding: "8px 20px",
      border: "2px solid white",
      boxShadow: "0px 4px 5px 0px #00000033",

      "&:hover": {
        backgroundColor: "#4ac473",
      },
    }),
    ...(variant === "info" && {
      backgroundColor: "primary.700",
      color: "secondary.100",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "500",
      padding: "8px 20px",

      "&:hover": {
        backgroundColor: "primary.500",
      },
    }),
  });

  return (
    <MuiButton
      {...props}
      disabled={disabled || isLoading}
      sx={buttonStyles}
      startIcon={
        isLoading ? <CircularProgress size={20} color="inherit" /> : undefined
      }
    >
      {children}
    </MuiButton>
  );
};

export default Button;
