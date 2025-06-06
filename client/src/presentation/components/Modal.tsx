import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

/**
 * @description Componente Modal que permite renderizar `children` en una ventana emergente cuya apariencia es controlada a través de `isOpen` y su posición a través de `position`.
 * 
 * @param {ReactNode} children - Elementos hijos a renderizar.
 * @param {boolean} isOpen - Variable de control de la que depende si se muestra o no el modal.
 * @param {string} [position='center'] - Decide la posición a mostrar el modal. A partir de este el componente ubica el modal usando inline CSS. Por defecto se muestra en el centro. Puede tomar los valores:
 * - `center`
 * - `top`
 * - `bottom`
 * - `left`
 * - `right`
 * - `top-left`
 * - `top-right`
 * - `bottom-left`
 * - `bottom-right`
 * 
 * @default 'center'
 * @returns Modal con `children` renderizado.
 */
const Modal: React.FC<ModalProps> = ({ children, isOpen, position = 'center' }) => {
    if (!isOpen) return null;

    // Definición de estilos dinámicos según la posición
    const positionStyles: Record<string, React.CSSProperties> = {
        center: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
        top: { top: '10%', left: '50%', transform: 'translateX(-50%)' },
        bottom: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' },
        left: { top: '50%', left: '10%', transform: 'translateY(-50%)' },
        right: { top: '50%', right: '10%', transform: 'translateY(-50%)' },
        'top-left': { top: '5%', left: '.5%' },
        'top-right': { top: '5%', right: '.5%' },
        'bottom-left': { bottom: '5%', left: '.5%' },
        'bottom-right': { bottom: '5%', right: '.5%' },
    };

    const style = positionStyles[position] || positionStyles.center;

    return createPortal(
        <div className="modal-overlay">
            <div className="modal-container" style={style}>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
