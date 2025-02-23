import { createContext, useState } from 'react'
import PropTypes from "prop-types"

const SearchDetailsContext = createContext();

const SearchDetailsProvider = ({ children }) => {
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
		<SearchDetailsContext.Provider value={[
			searchTerm, resultOrder, resultFilter, 
			setSearchTerm, setResultOrder, setResultFilter 
			]}>
			{children}
		</SearchDetailsContext.Provider>
	)
}

SearchDetailsProvider.propTypes = { children: PropTypes.node.isRequired }

export { SearchDetailsContext, SearchDetailsProvider }
