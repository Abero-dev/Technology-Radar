import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function SMOListElement({ index, element, type }) {

    const [isMenuVisible, setMenuVisible] = useState(false)

    return (
        <>
            <div className='flex items-center gap-x-3 cursor-pointer' onClick={() => setMenuVisible(prev => !prev)}>
                <img src={isMenuVisible ? '/close.png' : '/menu.png'} className='w-5 h-5 invert' />
                <li key={index}
                    className='text-2xl'
                >
                    {element}
                </li>
            </div>
            {
                isMenuVisible &&
                <ul className='flex flex-col items-start gap-y-5 bg-white text-black p-3 rounded-2xl font-bold animate-grow-down'>
                    {type === "oficiales" &&
                        <>
                            <li className='cursor-pointer px-3 py-1 rounded-3xl transition-all duration-200 hover:bg-[#5353ff] hover:text-white'>Mover a Candidatos</li>
                            <li className='cursor-pointer px-3 py-1 rounded-3xl transition-all duration-200 hover:bg-[#5353ff] hover:text-white'>Mover a Ignorados</li>
                        </>
                    }
                    {type === "candidatos" &&
                        <>
                            <li className='cursor-pointer px-3 py-1 rounded-3xl transition-all duration-200 hover:bg-[#5353ff] hover:text-white'>Mover a Oficiales</li>
                            <li className='cursor-pointer px-3 py-1 rounded-3xl transition-all duration-200 hover:bg-[#5353ff] hover:text-white'>Mover a Ignorados</li>
                        </>
                    }
                    {type === "ignorados" &&
                        <>
                            <li className='cursor-pointer px-3 py-1 rounded-3xl transition-all duration-200 hover:bg-[#5353ff] hover:text-white'>Mover a Oficiales</li>
                            <li className='cursor-pointer px-3 py-1 rounded-3xl transition-all duration-200 hover:bg-[#5353ff] hover:text-white'>Mover a Candidatos</li>
                        </>
                    }
                    <li className='cursor-pointer px-3 py-1 rounded-3xl transition-all duration-200 hover:bg-[#5353ff] hover:text-white'>Visitar</li>
                    <NavLink to='/entryDetail' className='cursor-pointer px-3 py-1 rounded-3xl transition-all duration-200 hover:bg-[#5353ff] hover:text-white'>Ver detalles</NavLink>
                </ul>
            }
        </>
    )
}

export default SMOListElement