import { useQuotationCart } from '../../context/QuotationCartContext'
import { FaTrash, FaShoppingCart, FaArrowRight } from 'react-icons/fa'

function QuotationSummary() {
    const { items, removeItem, clearCart } = useQuotationCart()

    if (items.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-dashed border-gray-200 flex flex-col items-center justify-center text-center min-h-[300px]">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                    <FaShoppingCart className="text-gray-300 text-2xl" />
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                    Sin productos
                </h3>
                <p className="text-sm text-charcoal-light font-sans max-w-xs">
                    Explora nuestro catálogo y añade productos para recibir una cotización personalizada.
                </p>
                <a
                    href="#productos"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-display font-bold text-forest hover:text-accent-gold transition-colors"
                >
                    Ver catálogo
                    <FaArrowRight size={12} />
                </a>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-forest-dark to-forest px-6 py-5">
                <h3 className="font-display font-bold text-white text-lg">
                    Resumen de Cotización
                </h3>
                <p className="text-white/70 text-sm mt-1 font-sans">
                    {items.length} producto{items.length > 1 ? 's' : ''} seleccionado{items.length > 1 ? 's' : ''}
                </p>
            </div>

            {/* Product List */}
            <ul className="divide-y divide-gray-100 max-h-[420px] overflow-y-auto">
                {items.map((item, index) => {
                    const itemKey = item.cartItemId || item.id
                    return (
                        <li key={itemKey} className="px-6 py-4 group hover:bg-gray-50/80 transition-colors">
                            <div className="flex items-start gap-3">
                                {/* Number */}
                                <span className="w-6 h-6 rounded-full bg-forest/10 text-forest text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                    {index + 1}
                                </span>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-display font-semibold text-sm text-charcoal leading-tight">
                                        <span className="text-forest font-bold mr-1.5">(x{item.quantity || 1})</span>
                                        {item.name}
                                    </h4>

                                    {/* Details line */}
                                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                                        {item.size && (
                                            <span className="text-[10px] bg-gray-100 text-charcoal px-2 py-0.5 rounded-full font-medium">
                                                {item.size}
                                            </span>
                                        )}
                                        {item.selectedLength && (
                                            <span className="text-[10px] bg-forest/10 text-forest px-2 py-0.5 rounded-full font-medium">
                                                {item.selectedLength}m
                                            </span>
                                        )}
                                        {item.options?.cepillada && (
                                            <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-medium">
                                                Cepillada
                                            </span>
                                        )}
                                        {item.options?.impregnada && (
                                            <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">
                                                Impregnada
                                            </span>
                                        )}
                                        {item.isSpecialOrder && (
                                            <span className="text-[10px] bg-accent-gold/20 text-accent-gold-dark px-2 py-0.5 rounded-full font-bold">
                                                ⚡ Pedido Especial
                                            </span>
                                        )}
                                    </div>

                                    {/* Special order description */}
                                    {item.isSpecialOrder && item.description && (
                                        <p className="text-xs text-charcoal-light mt-2 italic line-clamp-2 font-sans">
                                            "{item.description}"
                                        </p>
                                    )}
                                </div>

                                {/* Remove */}
                                <button
                                    onClick={() => removeItem(itemKey)}
                                    className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 flex-shrink-0"
                                    aria-label={`Eliminar ${item.name}`}
                                >
                                    <FaTrash size={11} />
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <p className="text-xs text-charcoal-light font-sans">
                    Estos productos se incluirán en tu solicitud
                </p>
                <button
                    onClick={clearCart}
                    className="text-xs text-gray-400 hover:text-red-500 font-medium transition-colors"
                >
                    Vaciar todo
                </button>
            </div>
        </div>
    )
}

export default QuotationSummary
