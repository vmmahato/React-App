import { Box, Grid, Typography } from "@mui/material";
import TeamMemberCard from "./TeamMemberCard";
import { teamMembers } from "../../../data/aboutUs/team";

function MeetOurTeam() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          mb: "2rem",
        }}
      >
        Meet Our Team
      </Typography>
      <Grid container spacing={5} justifyContent='center'>
        {teamMembers.map((teamMember) => (
          <Grid size={{xs: 3}}>
            <TeamMemberCard teamMember={teamMember} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MeetOurTeam;
