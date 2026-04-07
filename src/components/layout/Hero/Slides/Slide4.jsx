import { FaMapMarkerAlt } from 'react-icons/fa'
import { shippingLocations } from '../../../../constants/heroData'

export default function Slide4() {
    return (
        <div className="relative z-10 flex flex-col items-center min-h-full px-4 sm:px-6 lg:px-8 py-12 md:py-4">
            <div className="max-w-6xl w-full text-center my-auto">
                <div className="mb-8 md:mb-12 mt-4 md:mt-8">
                    <h2 className="font-display text-2xl md:text-5xl font-bold text-white mb-2 md:mb-6 drop-shadow-lg">
                        Nuestros Envíos
                    </h2>
                    <p className="text-white/90 text-sm md:text-xl max-w-2xl mx-auto drop-shadow-md">
                        Cobertura garantizada y despacho seguro para tus proyectos
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full">
                    {shippingLocations.map((loc) => (
                        <div key={loc.id} className="text-center bg-black/40 backdrop-blur-md border border-white/10 p-4 md:p-8 rounded-2xl shadow-2xl hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center justify-center">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-forest-light/30 rounded-xl flex items-center justify-center mb-2 md:mb-5 shadow-inner flex-shrink-0">
                                <FaMapMarkerAlt className="text-forest-light text-lg md:text-2xl" />
                            </div>
                            <h3 className="font-display font-bold text-base md:text-2xl text-white drop-shadow-lg">
                                {loc.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
