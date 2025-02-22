
import { Footer } from './components/Footer.jsx';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar.jsx';
import { OtherComponent } from './components/OtherComponent';
import RadarComponent from './components/Radar/RadarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/radar' element={<RadarComponent></RadarComponent>} />
          <Route path='/other-option' element={<OtherComponent></OtherComponent>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
