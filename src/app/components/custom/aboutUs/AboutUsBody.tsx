import { Box, Grid } from "@mui/material";
import AboutUsBodyTitle from "./AboutUsBodyTitle";
import AchievementCard from "./AchievementCard";
import { achievement } from "../../../data/aboutUs/aboutUsContents";
import MeetOurTeam from "./MeetOurTeam";

function AboutUsBody() {
  return (
    <>
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
        <AboutUsBodyTitle />
        <Grid container spacing={3}>
          {achievement.achievements.map((achievement, index) => (
            <Grid size={{ xs: 6 }}>
              <AchievementCard achievement={achievement} key={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          padding: "2rem",
          mx: "2rem",
          my: "1rem",
        }}
      >
        <MeetOurTeam />
      </Box>
    </>
  );
}

export default AboutUsBody;
