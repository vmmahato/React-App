import { Box, Typography, Grid, Paper } from "@mui/material";
import ContactForm from "../ContactUs/ContactForm";
import ContactInfo from "../ContactUs/ContactInfo";

const ContactUsPage = () => {

  return (
    <Box
      sx={{
        backgroundColor: "#F7F7F8",
        padding: "2rem",
        mx: "2rem",
        my: "1rem",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Grid container spacing={5}>
        <Grid size={10}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 3 }}
            >
              Send us a message
            </Typography>

            <ContactForm />
          </Paper>
        </Grid>

        <Grid size={2} justifyContent="center">
          {/* <Paper elevation={3} sx={{ p: 3, height: '100%' }}>  */}
          <ContactInfo />
          {/*</Paper>*/}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUsPage;
