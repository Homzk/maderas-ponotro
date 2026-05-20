import { useState } from 'react'
import { useQuotationCart } from '../../hooks/useQuotationCart'
import { FaShoppingCart, FaTools, FaPlus, FaMinus } from 'react-icons/fa'

const CATEGORIES = ['Construcción', 'Terminaciones', 'Polines', 'Tablas', 'Otro']
const STANDARD_LENGTHS = ['2.40m', '3.20m', '4m', '5m', '6m', '7m', 'Otro']

export default function SpecialOrderCTA() {
    const { addItem } = useQuotationCart()
    const [category, setCategory] = useState(CATEGORIES[0])
    
    // Dimensiones
    const [dimension, setDimension] = useState('')

    // Largos
    const [length, setLength] = useState(STANDARD_LENGTHS[0])
    const [customLength, setCustomLength] = useState('')

    const [isCepillada, setIsCepillada] = useState(false)
    const [isImpregnada, setIsImpregnada] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [description, setDescription] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const finalDimension = dimension
        const finalLength = length === 'Otro' ? customLength : length
        
        if (!finalDimension.trim() || !finalLength.trim()) return

        const specialProductId = `special-${Date.now()}`
        
        const specialOrderPayload = {
            id: specialProductId,
            cartItemId: specialProductId,
            name: `Pedido especial: ${category}`,
            category: category,
            size: `${finalDimension} x ${finalLength}`,
            length: finalLength,
            quantity: quantity,
            isSpecialOrder: true,
            description: description,
            options: {
                cepillada: isCepillada,
                impregnada: isImpregnada
            },
            // Fallbacks genéricos para renderizar correctamente en el carrito
            image: '/products/dimensionada-2x4-natural.webp',
            treatment: 'A pedido'
        }

        addItem(specialOrderPayload)

        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 3000)
        
        // Reset form
        setCategory(CATEGORIES[0])
        setDimension('')
        setLength(STANDARD_LENGTHS[0])
        setCustomLength('')
        setIsCepillada(false)
        setIsImpregnada(false)
        setQuantity(1)
        setDescription('')
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
        <div className="bg-gradient-to-br from-forest-dark/5 to-accent-gold/10 rounded-3xl p-6 sm:p-10 shadow-sm border border-forest/10 mt-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 text-forest/5 pointer-events-none">
                <FaTools size={200} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest-dark mb-4">
                        ¿Buscas algo especial y no está en stock?
                    </h2>
                    <p className="text-charcoal font-sans text-sm sm:text-base max-w-2xl mx-auto">
                        No te preocupes, dinos qué dimensiones o tipo de madera necesitas y la conseguiremos para ti. Escríbenos y buscaremos la mejor solución para tu obra.
                    </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border border-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        {/* Categoría */}
                        <div>
                            <label className="block text-sm font-semibold text-forest-dark mb-2">Categoría sugerida</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-colors cursor-pointer"
                            >
                                {CATEGORIES.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        {/* Dimensión */}
                        <div>
                            <label className="block text-sm font-semibold text-forest-dark mb-2">Dimensión</label>
                            <input
                                type="text"
                                placeholder='Ej: 2x4" o 8x8'
                                value={dimension}
                                onChange={(e) => setDimension(e.target.value)}
                                required
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-colors"
                            />
                        </div>

                        {/* Largo */}
                        <div>
                            <label className="block text-sm font-semibold text-forest-dark mb-2">Largo</label>
                            <div className="flex flex-col xl:flex-row gap-2">
                                <select
                                    value={length}
                                    onChange={(e) => setLength(e.target.value)}
                                    className={`${length === 'Otro' ? 'xl:w-1/2' : 'w-full'} bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-colors cursor-pointer`}
                                >
                                    {STANDARD_LENGTHS.map(l => (
                                        <option key={l} value={l}>{l}</option>
                                    ))}
                                </select>
                                {length === 'Otro' && (
                                    <input
                                        type="text"
                                        placeholder="Ej: 3.5m"
                                        value={customLength}
                                        onChange={(e) => setCustomLength(e.target.value)}
                                        required
                                        className="w-full xl:w-1/2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-colors"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Cantidad */}
                        <div>
                            <label className="block text-sm font-semibold text-forest-dark mb-2">Cantidad</label>
                            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-[46px]">
                                <button 
                                    type="button"
                                    onClick={decrementQuantity}
                                    className="w-10 h-full flex items-center justify-center text-charcoal-light hover:text-forest hover:bg-gray-200 transition-colors"
                                >
                                    <FaMinus size={10} />
                                </button>
                                <input 
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    onBlur={handleQuantityBlur}
                                    className="flex-1 h-full w-full text-center text-sm font-sans font-bold text-charcoal bg-transparent border-none focus:ring-0 p-0 appearance-none m-0"
                                    style={{ MozAppearance: 'textfield' }}
                                />
                                <button 
                                    type="button"
                                    onClick={incrementQuantity}
                                    className="w-10 h-full flex items-center justify-center text-charcoal-light hover:text-forest hover:bg-gray-200 transition-colors"
                                >
                                    <FaPlus size={10} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 p-5 bg-gray-50/50 rounded-xl border border-gray-100">
                        <label className="text-sm font-semibold text-forest-dark shrink-0">Tratamientos (Opcional):</label>
                        
                        <div className="flex flex-wrap items-center gap-8">
                            {/* Cepillada Switch */}
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-charcoal-light font-medium">Cepillada</span>
                                <button
                                    type="button"
                                    onClick={() => setIsCepillada(!isCepillada)}
                                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 ${isCepillada ? 'bg-amber-600' : 'bg-gray-200'}`}
                                    role="switch"
                                    aria-checked={isCepillada}
                                >
                                    <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-300 ease-in-out ${isCepillada ? 'translate-x-6' : 'translate-x-1'}`} />
                                </button>
                            </div>

                            {/* Impregnada Switch */}
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-charcoal-light font-medium">Impregnada</span>
                                <button
                                    type="button"
                                    onClick={() => setIsImpregnada(!isImpregnada)}
                                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 ${isImpregnada ? 'bg-forest' : 'bg-gray-200'}`}
                                    role="switch"
                                    aria-checked={isImpregnada}
                                >
                                    <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-300 ease-in-out ${isImpregnada ? 'translate-x-6' : 'translate-x-1'}`} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-forest-dark mb-2">Detalles Adicionales</label>
                        <textarea
                            rows="3"
                            placeholder="Cuéntanos más detalles sobre tu pedido, cantidades estimadas o usos específicos..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-colors resize-none"
                        ></textarea>
                    </div>

                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            className={`flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-white font-sans font-bold text-sm w-full sm:w-auto transition-all duration-300
                                ${isSubmitted ? 'bg-forest shadow-lg scale-105' : 'bg-forest-dark hover:bg-forest hover:shadow-lg'}`}
                        >
                            {isSubmitted ? (
                                <span>¡Añadido al Carrito!</span>
                            ) : (
                                <>
                                    <FaShoppingCart size={16} />
                                    <span>Añadir Pedido Especial</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
