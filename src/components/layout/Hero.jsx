import { useState, useEffect, useCallback } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { FaChevronLeft, FaChevronRight, FaCogs, FaShieldAlt, FaIndustry, FaBullseye, FaEye, FaHeart, FaTrophy, FaCheckCircle, FaCertificate } from 'react-icons/fa'

/* ───────────────────── DATA ───────────────────── */

const whyUsCards = [
    {
        icon: FaCogs,
        title: 'Fabricación a Medida',
        description: 'Elaboramos piezas dimensionadas, molduras, polines y componentes estructurales hasta 7 metros de largo según requerimiento.',
    },
    {
        icon: FaShieldAlt,
        title: 'Protección de la Madera',
        description: 'Disponemos de planta impregnadora certificada por la Universidad del Bío-Bío y opción de baño antimancha para proteger la madera.',
    },
    {
        icon: FaIndustry,
        title: 'Soluciones para Industria y Construcción',
        description: 'Proveemos materiales para viviendas, cabañas, embalajes y fabricación de pallets.',
    },
]

const stats = [
    {
        icon: FaTrophy,
        number: '21 años',
        label: 'de experiencia',
        description: 'Más de dos décadas de presencia en el rubro maderero desarrollando soluciones para construcción, embalaje y sector industrial.',
    },
    {
        icon: FaCheckCircle,
        number: '100%',
        label: 'cumplimiento operativo',
        description: 'Planificación y coordinación eficiente en producción y despacho, asegurando cumplimiento según los requerimientos acordados.',
    },
    {
        icon: FaCertificate,
        number: '+10 años',
        label: 'acreditados',
        description: 'Planta impregnadora certificada por la Universidad del Bío-Bío, acreditada desde 2010 bajo estándares técnicos.',
    },
]

const missionVisionValues = [
    {
        icon: FaBullseye,
        title: 'Misión',
        content: 'Proveer productos de madera de la más alta calidad, utilizando procesos de elaboración e impregnación que garanticen durabilidad y satisfacción total para nuestros clientes.',
    },
    {
        icon: FaEye,
        title: 'Visión',
        content: 'Ser reconocidos como la empresa líder en elaboración e impregnación de maderas en el sur de Chile, destacando por nuestra excelencia en calidad e innovación.',
    },
    {
        icon: FaHeart,
        title: 'Valores',
        content: 'Calidad sin compromisos, honestidad en cada trato, respeto por el medio ambiente, innovación constante y compromiso total con nuestros clientes.',
    },
]

/* ────────────── SLIDE COMPONENTS ────────────── */

