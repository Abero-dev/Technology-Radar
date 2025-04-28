import Layout from './components/Layout/Layout'
import Home from './presentation/components/Home'
import Radar from './pages/radar/Radar'
import Details from "./pages/Details"
import ErrorComponent from "./components/error/ErrorComponent"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Configurations from './pages/configurations/Configurations'

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                index: true,
                element: <Radar />,
            },
            {
                index: true,
                element: <Details />,
            },
            {
                path: "*",
                element: (
                    <ErrorComponent
                        errorTitle="Dirección no encontrada"
                        errorDescription="La ruta especificada no corresponde a ninguna dirección. Verifique la ruta."
                    />
            )},
            {
                element: <ProtectedRoutes />,
                children: [
                    {
                        path: "notifications",
                        element: <NotificationCenter />,
                    },
                    {
                        path: "list/:datatype/:relatedUserId?",
                        element: <Configurations />,
                    },
                ],
            },
        ],
    },
]

export default routes
