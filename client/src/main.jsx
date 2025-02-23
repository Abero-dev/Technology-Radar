import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchDetailsProvider } from './components/contexts/SearchDetailsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchDetailsProvider>
      <App />
    </SearchDetailsProvider>
  </StrictMode>
);
