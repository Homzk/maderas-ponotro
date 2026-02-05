import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Nuestra Historia', path: '/historia' },
    { name: 'Contacto', path: '/contacto' },
]

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-forest-dark text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <img src="/logo.png" alt="Maderas Ponotro" className="h-12 w-auto" />
                            <span className="font-display font-bold text-xl">Maderas Ponotro</span>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Elaboración e impregnación de maderas de alta calidad.
                            Más de años de experiencia en el rubro nos respaldan.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4 pt-2">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-forest-light transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebook size={24} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-forest-light transition-colors"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://wa.me/56912345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-forest-light transition-colors"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white/80 hover:text-forest-light transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3 text-white/80 text-sm">
                                <FaMapMarkerAlt className="text-forest-light flex-shrink-0" />
                                <span>Región de Los Ríos, Chile</span>
                            </li>
                            <li>
                                <a
                                    href="tel:+56912345678"
                                    className="flex items-center space-x-3 text-white/80 hover:text-forest-light transition-colors text-sm"
                                >
                                    <FaPhone className="text-forest-light flex-shrink-0" />
                                    <span>+56 9 1234 5678</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:contacto@maderasponotro.cl"
                                    className="flex items-center space-x-3 text-white/80 hover:text-forest-light transition-colors text-sm"
                                >
                                    <FaEnvelope className="text-forest-light flex-shrink-0" />
                                    <span>contacto@maderasponotro.cl</span>
                                </a>
                            </li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-white/20">
                            <p className="text-white/60 text-xs">
                                <strong>Horario de Atención:</strong><br />
                                Lunes a Viernes: 08:00 - 18:00<br />
                                Sábado: 09:00 - 13:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-center text-white/60 text-sm">
                        © {currentYear} Maderas Ponotro. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
