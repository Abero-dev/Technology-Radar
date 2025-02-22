import { createContext, useState } from 'react'

const AfterSearchContext = createContext();

const AfterSearchProvider = ({ children }) => {
  const [datosContext, setDatosContext] = useState([]);

  return (
    <AfterSearchContext.Provider value={{ datosContext, setDatosContext }}>
      {children}
    </AfterSearchContext.Provider>
  )
}
export { AfterSearchContext, AfterSearchProvider };
