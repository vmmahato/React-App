import type { SocialLink } from "../../../../types/footer";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const socialProfiles: SocialLink[] = [
    {
        id: "01",
        href: "#",
        icon: <FaFacebook />,
    },
    {
        id: "02",
        href: "#",
        icon: <FaXTwitter />,
    },
    {
        id: "03",
        href: "#",
        icon: <FaLinkedin />
    }
]