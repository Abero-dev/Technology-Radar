import { useState, useRef, useEffect } from "react";

/**
 * Hook para manejar `drop popups`, como `modals` que se cierran al hacer click fuera del `popup`,
 * `dropdown menus` o `tooltips`. Utiliza {@link useRef} para detectar cuando se clickea fuera del `popup`.
 *
 * @param {() => void} onClose - Función a ejecutar cuando se cierra el popup (el usuario hace click fuera del `popup`), por defecto vacía.
 *
 * @example
 * const {
 *     triggerRef,
 *     dropPopupRef,
 *     isVisible,
 *     toggleVisible
 * } = useDropPopup();
 *
 * return (
 *     <button 
 *         onClick={toggleVisible}
 *         ref={triggerRef}
 *     >
 *         Cambiar visibilidad
 *     </button>
 *
 *     <Modal isOpen={isVisible}>
 *         <div ref={dropPopupRef}>
 *             <h1>Esto es un dropPopup</h1>
 *         </div>
 *     </Modal>
 * );
 *
 * @returns {{
 *     triggerRef: React.RefObject<HTMLButtonElement>;
 *     dropPopupRef: React.RefObject<HTMLDivElement>;
 *     isVisible: boolean;
 *     toggleVisible: (event: React.MouseEvent) => void;
 * }}
 */
const useDropPopup = (onClose: () => void = () => { }) => {
    const [isVisible, setVisible] = useState < boolean > (false);

    /**
     * Función encargada de volver visible o invisible el popup.
     */
    const toggleVisible = (event: React.MouseEvent) => {
        event.stopPropagation();
        setVisible((prev) => !prev);
    };

    /**
     * Referencia para el contenedor del popup.
     */
    const dropPopupRef = useRef < HTMLDivElement > (null);

    /**
     * Referencia para el detonador (encargado de abrir o cerrar manualmente el popup).
     */
    const triggerRef = useRef < HTMLButtonElement > (null);

    useEffect(() => {
        /**
         * Función que detecta cada click del usuario y verifica si fue en el elemento asociado a {@link triggerRef} o a {@link dropPopupRef}, 
         * si no es ninguno de los dos debe cerrar el `popup`. Al cerrarse ejecuta {@link onClose}.
         */
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropPopupRef.current &&
                triggerRef.current &&
                !dropPopupRef.current.contains(event.target as Node) &&
                !triggerRef.current.contains(event.target as Node)
            ) {
                setVisible(false);
                onClose();
            }
        };

        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isVisible, onClose]);

    return {
        triggerRef,
        dropPopupRef,
        isVisible,
        toggleVisible,
    };
};

export default useDropPopup;
