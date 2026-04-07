import { FaChevronDown } from 'react-icons/fa'
import { missionVisionValues } from '../../../../constants/heroData'
import { useExpandable } from '../hooks/useExpandable'

export default function Slide3() {
    const { expandedCard, toggleCard } = useExpandable()

    return (
        <div className="relative z-10 flex flex-col items-center min-h-full px-4 sm:px-6 lg:px-8 py-6 md:py-4">
            <div className="max-w-5xl w-full text-center my-auto">
                <div className="mb-4 md:mb-12 mt-2 md:mt-8 w-full text-left">
                    <h2 className="font-display text-xl md:text-5xl font-bold text-white mb-1 md:mb-6 drop-shadow-lg">
                        Lo Que Nos Define
                    </h2>
                    <p className="text-white/90 text-xs md:text-xl max-w-2xl drop-shadow-md">
                        Principios que guían cada decisión
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-6 lg:gap-8 w-full">
                    {missionVisionValues.map((card) => (
                        <div
                            key={card.id}
                            className="bg-black/40 backdrop-blur-md border border-white/10 p-3 md:p-8 rounded-xl md:rounded-2xl shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer md:cursor-default"
                            onClick={() => toggleCard(card.id)}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start text-left gap-3 md:gap-5">
                                <div className="w-9 h-9 md:w-14 md:h-14 bg-forest-light/30 rounded-lg md:rounded-xl flex items-center justify-center shadow-inner flex-shrink-0">
                                    <card.icon className="text-forest-light text-base md:text-2xl" />
                                </div>
                                <h3 className="flex-1 font-display font-bold text-sm md:text-xl text-white mb-0 md:mb-0 drop-shadow-lg">
                                    {card.title}
                                </h3>
                                <FaChevronDown
                                    className={`md:hidden text-white/50 text-xs flex-shrink-0 transition-transform duration-300 ${expandedCard === card.id ? 'rotate-180' : ''}`}
                                />
                            </div>
                            {/* Expandable content on mobile */}
                            <div
                                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                                    expandedCard === card.id ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-white/80 text-xs leading-relaxed drop-shadow-sm pl-12">
                                    {card.content}
                                </p>
                            </div>
                            {/* Always visible on desktop */}
                            <p className="hidden md:block text-white/85 leading-relaxed text-sm drop-shadow-sm mt-3">
                                {card.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
