import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from 'react';
import { ServiceCard } from '../ServiceCard';
import Loading from '../Loading';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false)

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

    return (
        <>

            {menuVisible &&

                <ServiceCardContainer containerRef={menuRef} />
            }

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
                            onClick={() => setMenuVisible(prev => !prev)} // Usar la función toggleMenu
                        >
                            Servicios
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

const ServiceCardContainer = ({ containerRef }) => {

    return (
        <div className='modal-overlay'>
            <div className='modal-container' ref={containerRef}>
                <ServiceCard icon='' title='Vigilancia' options={[{ name: 'Radar', route: '/radar' }]} containerRef={!containerRef} />
                <ServiceCard icon='' title='titulo 2' options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]} />
                <ServiceCard icon='' title='titulo 3' options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]} />
                <ServiceCard icon='' title='titulo 4' options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]} />
                <ServiceCard icon='' title='titulo 5' options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]} />
                <ServiceCard icon='' title='titulo 6' options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]} />
                <ServiceCard icon='' title='titulo 7' options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]} />
                <ServiceCard icon='' title='titulo 8' options={[{ name: 'Servicio 1', route: '#' }, { name: 'Servicio 2', route: '#' }, { name: 'Servicio 3', route: '#' }]} />
            </div>
        </div>
    );
}

export default Navbar;