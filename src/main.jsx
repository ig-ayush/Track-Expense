import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { AlertProvider } from './Components/AlertProvider.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter >
        <AlertProvider>
            <App />
        </AlertProvider>
    </BrowserRouter>
)
