// components/contact/ContactInfo.tsx
import { Box, Typography, Link, Divider, IconButton } from "@mui/material";
import {
  MdEmail as EmailIcon,
  MdPhone as PhoneIcon,
  MdLocationPin as LocationIcon,
} from "react-icons/md";
import { BsTwitterX as TwitterIcon } from "react-icons/bs";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa6";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaSquareFacebook as FacebookIcon } from "react-icons/fa6";
import {
  contactinfo,
  socialMedia,
} from "../../../data/contactUs/contactUsContents";

const ContactInfo = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        {contactinfo.title}
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <EmailIcon size="1.5rem" style={{
            color: '#FF9500'
          }} />
          <Typography variant="body1">
            <Link href={contactinfo.email} color="inherit">
              {contactinfo.email}
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <PhoneIcon size="1.5rem" color="#FF9500" />
          <Typography variant="body1">
            <Link href={contactinfo.phone} color="inherit">
              {contactinfo.phone}
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <LocationIcon size="1.5rem" color="#FF9500" />
          <Typography variant="body1">{contactinfo.address}</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        {socialMedia.title}
      </Typography>

      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton aria-label="Facebook" color="primary">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="Twitter" color="primary">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="LinkedIn" color="primary">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="Instagram" color="primary">
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactInfo;
