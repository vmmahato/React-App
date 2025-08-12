import { Grid } from "@mui/material";
// import { testimonials } from "../../data/testimonials/testimonials";
// import { useState } from "react";
// import LoginTestimonial from "./LoginTestimonial";
import LoginForm from "./LoginForm";

function LoginPage() {
  // const [currentIndex, setCurrentIndex] = useState<number>(0);

  // function handlePrevious() {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
  //   );
  // }

  // function handleNext() {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
  //   );
  // }

  return (
    <>
      <Grid container>
        {/* <Grid size={6}>
          <Box
            sx={{
              padding: "5rem",
            }}
          >
            <Typography variant="h4">Student Testimonials</Typography>
            <Typography variant="subtitle1" sx={{ marginTop: "1rem" }}>
              Hear from our students about their experiences and success
              stories.
            </Typography>
            <LoginTestimonial
              currentIndex={currentIndex}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          </Box>
        </Grid> */}
        <Grid size={12}>
            <LoginForm />
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
