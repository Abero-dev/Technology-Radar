import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from 'react';
import { ServiceCard } from '../ServiceCard';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    const toggleMenu = useCallback((event) => {
        event.stopPropagation(); // Evita que el clic se propague
        setMenuVisible(prev => !prev); // Alterna el estado del menú
    }, []);

    return (
        <>
            {menuVisible && <ServiceCardContainer menuVisible={menuVisible} containerRef={menuRef} />}

            <header className='navbar'>
                <img src="/vigitech_logo.png" alt='vigitech_logo' className='logo' />
                <h1 className="navbar-title">VigiTech</h1>
                <nav className='navbar-nav'>
                    <ul className='navbar-ul'>
                        <li>
                            <NavLink to='/'
                                className={({ isActive }) => (isActive ? 'navbar-li-selected' : 'navbar-li')}>
                                Inicio
                            </NavLink>
                        </li>
                        <li className='navbar-li-menu'
                            ref={menuRef}
                            onClick={toggleMenu} // Usar la función toggleMenu
                        >
                            Servicios
                        </li>
                        <li>
                            <NavLink to='/options'
                                className={({ isActive }) => (isActive ? 'navbar-li-selected' : 'navbar-li')}>
                                Opciones
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/faq'
                                className={({ isActive }) => (isActive ? 'navbar-li-selected' : 'navbar-li')}>
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'
                                className={({ isActive }) => (isActive ? 'navbar-li-selected' : 'navbar-li')}>
                                Acerca de
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

const ServiceCardContainer = ({ menuVisible, containerRef }) => {
    if (!menuVisible) return null;
    return (
        <div className='modal-overlay'>
            <div className='modal-container' ref={containerRef}>
                <ServiceCard icon='' title='titulo 1' options={['Servicio 1', 'Servicio 2', 'Servicio 3']} />
                <ServiceCard icon='' title='titulo 2' options={['Servicio 1', 'Servicio 2', 'Servicio 3']} />
                <ServiceCard icon='' title='titulo 3' options={['Servicio 1', 'Servicio 2', 'Servicio 3']} />
                <ServiceCard icon='' title='titulo 4' options={['Servicio 1', 'Servicio 2', 'Servicio 3']} />
                <ServiceCard icon='' title='titulo 5' options={['Servicio 1', 'Servicio 2', 'Servicio 3']} />
                <ServiceCard icon='' title='titulo 6' options={['Servicio 1', 'Servicio 2', 'Servicio 3']} />
                <ServiceCard icon='' title='titulo 7' options={['Servicio 1', 'Servicio 2', 'Servicio 3']} />
                <ServiceCard icon='' title='titulo 8' options={['Servicio 1', 'Servicio 2', 'Servicio 3']} />
            </div>
        </div>
    );
}

export default Navbar;