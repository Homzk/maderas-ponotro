import { FaChevronDown } from 'react-icons/fa'
import { whyUsCards } from '../../../../constants/heroData'
import { useExpandable } from '../hooks/useExpandable'

export default function Slide1() {
    const { expandedCard, toggleCard } = useExpandable()

    return (
        <div className="relative z-10 flex flex-col items-center h-full px-4 sm:px-6 lg:px-8 py-2">
            {/* 1. SEPARACIÓN: Se aumentó el gap principal para separar el texto de las cards (gap-8 md:gap-12) */}
            <div className="max-w-6xl w-full flex flex-col items-center justify-start flex-1 gap-8 md:gap-12 short:gap-4 medium-h:gap-6">

                {/* Logo + slogan */}
                <div className="text-center flex flex-col items-center justify-center animate-fade-in-up shrink-0">
                    {/* 2. LOGO: Se aumentaron las alturas (h-24, md:h-48, lg:h-56) y el margin-bottom (mb-3 md:mb-5) */}
                    <img
                        src="/logo.webp"
                        alt="Maderas Ponotro"
                        width={224}
                        height={112}
                        className="w-full h-auto object-contain mx-auto mb-2 md:mb-4 drop-shadow-2xl aspect-[2/1] max-w-[160px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[400px] max-h-[12svh] sm:max-h-[15svh] md:max-h-[18svh] lg:max-h-[25svh]"
                    />
                    {/* 3. PÁRRAFO: Se aumentó el tamaño de fuente (text-sm, md:text-3xl, lg:text-4xl) y max-w-5xl */}
                    <p className="text-center text-sm sm:text-lg md:text-3xl lg:text-4xl short:text-xs medium-h:text-base text-white/90 font-display font-medium drop-shadow-lg max-w-5xl mx-auto px-2">
                        Soluciones en madera para construcción, embalajes y proyectos industriales
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 short:gap-1.5 w-full shrink-0">
                    {whyUsCards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-black/40 backdrop-blur-md border border-white/10 p-3 md:p-5 short:p-2 rounded-xl md:rounded-2xl shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer md:cursor-default"
                            onClick={() => toggleCard(card.id)}
                        >
                            <div className="flex flex-col items-center justify-center text-center gap-1.5 short:gap-1">
                                <div className="w-9 h-9 md:w-11 md:h-11 short:w-8 short:h-8 bg-forest-light/30 rounded-lg flex items-center justify-center flex-shrink-0 shadow-inner">
                                    <card.icon className="text-forest-light text-lg md:text-xl short:text-base" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h3 className="text-center font-display font-bold text-sm md:text-lg short:text-xs text-white mb-0 drop-shadow-lg">
                                        {card.title}
                                    </h3>
                                    <p className="hidden md:block text-center text-white/85 leading-snug text-xs md:text-sm short:text-[11px] drop-shadow-sm mt-1">
                                        {card.description}
                                    </p>
                                </div>
                                <FaChevronDown
                                    className={`md:hidden text-white/50 text-xs flex-shrink-0 transition-transform duration-300 ${expandedCard === card.id ? 'rotate-180' : ''}`}
                                />
                            </div>
                            {/* Expandable description on mobile */}
                            <div
                                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${expandedCard === card.id ? 'max-h-40 opacity-100 mt-1.5' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-white/80 text-xs leading-relaxed drop-shadow-sm text-center px-2">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}