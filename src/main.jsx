import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
