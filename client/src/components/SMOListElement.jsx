import React, { useState } from 'react'

function SMOListElement({ index, element, type }) {

    const [isMenuVisible, setMenuVisible] = useState(false)

    return (
        <>
            <li key={index}
                className='cursor-pointer text-2xl'
                onClick={() => setMenuVisible(prev => !prev)}
            >
                {element}
            </li>
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