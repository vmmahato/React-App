import { Box, Grid, Typography } from "@mui/material";
import { aboutUsHeader } from "../../../data/aboutUs/aboutUsContents";

function AboutUsHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        margin: "5rem",
      }}
    >
      <Grid container>
        <Grid size={{ xs: 6 }}>
          <Typography variant="h3">{aboutUsHeader.title}</Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography variant="body2">{aboutUsHeader.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUsHeader;
