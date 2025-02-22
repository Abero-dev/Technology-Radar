import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AfterSearchProvider } from './components/contexts/AfterSearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AfterSearchProvider>
      <App />
    </AfterSearchProvider>
  </StrictMode>
);
