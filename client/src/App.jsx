import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from './components/Home'
import Radar from './components/Radar/Radar'
import Options from './components/Options'
import Layout from './components/Layout/Layout'
import { SearchDetailsProvider } from './components/contexts/SearchDetailsContext'
import NotFound from "./components/NotFound"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="radar" element={<Radar />} />
                    <Route path="options" element={<Options />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
        )
    )

    return (
        <SearchDetailsProvider>
            <RouterProvider router={router} />
        </SearchDetailsProvider>
    )
}

export default App