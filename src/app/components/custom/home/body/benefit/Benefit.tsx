import { Box, Button, Grid, Typography } from "@mui/material";
import BenefitCard from "./BenefitCard";
import { contents } from "../../../../../data/benefits/benefits";

function Benefit() {
  return (
    <Box
      sx={{
        m: "4rem",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" sx={{
        fontWeight: "bold",
      }}>Benefits</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>Explore the benefits of our platform</Typography>
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

      <Grid container spacing={2} sx={{ mt: "2rem" }}>
        {contents.map((content, index) => (
          <Grid key={index} size={4}>
            <BenefitCard content={content} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Benefit;
