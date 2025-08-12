import { Box } from "@mui/material";
import HeaderCard from "./HeaderCard";

function Header() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F7F7F8",
          padding: "1rem",
          mx: "2rem",
          my: "1rem",
          borderRadius: "20px",
        }}
      >
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
        }}>
          <HeaderCard
            professorName="ROCK WILLIAM"
            universityName="national university"
          />
          <img
            src="/images/header/HeaderImg.jpg"
            alt="course-header"
            height="500rem"
            width="600rem"
            style={{
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Header;
