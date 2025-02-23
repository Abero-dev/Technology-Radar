import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SideMenu = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (currentPath === "/radar" || currentPath === "/options") {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [currentPath])

    let optionsList=['No hay opciones disponibles']

    switch (currentPath) {
        case "/radar":
            optionsList = [
                "Filtrar",
                "Ordenar"
            ]
            break
        case "/options":
            optionsList = [
                "General",
                "Apariencia",
                "Otra opción",
                "Otra opción"
            ]
            break
    }  

    return (
        <div className={`sidemenu ${isVisible ? 'visible' : 'hidden'}`}>
            <ul>
                {optionsList.map((option, index) => <li key={index}>{option}</li>)}
            </ul>
        </div>
    );
}

export default SideMenu;