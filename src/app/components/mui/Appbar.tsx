import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { MdMenuBook } from "react-icons/md";
import { navStyles } from "../../styles/navStyles";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router";

function Appbar() {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                sx={{
                  color: "black",
                  fontSize: "3rem",
                }}
              >
                <MdMenuBook />
              </IconButton>
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
              >
                E-Learn
              </Typography>
            </Box>
            <Button
              component={Link}
              to="/"
              sx={[
                navStyles,
                location.pathname === "/" && {
                  backgroundColor: "#FF9500",
                  color: "white",
                },
              ]}
            >
              Home
            </Button>
            <Button sx={navStyles} endIcon={<IoMdArrowDropdown />}>
              Courses
            </Button>
            <Button
              component={Link}
              to="/about-us"
              sx={[
                navStyles,
                location.pathname === "/about-us" && {
                  backgroundColor: "#FF9500",
                  color: "white",
                },
              ]}
            >About Us</Button>
            <Button 
              component={Link}
              to="/contact-us"
              sx={[
                navStyles,
                location.pathname === "/contact-us" && {
                  backgroundColor: "#FF9500",
                  color: "white",
                },
              ]}>Contact Us</Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button component={Link} to='/sign-up' color="primary" variant="outlined">
              Sign Up
            </Button>
            <Button component={Link} to='/login' color="primary" sx={{ color: "white" }} variant="contained">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Appbar;
