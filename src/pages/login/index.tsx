import React from "react";
import {
  Box,
  Divider,
  Typography,
  IconButton,
  InputAdornment,
  Paper,
  styled,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "../../components/button/button";
import Input from "../../components/input";

import BrainIconPurple from "../../asset/icon/brainIconPurlple";
import GoogleIcon from "../../asset/icon/googleIcon";
import AppleIcon from "../../asset/icon/appleIcon";

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  maxWidth: "440px",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
}));

const SocialButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderColor: "secondary.300",
  color: "secondary.600",
  textTransform: "none",
  "&:hover": {
    borderColor: "secondary.400",
    backgroundColor: "secondary.200",
  },
}));

const DividerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: `${theme.spacing(3)} 0`,
}));

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Paper
      elevation={24}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "secondary.200",
        p: 2,
      }}
    >
      <StyledPaper elevation={3} sx={{ borderRadius: "18px" }}>
        <LogoContainer>
          <BrainIconPurple sx={{ fontSize: 40 }} />
          <Typography
            variant="h4"
            sx={{ color: "primary.400", fontWeight: "700" }}
          >
            Mindmodel
          </Typography>
        </LogoContainer>

        <Button variant="action" fullWidth startIcon={<GoogleIcon />}>
          Sign in with Google
        </Button>

        <Button variant="action" fullWidth startIcon={<AppleIcon />}>
          Sign in with Apple
        </Button>

        <DividerContainer>
          <Divider sx={{ flex: 1 }} />
          <Typography variant="body2" sx={{ mx: 2, color: "secondary.500" }}>
            or
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </DividerContainer>

        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Input
            fullWidth
            label="Email"
            placeholder="name@example.com"
            variant="outlined"
          />

          <Input
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Link href="/">
            <Button fullWidth variant="primary" size="large">
              Log In
            </Button>
          </Link>
        </Box>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2" sx={{ color: "secondary.500" }}>
            Don't have an account?
            <Link href="/sign-up" sx={{ textDecoration: "none" }}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </StyledPaper>
    </Paper>
  );
};

export default LoginPage;
