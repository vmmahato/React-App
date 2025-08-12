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

function SignUpForm() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const { control } = useForm();

  function togglePasswordVisible() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <Box>
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
          Sign Up
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ marginBottom: "1rem", color: "#4C4C4D" }}
        >
          Welcome! Please enter your details to create your account.
        </Typography>

        <Box
          sx={{
            width: "95%",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <Grid container spacing={3}>
            <Grid size={6}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", mb: "0.5rem" }}
                >
                  Username
                </Typography>
                <AppTextInput
                  name="username"
                  placeholder="Enter your Username"
                  control={control}
                  sx={{
                    backgroundColor: "#FCFCFD",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={6}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", mb: "0.5rem" }}
                >
                  Full Name
                </Typography>
                <AppTextInput
                  name="fullName"
                  placeholder="Enter your Full Name"
                  control={control}
                  sx={{
                    backgroundColor: "#FCFCFD",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={6}>
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
            </Grid>
            <Grid size={6}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", mb: "0.5rem" }}
                >
                  Phone Number
                </Typography>
                <AppTextInput
                  name="phoneNumber"
                  placeholder="Enter your Phone Number"
                  control={control}
                  sx={{
                    backgroundColor: "#FCFCFD",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={6}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", mb: "0.5rem" }}
                >
                  Street Address
                </Typography>
                <AppTextInput
                  name="streetAddress"
                  placeholder="Enter your Street Address"
                  control={control}
                  sx={{
                    backgroundColor: "#FCFCFD",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={6}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", mb: "0.5rem" }}
                >
                  City
                </Typography>
                <AppTextInput
                  name="city"
                  placeholder="Enter your City"
                  control={control}
                  sx={{
                    backgroundColor: "#FCFCFD",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={4}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", mb: "0.5rem" }}
                >
                  State
                </Typography>
                <AppTextInput
                  name="state"
                  placeholder="Enter your state"
                  control={control}
                  sx={{
                    backgroundColor: "#FCFCFD",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={4}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", mb: "0.5rem" }}
                >
                  Zip Code
                </Typography>
                <AppTextInput
                  name="zipCode"
                  placeholder="Enter your Zip Code"
                  control={control}
                  sx={{
                    backgroundColor: "#FCFCFD",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={4}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", mb: "0.5rem" }}
                >
                  Country
                </Typography>
                <AppTextInput
                  name="country"
                  placeholder="Enter your Country"
                  control={control}
                  sx={{
                    backgroundColor: "#FCFCFD",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={6}>
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
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: {xs: "100%", md: "50%"},
                color: "white",
              }}
            >
              Sign Up
            </Button>
          </Box>
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
              Already have an account?{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  textDecoration: "underline",
                  color: "inherit",
                  fontWeight: "bold",
                }}
                component={Link}
                to="/login"
              >
                Login
              </Typography>
              <FiArrowUpRight size="16" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUpForm;
