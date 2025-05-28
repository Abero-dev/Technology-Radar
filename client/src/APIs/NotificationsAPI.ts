import { AxiosInstance } from "axios";
import { createApiInstance } from "./APIConfig";

const notificationsApi: AxiosInstance = createApiInstance("http://localhost:8000/notifications/");

interface RequestOptions {
    [key: string]: any;
}

/**
 * @description Maneja las solicitudes HTTP para la API de notificaciones.
 * @param {string} method - Método HTTP a utilizar (ej. "get", "post", "put", "delete").
 * @param {string} url - Endpoint de la solicitud.
 * @param {RequestOptions} options - Opciones adicionales para la solicitud.
 * @returns {Promise<any>} Respuesta de la API procesada.
 */
const handleRequest = async (method: "get" | "post" | "put" | "delete", url: string = "", options: RequestOptions = {}): Promise<any> => {
    try {
        const response = await notificationsApi[method](url, options);
        return response.data;
    } catch (error: any) {
        const errorStatus = error.request?.status || "Desconocido";
        const errorHeader = error.request?.statusText || "Error";
        const errorMessage = error.response?.data?.error || "Error desconocido";
        throw new Error(`${errorStatus} ${errorHeader}: ${errorMessage}`);
    }
};

/**
 * @description Obtiene todas las notificaciones.
 * @returns {Promise<any>} Respuesta de la API con la lista de notificaciones.
 */
export const getNotifications = (): Promise<any> =>
    handleRequest("get");

/**
 * @description Marca una notificación como leída.
 * @param {string} id - ID de la notificación a marcar.
 * @returns {Promise<any>} Respuesta de la API.
 */
export const markNotificationAsRead = (id: string): Promise<any> =>
    handleRequest("put", `${id}/`);

/**
 * @description Elimina una notificación.
 * @param {string} id - ID de la notificación a eliminar.
 * @returns {Promise<any>} Respuesta de la API.
 */
export const deleteNotification = (id: string): Promise<any> =>
    handleRequest("delete", `${id}/`);
