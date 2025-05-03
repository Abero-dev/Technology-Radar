import { useContext } from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { ArrowUpLeftSquare } from 'lucide-react'
import Navbar from "./Navbar"
import SideMenu from "./SideMenu"
import Modal from "../Modal"
import { LoadingContext } from "../../../logic/contexts/LoadingContext"
import Loading from "../Loading"

/**
 * @description Marco general de la aplicación, envoltorio general para todas las páginas del sistema.
 * @returns Estructura común para todas las páginas de la aplicación, compuesta por:
 * - Modal que muestra la animación de carga.
 * - `Header`.
 * - `Main`- Contiene la estructura de la página renderizada a partir de la url, además de un botón para volver.
 * - `SideMenu`- Solo es visible si se está en la pantalla de gestión `/list`.
 * - `Footer`.
 */
const Layout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.pathname

    const { loading } = useContext(LoadingContext)
    return (
        <div
            className='app'
        >
            <Modal isOpen={loading}>
                <Loading />
            </Modal>

            <Navbar />
            <main className="w-screen flex flex-col items-center grow bg-[#eee]"
            >
                {currentPath != '/' &&
                    <button
                        className="back-button"
                        onClick={() => navigate(-1)}
                        title="Volver"
                    >
                        <ArrowUpLeftSquare size={40} color="white" />
                    </button>}
                <Outlet className="outlet" />
            </main>
            <SideMenu />
        </div>
    )
}

export default Layout