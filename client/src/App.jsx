import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import { Footer } from './components/Footer.jsx'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar.jsx'
import { OtherComponent } from './components/OtherComponent'
import RadarComponent from './components/Radar/RadarComponent'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<Home />} />
                <Route path='/radar' element={<RadarComponent />} />
                <Route path='/other-option' element={<OtherComponent />} />
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