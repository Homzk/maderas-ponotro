import { FaCogs, FaShieldAlt, FaIndustry, FaTrophy, FaCheckCircle, FaCertificate } from 'react-icons/fa'
import { useScrollReveal, useScrollRevealStagger } from '../../hooks/useScrollReveal'

const infoBlocks = [
    {
        icon: FaCogs,
        title: 'Fabricación a Medida',
        description: 'Elaboramos piezas dimensionadas, molduras, polines y componentes estructurales hasta 7 metros de largo según requerimiento.',
        image: '/1.jpeg',
    },
    {
        icon: FaShieldAlt,
        title: 'Protección de la Madera',
        description: 'Disponemos de planta impregnadora certificada por la Universidad del Bío-Bío y opción de baño antimancha para proteger la madera durante almacenamiento y transporte, según requerimiento del cliente.',
        image: '/2.jpeg',
    },
    {
        icon: FaIndustry,
        title: 'Soluciones para Industria y Construcción',
        description: 'Proveemos materiales para viviendas, cabañas, embalajes y fabricación de pallets.',
        image: '/3.jpeg',
    },
]

const stats = [
    {
        icon: FaTrophy,
        label: 'Trayectoria',
        number: '21 años',
        sublabel: 'de experiencia',
        description: 'Más de dos décadas de presencia en el rubro maderero, desarrollando soluciones para construcción, embalaje y sector industrial.',
    },
    {
        icon: FaCheckCircle,
        label: 'Cumplimiento',
        number: '100 %',
        sublabel: 'cumplimiento operativo',
        description: 'Planificación y coordinación eficiente en producción y despacho, asegurando cumplimiento según los requerimientos acordados.',
    },
    {
        icon: FaCertificate,
        label: 'Certificación',
        number: '+10 años',
        sublabel: 'acreditados',
        description: 'Planta impregnadora certificada por la Universidad del Bío-Bío, acreditada desde 2010 bajo estándares técnicos de protección y durabilidad.',
    },
]

function InfoSection() {
    const headerReveal = useScrollReveal({ threshold: 0.2 })
    const cardsStagger = useScrollRevealStagger(infoBlocks.length, { staggerDelay: 150 })
    const statsStagger = useScrollRevealStagger(stats.length, { staggerDelay: 200 })

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
                    ref={headerReveal.ref}
                    className={`text-center mb-16 reveal reveal-up ${headerReveal.isVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">¿Por qué elegirnos?</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        En Maderas Ponotro fabricamos y tratamos madera para construcción, embalaje y proyectos especiales,
                        adaptándonos a medidas y requerimientos de cada cliente.
                    </p>
                </div>

                {/* Main Info Blocks with Images */}
                <div
                    ref={cardsStagger.containerRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {infoBlocks.map((block, index) => (
                        <div
                            key={index}
                            className={`group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-accent-gold transition-all duration-500 bg-white reveal reveal-up ${cardsStagger.isVisible(index) ? 'visible' : ''}`}
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={block.image}
                                    alt={block.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                    <block.icon className="text-accent-gold text-xl" />
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-display font-bold text-xl text-forest-dark mb-3">
                                    {block.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {block.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section - Green title on top, white card below with gold numbers */}
                <div
                    ref={statsStagger.containerRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 reveal reveal-up ${statsStagger.isVisible(index) ? 'visible' : ''}`}
                        >
                            {/* Green header with icon and label */}
                            <div className="bg-gradient-to-r from-forest-dark to-forest p-5 flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <stat.icon className="text-white text-xl" />
                                </div>
                                <h4 className="font-display font-bold text-white text-lg">
                                    {stat.label}
                                </h4>
                            </div>
                            {/* White body with golden number and description */}
                            <div className="bg-white p-6 text-center">
                                <span className="block font-display text-4xl md:text-5xl font-bold text-accent-gold mb-1">
                                    {stat.number}
                                </span>
                                <span className="block text-sm text-accent-gold-dark font-semibold mb-3">
                                    {stat.sublabel}
                                </span>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default InfoSection
