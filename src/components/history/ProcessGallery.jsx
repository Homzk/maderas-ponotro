import { FaTree, FaCut, FaFlask, FaClipboardCheck, FaBoxOpen } from 'react-icons/fa'
import { useScrollReveal, useScrollRevealStagger } from '../../hooks/useScrollReveal'

const processSteps = [
    {
        icon: FaTree,
        step: '01',
        title: 'Selección de Madera',
        description: 'Cuidadosa selección de las mejores maderas provenientes de bosques certificados del sur de Chile.',
    },
    {
        icon: FaCut,
        step: '02',
        title: 'Proceso de Corte',
        description: 'Corte preciso con maquinaria de última generación, optimizando el aprovechamiento de cada pieza.',
    },
    {
        icon: FaFlask,
        step: '03',
        title: 'Tratamiento e Impregnación',
        description: 'Aplicación de tratamientos protectores que garantizan resistencia contra hongos e insectos.',
    },
    {
        icon: FaClipboardCheck,
        step: '04',
        title: 'Control de Calidad',
        description: 'Riguroso proceso de inspección para asegurar que cada producto cumple con nuestros estándares.',
    },
    {
        icon: FaBoxOpen,
        step: '05',
        title: 'Producto Terminado',
        description: 'Empaque y preparación para despacho, garantizando que el producto llegue en perfectas condiciones.',
    },
]

function ProcessGallery() {
    const headerReveal = useScrollReveal({ threshold: 0.2 })
    const stepsStagger = useScrollRevealStagger(processSteps.length, { staggerDelay: 100 })
    const galleryHeaderReveal = useScrollReveal({ threshold: 0.2 })
    const galleryStagger = useScrollRevealStagger(4, { staggerDelay: 100 })

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    ref={headerReveal.ref}
                    className={`text-center mb-16 reveal reveal-up ${headerReveal.isVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">Nuestro Proceso</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Desde la selección de la madera hasta el producto final, cada paso es realizado
                        con dedicación y profesionalismo.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line - Desktop */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-forest-dark via-forest to-forest-light"></div>

                    <div 
                        ref={stepsStagger.containerRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
                    >
                        {processSteps.map((step, index) => (
                            <div 
                                key={index} 
                                className={`relative group reveal reveal-up ${stepsStagger.isVisible(index) ? 'visible' : ''}`}
                            >
                                {/* Step Card */}
                                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 text-center h-full">
                                    {/* Step Number */}
                                    <div className="relative z-10 w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <step.icon className="text-white text-2xl" />
                                    </div>

                                    <span className="inline-block font-display font-bold text-forest-light text-sm mb-2">
                                        PASO {step.step}
                                    </span>

                                    <h3 className="font-display font-bold text-lg text-forest-dark mb-3">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Gallery Placeholder */}
                <div className="mt-16">
                    <h3 
                        ref={galleryHeaderReveal.ref}
                        className={`section-subtitle text-center mb-8 reveal reveal-up ${galleryHeaderReveal.isVisible ? 'visible' : ''}`}
                    >
                        Galería de Imágenes
                    </h3>
                    <div 
                        ref={galleryStagger.containerRef}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {[1, 2, 3, 4].map((num, index) => (
                            <div
                                key={num}
                                className={`aspect-square bg-gradient-to-br from-forest-dark/80 to-forest/60 rounded-xl flex items-center justify-center group hover:shadow-lg transition-all overflow-hidden reveal reveal-scale ${galleryStagger.isVisible(index) ? 'visible' : ''}`}
                            >
                                <div className="text-white/80 text-center p-4">
                                    <FaTree className="text-3xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm">Imagen {num}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-4">
                        * Las imágenes del proceso productivo serán añadidas próximamente
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProcessGallery

