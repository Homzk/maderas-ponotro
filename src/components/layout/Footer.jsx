import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'

const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos', href: '#productos' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Historia', href: '#historia' },
    { name: 'Contacto', href: '#contacto' },
]

function Footer() {
    const currentYear = new Date().getFullYear()

    const handleScroll = (e, href) => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="bg-forest-dark text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4 md:col-span-1">
                        <div className="flex items-center space-x-3">
                            <img src="/logo.webp" alt="Maderas Ponotro" width={96} height={48} loading="lazy" decoding="async" className="h-12 w-auto" />
                            <span className="font-display font-bold text-xl">Maderas Ponotro</span>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Fabricación, dimensionado e impregnación con estándar profesional.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4 pt-2">
                            <a
                                href="https://wa.me/56987446911"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-forest-light transition-colors"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={24} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@maderas_ponotro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-forest-light transition-colors"
                                aria-label="TikTok"
                            >
                                <FaTiktok size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleScroll(e, link.href)}
                                        className="text-white/80 hover:text-forest-light transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
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
                                <span>Región del Bío-Bío, Chile</span>
                            </li>
                            <li>
                                <a
                                    href="tel:+56987446911"
                                    className="flex items-start space-x-3 text-white/80 hover:text-forest-light transition-colors text-sm"
                                >
                                    <FaPhone className="text-forest-light flex-shrink-0 mt-0.5" />
                                    <span>+56 9 8744 6911<br /><span className="text-white/60 text-xs">Orosimbo Cisterna</span></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+56940323645"
                                    className="flex items-start space-x-3 text-white/80 hover:text-forest-light transition-colors text-sm"
                                >
                                    <FaPhone className="text-forest-light flex-shrink-0 mt-0.5" />
                                    <span>+56 9 4032 3645<br /><span className="text-white/60 text-xs">Claudia Zapata</span></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:Contacto.maderasponotro@gmail.com"
                                    className="flex items-center space-x-3 text-white/80 hover:text-forest-light transition-colors text-sm break-all"
                                >
                                    <FaEnvelope className="text-forest-light flex-shrink-0" />
                                    <span>Contacto.maderasponotro@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Schedule */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Horario de Atención</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-3 text-white/80 text-sm">
                                <FaClock className="text-forest-light flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-white/90">Lunes a Viernes</p>
                                    <p>8:00 – 17:30</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3 text-white/80 text-sm">
                                <FaClock className="text-forest-light flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-white/90">Sábado</p>
                                    <p>8:00 – 12:00</p>
                                </div>
                            </li>
                        </ul>
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
