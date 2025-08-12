import { Box, Typography } from "@mui/material";
import type { TeamMember } from "../../../../types/aboutUs";

type Props = {
  teamMember: TeamMember;
};

function TeamMemberCard({ teamMember }: Props) {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <img
        src={teamMember.imageSrc}
        style={{
            height: "6rem",
            width: "6rem",
            objectFit: 'cover',
            borderRadius: "50%",
            objectPosition: 'top',
            border: '0.2rem solid orange'
        }}
        />
      <Typography variant="subtitle2">{teamMember.name}</Typography>
      <Typography variant="caption">{teamMember.designation}</Typography>
    </Box>
  );
}

export default TeamMemberCard;
