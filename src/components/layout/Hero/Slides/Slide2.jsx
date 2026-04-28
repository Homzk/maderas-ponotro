import { FaChevronDown } from 'react-icons/fa'
import { stats } from '../../../../constants/heroData'
import { useExpandable } from '../hooks/useExpandable'

export default function Slide2() {
    const { expandedCard, toggleCard } = useExpandable()

    return (
        <div className="relative z-10 flex flex-col items-center h-full px-4 sm:px-6 lg:px-8 py-2">
            {/* Se aumentó el gap principal para separar el texto de las cards e igualar a Slide 1 */}
            <div className="max-w-6xl w-full text-center flex flex-col items-center justify-center flex-1 gap-8 md:gap-12 short:gap-4 medium-h:gap-6">

                <div className="shrink-0">
                    {/* Título más grande */}
                    <h2 className="font-display text-2xl md:text-6xl lg:text-7xl short:text-xl medium-h:text-3xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg">
                        Nuestra Trayectoria
                    </h2>
                    {/* Subtítulo más grande */}
                    <p className="text-white/90 text-sm sm:text-lg md:text-3xl lg:text-4xl short:text-xs medium-h:text-base max-w-4xl mx-auto drop-shadow-md">
                        Más de dos décadas transformando madera con excelencia
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 short:gap-1.5 w-full shrink-0">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="bg-black/40 backdrop-blur-md border border-white/10 p-3 md:p-5 short:p-2 rounded-xl md:rounded-2xl shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer md:cursor-default"
                            onClick={() => toggleCard(stat.id)}
                        >
                            <div className="flex flex-row items-center text-left gap-3 short:gap-2 w-full">
                                {/* Icono ligeramente más grande */}
                                <div className="w-10 h-10 md:w-12 md:h-12 short:w-8 short:h-8 bg-forest-light/30 rounded-full flex items-center justify-center shadow-inner flex-shrink-0">
                                    <stat.icon className="text-forest-light text-lg md:text-xl short:text-base" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <span className="block font-display text-xl md:text-3xl short:text-lg medium-h:text-xl font-bold text-white leading-tight drop-shadow-lg">
                                        {stat.number}
                                    </span>
                                    <span className="block text-xs md:text-sm short:text-[10px] font-semibold text-forest-light uppercase tracking-wider drop-shadow-md">
                                        {stat.label}
                                    </span>
                                </div>
                                <FaChevronDown
                                    className={`sm:hidden text-white/50 text-sm flex-shrink-0 transition-transform duration-300 ${expandedCard === stat.id ? 'rotate-180' : ''}`}
                                />
                            </div>

                            {/* Descripciones más grandes en Desktop y Mobile */}
                            <p className="hidden sm:block text-white/80 text-xs md:text-sm short:text-[11px] leading-snug drop-shadow-sm mt-2 short:mt-1 text-left">
                                {stat.description}
                            </p>
                            <div
                                className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${expandedCard === stat.id ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-white/80 text-xs leading-relaxed drop-shadow-sm text-left pl-[52px]">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}