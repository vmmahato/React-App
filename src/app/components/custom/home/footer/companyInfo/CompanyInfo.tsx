import { Box, Typography } from "@mui/material";
import { companyInfo } from "../../../../../data/company/companyInfo";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function CompanyInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <img
        style={{
          borderRadius: "5px",
          width: "3rem",
          height: "3rem",
        }}
        src={companyInfo.logoSrc}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <IoMdMail />
        <Typography>{companyInfo.email}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <FaPhoneAlt />
        <Typography>{companyInfo.phone}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <IoLocationSharp />
        <Typography>{companyInfo.address}</Typography>
      </Box>
    </Box>
  );
}

export default CompanyInfo;
