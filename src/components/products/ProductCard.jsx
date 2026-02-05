import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function ProductCard({ product }) {
    return (
        <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Image */}
            <div className="relative h-56 bg-gradient-to-br from-forest-dark/80 to-forest/60 overflow-hidden">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <product.icon className="text-white/50 text-6xl group-hover:scale-110 transition-transform duration-500" />
                    </div>
                )}
                {/* Category Badge */}
                {product.category && (
                    <span className="absolute top-4 left-4 bg-forest text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {product.category}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="font-display font-bold text-xl text-forest-dark mb-3 group-hover:text-forest transition-colors">
                    {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                </p>

                {/* Features */}
                {product.features && (
                    <ul className="mb-4 space-y-1">
                        {product.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-500 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-forest-light rounded-full"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {/* CTA Button */}
                <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 text-forest font-semibold hover:text-forest-dark transition-colors group/link"
                >
                    Solicitar Cotización
                    <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
