import { createContext, useState, ReactNode } from "react";

/**
 * @description Interfaz que define la estructura del contexto de configuraciones de usuario.
 */
interface ResultOrder {
	mostRatedFirst: boolean;
	lessRatedFirst: boolean;
}

interface ResultFilter {
	appearedInLastMonths: boolean;
	appearedInLastYear: boolean;
	appearedInLastFiveYears: boolean;
}

interface UserConfigsContextType {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	resultOrder: ResultOrder;
	setResultOrder: (order: ResultOrder) => void;
	resultFilter: ResultFilter;
	setResultFilter: (filter: ResultFilter) => void;
}

const UserConfigsContext = createContext < UserConfigsContextType | undefined > (undefined);

/**
 * @description Provider que maneja el {@link UserConfigsContext}.
 * @param {ReactNode} children - Componentes hijos dentro del contexto.
 * @returns Un Provider que permite a los componentes hijos acceder a las configuraciones del usuario.
 */
const UserConfigsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState < string > ("");
	const [resultOrder, setResultOrder] = useState < ResultOrder > ({
		mostRatedFirst: false,
		lessRatedFirst: false,
	});
	const [resultFilter, setResultFilter] = useState < ResultFilter > ({
		appearedInLastMonths: false,
		appearedInLastYear: false,
		appearedInLastFiveYears: false,
	});

	return (
		<UserConfigsContext.Provider value={{ searchTerm, setSearchTerm, resultOrder, setResultOrder, resultFilter, setResultFilter }}>
			{children}
		</UserConfigsContext.Provider>
	);
};

export { UserConfigsContext, UserConfigsProvider };
