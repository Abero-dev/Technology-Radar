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

            <header className='navbar'>
                <img src="/vigitech_logo.png" alt='vigitech_logo' className='logo' />
                <h1 className="navbar-title">VigiTech</h1>
                <nav className='navbar-nav'>
                    <ul className='navbar-ul'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'navbar-li-selected' : 'navbar-li')}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className='navbar-li-menu'
                            ref={buttonRef}
                            onClick={toggleDropDownMenu}>
                            Servicios
                        </li>
                        <li>
                            <NavLink
                                to='/faq'
                                className={({ isActive }) => (isActive ? 'navbar-li-selected' : 'navbar-li')}
                            >
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                className={({ isActive }) => (isActive ? 'navbar-li-selected' : 'navbar-li')}
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