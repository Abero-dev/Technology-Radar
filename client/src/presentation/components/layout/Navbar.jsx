import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { ServiceCard } from '../ServiceCard';
import Loading from '../Loading';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setMenuVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuRef, buttonRef]);

    const toggleDropDownMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleServiceCardClick = () => {
        setMenuVisible(false);
    };

    return (
        <>
            {menuVisible && <ServiceCardContainer containerRef={menuRef} onOptionClick={handleServiceCardClick} />}

            <header className='w-full h-28 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-sm border-b-4 border-gray-800 fixed flex justify-center items-center top-0 z-10 text-white py-4 px-0'>
                <img src="/vigitech_logo.png" alt='vigitech_logo' className='ml-28 w-20 h-20 rounded-full transition-all duration-300 ease-in-out drop-shadow-[0_0_1px_white] hover:drop-shadow-[0_0_12px_white]' />
                <h1 className="text-4xl font-bold ml-5 cursor-default">VigiTech</h1>
                <nav className='flex justify-center items-center py-0 px-3 flex-grow'>
                    <ul className='list-none flex justify-center items-center gap-14 p-0 m-0 mr-72'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ?
                                    'p-1 no-underline transition-all duration-100 text-white text-center border-b-4 border-white rounded-xl text-3xl font-extrabold hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110'
                                    :
                                    'p-1 no-underline transition-all duration-100 text-white text-center flex font-custom text-2xl cursor-pointer hover:rounded-xl hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110')}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className='flex bg-none border-none flex-col justify-center items-center font-custom text-2xl cursor-pointer p-1 no-underline transition-all duration-100 text-center hover:rounded-xl hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110'
                            ref={buttonRef}
                            onClick={toggleDropDownMenu}>
                            Servicios
                        </li>
                        <li>
                            <NavLink
                                to='/faq'
                                className={({ isActive }) => (isActive ?
                                    'p-1 no-underline transition-all duration-100 text-white text-center border-b-4 border-white rounded-xl text-3xl font-extrabold hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110'
                                    :
                                    'p-1 no-underline transition-all duration-100 text-white text-center flex font-custom text-2xl cursor-pointer hover:rounded-xl hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110')}
                            >
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                className={({ isActive }) => (isActive ?
                                    'p-1 no-underline transition-all duration-100 text-white text-center border-b-4 border-white rounded-xl text-3xl font-extrabold hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110'
                                    :
                                    'p-1 no-underline transition-all duration-100 text-white text-center flex font-custom text-2xl cursor-pointer hover:rounded-xl hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110')}
                            >
                                Acerca de
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

const ServiceCardContainer = ({ containerRef, onOptionClick }) => {
    return (
        <div className='modal-overlay'>
            <div className='modal-container' ref={containerRef}>
                <ServiceCard
                    icon='/src/assets/eye_icon.svg'
                    title='Vigilancia'
                    options={[{ name: 'Radar', route: '/radar' }]}
                    onOptionClick={onOptionClick}
                />
                <ServiceCard
                    icon=''
                    title='titulo 2'
                    options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]}
                    onOptionClick={onOptionClick}
                />
                <ServiceCard
                    icon=''
                    title='titulo 3'
                    options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]}
                    onOptionClick={onOptionClick}
                />
                <ServiceCard
                    icon=''
                    title='titulo 4'
                    options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]}
                    onOptionClick={onOptionClick}
                />
                <ServiceCard
                    icon=''
                    title='titulo 5'
                    options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]}
                    onOptionClick={onOptionClick}
                />
                <ServiceCard
                    icon=''
                    title='titulo 6'
                    options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]}
                    onOptionClick={onOptionClick}
                />
                <ServiceCard
                    icon=''
                    title='titulo 7'
                    options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]}
                    onOptionClick={onOptionClick}
                />
                <ServiceCard
                    icon=''
                    title='titulo 8'
                    options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]}
                    onOptionClick={onOptionClick}
                />
            </div>
        </div>
    );
};

export default Navbar;