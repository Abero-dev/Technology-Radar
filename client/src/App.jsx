import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home'
import Radar from './components/Radar/Radar.jsx'
import Options from './components/Options.jsx'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route index element={<Home />} />
                <Route path='/radar' element={<Radar />} />
                <Route path='/options' element={<Options />} />
            </>
        )
    )

    return (
        <div className='app'>
            <Navbar />
            <RouterProvider router={router} />
            <Footer />
        </div>
    )
}

export default App