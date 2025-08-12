import { Grid } from "@mui/material";
import FaqLeft from "./FaqLeft";
import FaqRight from "./FaqRight";

function Faq() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        m: "6rem",
      }}
    >
      <Grid size={6}>
        <FaqLeft />
      </Grid>
      <Grid size={6}>
        <FaqRight />
      </Grid>
    </Grid>
  );
}

export default Faq;
