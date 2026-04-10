import { FaChevronDown } from 'react-icons/fa'
import { whyUsCards } from '../../../../constants/heroData'
import { useExpandable } from '../hooks/useExpandable'

export default function Slide1() {
    const { expandedCard, toggleCard } = useExpandable()
    
    const handleScroll = (id) => {
        const target = document.getElementById(id)
        if (target) {
            const navbarHeight = 80
            const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <div className="relative z-10 flex flex-col items-center min-h-full px-4 sm:px-6 lg:px-8 py-6 md:py-4">
            <div className="max-w-6xl w-full flex flex-col items-center my-auto">
                {/* Logo + slogan area */}
                <div className="text-center mb-3 md:mb-12 animate-fade-in-up mt-2 md:mt-8">
                    <img
                        src="/logo.png"
                        alt="Maderas Ponotro"
                        className="h-24 sm:h-32 md:h-48 w-auto mx-auto mb-2 md:mb-6 drop-shadow-2xl shrink-0"
                    />
                    <p className="text-sm sm:text-2xl md:text-3xl text-white/90 font-display font-medium drop-shadow-lg max-w-3xl mx-auto px-2">
                        Soluciones en madera para construcción, embalajes y proyectos industriales
                    </p>
                </div>

                {/* Info Cards - Expandable on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 lg:gap-8 w-full mb-4 md:mb-12">
                    {whyUsCards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-black/40 backdrop-blur-md border border-white/10 p-3 md:p-8 rounded-xl md:rounded-2xl shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer md:cursor-default"
                            onClick={() => toggleCard(card.id)}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center justify-start md:justify-center text-left md:text-center gap-3 md:gap-0">
                                <div className="w-10 h-10 md:w-14 md:h-14 bg-forest-light/30 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-5 shadow-inner">
                                    <card.icon className="text-forest-light text-lg md:text-2xl" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-display font-bold text-sm md:text-lg text-white mb-0 md:mb-3 drop-shadow-lg">
                                        {card.title}
                                    </h3>
                                    <p className="hidden md:block text-white/85 leading-relaxed text-sm drop-shadow-sm">
                                        {card.description}
                                    </p>
                                </div>
                                <FaChevronDown
                                    className={`md:hidden text-white/50 text-xs flex-shrink-0 transition-transform duration-300 ${expandedCard === card.id ? 'rotate-180' : ''}`}
                                />
                            </div>
                            {/* Expandable description on mobile */}
                            <div
                                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                                    expandedCard === card.id ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-white/80 text-xs leading-relaxed drop-shadow-sm pl-[52px]">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row items-center gap-3 md:gap-4 animate-fade-in-up w-full px-0 sm:px-0 justify-center">
                    <button
                        onClick={() => handleScroll('productos')}
                        className="btn-outline bg-black/40 backdrop-blur-sm text-sm md:text-base px-6 md:px-10 py-2.5 md:py-4 rounded-xl hover:bg-white/10 transition-colors flex-1 sm:flex-none font-medium"
                    >
                        Ver Productos
                    </button>
                    <button
                        onClick={() => handleScroll('contacto')}
                        className="btn-primary text-sm md:text-base px-6 md:px-10 py-2.5 md:py-4 rounded-xl shadow-2xl hover:scale-105 transition-transform flex-1 sm:flex-none font-semibold"
                    >
                        Contacto
                    </button>
                </div>
            </div>
        </div>
    )
}
