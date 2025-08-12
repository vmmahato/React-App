import { Box, Typography, Button } from "@mui/material";

function FaqLeft() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        ml: "2rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
        }}
      >
        Frequently Asked <br /> Questions
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: "2rem" }}>
        Still you have any questions? Contact our Team via <br />{" "}
        support@skillbridge.com
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#FFFFFF",
            color: "black",
            borderColor: "#F1F1F3",
            boxShadow: "none",
          }}
        >
          See All FAQ's
        </Button>
      </Box>
    </Box>
  );
}

export default FaqLeft;
