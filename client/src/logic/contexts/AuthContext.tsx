import { createContext, useState, useEffect, ReactNode } from "react";
import AuthService from "../services/AuthService";

/**
 * @description Contexto diseñado para manejo centralizado de autenticación de usuarios.
 */
interface User {
    name: string;
    email?: string;
    [key: string]: any; // Para incluir propiedades adicionales si es necesario
}

interface AuthContextType {
    user: User | null;
    authStatusChanged: boolean;
    login: (userFormData: object) => Promise<{ success: boolean; message: string }>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * @description Provider diseñado para manejo del {@link AuthContext}
 * @param {ReactNode} children - Componentes hijos dentro del contexto.
 * @returns Provider que permite a los componentes hijos acceder a los estados {@link user} con {@link setUser} y a {@link authStatusChanged} con {@link setAuthStatusChanged}, así como a las funciones {@link login} y {@link logout}.
 */
const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [authStatusChanged, setAuthStatusChanged] = useState<boolean>(true);

    useEffect(() => {
        /**
         * @description Obtiene la información del usuario siempre que su estatus cambia ({@link authStatusChanged} es `true`).
         */
        const fetchUser = () => {
            const userInfo = AuthService.getLoggedUserInfo();
            const jsonString = JSON.stringify(userInfo);
            const parsedData = JSON.parse(jsonString); // Esto evitaría el error

            setUser(parsedData);
            setAuthStatusChanged(false);
        };
        if (authStatusChanged) fetchUser();
    }, [authStatusChanged]);

    /**
     * @description Intenta autenticar al usuario de información userFormData a través de {@link AuthService.login}
     * @param {object} userFormData - Usuario y contraseña asociados al usuario que se pretende autenticar
     * @returns {object} Objeto con la información asociada al resultado de la operación.
     * - {boolean} `success` - Indica si la operación fue exitosa (`true`) o fallida (`false`).
     * - {string} `message` - Mensaje informativo sobre la autenticación.
     */
    const login = async (userFormData: object): Promise<{ success: boolean; message: string }> => {
        try {
            const userData = await AuthService.login(userFormData);

            setUser(userData);
            setAuthStatusChanged(true);

            return {
                success: true,
                message: `El usuario ${userData.name} se ha autenticado correctamente.`,
            };
        } catch (error) {
            const err = error as Error;
            return {
                success: false,
                message: err.message,
            };
        }

    };

    /**
     * @description Intenta cerrar la sesión activa a través de {@link AuthService.logout}
     */
    const logout = (): void => {
        AuthService.logout();
        setUser(null);
        setAuthStatusChanged(true);
    };

    return <AuthContext.Provider value={{ user, login, logout, authStatusChanged }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
