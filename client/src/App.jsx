import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from './components/Home'
import Radar from './components/Radar/Radar'
import Options from './components/Options'
import Layout from './components/Layout/Layout'
import { SearchDetailsProvider } from './components/contexts/SearchDetailsContext'
import NotFound from "./components/NotFound"
import { Suspense } from "react"
import Loading from "./components/Loading"
import EntryDetail from "./components/EntryDetail"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="radar" element={<Radar />} />
                <Route path="entryDetail" element={<EntryDetail />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    )

    return (
        <SearchDetailsProvider>
            <Suspense fallback={<Loading />}>
                <RouterProvider router={router} />
            </Suspense>
        </SearchDetailsProvider>
    )
}

export default App