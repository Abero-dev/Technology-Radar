import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
//import { SearchDetailsContext } from "./contexts/SearchDetailsContext";

interface SearchBarProps {
    onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    //const [searchTerm, setSearchTerm] = useContext(SearchDetailsContext);
    const [searchTerm, setSearchTerm] = useState<String>("")
    const formik = useFormik({
        initialValues: { searchTerm },
        onSubmit: (values) => {
            setSearchTerm(values.searchTerm);
            onSearch();
        },
    });

    useEffect(() => {
        formik.setFieldValue("searchTerm", searchTerm);
    }, [searchTerm, formik]);

    return (
        <form role="search" className="searchBar" onSubmit={formik.handleSubmit}>
            <label htmlFor="search-input" className="search-label-visually-hidden">
                Search
            </label>

            <input id="search-input" type="text" {...formik.getFieldProps("searchTerm")} placeholder="Search..." />
            <button type="submit" className="lupa">Seek</button>
        </form>
    );
};

export default SearchBar;
