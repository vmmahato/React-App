import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router";
import { router } from "./app/router/Routes.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9500",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <ThemeProvider theme={theme}>
  //     <CssBaseline />
  //     <Suspense fallback='loading...'>
  //       <RouterProvider router={router} />
  //     </Suspense>
  //   </ThemeProvider>
  // </StrictMode>
  <h1>Welcome to Mamatatech</h1>
);
