import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Nuestra Historia', path: '/historia' },
    { name: 'Contacto', path: '/contacto' },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <nav className="bg-forest-dark shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-3">
                        <img
                            src="/logo.png"
                            alt="Maderas Ponotro"
                            className="h-14 w-auto"
                        />
                        <span className="font-display font-bold text-white text-xl hidden sm:block">
                            Maderas Ponotro
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg font-display font-medium transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-forest-light text-white'
                                        : 'text-white/90 hover:bg-forest hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2 rounded-lg hover:bg-forest transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 pb-4' : 'max-h-0'
                        }`}
                >
                    <div className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`px-4 py-3 rounded-lg font-display font-medium transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-forest-light text-white'
                                        : 'text-white/90 hover:bg-forest hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
