import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../logic/hooks/auth/useAuth";

/**
 * @description Utiliza {@link useAuth} para verificar si el usuario está autorizado y, dependiendo de esto, mostrar el contenido de {@link Outlet} o redirigir al usuario a la ruta principal ('/').
 * @returns Dependiendo de {@link isAuthorized}, renderiza el {@link Outlet} o redirecciona al usuario a la página principal para que se autentique.
 */

const ProtectedRoutesComponent: React.FC = () => {
    const { isAuthorized } = useAuth();

    if (isAuthorized === null) return null;

    return isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutesComponent;
