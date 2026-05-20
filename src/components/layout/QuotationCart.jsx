import { FaTimes, FaTrash, FaArrowRight, FaPlus, FaMinus } from 'react-icons/fa'
import { useQuotationCart } from '../../hooks/useQuotationCart'

function QuotationCart() {
    const { items, isOpen, closeCart, removeItem, clearCart, updateQuantity, scrollToContact } = useQuotationCart()

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={closeCart}
            />

            {/* Slide-over panel — starts below the navbar (top-20 = 80 px) */}
            <div
                className={`fixed top-20 right-0 h-[calc(100%-5rem)] w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-forest-dark to-forest p-6 flex items-center justify-between flex-shrink-0">
                    <div>
                        <h2 className="font-display font-bold text-white text-xl">
                            Cotización
                        </h2>
                        <p className="text-white/70 text-sm mt-1">
                            {items.length === 0
                                ? 'Sin productos'
                                : `${items.length} producto${items.length > 1 ? 's' : ''} seleccionado${items.length > 1 ? 's' : ''}`
                            }
                        </p>
                    </div>
                    <button
                        onClick={closeCart}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                        aria-label="Cerrar carrito"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8l-1.4-7M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                                </svg>
                            </div>
                            <p className="text-gray-500 font-display font-medium">
                                Tu cotización está vacía
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                Agrega productos desde nuestro catálogo
                            </p>
                        </div>
                    ) : (
                        <ul className="space-y-4">
                            {items.map((item, index) => {
                                const itemKey = item.cartItemId || item.id
                                return (
                                    <li
                                        key={itemKey}
                                        className="bg-gray-50 rounded-xl p-4 flex gap-4 items-start group hover:bg-gray-100 transition-colors"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        {/* Icon */}
                                        <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            {item.icon ? (
                                                <item.icon className="text-forest text-xl" />
                                            ) : (
                                                <span className="text-forest font-bold text-sm">{index + 1}</span>
                                            )}
                                        </div>
                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-display font-semibold text-sm text-charcoal leading-tight">
                                                {item.name}
                                            </h4>
                                            <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                                                {item.category && (
                                                    <span className="text-[10px] text-forest bg-forest/10 px-2 py-0.5 rounded-full">
                                                        {item.category}
                                                    </span>
                                                )}
                                                {item.selectedLength && (
                                                    <span className="text-[10px] text-charcoal-light bg-gray-200 px-2 py-0.5 rounded-full">
                                                        {item.selectedLength}m
                                                    </span>
                                                )}
                                                {item.options?.cepillada && (
                                                    <span className="text-[10px] text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                                                        Cepillada
                                                    </span>
                                                )}
                                                {item.options?.impregnada && (
                                                    <span className="text-[10px] text-green-800 bg-green-100 px-2 py-0.5 rounded-full">
                                                        Impregnada
                                                    </span>
                                                )}
                                                {item.isSpecialOrder && (
                                                    <span className="text-[10px] text-accent-gold-dark bg-accent-gold/20 px-2 py-0.5 rounded-full font-bold">
                                                        Pedido Especial
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Actions (Qty + Remove) */}
                                        <div className="flex flex-col items-end justify-between h-full py-1">
                                            {/* Remove */}
                                            <button
                                                onClick={() => removeItem(itemKey)}
                                                className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                aria-label={`Eliminar ${item.name}`}
                                            >
                                                <FaTrash size={12} />
                                            </button>

                                            {/* Quantity Control */}
                                            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden mt-2" onClick={(e) => e.stopPropagation()}>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const next = (item.quantity || 1) - 1
                                                        if (next === 0) removeItem(itemKey)
                                                        else updateQuantity(itemKey, next)
                                                    }}
                                                    className="w-6 h-6 flex items-center justify-center text-charcoal-light hover:text-forest hover:bg-gray-100 transition-colors"
                                                >
                                                    <FaMinus size={8} />
                                                </button>
                                                <input 
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity || 1}
                                                    onChange={(e) => {
                                                        const val = parseInt(e.target.value)
                                                        if (!isNaN(val) && val > 0) updateQuantity(itemKey, val)
                                                    }}
                                                    className="w-8 h-6 text-center text-xs font-sans font-bold text-charcoal bg-transparent border-none focus:ring-0 p-0 appearance-none m-0"
                                                    style={{ MozAppearance: 'textfield' }}
                                                />
                                                <button 
                                                    type="button"
                                                    onClick={() => updateQuantity(itemKey, (item.quantity || 1) + 1)}
                                                    className="w-6 h-6 flex items-center justify-center text-charcoal-light hover:text-forest hover:bg-gray-100 transition-colors"
                                                >
                                                    <FaPlus size={8} />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </div>

                {/* Footer Actions */}
                {items.length > 0 && (
                    <div className="border-t border-gray-200 p-6 flex-shrink-0 space-y-3">
                        <button
                            onClick={scrollToContact}
                            className="w-full btn-primary flex items-center justify-center gap-3 text-lg py-4"
                        >
                            Cotizar ahora
                            <FaArrowRight />
                        </button>
                        <button
                            onClick={clearCart}
                            className="w-full text-sm text-gray-500 hover:text-red-500 font-medium py-2 transition-colors"
                        >
                            Vaciar cotización
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default QuotationCart
