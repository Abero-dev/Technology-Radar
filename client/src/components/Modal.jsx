import React from 'react'
import { createPortal } from 'react-dom'

function Modal({ children, isOpen, additionalClassname }) {

    if (!isOpen) return null
    const parentDiv = document.getElementById('modal')

    return createPortal(
        <div className='modal-overlay'>
            <div className={`modal-container ${additionalClassname}`}>
                {children}
            </div>
        </div>
        , parentDiv)
}

export default Modal