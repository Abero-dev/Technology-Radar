import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";
// import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN_KEY } from "./Constants";

const authApi = axios.create({
    baseURL: "http://localhost:8000/users/token/",
});

authApi.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        let token = getToken(ACCESS_TOKEN_KEY);
        if (token && isAboutToExpire(token)) {
            const refreshToken = getToken("REFRESH_TOKEN_KEY");
            if (refreshToken) {
                const newAccessToken = await getNewAccessToken(refreshToken);
                setToken(ACCESS_TOKEN_KEY, newAccessToken.data.access);
                token = newAccessToken.data.access;
            }
        }

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

authApi.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    throw new Error("No existe una cuenta asociada. Verifique sus credenciales");
                case 403:
                    throw new Error("No tiene acceso a este recurso");
                case 404:
                    throw new Error("Recurso no encontrado");
                default:
                    return Promise.reject(error);
            }
        } else {
            console.error("Error de red o inesperado:", error.message);
            return Promise.reject(new Error("Error de red o inesperado"));
        }
    }
);

export const authenticate = async (userFormData: object): Promise<{ tokens: any; data: any; status: string }> => {
    try {
        const response = await authApi.post("", userFormData);
        return { tokens: response.data, data: null, status: "Success" };
    } catch (error) {
        return { tokens: null, data: null, status: (error as Error).message || "Error desconocido" };
    }
};

export const setToken = (TOKEN_KEY: string, token: string): void => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const getToken = (TOKEN_KEY: string): string | null => {
    const item = localStorage.getItem(TOKEN_KEY);

    if (!item) {
        console.warn(`Token con clave "${TOKEN_KEY}" no encontrado.`);
        return null;
    }
    try {
        return JSON.parse(item);
    } catch (error) {
        console.error("Error al parsear el token:", error);
        return null;
    }
};

export const deleteToken = (TOKEN_KEY: string): void => {
    localStorage.removeItem(TOKEN_KEY);
};

export const getNewAccessToken = async (refreshToken: string): Promise<AxiosResponse> => {
    try {
        return await authApi.post("refresh/", { refresh: refreshToken });
    } catch (error) {
        throw new Error(`No se pudo refrescar el token: ${(error as Error).message}`);
    }
};

export const isValid = (token: string | null): boolean => {
    if (!token) {
        console.warn("Token no proporcionado.");
        return false;
    }

    try {
        return token.split(".").length === 3; // Puedes descomentar `jwtDecode(token)` si lo estás utilizando
    } catch (error) {
        console.error("Token inválido:", error instanceof Error ? error.message : error);
        return false;
    }
};

export const isAboutToExpire = (token: string, threshold: number = 60): boolean => {
    if (!isValid(token)) throw new Error("Token inválido");

    // try {
    //     const decoded = jwtDecode(token);
    //     const tokenExpiration = decoded.exp;
    //     const now = Date.now() / 1000;

    //     if (tokenExpiration < now) {
    console.warn("El token ya está caducado.");
    return true;
    //     }
    //     return (tokenExpiration - now) < threshold;
    // } catch (error) {
    //     throw new Error(`Error al verificar la expiración del token: ${(error as Error).message}`);
    // }
};
