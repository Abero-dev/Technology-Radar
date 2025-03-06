import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Modal from '../Modal';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setTimeout(() =>
                    setMenuVisible(false), 1200);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <>
            {menuVisible &&
                <div className='modal-overlay'>
                    <div className={`modal-container ${!menuVisible ? 'hidden' : ''}`}>
                        <div className='service-menu-cell'>
                            <h1 className='service-menu-cell-title'>Titulo</h1>
                            <ul className='navbar-service-menu-ul'>
                                <li className='navbar-service-menu-li'>Servicio 1</li>
                                <li className='navbar-service-menu-li'>Servicio 2</li>
                                <li className='navbar-service-menu-li'>Servicio 3</li>
                            </ul>
                        </div>
                        <div className='service-menu-cell'>
                            <h1 className='service-menu-cell-title'>Titulo</h1>
                            <ul className='navbar-service-menu-ul'>
                                <li className='navbar-service-menu-li'>Servicio 1</li>
                                <li className='navbar-service-menu-li'>Servicio 2</li>
                                <li className='navbar-service-menu-li'>Servicio 3</li>
                            </ul>
                        </div>
                        <div className='service-menu-cell'>
                            <h1 className='service-menu-cell-title'>Titulo</h1>
                            <ul className='navbar-service-menu-ul'>
                                <li className='navbar-service-menu-li'>Servicio 1</li>
                                <li className='navbar-service-menu-li'>Servicio 2</li>
                                <li className='navbar-service-menu-li'>Servicio 3</li>
                            </ul>
                        </div>
                        <div className='service-menu-cell'>
                            <h1 className='service-menu-cell-title'>Titulo</h1>
                            <ul className='navbar-service-menu-ul'>
                                <li className='navbar-service-menu-li'>Servicio 1</li>
                                <li className='navbar-service-menu-li'>Servicio 2</li>
                                <li className='navbar-service-menu-li'>Servicio 3</li>
                            </ul>
                        </div>
                        <div className='service-menu-cell'>
                            <h1 className='service-menu-cell-title'>Titulo</h1>
                            <ul className='navbar-service-menu-ul'>
                                <li className='navbar-service-menu-li'>Servicio 1</li>
                                <li className='navbar-service-menu-li'>Servicio 2</li>
                                <li className='navbar-service-menu-li'>Servicio 3</li>
                            </ul>
                        </div>
                        <div className='service-menu-cell'>
                            <h1 className='service-menu-cell-title'>Titulo</h1>
                            <ul className='navbar-service-menu-ul'>
                                <li className='navbar-service-menu-li'>Servicio 1</li>
                                <li className='navbar-service-menu-li'>Servicio 2</li>
                                <li className='navbar-service-menu-li'>Servicio 3</li>
                            </ul>
                        </div>
                        <div className='service-menu-cell'>
                            <h1 className='service-menu-cell-title'>Titulo</h1>
                            <ul className='navbar-service-menu-ul'>
                                <li className='navbar-service-menu-li'>Servicio 1</li>
                                <li className='navbar-service-menu-li'>Servicio 2</li>
                                <li className='navbar-service-menu-li'>Servicio 3</li>
                            </ul>
                        </div>
                        <div className='service-menu-cell'>
                            <h1 className='service-menu-cell-title'>Titulo</h1>
                            <ul className='navbar-service-menu-ul'>
                                <li className='navbar-service-menu-li'>Servicio 1</li>
                                <li className='navbar-service-menu-li'>Servicio 2</li>
                                <li className='navbar-service-menu-li'>Servicio 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
            <header className='navbar'>
                <img src="/vigitech_logo.png" alt='vigitech_logo' className='logo' />
                <h1 className="navbar-title">VigiTech</h1>
                <nav className='navbar-nav'>
                    <ul className='navbar-ul'>
                        <li>
                            <NavLink to='/'
                                className={({ isActive }) => (isActive ?
                                    'navbar-li-selected' : 'navbar-li')}>
                                Inicio
                            </NavLink>
                        </li>
                        <li className='navbar-li-menu'
                            ref={menuRef}
                            onClick={() => setMenuVisible(!menuVisible)}
                        >
                            Servicios

                        </li>
                        <li>
                            <NavLink to='/options'
                                className={({ isActive }) => (isActive ?
                                    'navbar-li-selected' : 'navbar-li')}>
                                Opciones
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/faq'
                                className={({ isActive }) => (isActive ?
                                    'navbar-li-selected' : 'navbar-li')}>
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'
                                className={({ isActive }) => (isActive ?
                                    'navbar-li-selected' : 'navbar-li')}>
                                Acerca de
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;