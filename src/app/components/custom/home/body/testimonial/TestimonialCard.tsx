import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import type { Testimonial } from "../../../../../../types/testimonial";

type Props = {
  testimonial: Testimonial;
};

function TestimonialCard({ testimonial }: Props) {
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "10px",
      }}
    >
      <CardContent
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>{testimonial.description}</Typography>
      </CardContent>
      <Divider />
      <CardContent sx={{
            backgroundColor: "#FCFCFD",
            width: "100%",
      }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: "0.5rem",
            }}
          >
            <img
              style={{
                height: "3rem",
                width: "3rem",
                borderRadius: "5px",
                objectFit: "cover",
              }}
              src={testimonial.imageSrc}
            />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
              }}
            >
              {testimonial.testimonialBy}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                backgroundColor: "#F7F7F8",
              }}
            >
              Read Full Story
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
