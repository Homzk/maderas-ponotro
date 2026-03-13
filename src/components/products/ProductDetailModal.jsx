import { useEffect, useState } from 'react'
import { FaTimes, FaPlus, FaCheck, FaRulerCombined } from 'react-icons/fa'
import { useQuotationCart } from '../../context/QuotationCartContext'

function ProductDetailModal({ product, onClose }) {
    const { addItem, items } = useQuotationCart()
    const isInCart = items.some(item => item.id === product.id)
    const [justAdded, setJustAdded] = useState(false)

    useEffect(() => {
        // Prevent background scrolling when modal is open
        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        
        // Handle ESC key to close
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKeyDown)
        
        return () => {
            document.body.style.overflow = originalOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [onClose])

    if (!product) return null

    const handleAdd = () => {
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-12 overflow-y-auto"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row my-auto animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:text-forest transition-colors shadow-sm"
                >
                    <FaTimes size={20} />
                </button>

                {/* Left side: Image or Icon */}
                <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[500px] bg-gradient-to-br from-forest-dark to-forest flex items-center justify-center relative">
                    {product.image ? (
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover object-center"
                        />
                    ) : (
                        <product.icon className="text-white/30 text-9xl" />
                    )}
                    {product.category && (
                        <div className="absolute top-6 left-6 bg-forest/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg border border-white/20">
                            {product.category}
                        </div>
                    )}
                </div>

                {/* Right side: Information */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col max-h-[80vh] overflow-y-auto">
                    <div className="flex-1">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-forest-dark mb-4 leading-tight">
                            {product.name}
                        </h2>
                        
                        <div className="w-16 h-1.5 bg-accent-gold rounded-full mb-6"></div>
                        
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Features / Measures */}
                        {product.features && product.features.length > 0 && (
                            <div className="mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <h3 className="font-display font-bold text-forest mb-4 flex items-center gap-2">
                                    <FaRulerCombined className="text-accent-gold" />
                                    Especificaciones / Medidas
                                </h3>
                                <ul className="space-y-3">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-700">
                                            <FaCheck className="text-accent-gold mt-1 flex-shrink-0" size={14} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Action Area */}
                    <div className="pt-6 mt-6 border-t border-gray-100">
                        <button
                            onClick={handleAdd}
                            disabled={isInCart}
                            className={`w-full flex items-center justify-center gap-3 font-display font-bold py-4 rounded-xl text-lg transition-all duration-300 ${
                                isInCart
                                    ? 'bg-forest/10 text-forest cursor-default'
                                    : justAdded
                                      ? 'bg-accent-gold text-white scale-[0.98]'
                                      : 'bg-forest text-white hover:bg-forest-medium shadow-xl hover:shadow-2xl hover:-translate-y-1'
                            }`}
                        >
                            {isInCart ? (
                                <>
                                    <FaCheck size={18} />
                                    Añadido a cotización
                                </>
                            ) : justAdded ? (
                                <>
                                    <FaCheck size={18} />
                                    ¡Agregado exitosamente!
                                </>
                            ) : (
                                <>
                                    <FaPlus size={18} />
                                    Añadir a mi cotización
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailModal
