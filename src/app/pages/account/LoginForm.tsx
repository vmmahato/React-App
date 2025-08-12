import {
  Box,
  Button,
  // Divider,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import AppTextInput from "../../components/mui/AppTextInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
// import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { FiArrowUpRight } from "react-icons/fi";

function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const { control } = useForm();

  function togglePasswordVisible() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#F7F7F8",
          margin: "5rem",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "1rem", fontWeight: "bold" }}
        >
          Login
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ marginBottom: "1rem", color: "#4C4C4D" }}
        >
          Welcome back! Please log in to access your account.
        </Typography>

        <Box
          sx={{
            width: "95%",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", mb: "0.5rem" }}
            >
              Email
            </Typography>
            <AppTextInput
              name="email"
              placeholder="Enter your Email"
              control={control}
              sx={{
                backgroundColor: "#FCFCFD",
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", mb: "0.5rem" }}
            >
              Password
            </Typography>
            <AppTextInput
              placeholder="Enter your Password"
              type={passwordVisible ? "text" : "password"}
              name="password"
              control={control}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisible}>
                        {passwordVisible ? <IoEye /> : <IoIosEyeOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "100%",
               color: "white",
            }}
          >
            Login
          </Button>
          {/* <Divider sx={{ my: 2 }}>OR</Divider>
          <Button
            variant="outlined"
            startIcon={<FcGoogle />}
            sx={{
              width: "100%",
              color: "#4C4C4D",
              borderColor: "#F1F1F3",
              padding: "0.75rem",
              "&:hover": {
                borderColor: "#FF9500",
                backgroundColor: "#FFF3E0",
              },
            }}
          >
            Login with Google
          </Button> */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
              gap: "0.5rem",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                color: "#4C4C4D",
              }}
            >
              Don't have an account?{" "}
            </Typography>
            <Box sx={{
                display: "flex",
                alignItems: "center",
            }}>
              <Typography
                variant="body2"
                sx={{
                  textDecoration: "underline",
                  color: "inherit",
                  fontWeight: "bold",
                }}
                component={Link}
                to="/sign-up"
              >
                Sign Up
              </Typography>
              <FiArrowUpRight size="16" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default LoginForm;
