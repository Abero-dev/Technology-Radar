import Layout from "./components/layout/Layout";
import Home from "./pages/portal/home/Home";
import FrecuentQuestions from "./pages/portal/faq/FrecuentQuestions";
import ContactUs from "./pages/portal/cta/ContactUs";
import About from "./pages/portal/about/About";
import Radar from "./pages/radar/Radar"
import Details from "./pages/radar/Details";
import ErrorComponent from "./components/error/ErrorComponent";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Configurations from "./pages/configurations/Configurations";
import NotificationCenter from "./pages/notifications/NotificationCenter";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "faq",
                element: <FrecuentQuestions />,
            },
            {
                path: "cta",
                element: <ContactUs />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "radar",
                element: <Radar />,
            },
            {
                path: "details",
                element: <Details />,
            },
            {
                path: "*",
                element: (
                    <ErrorComponent
                        errorTitle="Dirección no encontrada"
                        errorDescription="La ruta especificada no corresponde a ninguna dirección. Verifique la ruta."
                    />
                ),
            },
            {
                element: <ProtectedRoutes />,
                children: [
                    {
                        path: "notifications",
                        element: <NotificationCenter />,
                    },
                    {
                        path: "config",
                        element: <Configurations />,
                    },
                ],
            },
        ],
    },
];

export default routes;
