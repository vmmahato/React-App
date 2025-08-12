import { Box, IconButton, Typography } from "@mui/material";
import { MdArrowOutward } from "react-icons/md";
import type { Content } from "../../../../../../types/content";

type Props = {
  content: Content;
};

function BenefitCard({ content }: Props) {
  return (
    <>
      <Box
        sx={{
          padding: "2rem",
          backgroundColor: "#F7F7F8",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginBottom: "0.5rem",
            color: "#333",
            textAlign: "end",
          }}
        >
          {content.id}
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          {content.title}
        </Typography>
        <Typography>{content.description}</Typography>
        <Box sx={{
            display: "flex",
            justifyContent: "flex-end",
        }}>
          <IconButton
            sx={{
              padding: "0.5rem",
              backgroundColor: "#FCFCFD",
              height: "3rem",
              width: "3rem",
              float: "end",
              borderRadius: "10px",
            }}
          >
            <MdArrowOutward
              style={{
                color: "#FF9500",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

export default BenefitCard;
