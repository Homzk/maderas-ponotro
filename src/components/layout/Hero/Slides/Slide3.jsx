import { FaChevronDown } from 'react-icons/fa'
import { missionVisionValues } from '../../../../constants/heroData'
import { useExpandable } from '../hooks/useExpandable'

export default function Slide3() {
    const { expandedCard, toggleCard } = useExpandable()

    return (
        <div className="relative z-10 flex flex-col items-center h-full px-4 sm:px-6 lg:px-8 py-2">
            {/* Se aumentó el gap principal para separar el texto de las cards e igualar a Slide 1 y 2 */}
            <div className="max-w-6xl w-full flex flex-col items-center justify-center flex-1 gap-8 md:gap-12 short:gap-4 medium-h:gap-6">

                <div className="shrink-0 flex flex-col items-center text-center">
                    {/* Título más grande */}
                    <h2 className="font-display text-2xl md:text-6xl lg:text-7xl short:text-xl medium-h:text-3xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg">
                        Lo Que Nos Define
                    </h2>
                    {/* Subtítulo más grande */}
                    <p className="text-white/90 text-sm sm:text-lg md:text-3xl lg:text-4xl short:text-xs medium-h:text-base max-w-4xl drop-shadow-md">
                        Principios que guían cada decisión
                    </p>
                </div>

                {/* Cards: horizontal layout - Textos sin alterar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 short:gap-1.5 w-full shrink-0">
                    {missionVisionValues.map((card) => (
                        <div
                            key={card.id}
                            className="bg-black/40 backdrop-blur-md border border-white/10 p-3 md:p-5 short:p-2 rounded-xl md:rounded-2xl shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer md:cursor-default"
                            onClick={() => toggleCard(card.id)}
                        >
                            {/* Horizontal layout: icon left, text right */}
                            <div className="flex flex-row items-center text-left gap-3 short:gap-2">
                                <div className="w-9 h-9 md:w-11 md:h-11 short:w-8 short:h-8 bg-forest-light/30 rounded-lg md:rounded-xl flex items-center justify-center shadow-inner flex-shrink-0">
                                    <card.icon className="text-forest-light text-lg md:text-xl short:text-base" />
                                </div>
                                <h3 className="flex-1 font-display font-bold text-sm md:text-lg short:text-xs text-white mb-0 drop-shadow-lg">
                                    {card.title}
                                </h3>
                                <FaChevronDown
                                    className={`sm:hidden text-white/50 text-xs flex-shrink-0 transition-transform duration-300 ${expandedCard === card.id ? 'rotate-180' : ''}`}
                                />
                            </div>
                            {/* Description — always visible on desktop, expandable on mobile */}
                            <p className="hidden sm:block text-white/85 leading-snug text-xs md:text-sm short:text-[11px] drop-shadow-sm mt-2 short:mt-1">
                                {card.content}
                            </p>
                            <div
                                className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${expandedCard === card.id ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-white/80 text-xs leading-relaxed drop-shadow-sm text-left pl-12">
                                    {card.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}