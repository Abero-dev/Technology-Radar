import { createContext, useState } from 'react'
import PropTypes from "prop-types"

const UserConfigsContext = createContext();

const UserConfigsProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState("")
	const [resultOrder, setResultOrder] = useState({
		mostRatedFirst: false,
		lessRatedFirst: false
	})
	const [resultFilter, setResultFilter] = useState({
		appearedInLastMonths: false,
		appearedInLastYear: false,
		appearedInLastFiveYears: false,
	})

	return (
		<UserConfigsContext.Provider value={[
			searchTerm, resultOrder, resultFilter, 
			setSearchTerm, setResultOrder, setResultFilter 
			]}>
			{children}
		</UserConfigsContext.Provider>
	)
}

UserConfigsProvider.propTypes = { children: PropTypes.node.isRequired }

export { UserConfigsContext, UserConfigsProvider }
