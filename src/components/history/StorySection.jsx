import { FaTree } from 'react-icons/fa'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function StorySection() {
    const contentReveal = useScrollReveal({ threshold: 0.2 })
    const imageReveal = useScrollReveal({ threshold: 0.2, delay: 200 })

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div 
                        ref={contentReveal.ref}
                        className={`space-y-6 reveal reveal-left ${contentReveal.isVisible ? 'visible' : ''}`}
                    >
                        <h2 className="section-title">Nuestra Historia</h2>

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                <strong className="text-forest-dark">Maderas Ponotro</strong> nació de la pasión por
                                la madera y el compromiso con la calidad. Desde nuestros inicios, nos hemos dedicado
                                a la elaboración e impregnación de maderas, ofreciendo productos que combinan
                                tradición artesanal con tecnología moderna.
                            </p>

                            <p>
                                Ubicados en la hermosa Región de Los Ríos, contamos con acceso a las mejores
                                maderas del sur de Chile. Nuestro equipo de expertos trabaja día a día para
                                transformar la materia prima en productos de alta calidad que satisfacen las
                                necesidades más exigentes del mercado.
                            </p>

                            <p>
                                A lo largo de los años, hemos construido relaciones de confianza con nuestros
                                clientes, basadas en la transparencia, el profesionalismo y el cumplimiento de
                                nuestros compromisos. Cada pieza que sale de nuestras instalaciones lleva la
                                marca de nuestra dedicación.
                            </p>
                        </div>
                    </div>

                    {/* Image Placeholder */}
                    <div 
                        ref={imageReveal.ref}
                        className={`order-first lg:order-last reveal reveal-right ${imageReveal.isVisible ? 'visible' : ''}`}
                    >
                        <div className="relative h-[400px] bg-gradient-to-br from-forest-dark/80 to-forest/60 rounded-2xl shadow-2xl flex flex-col items-center justify-center group hover:shadow-xl transition-all">
                            <FaTree className="text-white/80 text-6xl mb-4 group-hover:scale-110 transition-transform" />
                            <span className="text-white/80 text-lg font-display">Imagen próximamente</span>
                            <p className="text-white/60 text-sm mt-2">* Imagen representativa será añadida</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection

