import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import SideMenu from "./SideMenu"

const Layout = () => {
    return (
        <div className='app'>
            <Navbar />
                <main className="main-content">
                    <Outlet />
                </main>           
            <SideMenu />
        </div>
    )
}

export default Layout