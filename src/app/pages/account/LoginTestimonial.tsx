import { Box, Grid, IconButton } from "@mui/material";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import TestimonialCard from "../../components/custom/home/body/testimonial/TestimonialCard";
import { testimonials } from "../../data/testimonials/testimonials";

type Props = {
  currentIndex: number;
  handlePrevious: () => void;
  handleNext: () => void;
};

function LoginTestimonial({ currentIndex, handleNext, handlePrevious }: Props) {
  return (
    <Box>
      <Grid size={12}>
        <Box sx={{
            border: "1px solid #F1F1F3",
            borderRadius: "10px",
            marginTop: "2rem",
        }}>

        <TestimonialCard testimonial={testimonials[currentIndex]} />
        </Box>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          marginTop: "2rem",
          gap: "1rem",
        }}
      >
        <IconButton
          sx={{
            border: "1px solid #F1F1F3",
            borderRadius: "5px",
          }}
          onClick={handlePrevious}
        >
          <IoMdArrowRoundBack />
        </IconButton>
        <IconButton
          sx={{
            border: "1px solid #F1F1F3",
            borderRadius: "5px",
          }}
          onClick={handleNext}
        >
          <IoMdArrowRoundForward />
        </IconButton>
      </Box>
    </Box>
  );
}

export default LoginTestimonial;
