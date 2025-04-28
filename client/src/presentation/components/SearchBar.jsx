import { useContext, useEffect } from 'react'
import PropTypes from "prop-types"
import { useFormik } from "formik"
import { SearchDetailsContext } from './contexts/SearchDetailsContext'

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useContext(SearchDetailsContext)

    const formik = useFormik({
        initialValues: { searchTerm: searchTerm },
        onSubmit: (values) => {
            setSearchTerm(values.searchTerm)
            onSearch()
        }
    });

    useEffect(() => {
        formik.setFieldValue('searchTerm', searchTerm)
    }, [searchTerm, formik])

    return (
        <form role="search" className="searchBar" onSubmit={formik.handleSubmit}>
            <label htmlFor="search-input"
                className="search-label-visually-hidden">
                Search
            </label>

            <input
                id="search-input"
                type="text"
                {...formik.getFieldProps("searchTerm")}
                placeholder="Search..."
            />
            <button type="submit" className="lupa">Seek</button>
        </form>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default SearchBar