import { Link } from 'react-router-dom'
import { useScrollReveal, useScrollRevealStagger } from '../../hooks/useScrollReveal'

const stats = [
    { number: '10+', label: 'Años de Experiencia' },
    { number: '500+', label: 'Proyectos Completados' },
    { number: '100%', label: 'Clientes Satisfechos' },
]

function CallToAction() {
    // Scroll reveal hooks
    const statsStagger = useScrollRevealStagger(stats.length, { staggerDelay: 200 })
    const ctaReveal = useScrollReveal({ threshold: 0.2 })

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats Section - Staggered reveal */}
                <div 
                    ref={statsStagger.containerRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow reveal reveal-up ${statsStagger.isVisible(index) ? 'visible' : ''}`}
                        >
                            <span className="block font-display text-5xl md:text-6xl font-bold text-accent-gold mb-2">
                                {stat.number}
                            </span>
                            <span className="text-gray-600 font-medium">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* CTA Box - Scale reveal */}
                <div 
                    ref={ctaReveal.ref}
                    className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest-dark via-forest to-forest-medium p-12 md:p-16 text-center reveal reveal-scale-up ease-elastic ${ctaReveal.isVisible ? 'visible' : ''}`}
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

                    <div className="relative z-10">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                            ¿Listo para tu próximo proyecto?
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Contáctanos hoy mismo y descubre cómo podemos ayudarte con tus necesidades de madera.
                            Cotización sin compromiso.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contacto"
                                className="bg-white text-forest font-display font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Solicitar Cotización
                            </Link>
                            <Link
                                to="/productos"
                                className="border-2 border-white text-white font-display font-bold px-10 py-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                            >
                                Ver Catálogo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction

