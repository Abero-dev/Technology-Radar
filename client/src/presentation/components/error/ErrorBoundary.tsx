import React, { Component, ReactNode, ErrorInfo } from "react";
import ErrorComponent from "./ErrorComponent";

/**
 * @description Componente `ErrorBoundary` que captura errores en los componentes hijos y muestra una interfaz de error en lugar de romper la aplicación.
 * @returns Un contenedor que maneja errores inesperados y muestra `ErrorComponent` cuando ocurre un fallo.
 */

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    message: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, message: "" };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, message: error.message };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error capturado en ErrorBoundary:", error, errorInfo);

        if (error.message.includes("navigation")) {
            console.warn("Error relacionado con React Router detectado.");
        }
    }

    render() {
        if (this.state.hasError) {
            const isNetworkError = this.state.message.includes("HTTP Error");
            return (
                <ErrorComponent
                    errorTitle={isNetworkError ? "Error de red" : "Algo salió mal"}
                    errorDescription={this.state.message || "Ha ocurrido un error inesperado."}
                />
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
