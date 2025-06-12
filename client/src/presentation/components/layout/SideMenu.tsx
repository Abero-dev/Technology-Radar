import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SideMenuOptionList from "../SideMenuOptionList";
import SideMenuLog from "../SideMenuLog";

/**
 * Tipos de opciones disponibles en el menú lateral
 */
type MenuOption = "Oficiales" | "Candidatos" | "Ignorados";
type PathOption = "/radar" | "/options";

/**
 * Componente SideMenu para mostrar opciones según la ruta actual
 */
const SideMenu: React.FC = () => {
    const location = useLocation();
    const currentPath: PathOption = location.pathname as PathOption;

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [visibleOptions, setVisibleOptions] = useState<Record<MenuOption, boolean>>({
        Oficiales: false,
        Candidatos: false,
        Ignorados: false,
    });

    const oficiales: string[] = ["O1", "O2", "O3", "O4", "O5"];
    const candidatos: string[] = ["C1", "C2", "C3"];
    const ignorados: string[] = ["I1", "I2", "I3", "I4"];

    useEffect(() => {
        setIsVisible(currentPath === "/radar" || currentPath === "/options");
    }, [currentPath]);

    const optionsList: string[] =
        currentPath === "/radar"
            ? ["Oficiales", "Candidatos", "Ignorados"]
            : currentPath === "/options"
                ? ["General", "Apariencia", "Otra opción", "Otra opción"]
                : ["No hay opciones disponibles"];

    const toggleOptionVisibility = (option: MenuOption) => {
        setVisibleOptions((prev) => ({
            ...prev,
            [option]: !prev[option],
        }));
    };

    return (
        <div
            className={`bg-gradient-to-t from-[#3B82F6] to-[#8B5CF6] mt-[40px] border-r-4 border-gray-800 text-white w-[15%] h-[90vh] p-3 fixed flex flex-col justify-top items-center left-0 top-16 z-[1] overflow-y-auto scrollbar transition-all duration-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
        >
            <ul className="list-none p-0 mt-8">
                {optionsList.map((option, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div
                            className="flex items-center cursor-pointer hover:animate-slide-down"
                            onClick={() => toggleOptionVisibility(option as MenuOption)}
                        >
                            <li
                                className="h-14 p-3 text-xl font-bold text-center cursor-pointer duration-100"
                            >
                                {option}
                            </li>
                            <img
                                className={`w-${visibleOptions[option as MenuOption] ? "10" : "6"} h-${visibleOptions[option as MenuOption] ? "12" : "6"} ml-2 mb-3 invert`}
                                style={{ width: "20px", height: "20px" }}
                                src={visibleOptions[option as MenuOption] ? "/desplegable_arriba.png" : "/desplegable_abajo.png"}
                                alt={`Toggle ${option}`}
                            />
                        </div>
                        {visibleOptions[option as MenuOption] && (
                            <SideMenuOptionList
                                list={oficiales}
                                type={option.toLowerCase() as "oficiales" | "candidatos" | "ignorados"}
                            />
                        )}
                    </div>
                ))}
            </ul>
            <SideMenuLog />
        </div>
    );
};

export default SideMenu;