function Slide1() {
    const handleScroll = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full flex flex-col items-center">
                {/* Logo + slogan area */}
                <div className="text-center mb-8 md:mb-12 animate-fade-in-up mt-8">
                    <img
                        src="/logo.png"
                        alt="Maderas Ponotro"
                        className="h-32 sm:h-40 md:h-48 w-auto mx-auto mb-6 drop-shadow-2xl"
                    />
                    <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-display font-medium drop-shadow-lg max-w-3xl mx-auto">
                        Soluciones en madera para construcción, embalajes y proyectos industriales
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mb-12">
                    {whyUsCards.map((card, i) => (
                        <div key={i} className="text-center bg-black/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-forest-light/30 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-inner">
                                <card.icon className="text-forest-light text-2xl" />
                            </div>
                            <h3 className="font-display font-bold text-lg text-white mb-3 drop-shadow-lg">
                                {card.title}
                            </h3>
                            <p className="text-white/85 leading-relaxed text-sm drop-shadow-sm">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up">
                    <button
                        onClick={() => handleScroll('contacto')}
                        className="btn-primary text-base px-10 py-4 rounded-xl shadow-2xl hover:scale-105 transition-transform"
                    >
                        Contacto
                    </button>
                    <button
                        onClick={() => handleScroll('productos')}
                        className="btn-outline bg-black/30 backdrop-blur-sm text-base px-10 py-4 rounded-xl hover:bg-white/10 transition-colors"
                    >
                        Ver Productos
                    </button>
                </div>
            </div>
        </div>
    )
}

function Slide2() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full text-center">
                <div className="mb-12 mt-8">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                        Nuestra Trayectoria
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                        Más de dos décadas transformando madera con excelencia
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center bg-black/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-forest-light/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                                <stat.icon className="text-forest-light text-2xl" />
                            </div>
                            <span className="block font-display text-4xl md:text-5xl font-bold text-forest-light mb-2 drop-shadow-lg">
                                {stat.number}
                            </span>
                            <span className="block text-sm font-semibold text-forest-light uppercase tracking-wider mb-4 drop-shadow-md">
                                {stat.label}
                            </span>
                            <p className="text-white/85 text-sm leading-relaxed drop-shadow-sm">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Slide3() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full text-center">
                <div className="mb-12 mt-8">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                        Lo Que Nos Define
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                        Principios que guían cada decisión
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
                    {missionVisionValues.map((card, i) => (
                        <div key={i} className="text-center bg-black/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-forest-light/30 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-inner">
                                <card.icon className="text-forest-light text-2xl" />
                            </div>
                            <h3 className="font-display font-bold text-xl text-white mb-3 drop-shadow-lg">
                                {card.title}
                            </h3>
                            <p className="text-white/85 leading-relaxed text-sm drop-shadow-sm">
                                {card.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const slideComponents = [Slide1, Slide2, Slide3]

const backgrounds = ['/Slide 1.jpg', '/4.jpeg', '/5.jpeg']

/* All slides use the same dark overlay for uniform brightness */
const overlayClass = 'bg-gradient-to-b from-black/50 via-black/40 to-black/60'

/* ────────────── HERO CAROUSEL ────────────── */

function Hero() {
    const [current, setCurrent] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slideComponents.length)
    }, [])

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slideComponents.length) % slideComponents.length)
    }, [])

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return
        const timer = setInterval(next, 5000)
        return () => clearInterval(timer)
    }, [isAutoPlaying, next])

    const handleManualNav = useCallback((action) => {
        setIsAutoPlaying(false)
        action()
        setTimeout(() => setIsAutoPlaying(true), 12000)
    }, [])

    const handleScrollDown = useCallback(() => {
        const productos = document.getElementById('productos')
        if (productos) {
            productos.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

    return (
        <section id="inicio" className="relative min-h-screen overflow-hidden">
            {/* Background images — all preloaded, opacity transition */}
            {backgrounds.map((bg, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        i === current ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                        src={bg}
                        alt=""
                        className="w-full h-full object-cover"
                        aria-hidden="true"
                    />
                </div>
            ))}

            {/* Uniform dark overlay */}
            <div className={`absolute inset-0 ${overlayClass}`} />

            {/* Decorative grain */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

            {/* Slide content */}
            <div className="relative z-10 min-h-screen flex items-center pt-20 pb-24">
                {slideComponents.map((SlideComponent, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 flex items-center transition-all duration-700 pt-20 pb-24 ${
                            i === current
                                ? 'opacity-100 translate-x-0'
                                : i < current
                                  ? 'opacity-0 -translate-x-full'
                                  : 'opacity-0 translate-x-full'
                        }`}
                    >
                        <div className="w-full h-full">
                            <SlideComponent />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => handleManualNav(prev)}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20"
                aria-label="Slide anterior"
            >
                <FaChevronLeft size={16} />
            </button>
            <button
                onClick={() => handleManualNav(next)}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20"
                aria-label="Slide siguiente"
            >
                <FaChevronRight size={16} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-20 inset-x-0 flex justify-center gap-2.5 z-20">
                {slideComponents.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleManualNav(() => setCurrent(i))}
                        className={`h-2.5 rounded-full transition-all duration-500 ${
                            i === current
                                ? 'w-10 bg-forest-light'
                                : 'w-2.5 bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Ir a slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Scroll indicator */}
            <button
                onClick={handleScrollDown}
                className="absolute bottom-6 inset-x-0 flex justify-center z-20 animate-bounce cursor-pointer"
                aria-label="Ver productos"
            >
                <FiChevronDown className="w-10 h-10 text-white/70" />
            </button>
        </section>
    )
}

export default Hero
