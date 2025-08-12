import { Box, Button, Grid, Typography } from "@mui/material";
import AppTextInput from "../../mui/AppTextInput";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { control } = useForm();

  return (
    <Box component="form">
      <Grid container spacing={3}>
        <Grid size={{ xs: 6 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: "0.5rem" }}>
            First Name
          </Typography>
          <AppTextInput
            name="firstName"
            placeholder="Enter First Name"
            control={control}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: "0.5rem" }}>
            Last Name
          </Typography>
          <AppTextInput
            name="lastName"
            placeholder="Enter Last Name"
            control={control}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: "0.5rem" }}>
            Email
          </Typography>
          <AppTextInput
            name="email"
            type="email"
            placeholder="Enter your Email"
            control={control}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: "0.5rem" }}>
            Phone Number
          </Typography>
          <AppTextInput
            name="phone"
            placeholder="Enter Phone Number"
            control={control}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: "0.5rem" }}>
            Subject
          </Typography>
          <AppTextInput
            name="subject"
            placeholder="Enter your Subject"
            control={control}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: "0.5rem" }}>
            Message
          </Typography>
          <AppTextInput
            name="message"
            placeholder="Enter your Message here..."
            multiline
            rows={4}
            control={control}
          />
        </Grid>

        <Grid
          size={{ xs: 12 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5, color: "white" }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
