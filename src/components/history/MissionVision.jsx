import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa'
import { useScrollReveal, useScrollRevealStagger } from '../../hooks/useScrollReveal'

const cards = [
    {
        icon: FaBullseye,
        title: 'Misión',
        content: 'Proveer productos de madera de la más alta calidad, utilizando procesos de elaboración e impregnación que garanticen durabilidad y satisfacción total para nuestros clientes, contribuyendo al desarrollo sostenible de la industria maderera.',
        color: 'forest',
    },
    {
        icon: FaEye,
        title: 'Visión',
        content: 'Ser reconocidos como la empresa líder en elaboración e impregnación de maderas en el sur de Chile, destacando por nuestra excelencia en calidad, innovación en procesos y compromiso con el medio ambiente.',
        color: 'forest-medium',
    },
    {
        icon: FaHeart,
        title: 'Valores',
        content: 'Calidad sin compromisos, honestidad en cada trato, respeto por el medio ambiente, innovación constante, y compromiso total con la satisfacción de nuestros clientes.',
        color: 'forest-light',
    },
]

function MissionVision() {
    const headerReveal = useScrollReveal({ threshold: 0.2 })
    const cardsStagger = useScrollRevealStagger(cards.length, { staggerDelay: 150 })

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    ref={headerReveal.ref}
                    className={`text-center mb-12 reveal reveal-up ${headerReveal.isVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">Lo Que Nos Define</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Nuestros principios y visión guían cada decisión que tomamos
                    </p>
                </div>

                <div 
                    ref={cardsStagger.containerRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-forest reveal reveal-up ${cardsStagger.isVisible(index) ? 'visible' : ''}`}
                        >
                            <div className={`w-14 h-14 bg-${card.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                                <card.icon className="text-2xl text-forest" />
                            </div>
                            <h3 className="font-display font-bold text-xl text-forest-dark mb-4">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {card.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MissionVision

