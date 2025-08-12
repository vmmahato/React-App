import { Box, Typography } from "@mui/material";
import { achievement } from "../../../data/aboutUs/aboutUsContents";

function AboutUsBodyTitle() {
  return (
    <Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
        <Typography variant="h4">{achievement.title}</Typography>
        <Typography variant="body2">{achievement.subtitle}</Typography>
      </Box>
    </Box>
  );
}

export default AboutUsBodyTitle;
