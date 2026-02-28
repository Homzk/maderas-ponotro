import { useState, useEffect, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const slides = [
    {
        title: 'Nuestros Orígenes',
        text: 'Maderas Ponotro nació de la pasión por la madera y el compromiso con la calidad. Desde nuestros inicios, nos hemos dedicado a la elaboración e impregnación de maderas, ofreciendo productos que combinan tradición artesanal con tecnología moderna.',
        image: '/1.jpeg',
    },
    {
        title: 'Nuestra Ubicación',
        text: 'Ubicados en la hermosa Región del Biobío, contamos con acceso a las mejores maderas del sur de Chile. Nuestra planta cuenta con la infraestructura necesaria para procesar grandes volúmenes sin sacrificar la calidad.',
        image: '/4.jpeg',
    },
    {
        title: 'Calidad Comprobada',
        text: 'Nuestro equipo de expertos trabaja día a día para transformar la materia prima en productos de alta calidad que satisfacen las necesidades más exigentes del mercado. Cada pieza pasa por rigurosos controles de calidad.',
        image: '/5.jpeg',
    },
    {
        title: 'Relaciones de Confianza',
        text: 'A lo largo de los años, hemos construido relaciones de confianza con nuestros clientes, basadas en la transparencia, el profesionalismo y el cumplimiento de nuestros compromisos. Cada pieza que sale de nuestras instalaciones lleva la marca de nuestra dedicación.',
        image: '/2.jpeg',
    },
    {
        title: 'Tecnología e Innovación',
        text: 'Contamos con equipos de impregnación de última generación que nos permiten ofrecer tratamientos de alta calidad, protegiendo la madera contra hongos, insectos y la intemperie, alargando significativamente su vida útil.',
        image: '/3.jpeg',
    },
]

function StorySection() {
    const [current, setCurrent] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)


    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
    }, [])

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    }, [])

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return
        const timer = setInterval(next, 5000)
        return () => clearInterval(timer)
    }, [isAutoPlaying, next])

    const handleManualNav = (action) => {
        setIsAutoPlaying(false)
        action()
        // Resume auto-play after 10s of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Carousel */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-forest-dark">
                    {/* Slide Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[550px]">
                        {/* Image Side */}
                        <div className="relative h-80 lg:h-auto overflow-hidden">
                            {slides.map((slide, index) => (
                                <img
                                    key={index}
                                    src={slide.image}
                                    alt={slide.title}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${index === current
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-105'
                                        }`}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-dark/40 hidden lg:block" />
                        </div>

                        {/* Text Side */}
                        <div className="relative min-h-[320px] lg:min-h-[450px]">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 flex flex-col justify-center p-8 lg:p-12 transition-all duration-500 ${index === current
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4 pointer-events-none'
                                        }`}
                                >
                                    <span className="text-accent-gold font-display font-semibold text-sm uppercase tracking-wider mb-3 block">
                                        {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                                    </span>
                                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4">
                                        {slide.title}
                                    </h3>
                                    <p className="text-white/85 leading-relaxed text-base lg:text-lg">
                                        {slide.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => handleManualNav(prev)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm"
                        aria-label="Anterior"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={() => handleManualNav(next)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm"
                        aria-label="Siguiente"
                    >
                        <FaChevronRight />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    handleManualNav(() => setCurrent(index))
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === current
                                    ? 'w-8 bg-accent-gold'
                                    : 'w-2 bg-white/40 hover:bg-white/60'
                                    }`}
                                aria-label={`Ir a slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection
