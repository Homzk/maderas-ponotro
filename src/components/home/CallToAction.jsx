import { useScrollReveal } from '../../hooks/useScrollReveal'

function CallToAction() {
    const ctaReveal = useScrollReveal({ threshold: 0.2 })

    const handleScroll = (e, target) => {
        e.preventDefault()
        const el = document.querySelector(target)
        if (el) {
            const navbarHeight = 80
            const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={ctaReveal.ref}
                    className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest-dark via-forest to-forest-medium p-12 md:p-16 text-center reveal reveal-scale-up ease-elastic ${ctaReveal.isVisible ? 'visible' : ''}`}
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
                    <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2" />

                    <div className="relative z-10">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                            ¿Necesitas madera para tu proyecto?
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-4">
                            Envíanos las especificaciones, dimensiones y volúmenes requeridos.
                            Nuestro equipo analizará tu solicitud y enviará la información técnica
                            y propuesta comercial correspondiente.
                        </p>
                        <p className="text-accent-gold-light font-display font-semibold text-lg mb-10">
                            Respuesta dentro de 24 horas hábiles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contacto"
                                onClick={(e) => handleScroll(e, '#contacto')}
                                className="bg-white text-forest font-display font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Enviar requerimiento
                            </a>
                            <a
                                href="#productos"
                                onClick={(e) => handleScroll(e, '#productos')}
                                className="border-2 border-white text-white font-display font-bold px-10 py-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                            >
                                Ver productos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
