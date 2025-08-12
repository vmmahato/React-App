import { Box, Button, Grid, Typography } from "@mui/material";
import { testimonials } from "../../../../../data/testimonials/testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <Box
      sx={{
        m: "4rem",
        backgroundColor: "#F7F7F8",
        padding: "2rem",
        mx: "2rem",
        my: "1rem",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: "20px",
          mb: "2rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
          }}
        >
          Our Testimonials
        </Typography>
        <Button
          variant="outlined"
          sx={{
            padding: "0.5rem",
            backgroundColor: "#FCFCFD",
            color: "black",
            boxShadow: "none",
            borderColor: "#F1F1F3",
          }}
        >
          View All
        </Button>
      </Box>

      <Grid container spacing={2}>
        {testimonials.map((testimonial, index) => (
          <Grid size={6}>
            <TestimonialCard key={index} testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonial;
