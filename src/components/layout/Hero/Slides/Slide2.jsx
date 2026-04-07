import { FaChevronDown } from 'react-icons/fa'
import { stats } from '../../../../constants/heroData'
import { useExpandable } from '../hooks/useExpandable'

export default function Slide2() {
    const { expandedCard, toggleCard } = useExpandable()

    return (
        <div className="relative z-10 flex flex-col items-center min-h-full px-4 sm:px-6 lg:px-8 py-6 md:py-4">
            <div className="max-w-5xl w-full text-center my-auto">
                <div className="mb-4 md:mb-12 mt-2 md:mt-8">
                    <h2 className="font-display text-2xl md:text-5xl font-bold text-white mb-2 md:mb-6 drop-shadow-lg">
                        Nuestra Trayectoria
                    </h2>
                    <p className="text-white/90 text-sm md:text-xl max-w-2xl mx-auto drop-shadow-md">
                        Más de dos décadas transformando madera con excelencia
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-6 lg:gap-8 w-full">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="bg-black/40 backdrop-blur-md border border-white/10 p-3 md:p-8 rounded-xl md:rounded-2xl shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer md:cursor-default"
                            onClick={() => toggleCard(stat.id)}
                        >
                            <div className="flex flex-row md:flex-col items-center text-left md:text-center gap-3 md:gap-4 w-full">
                                <div className="w-10 h-10 md:w-16 md:h-16 bg-forest-light/30 rounded-full flex items-center justify-center shadow-inner flex-shrink-0">
                                    <stat.icon className="text-forest-light text-xl md:text-2xl" />
                                </div>
                                <div className="flex-1 md:w-full">
                                    <span className="block font-display text-2xl md:text-5xl font-bold text-white mb-0 md:mb-1 drop-shadow-lg">
                                        {stat.number}
                                    </span>
                                    <span className="block text-xs md:text-sm font-semibold text-forest-light uppercase tracking-wider md:mb-2 drop-shadow-md">
                                        {stat.label}
                                    </span>
                                </div>
                                <FaChevronDown
                                    className={`md:hidden text-white/50 text-xs flex-shrink-0 transition-transform duration-300 ${expandedCard === stat.id ? 'rotate-180' : ''}`}
                                />
                            </div>
                            
                            {/* Expandable description on mobile */}
                            <div
                                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                                    expandedCard === stat.id ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-white/80 text-xs leading-relaxed drop-shadow-sm pl-12 text-left">
                                    {stat.description}
                                </p>
                            </div>
                            
                            {/* Always visible on desktop text-center */}
                            <p className="hidden md:block text-white/80 text-sm leading-relaxed drop-shadow-sm mt-3">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
