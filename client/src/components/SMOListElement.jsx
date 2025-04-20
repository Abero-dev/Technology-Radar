import React, { useState } from 'react'

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
                <ul className='flex flex-col items-start gap-y-5'>
                    {type === "oficiales" &&
                        <>
                            <li className='cursor-pointer'>Mover a Candidatos</li>
                            <li className='cursor-pointer'>Mover a Ignorados</li>
                        </>
                    }
                    {type === "candidatos" &&
                        <>
                            <li className='cursor-pointer'>Mover a Oficiales</li>
                            <li className='cursor-pointer'>Mover a Ignorados</li>
                        </>
                    }
                    {type === "ignorados" &&
                        <>
                            <li className='cursor-pointer'>Mover a Oficiales</li>
                            <li className='cursor-pointer'>Mover a Candidatos</li>
                        </>
                    }
                    <li className='cursor-pointer'>Visitar</li>
                </ul>
            }
        </>
    )
}

export default SMOListElement