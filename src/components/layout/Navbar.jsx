import { useState, useEffect, useCallback } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaShoppingCart } from 'react-icons/fa'
import { useQuotationCart } from '../../context/QuotationCartContext'

const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos', href: '#productos' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Historia', href: '#historia' },
    { name: 'Contacto', href: '#contacto' },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('#inicio')
    const [isScrolled, setIsScrolled] = useState(false)
    const { itemCount, toggleCart } = useQuotationCart()

    // Scroll spy — track which section is in view
    useEffect(() => {
        const sectionIds = ['inicio', 'productos', 'proceso', 'historia', 'contacto']

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`)
                    }
                }
            },
            { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
        )

        for (const id of sectionIds) {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        }

        return () => observer.disconnect()
    }, [])

    // Solid navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = useCallback((e, href) => {
        e.preventDefault()
        setIsOpen(false)
        const target = document.querySelector(href)
        if (target) {
            const navbarHeight = 80
            const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }, [])

    const isActive = (href) => activeSection === href

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${
            isScrolled
                ? 'bg-forest-dark/95 backdrop-blur-md shadow-2xl'
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <a
                        href="#inicio"
                        onClick={(e) => handleNavClick(e, '#inicio')}
                        className="flex items-center space-x-3 group"
                    >
                        <img
                            src="/logo.png"
                            alt="Maderas Ponotro"
                            className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="font-display font-bold text-white text-xl hidden sm:block">
                            Maderas Ponotro
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`px-4 py-2 rounded-lg font-display font-medium transition-all duration-300 ${
                                    isActive(link.href)
                                        ? 'bg-forest-light text-white'
                                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Cart Indicator */}
                        <button
                            onClick={toggleCart}
                            className="relative ml-3 p-2.5 rounded-lg text-white/90 hover:bg-white/10 hover:text-white transition-all duration-300"
                            aria-label={`Carrito de cotización (${itemCount} productos)`}
                        >
                            <FaShoppingCart size={20} />
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-gold text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce-once">
                                    {itemCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile: Cart + Menu */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleCart}
                            className="relative p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                            aria-label="Carrito de cotización"
                        >
                            <FaShoppingCart size={20} />
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-gold text-white text-xs font-bold rounded-full flex items-center justify-center">
                                    {itemCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-80 pb-4' : 'max-h-0'
                    }`}
                >
                    <div className="flex flex-col space-y-2 bg-forest-dark/90 backdrop-blur-sm rounded-xl p-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`px-4 py-3 rounded-lg font-display font-medium transition-all duration-300 ${
                                    isActive(link.href)
                                        ? 'bg-forest-light text-white'
                                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
