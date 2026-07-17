//Starting point of the application
import { StrictMode } from 'react'//An extra debugger for developer
import { createRoot } from 'react-dom/client'//A place for react to render the application
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(//Render the application in the root element of the HTML
  <StrictMode>
    <App />
  </StrictMode>,
)
