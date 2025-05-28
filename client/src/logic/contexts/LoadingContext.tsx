import { createContext, useState, ReactNode } from "react";

/**
 * @description Contexto diseñado para manejo centralizado de estados de carga.
 */
interface LoadingContextType {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext < LoadingContextType | undefined > (undefined);

/**
 * @description Provider diseñado para manejo del {@link LoadingContext}
 * @param {ReactNode} children - Componentes hijos dentro del contexto.
 * @returns Provider que permite a los componentes hijos acceder al estado {@link loading} y la función de manejo {@link setLoading}.
 */
const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState < boolean > (false);

    return <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>;
};

export { LoadingContext, LoadingProvider };
