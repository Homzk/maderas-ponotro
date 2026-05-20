import { useScrollReveal } from '../../hooks/useScrollReveal'

function ProcessGallery() {
    const headerReveal = useScrollReveal({ threshold: 0.2 })
    const textReveal = useScrollReveal({ threshold: 0.15 })
    const videoReveal = useScrollReveal({ threshold: 0.15, delay: 150 })

    return (
        <div className="py-20 lg:py-28 bg-charcoal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    ref={headerReveal.ref}
                    className={`text-center mb-14 lg:mb-20 reveal reveal-up ${headerReveal.isVisible ? 'visible' : ''}`}
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                        Nuestro Proceso
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Desde la recepción de materia prima hasta el despacho final, cada etapa es realizada con dedicación y estándares profesionales.
                    </p>
                </div>

                {/* Content grid: text (right on desktop) + vertical video (left on desktop) */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Text block — first in DOM (mobile) / right column on desktop */}
                    <div
                        ref={textReveal.ref}
                        className={`md:col-span-7 md:order-2 md:pl-4 flex flex-col justify-center reveal reveal-right ${textReveal.isVisible ? 'visible' : ''}`}
                    >
                        <div className="border-l-2 border-accent-gold pl-6 space-y-5">
                            <p className="text-base lg:text-lg leading-relaxed text-cream/90">
                                Cada etapa de nuestro proceso productivo está orientada a garantizar calidad, precisión y cumplimiento. Desde la recepción de la materia prima hasta el procesamiento final, trabajamos con altos estándares operativos y un fuerte compromiso con cada compra.
                            </p>
                            <p className="text-base lg:text-lg leading-relaxed text-cream/90">
                                Contamos con tecnología adecuada y un equipo con experiencia, lo que nos permite optimizar el uso de la madera y entregar productos confiables, adaptados a las necesidades de cada cliente.
                            </p>
                            <p className="text-base lg:text-lg leading-relaxed text-cream/90">
                                Este proceso refleja nuestro enfoque: hacer bien las cosas, con responsabilidad, eficiencia y orientación al detalle.
                            </p>
                        </div>
                    </div>

                    {/* Vertical video — second in DOM (mobile bottom) / left column on desktop */}
                    <div
                        ref={videoReveal.ref}
                        className={`md:col-span-5 md:order-1 reveal reveal-left ${videoReveal.isVisible ? 'visible' : ''}`}
                    >
                        <div className="relative w-full mx-auto max-w-xs md:max-w-sm">
                            {/* Subtle gold decoration behind the video */}
                            <div
                                className="absolute -inset-3 bg-accent-gold/10 rounded-2xl -z-10 translate-x-3 translate-y-3"
                                aria-hidden="true"
                            />

                            <div
                                className="relative w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-accent-gold/20 bg-forest-dark"
                                style={{ aspectRatio: '9 / 16' }}
                            >
                                <video
                                    controls
                                    preload="metadata"
                                    playsInline
                                    poster="/videos/proceso-poster.jpg"
                                    className="absolute inset-0 w-full h-full object-cover"
                                >
                                    <source src="/videos/proceso.mp4" type="video/mp4" />
                                    Tu navegador no soporta video HTML5.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessGallery
