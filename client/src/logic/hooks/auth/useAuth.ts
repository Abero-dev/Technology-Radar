import { useContext, useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import { AuthContext } from "../../contexts/AuthContext";
import { LoadingContext } from "../../contexts/LoadingContext";

/**
 * @description Se encarga de manejar y proveer los estados y funciones asociadas a la autenticación y permisos de usuarios. 
 * - Cada 30 segundos verifica la autorización del usuario ejecutando {@link checkAuthorized}.
 * - Evita la necesidad de importar y usar manualmente `useContext` cada vez que se quiera consumir de {@link AuthContext}.
 * @property {boolean} {@link isAuthorized} - Indica si el usuario está autorizado (`true`) o no (`false`).
 * @returns {Object} Un objeto con {@link isAuthorized} y la información obtenida de {@link AuthContext} ({@link user}, {@link login} y {@link logout}).
 */

interface AuthContextType {
    authStatusChanged: boolean;
    user: object | null;
    login: (userFormData: object) => Promise<{ success: boolean; message: string }>;
    logout: () => void;
}

const useAuth = () => {
    const [isAuthorized, setIsAuthorized] = useState < boolean | null > (null);
    const authContext = useContext(AuthContext);
    const loadingContext = useContext(LoadingContext);

    if (!authContext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    if (!loadingContext) {
        throw new Error("useAuth must be used within a LoadingProvider");
    }

    const { authStatusChanged, user, login, logout } = authContext;
    const { setLoading } = loadingContext;

    useEffect(() => {
        const checkAuthorized = async () => {
            try {
                setLoading(true);
                const result = await AuthService.checkAuth();
                setIsAuthorized(result);
            } catch (error) {
                if (error instanceof Error) {
                    console.error("Error verificando autorización:", error.message);
                } else {
                    console.error("Error desconocido al verificar autorización");
                }
                setIsAuthorized(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuthorized();

        const interval = setInterval(() => {
            checkAuthorized();
        }, 30 * 1000); // Cada 30 segundos

        return () => clearInterval(interval);
    }, [authStatusChanged, setLoading]);

    return { isAuthorized, user, login, logout };
};

export default useAuth;
