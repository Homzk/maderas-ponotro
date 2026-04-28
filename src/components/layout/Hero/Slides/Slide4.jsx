import { FaMapMarkerAlt } from 'react-icons/fa'
import { shippingLocations } from '../../../../constants/heroData'

export default function Slide4() {
    return (
        <div className="relative z-10 flex flex-col items-center h-full px-4 sm:px-6 lg:px-8 py-2">
            {/* Se aumentó el gap principal (gap-8 md:gap-12) para mantener consistencia con los otros slides */}
            <div className="max-w-6xl w-full text-center flex flex-col items-center justify-center flex-1 gap-8 md:gap-12 short:gap-4 medium-h:gap-6">
                <div className="shrink-0">
                    {/* Título más grande */}
                    <h2 className="font-display text-2xl md:text-6xl lg:text-7xl short:text-xl medium-h:text-3xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg">
                        Nuestros Envíos
                    </h2>
                    {/* Subtítulo más grande y con max-w-4xl para que no se apriete */}
                    <p className="text-white/90 text-sm sm:text-lg md:text-3xl lg:text-4xl short:text-xs medium-h:text-base max-w-4xl mx-auto drop-shadow-md">
                        Cobertura garantizada y despacho seguro para tus proyectos
                    </p>
                </div>

                {/* Cards: Textos e iconos sin alterar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 short:gap-2 w-full shrink-0">
                    {shippingLocations.map((loc) => (
                        <div key={loc.id} className="text-center bg-black/40 backdrop-blur-md border border-white/10 p-3 md:p-6 short:p-2 rounded-2xl shadow-2xl hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center justify-center">
                            <div className="w-9 h-9 md:w-12 md:h-12 short:w-8 short:h-8 bg-forest-light/30 rounded-xl flex items-center justify-center mb-2 short:mb-1 md:mb-3 shadow-inner flex-shrink-0">
                                <FaMapMarkerAlt className="text-forest-light text-lg md:text-xl short:text-base" />
                            </div>
                            <h3 className="font-display font-bold text-sm md:text-lg short:text-xs text-white drop-shadow-lg">
                                {loc.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}