import PropTypes from "prop-types"

const SideBar = ({ page }) => {
    let optionsList
    
    switch (page) {
        case "radar":
            optionsList = [
                "Filtrar",
                "Ordenar"
            ]
            break
        case "options":
            optionsList = [
                "General",
                "Apariencia",
                "otra opcion",
                "otra opcion"
            ]
            break
        default: 
            optionsList = ["No hay ninguna opcion disponible"]
            break
    }  

    return (
        <div className='sidebar'>
            <ul>
                { optionsList.map((option, index) => <li key={index}>{option}</li>) }
            </ul>

            <div className='sidebarBase' />
        </div>
    )
}

SideBar.propTypes = {
    page: PropTypes.string.isRequired,
}

export default SideBar
