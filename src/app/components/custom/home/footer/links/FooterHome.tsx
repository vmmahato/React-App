import { Box, Typography } from "@mui/material"
import { homeLinks } from "../../../../../data/footer/homeLink/homeLinks"

function FooterHome() {
  return (
    <Box>
        <Typography variant="body2" sx={{
            fontWeight: "bold",
        }}>Home</Typography>
        {homeLinks.map((link) => (
            <Box key={link.id} sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
                marginTop: "0.5rem",
            }}>
                <Typography variant="body2">{link.title}</Typography>
            </Box>
        ))}
    </Box>
  )
}

export default FooterHome