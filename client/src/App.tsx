import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./presentation/routes";
import ErrorBoundary from "./presentation/components/error/ErrorBoundary";
import ToastNotification from "./presentation/components/ToastNotification";
import { AuthProvider } from "./logic/contexts/AuthContext";
import { UserConfigsProvider } from "./logic/contexts/UserConfigsContext";
import { LoadingProvider } from "./logic/contexts/LoadingContext";
import Loading from "./presentation/components/Loading";

/**
 * @description Crea un enrutador basado en las rutas del sitio.
 *
 * @param {Array} routes - Arreglo que contiene todas las rutas del sitio:
 *  - `path`: Ruta del sitio (string).
 *  - `element`: Componente asociado a la ruta (React.ReactNode).
 *  - `children`: Sub-rutas opcionales (array).
 * @returns {Object} `router` - Objeto enrutador basado en React Router.
 *  Utiliza las características experimentales:
 *  - `v7_startTransition`: Mejora de rendimiento para transiciones.
 *  - `v7_relativeSplatPath`: Manejo más limpio de rutas relativas. 
 */
const router = createBrowserRouter(routes, {
    future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
    },
});

/**
 * @description Estructura principal de providers de la aplicación. También ejecuta el {@link useUserActivity}.
 * 
 * @returns Estructura de la aplicación compuesta por los siguientes componentes:
 * - {@link ErrorBoundary}- Para manejo personalizado de errores.
 * - {@link ToastNotification}- Para notificaciones emergentes en la interfaz.
 * - {@link Suspense}- Suspende la carga de componentes hijos hasta que estén disponibles, mostrando un spinner (<span className="spin"/>) mientras tanto.
 * - {@link AuthProvider}- Provider para la autenticación de usuarios.
 * - {@link LoadingProvider}- Provider para manejo centralizado de estados de carga.
 * - {@link ModalProvider}- Provider para funcionalidad de abrir y cerrar modales dentro de la aplicación.
 * - {@link RouterProvider}- Gestiona el enrutamiento utilizando la configuración definida en {@link router}.
 */
const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <ToastNotification />

            <Suspense fallback={<Loading />}>
                <UserConfigsProvider>
                    <AuthProvider>
                        <LoadingProvider>
                            <RouterProvider router={router} />
                        </LoadingProvider>
                    </AuthProvider>
                </UserConfigsProvider>
            </Suspense>
        </ErrorBoundary>
    );
};

export default App;
