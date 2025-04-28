import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideMenuOptionList from '../../SideMenuOptionList';
import SideMenuLog from '../../SideMenuLog';

const SideMenu = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isVisible, setIsVisible] = useState(false);
    const [isOficialVisible, setOficialVisible] = useState(false);
    const [isCandidatoVisible, setCandidatoVisible] = useState(false);
    const [isIgnoradoVisible, setIgnoradoVisible] = useState(false);
    let oficiales = ["O1", "O2", "O3", "O4", "O5"]
    let candidatos = ["C1", "C2", "C3"]
    let ignorados = ["I1", "I2", "I3", "I4"]

    useEffect(() => {
        if (currentPath === "/radar" || currentPath === "/options") {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [currentPath])

    let optionsList = ['No hay opciones disponibles']

    switch (currentPath) {
        case "/radar":
            optionsList = [
                "Oficiales",
                "Candidatos",
                "Ignorados"

            ]
            break
        case "/options":
            optionsList = [
                "General",
                "Apariencia",
                "Otra opción",
                "Otra opción"
            ]
            break
    }

    const setVisible = (option) => {
        if (option === "Oficiales") setOficialVisible(prev => !prev)
        if (option === "Candidatos") setCandidatoVisible(prev => !prev)
        if (option === "Ignorados") setIgnoradoVisible(prev => !prev)
    }

    return (
        <div className={`bg-gradient-to-t from-[#3B82F6] to-[#8B5CF6] mt-[40px] border-r-4 border-gray-800 text-white w-[15%] h-[90vh] p-3 fixed flex flex-col justify-top items-center left-0 top-16 z-[1] overflow-y-auto scrollbar transition-all duration-300 opacity-0 -translate-x-full
        ${isVisible ?
                'translate-x-0 opacity-100'
                :
                '-translate-x-full'}`}>
            <ul className='list-none p-0 mt-8'>
                {optionsList.map((option, index) =>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center cursor-pointer hover:animate-slide-down' onClick={() => setVisible(option)}>
                            <li
                                className='h-14 p-3 text-xl font-bold text-center cursor-pointer transition-[border] duration-100 border-none hover:rounded-[25%] hover:border-b-4 hover:border-solid hover:border-cyan-300'
                                key={index}
                            >
                                {option}

                            </li>
                            {option === "Oficiales" && (
                                isOficialVisible ?
                                    <img className='w-10 h-10 mb-3 invert' src='/desplegable_arriba.png' />
                                    :
                                    <img className='w-6 h-6 ml-2 mb-3 invert' src='/desplegable_abajo.png' />
                            )
                            }
                            {option === "Candidatos" && (
                                isCandidatoVisible ?
                                    <img className='w-10 h-10 mb-3 invert' src='/desplegable_arriba.png' />
                                    :
                                    <img className='w-6 h-6 ml-2 mb-3 invert' src='/desplegable_abajo.png' />
                            )
                            }
                            {option === "Ignorados" && (
                                isIgnoradoVisible ?
                                    <img className='w-10 h-10 mb-3 invert' src='/desplegable_arriba.png' />
                                    :
                                    <img className='w-6 h-6 ml-2 mb-3 invert' src='/desplegable_abajo.png' />
                            )
                            }
                        </div>
                        {option === "Oficiales" &&
                            isOficialVisible &&
                            <SideMenuOptionList list={oficiales} type={"oficiales"} />
                        }
                        {option === "Candidatos" &&
                            isCandidatoVisible &&
                            <SideMenuOptionList list={candidatos} type={"candidatos"} />
                        }
                        {option === "Ignorados" &&
                            isIgnoradoVisible &&
                            <SideMenuOptionList list={ignorados} type={"ignorados"} />
                        }
                    </div>
                )}
            </ul>
            <SideMenuLog />
        </div>
    );
}

export default SideMenu;