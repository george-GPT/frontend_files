import { Container, Stack, Typography } from "@mui/material";

import NoPageFoundIcon from "../../asset/icon/nopageFoundIcon";
import Button from "../../components/button/button";

export const NoPageFound: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <NoPageFoundIcon sx={{ fontSize: 300 }} />
      <Stack sx={{ maxWidth: "400px" }} spacing={2}>
        <Typography variant="h3" color="primary.600" fontWeight="700">
          No Result Found!
        </Typography>
        <Typography>
          Sorry, we came up empty-handed. Let's broaden our search and help you
          find what you're looking for.
        </Typography>

        <Button variant="info" fullWidth={false}>
          Search
        </Button>
      </Stack>
    </Container>
  );
};
