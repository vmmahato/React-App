import { Box, Typography } from "@mui/material";

type Props = {
  professorName: string;
  universityName: string;
};

function HeaderCard({}: Props) {
  return (
    <Box sx={{
        ml: "3rem",
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "18rem",
          }}
          src="/images/header/HeaderAbstractLines.png"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem",
            backgroundColor: "white",
            borderRadius: "10px",
            gap: "1rem",
            position: "relative",
            mx: "2rem",
            top: "-1rem",
          }}
        >
          <img src="/images/header/HeaderZapIcon.png" />
          <Typography variant="h4" color="primary">
            Inspiring
          </Typography>
          <Typography variant="h4">Learning Every Day</Typography>
        </Box>
      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        ml: "2rem",
      }}>
       {/*  <Typography sx={{
            color: 'gray'
        }}>Hello I'm</Typography>
        <Typography variant="h4">{professorName}</Typography>
        <Typography variant="h5" color="primary" sx={{
            mb: '3rem',
        }}>Professor at {universityName}</Typography>
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
        }}>
          <Button variant="contained">Contact Us</Button>
          <Button variant="contained" sx={{
            backgroundColor: "white"
          }}>About Me</Button>
        </Box> */}
      </Box>
    </Box>
  );
}

export default HeaderCard;
