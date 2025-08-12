import { Box, Grid, Typography } from "@mui/material";
import CompanyInfo from "./companyInfo/CompanyInfo";
import FooterHome from "./links/FooterHome";
import FooterAboutUs from "./links/FooterAboutUs";
import FooterSocialProfile from "./links/FooterSocialProfile";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        p: "5rem",
        backgroundColor: "#F7F7F8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
        <Grid size={6}>
          <CompanyInfo />
        </Grid>

        <Grid size={6}>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}>
            <FooterHome />
            <FooterAboutUs />
            <FooterSocialProfile />
          </Box>
        </Grid>
      </Grid>
      <Typography variant="subtitle2" sx={{
        textAlign: "center",
        mt: "3rem",
        mb: "-3rem",
        color: "#656567",
      }}>© {currentYear} ecosinnov.com. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;
