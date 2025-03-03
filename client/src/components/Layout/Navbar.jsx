import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

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
                    <li>
                        <NavLink to='/radar'
                            className={({ isActive }) => (isActive ?
                                'navbar-li-selected' : 'navbar-li')}>
                            Servicios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/options'
                            className={({ isActive }) => (isActive ?
                                'navbar-li-selected' : 'navbar-li')}>
                            Opciones
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/options'
                            className={({ isActive }) => (isActive ?
                                'navbar-li-selected' : 'navbar-li')}>
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/options'
                            className={({ isActive }) => (isActive ?
                                'navbar-li-selected' : 'navbar-li')}>
                            Acerca de
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar