import React from 'react'
import SMOListElement from './SMOListElement'

function SideMenuOptionList({ list, type }) {

    return (
        <ul className='text-xl flex flex-col items-center gap-y-5 transition-all mb-5'>
            {list.map((element, index) =>
                <SMOListElement index={index} element={element} type={type} />
            )}
        </ul>
    )
}

export default SideMenuOptionList