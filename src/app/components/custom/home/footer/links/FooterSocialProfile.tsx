import { Box, Typography } from "@mui/material";
import { socialProfiles } from "../../../../../data/footer/socialProfiles/socialProfiles";

function FooterSocialProfile() {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bold",
        }}
      >
        Social Profiles
      </Typography>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        m: "0.5rem",
      }}>
        {socialProfiles.map((profile) => (
          <Box>{profile.icon}</Box>
        ))}
      </Box>
    </Box>
  );
}

export default FooterSocialProfile;
