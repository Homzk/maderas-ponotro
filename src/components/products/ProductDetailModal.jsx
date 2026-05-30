import { useEffect, useState } from 'react'
import { FaTimes, FaPlus, FaMinus, FaCheck, FaRulerCombined, FaTools, FaShoppingCart } from 'react-icons/fa'
import { useQuotationCart } from '../../hooks/useQuotationCart'

function ProductDetailModal({ product, onClose }) {
    const { addItem, items } = useQuotationCart()
    const [justAdded, setJustAdded] = useState(false)

    // Estados de configuración del producto
    const [length, setLength] = useState('3.20')
    const [isCepillada, setIsCepillada] = useState(false)
    const [isImpregnada, setIsImpregnada] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const isSimple = product?.simpleConfigurator === true

    // Generar el ID específico para esta configuración para verificar si ya está en el carrito
    const cartItemId = product
        ? (isSimple
            ? `${product.id}`
            : `${product.id}-${length}-${isCepillada ? 'cep' : 'nat'}-${isImpregnada ? 'imp' : 'nat'}`)
        : null
    const isInCart = isSimple
        ? items.some(item => !item.cartItemId && item.id === product?.id)
        : items.some(item => item.cartItemId === cartItemId)

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
        addItem(
            isSimple
                ? { ...product, quantity }
                : {
                    ...product,
                    cartItemId,
                    selectedLength: length,
                    quantity: quantity,
                    options: {
                        cepillada: isCepillada,
                        impregnada: isImpregnada
                    }
                }
        )
        setJustAdded(true)
        setQuantity(1)
        setTimeout(() => setJustAdded(false), 1500)
    }

    const incrementQuantity = () => setQuantity(prev => prev + 1)
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))
    
    const handleQuantityChange = (e) => {
        const val = parseInt(e.target.value)
        if (!isNaN(val) && val > 0) {
            setQuantity(val)
        } else if (e.target.value === '') {
            setQuantity('')
        }
    }

    const handleQuantityBlur = () => {
        if (quantity === '' || quantity < 1) {
            setQuantity(1)
        }
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-12 overflow-y-auto animate-fade-in"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row my-auto animate-scale-in"
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
                            width={600}
                            height={500}
                            loading="lazy"
                            decoding="async"
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
                    {product.photoVariant && (
                        <div className="absolute bottom-6 left-6 right-6 bg-amber-50/95 backdrop-blur-sm text-amber-900 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg shadow-lg border border-amber-200 text-center font-sans">
                            Imagen referencial · acabado {product.photoVariant}
                        </div>
                    )}
                </div>

                {/* Right side: Information */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col max-h-[80svh] overflow-y-auto">
                    <div className="flex-1">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-forest-dark mb-4 leading-tight">
                            {product.name}
                        </h2>
                        
                        <div className="w-16 h-1.5 bg-accent-gold rounded-full mb-6"></div>
                        
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Configurator Section — hidden for simple products that don't take largo/tratamiento */}
                        {!isSimple && (
                        <div className="mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="font-display font-bold text-forest mb-6 flex items-center gap-2 text-lg">
                                <FaTools className="text-accent-gold" />
                                Personaliza tu producto
                            </h3>
                            
                            <div className="space-y-6">
                                {/* Largo */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <label className="text-base font-display font-bold text-charcoal">Largo de la pieza</label>
                                        <span className="text-xs text-charcoal-light font-sans">Selecciona el largo estándar en metros</span>
                                    </div>
                                    <select
                                        value={length}
                                        onChange={(e) => setLength(e.target.value)}
                                        aria-label="Largo en metros"
                                        className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-base font-sans font-bold text-forest-dark
                                                   focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest cursor-pointer transition-all shadow-sm"
                                    >
                                        {['2.40', '3.20', '4', '5', '6', '7'].map(l => (
                                            <option key={l} value={l}>{l} metros</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                    {/* Cepillada Switch */}
                                    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-display font-bold text-charcoal">Cepillada</span>
                                            <span className="text-[10px] text-charcoal-light uppercase tracking-wider font-bold">Acabado suave</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsCepillada(!isCepillada)}
                                            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 ${isCepillada ? 'bg-amber-600' : 'bg-gray-200'}`}
                                            role="switch"
                                            aria-label="Cepillada"
                                            aria-checked={isCepillada}
                                        >
                                            <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-300 ease-in-out ${isCepillada ? 'translate-x-6' : 'translate-x-1'}`} />
                                        </button>
                                    </div>

                                    {/* Impregnada Switch */}
                                    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-display font-bold text-charcoal">Impregnada</span>
                                            <span className="text-[10px] text-forest/70 uppercase tracking-wider font-bold">Protección exterior</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsImpregnada(!isImpregnada)}
                                            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 ${isImpregnada ? 'bg-forest' : 'bg-gray-200'}`}
                                            role="switch"
                                            aria-label="Impregnada"
                                            aria-checked={isImpregnada}
                                        >
                                            <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-300 ease-in-out ${isImpregnada ? 'translate-x-6' : 'translate-x-1'}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}

                        {/* Features / Measures */}
                        {product.features && product.features.length > 0 && (
                            <div className="mb-8 px-2">
                                <h3 className="font-display font-bold text-forest-dark/70 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                                    <FaRulerCombined size={14} className="text-accent-gold" />
                                    Detalles Base
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                                            <FaCheck className="text-accent-gold mt-0.5 flex-shrink-0" size={12} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Action Area */}
                    <div className="pt-6 mt-auto border-t border-gray-100 space-y-4">
                        {/* Selector de cantidad */}
                        <div className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200 rounded-2xl">
                            <span className="text-sm font-display font-bold text-charcoal px-3">Cantidad</span>
                            <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-12">
                                <button
                                    type="button"
                                    onClick={decrementQuantity}
                                    aria-label="Disminuir cantidad"
                                    className="w-12 h-full flex items-center justify-center text-charcoal-light hover:text-forest hover:bg-gray-50 transition-colors"
                                >
                                    <FaMinus size={12} />
                                </button>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    onBlur={handleQuantityBlur}
                                    aria-label="Cantidad"
                                    className="w-16 h-full text-center text-lg font-sans font-bold text-charcoal bg-transparent border-none focus:ring-0 p-0 appearance-none m-0"
                                    style={{ MozAppearance: 'textfield' }}
                                />
                                <button
                                    type="button"
                                    onClick={incrementQuantity}
                                    aria-label="Aumentar cantidad"
                                    className="w-12 h-full flex items-center justify-center text-charcoal-light hover:text-forest hover:bg-gray-50 transition-colors"
                                >
                                    <FaPlus size={12} />
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleAdd}
                            className={`w-full flex items-center justify-center gap-3 font-display font-bold py-5 rounded-2xl text-xl transition-all duration-300 ${
                                justAdded
                                      ? 'bg-accent-gold text-white scale-[0.98] shadow-lg'
                                      : 'bg-forest text-white hover:bg-forest-dark shadow-xl hover:shadow-2xl hover:-translate-y-1'
                            }`}
                        >
                            {justAdded ? (
                                <>
                                    <FaCheck size={20} className="animate-bounce" />
                                    ¡Añadido con éxito!
                                </>
                            ) : (
                                <>
                                    <FaShoppingCart size={20} />
                                    {isInCart ? 'Añadir más unidades' : 'Añadir a Cotización'}
                                </>
                            )}
                        </button>
                        {!isSimple && (
                            <p className="text-center text-[11px] text-gray-400 mt-4 font-sans uppercase tracking-widest font-medium">
                                Puedes añadir el mismo producto con diferentes medidas
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailModal
