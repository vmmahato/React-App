import { createBrowserRouter, type RouteObject } from "react-router";
import { lazy } from "react";

const App = lazy(() => import("../layout/App"));
const HomePage = lazy(() => import("../pages/home/HomePage"));
const LoginPage = lazy(() => import("../pages/account/LoginPage"));
const ContactUs = lazy(() => import("../pages/contactUs/ContactUs"));
const SignUpForm = lazy(() => import("../pages/account/SignUpForm"));
const MainBody = lazy(() => import("../components/custom/home/body/MainBody"));
const AboutUs = lazy(() => import("../pages/aboutUs/AboutUs"));

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />,
                children: [
                    {path: '', element: <MainBody />},
                    {path: 'about-us', element: <AboutUs />},
                    {path: 'sign-up', element: <SignUpForm />},
                    {path: 'login', element: <LoginPage />},
                    {path: 'contact-us', element: <ContactUs />},
                ]
            }
        ]
    }
]

export const router = createBrowserRouter(routes);