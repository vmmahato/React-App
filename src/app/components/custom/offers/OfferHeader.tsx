import { Box, Typography } from "@mui/material";
import { CgChevronRight } from "react-icons/cg";

function OfferHeader() {
  return (
    <Box
      sx={{
        backgroundColor: "#FF9500",
        m: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        padding: "0.3rem",
        color: "white",
        gap: 1
      }}
    >
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: "400",
        }}
        variant="subtitle2"
      >
        Free Courses 🌟 Sale Ends Soon, Get It Now
      </Typography>
      <CgChevronRight />
    </Box>
  );
}

export default OfferHeader;
