import { Box, Typography } from "@mui/material";
import { aboutUsLink } from "../../../../../data/footer/aboutUs/aboutUs";

function FooterAboutUs() {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bold",
        }}
      >
        About Us
      </Typography>
      {aboutUsLink.map((link) => (
        <Box
          key={link.id}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
            marginTop: "0.5rem",
          }}
        >
          <Typography variant="body2">{link.title}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default FooterAboutUs;
