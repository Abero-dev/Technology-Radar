import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import * as authApi from "./AuthAPI";
import * as tokens from "./Constants";

/**
 * @description Configura los interceptores de Axios para manejar la autenticación de tokens y errores de respuesta.
 * @param {AxiosInstance} instance - Instancia de Axios a la que se le aplicarán los interceptores.
 */
export const setupInterceptors = (instance: AxiosInstance): void => {
    instance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token = authApi.getToken(tokens.ACCESS_TOKEN_KEY);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    instance.interceptors.response.use(
        (response: AxiosResponse) => response,
        async (error) => {
            const originalRequest = error.config;

            switch (error.response?.status) {
                case 401: {
                    if (!originalRequest._retry) {
                        originalRequest._retry = true;

                        const refreshToken = authApi.getToken(tokens.REFRESH_TOKEN_KEY);
                        if (!refreshToken) {
                            authApi.deleteToken(tokens.ACCESS_TOKEN_KEY);
                            authApi.deleteToken(tokens.REFRESH_TOKEN_KEY);
                            return Promise.reject(new Error("No estás autenticado"));
                        }

                        try {
                            const response = await authApi.getNewAccessToken(refreshToken);
                            const newAccessToken: string = response.data.access;
                            authApi.setToken(tokens.ACCESS_TOKEN_KEY, newAccessToken);

                            // Actualiza el encabezado y reintenta la solicitud original
                            originalRequest.headers = { ...originalRequest.headers, Authorization: `Bearer ${newAccessToken}` };
                            return instance(originalRequest);
                        } catch (error) {
                            authApi.deleteToken(tokens.ACCESS_TOKEN_KEY);
                            authApi.deleteToken(tokens.REFRESH_TOKEN_KEY);
                            console.error(error);
                            throw new Error("Sesión expirada. Por favor, inicia sesión nuevamente.");
                        }
                    }
                    break;
                }
                case 403:
                    throw new Error("No tiene acceso a este recurso");
                case 404:
                    throw new Error("Recurso no encontrado");
                case 500:
                    throw new Error("Problemas del servidor");
                default:
                    return Promise.reject(error);
            }
        }
    );
};

/**
 * @description Crea una instancia de Axios con la configuración base y los interceptores establecidos.
 * @param {string} baseURL - URL base para la API.
 * @returns {AxiosInstance} Instancia de Axios configurada.
 */
export const createApiInstance = (baseURL: string): AxiosInstance => {
    const instance = axios.create({ baseURL });
    setupInterceptors(instance);
    return instance;
};
