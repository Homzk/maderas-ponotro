import { FaTree, FaAward, FaClock, FaShieldAlt, FaLeaf, FaTruck } from 'react-icons/fa'
import { useScrollReveal, useScrollRevealStagger } from '../../hooks/useScrollReveal'

const infoBlocks = [
    {
        icon: FaTree,
        title: 'Servicios Especializados',
        description: 'Ofrecemos elaboración e impregnación de maderas con procesos de alta calidad, adaptados a las necesidades de cada cliente.',
    },
    {
        icon: FaAward,
        title: 'Calidad Garantizada',
        description: 'Nuestros productos cumplen con los más altos estándares de calidad, asegurando durabilidad y resistencia en cada pieza.',
    },
    {
        icon: FaClock,
        title: 'Experiencia Comprobada',
        description: 'Años de trayectoria en el rubro nos respaldan, brindando confianza y profesionalismo a nuestros clientes.',
    },
]

const features = [
    {
        icon: FaShieldAlt,
        title: 'Madera Tratada',
        description: 'Protección contra hongos e insectos',
    },
    {
        icon: FaLeaf,
        title: 'Proceso Ecológico',
        description: 'Compromiso con el medio ambiente',
    },
    {
        icon: FaTruck,
        title: 'Despacho a Regiones',
        description: 'Envíos a todo Chile',
    },
]

function InfoSection() {
    // Scroll reveal hooks
    const headerReveal = useScrollReveal({ threshold: 0.2 })
    const cardsStagger = useScrollRevealStagger(infoBlocks.length, { staggerDelay: 150 })
    const featuresReveal = useScrollReveal({ threshold: 0.3 })

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div 
                    ref={headerReveal.ref}
                    className={`text-center mb-16 reveal reveal-up ${headerReveal.isVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">¿Por qué elegirnos?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        En Maderas Ponotro nos dedicamos a ofrecer productos de madera de la más alta calidad,
                        con un servicio personalizado y comprometido.
                    </p>
                </div>

                {/* Main Info Blocks - Staggered reveal */}
                <div 
                    ref={cardsStagger.containerRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {infoBlocks.map((block, index) => (
                        <div
                            key={index}
                            className={`card text-center group hover:border-accent-gold border-2 border-transparent bg-white reveal reveal-up ${cardsStagger.isVisible(index) ? 'visible' : ''}`}
                        >
                            <div className="w-16 h-16 bg-forest-light/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-forest-light/20 transition-colors">
                                <block.icon className="text-accent-gold text-3xl" />
                            </div>
                            <h3 className="font-display font-bold text-xl text-forest-dark mb-4">
                                {block.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {block.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Features Strip */}
                <div 
                    ref={featuresReveal.ref}
                    className={`bg-gradient-to-r from-forest-dark to-forest rounded-2xl p-8 md:p-12 reveal reveal-scale ${featuresReveal.isVisible ? 'visible' : ''}`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-4 text-white">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-display font-semibold">{feature.title}</h4>
                                    <p className="text-white/80 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSection

