import { useEffect } from "react";
import AuthService from "../../services/AuthService";
import useDebouncedFunction from "../common/useDebouncedFunction";

/**
 * @description Vigila la actividad del usuario. Si transcurre el tiempo `timeoutDuration` sin que el usuario realice ninguno de los eventos en `events`, se establece su estado como inactivo en {@link AuthService}.
 * @param {number} timeoutDuration - Tiempo en milisegundos antes de considerar al usuario inactivo (por defecto 10 minutos).
 * @param {string[]} events - Eventos a monitorear para determinar la actividad del usuario (por defecto `mousemove`, `keydown` y `scroll`).
 */
const useUserActivity = (timeoutDuration: number = 10 * 60 * 1000, events: string[] = ["mousemove", "keydown", "scroll"]) => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!events || events.length === 0) events = ["mousemove", "keydown", "scroll"];

    const resetActivityTimeout = useDebouncedFunction(() => {
        AuthService.setUserActive(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => AuthService.setUserActive(false), timeoutDuration);
    }, 300);

    useEffect(() => {
        AuthService.setUserActive(true);

        events.forEach((event) => {
            window.addEventListener(event, resetActivityTimeout, { passive: true });
        });

        return () => {
            clearTimeout(timeout);
            AuthService.setUserActive(false);
            events.forEach((event) => {
                window.removeEventListener(event, resetActivityTimeout);
            });
        };
    }, [timeoutDuration, events]);

};

export default useUserActivity;
