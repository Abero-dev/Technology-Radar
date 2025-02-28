import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        
        <header className='navbar'>
            <h1 className="navbar-title">Vigilancia Tecnológica</h1>
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
                            Options
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar