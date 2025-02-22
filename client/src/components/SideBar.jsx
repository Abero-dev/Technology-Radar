import React from 'react'
import { SearchBar } from './Radar/SearchBar'

export const SideBar = ({ page }) => {
    return (
        <a>
            <div className='sidebar'>
                {
                    page === 'radar' &&
                    <div>
                        <SearchBar />
                    </div>
                }
                {
                    page === 'otherOption' &&
                    <div>
                        Estas en otra opcion
                    </div>
                }
            </div>
            <div className='sidebarBase'></div>

        </a>
    )
}
