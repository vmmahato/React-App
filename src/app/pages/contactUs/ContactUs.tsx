import { Box } from "@mui/material"
import ContactUsPage from "../../components/custom/ContactUs/ContactUsPage"
import ContactUsHeader from "../../components/custom/ContactUs/ContactUsHeader"

function ContactUs() {
  return (
    <Box>
        <ContactUsHeader/>
        <ContactUsPage />
    </Box>
  )
}

export default ContactUs