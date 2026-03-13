import { useState } from 'react'
import { FaPlus, FaCheck } from 'react-icons/fa'
import { useQuotationCart } from '../../context/QuotationCartContext'

function ProductCard({ product, onSelect }) {
    const { addItem, items } = useQuotationCart()
    const isInCart = items.some(item => item.id === product.id)
    const [justAdded, setJustAdded] = useState(false)

    const handleAdd = (e) => {
        if (e) e.stopPropagation()
        if (isInCart) return
        addItem({
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            icon: product.icon,
            image: product.image
        })
        setJustAdded(true)
        setTimeout(() => setJustAdded(false), 1500)
    }

    return (
        <div 
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 hover:border-accent-gold/30 cursor-pointer"
            onClick={onSelect}
        >
            {/* Image / Icon */}
            <div className="relative h-52 bg-gradient-to-br from-forest-dark/80 to-forest/60 overflow-hidden">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <product.icon className="text-white/30 text-7xl group-hover:scale-110 group-hover:text-white/40 transition-all duration-700" />
                    </div>
                )}
                {/* Category Badge */}
                {product.category && (
                    <span className="absolute top-4 left-4 bg-forest/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                        {product.category}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg text-forest-dark mb-2 group-hover:text-forest transition-colors leading-tight">
                    {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                </p>

                {/* Features */}
                {product.features && (
                    <ul className="mb-5 space-y-1.5 flex-1">
                        {product.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-500 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent-gold rounded-full flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Add to Cart Button */}
                <button
                    onClick={handleAdd}
                    disabled={isInCart}
                    className={`w-full flex items-center justify-center gap-2.5 font-display font-bold py-3.5 rounded-xl text-sm transition-all duration-300 ${
                        isInCart
                            ? 'bg-forest/10 text-forest cursor-default'
                            : justAdded
                              ? 'bg-accent-gold text-white scale-[0.98]'
                              : 'bg-forest text-white hover:bg-forest-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                    }`}
                >
                    {isInCart ? (
                        <>
                            <FaCheck size={13} />
                            En cotización
                        </>
                    ) : justAdded ? (
                        <>
                            <FaCheck size={13} />
                            ¡Agregado!
                        </>
                    ) : (
                        <>
                            <FaPlus size={13} />
                            Agregar a cotización
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}

export default ProductCard
