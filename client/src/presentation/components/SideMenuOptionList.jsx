import React from 'react'
import SMOListElement from './SMOListElement'

function SideMenuOptionList({ list, type }) {

    return (
        <ul className='text-xl flex flex-col items-center gap-y-3 transition-all mb-5 animate-grow-from-top'>
            {list.map((element, index) =>
                <SMOListElement index={index} element={element} type={type} />
            )}
        </ul>
    )
}

export default SideMenuOptionList