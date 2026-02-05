import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'

function Hero() {
    return (
        <section
            className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/fondo.png)' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in-up">
                {/* Logo */}
                <div className="mb-8">
                    <img
                        src="/logo.png"
                        alt="Maderas Ponotro"
                        className="h-64 sm:h-80 md:h-96 lg:h-[28rem] w-auto mx-auto drop-shadow-2xl"
                    />
                </div>

                <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-display font-medium mb-10 drop-shadow-md">
                    Elaboración e impregnación de maderas
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/contacto"
                        className="btn-primary text-lg px-10 py-4 min-w-[200px]"
                    >
                        Contacto
                    </Link>
                    <Link
                        to="/productos"
                        className="btn-outline text-lg px-10 py-4 min-w-[200px]"
                    >
                        Ver Productos
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 inset-x-0 flex justify-center animate-bounce">
                <FiChevronDown className="w-10 h-10 text-white/80" />
            </div>
        </section >
    )
}

export default Hero


