import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import Products from './pages/Products'
import History from './pages/History'
import Contact from './pages/Contact'

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Products />} />
                    <Route path="/historia" element={<History />} />
                    <Route path="/contacto" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App

