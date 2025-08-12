import { Box, Grid, Typography } from "@mui/material";
import { cotactUsHeader } from "../../../data/contactUs/contactUsContents";

function ContactUsHeader() {
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
          <Typography variant="h3">{cotactUsHeader.title}</Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography variant="body2">{cotactUsHeader.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUsHeader;
