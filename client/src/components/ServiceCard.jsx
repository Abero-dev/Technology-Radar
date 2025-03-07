import React from 'react'
import { NavLink } from 'react-router-dom'

export const ServiceCard = ({ icon, title, options }) => {
    return (
        <div className='service-menu-cell'>
            <figure className='service-cell-title-container'>
                <img src={icon} alt='icon' />
                <h1 className='service-menu-cell-title'>{title}</h1>
            </figure>
            <ul className='navbar-service-menu-ul'>
                {options.map(option =>
                    <li key={option.name} className='navbar-service-menu-li'>
                        <NavLink to={option.route} className='navbar-service-menu-navlink'>
                            {option.name}
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}
