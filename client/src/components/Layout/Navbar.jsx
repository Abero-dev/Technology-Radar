import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='navbar'>
            <nav className='navbar-nav'>
                <ul className='navbar-ul'>
                    <li>
                        <NavLink to='/' 
                            className={({ isActive }) => (isActive ?
                                'navbar-li-selected' : 'navbar-li')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/radar' 
                            className={({ isActive }) => (isActive ?
                                'navbar-li-selected' : 'navbar-li')}>
                            Technology Radar
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