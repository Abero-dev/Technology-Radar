import { useContext } from 'react'
import { SearchDetailsContext } from './contexts/SearchDetailsContext'

export const SearchBar = (onSearch) => {
    const [searchTerm, setSearchTerm] = useContext(SearchDetailsContext);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        onSearch()
    }
    return (
        <search className='searchBar'>
            <input type='text' placeholder='Search...' value={searchTerm} />
            <span className='lupa' onClick={handleSearch}>Seek</span>
        </search>
    )
}
