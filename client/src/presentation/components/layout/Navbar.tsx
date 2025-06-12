import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ServiceCard } from "../ServiceCard";
import Loading from "../Loading";

interface ServiceCardContainerProps {
    containerRef: React.RefObject<HTMLDivElement>;
    onOptionClick: () => void;
}

const Navbar: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [menuAvatarVisible, setMenuAvatarVisible] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLLIElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setMenuVisible(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleDropDownMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleServiceCardClick = () => {
        setMenuVisible(false);
    };

    const toggleAvatarMenu = () => {
        setMenuAvatarVisible(!menuAvatarVisible);
    }

    return (
        <>
            {menuVisible && <ServiceCardContainer containerRef={menuRef} onOptionClick={handleServiceCardClick} />}

            <header className="w-full h-28 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-sm border-b-4 border-gray-800 fixed flex justify-center items-center top-0 z-10 text-white py-4 px-0">
                <img
                    src="/vigitech_logo.png"
                    alt="vigitech_logo"
                    className="ml-28 w-20 h-20 rounded-full transition-all duration-300 ease-in-out drop-shadow-[0_0_1px_white] hover:drop-shadow-[0_0_12px_white]"
                />
                <h1 className="text-4xl font-bold ml-5 cursor-default">VigiTech</h1>
                <nav className="flex justify-center items-center py-0 px-3 flex-grow">
                    <ul className="list-none flex justify-center items-center gap-14 p-0 m-0 mr-72">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "p-1 no-underline transition-all duration-100 text-white text-center border-b-4 border-white rounded-xl text-3xl font-extrabold hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110"
                                        : "p-1 no-underline transition-all duration-100 text-white text-center flex font-custom text-2xl cursor-pointer hover:rounded-xl hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110"
                                }
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li
                            className="flex bg-none border-none flex-col justify-center items-center font-custom text-2xl cursor-pointer p-1 no-underline transition-all duration-100 text-center hover:rounded-xl hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110"
                            ref={buttonRef}
                            onClick={toggleDropDownMenu}
                        >
                            Servicios
                        </li>
                        <li>
                            <NavLink
                                to="/faq"
                                className={({ isActive }) =>
                                    isActive
                                        ? "p-1 no-underline transition-all duration-100 text-white text-center border-b-4 border-white rounded-xl text-3xl font-extrabold hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110"
                                        : "p-1 no-underline transition-all duration-100 text-white text-center flex font-custom text-2xl cursor-pointer hover:rounded-xl hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110"
                                }
                            >
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "p-1 no-underline transition-all duration-100 text-white text-center border-b-4 border-white rounded-xl text-3xl font-extrabold hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110"
                                        : "p-1 no-underline transition-all duration-100 text-white text-center flex font-custom text-2xl cursor-pointer hover:rounded-xl hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110"
                                }
                            >
                                Acerca de
                            </NavLink>
                        </li>
                        <li onClick={toggleAvatarMenu} className="absolute right-20">
                            <div className={`flex ${menuAvatarVisible && "bg-stone-100 border-[3px] border-violet-800"} rounded-full gap-x-4`}>
                                {menuAvatarVisible &&
                                    <ul className="flex flex-col justify-center gap-4 pl-4 text-black font-bold">
                                        <li className="flex justify-center items-center gap-x-2">
                                            <img src="/notificacion_faq.png" className="w-6 h-6"></img>
                                            <NavLink
                                                to={"/notifications"}
                                            >
                                                Notificaciones
                                            </NavLink>
                                        </li>
                                        <li className="flex justify-center items-center gap-x-2">
                                            <img src="/config.png" className="w-6 h-6"></img>
                                            <NavLink
                                                to={"/config"}
                                            >
                                                Configuración
                                            </NavLink>
                                        </li>
                                    </ul>
                                }
                                <figure className="w-20 h-20 rounded-full bg-slate-100 border-[3px] border-violet-800 flex justify-center items-center">
                                    <img src="/generic_avatar.png" className="object-cover invert-[30%]"></img>
                                </figure>

                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

const ServiceCardContainer: React.FC<ServiceCardContainerProps> = ({ containerRef, onOptionClick }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-container" ref={containerRef}>
                <ServiceCard icon="/src/assets/eye_icon.svg" title="Vigilancia" options={[{ name: "Radar", route: "/radar" }]} onOptionClick={onOptionClick} />
                {[...Array(7)].map((_, index) => (
                    <ServiceCard
                        key={index}
                        icon=""
                        title={`titulo ${index + 2}`}
                        options={[
                            { name: "Servicio 1", route: "#" },
                            { name: "Servicio 2", route: "#" },
                            { name: "Servicio 3", route: "#" },
                        ]}
                        onOptionClick={onOptionClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Navbar;
