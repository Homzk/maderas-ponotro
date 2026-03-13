import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QuotationCartProvider } from './context/QuotationCartContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QuotationCartProvider>
            <App />
        </QuotationCartProvider>
    </StrictMode>,
)
