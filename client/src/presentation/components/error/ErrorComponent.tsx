import { useNavigate } from "react-router-dom";

/**
 * @description Componente `ErrorComponent` que muestra un mensaje de error con una imagen y un botón para volver a la página principal.
 * @param {string} errorTitle - Título del error.
 * @param {string} [errorDescription] - Descripción del error, opcional (por defecto `""`).
 */
interface ErrorComponentProps {
    errorTitle: string;
    errorDescription?: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ errorTitle, errorDescription = "" }) => {
    const navigate = useNavigate();

    return (
        <div className="error-container">
            <h1 className="error-title">{errorTitle}</h1>
            <img className="error-icon" src="/error.png" alt="Ícono de error" />
            <p className="error-text">{errorDescription}</p>
            <button className="accept-button" onClick={() => navigate("/")}>
                Volver
            </button>
        </div>
    );
};

export default ErrorComponent;
