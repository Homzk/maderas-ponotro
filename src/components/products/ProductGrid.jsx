import { useState, useMemo, useCallback, useEffect } from 'react'
import { FaChevronDown, FaChevronUp, FaPlus, FaMinus, FaShoppingCart, FaCheck } from 'react-icons/fa'
import { products } from '../../data/products'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useQuotationCart } from '../../context/QuotationCartContext'
import SpecialOrderCTA from './SpecialOrderCTA'
/* ─── Responsive initial count: 2 rows per breakpoint ─── */
function useInitialCount() {
    const [count, setCount] = useState(3) // mobile default

    useEffect(() => {
        function calc() {
            const w = window.innerWidth
            if (w >= 1280) return 8      // xl: 4 cols × 2 rows
            if (w >= 1024) return 6       // lg: 3 cols × 2 rows
            if (w >= 640) return 4        // sm: 2 cols × 2 rows
            return 3                      // mobile: 1 col × 3 rows
        }
        setCount(calc())
        const handle = () => setCount(calc())
        window.addEventListener('resize', handle, { passive: true })
        return () => window.removeEventListener('resize', handle)
    }, [])

    return count
}


/* ─── Static "no results" icon (hoisted per rendering-hoist-jsx) ─── */
const EmptyStateIcon = (
    <svg
        className="w-20 h-20 text-gray-300 mx-auto mb-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
    </svg>
)

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  CatalogCard — lightweight card for dimensioned lumber
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function CatalogCard({ product, onSelect }) {

    // Estados de configuración del producto
    const [length, setLength] = useState('3.20')
    const [isCepillada, setIsCepillada] = useState(false)
    const [isImpregnada, setIsImpregnada] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [justAdded, setJustAdded] = useState(false)

    const { items, addItem } = useQuotationCart()
    const cartItemId = `${product.id}-${length}-${isCepillada ? 'cep' : 'nat'}-${isImpregnada ? 'imp' : 'nat'}`
    const cartItem = items.find(item => item.cartItemId === cartItemId)
    const isInCart = !!cartItem

    const handleAddToCart = (e) => {
        e.stopPropagation()

        const configuredProduct = {
            ...product,
            cartItemId,
            selectedLength: length,
            quantity: quantity,
            options: {
                cepillada: isCepillada,
                impregnada: isImpregnada
            }
        }
        addItem(configuredProduct)
        setJustAdded(true)
        setQuantity(1)
        setTimeout(() => setJustAdded(false), 2000)
    }

    const incrementQuantity = (e) => {
        e.stopPropagation()
        setQuantity(prev => prev + 1)
    }

    const decrementQuantity = (e) => {
        e.stopPropagation()
        setQuantity(prev => (prev > 1 ? prev - 1 : 1))
    }

    const handleQuantityChange = (e) => {
        e.stopPropagation()
        const val = parseInt(e.target.value)
        if (!isNaN(val) && val > 0) {
            setQuantity(val)
        } else if (e.target.value === '') {
            setQuantity('')
        }
    }

    const handleQuantityBlur = (e) => {
        if (quantity === '' || quantity < 1) {
            setQuantity(1)
        }
    }

    return (
        <div
            className="group bg-white rounded-2xl shadow-lg overflow-hidden
                        hover:shadow-xl transition-all duration-300 flex flex-col h-full
                        border border-gray-100 hover:border-forest/30 cursor-pointer"
            onClick={() => onSelect?.(product)}
        >
            {/* Image */}
            <div className="relative h-48 bg-gradient-to-br from-forest-dark/80 to-forest/60 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Category badge */}
                <span
                    className="absolute top-3 left-3 backdrop-blur-sm text-xs font-semibold
                               px-2.5 py-1 rounded-full shadow-md capitalize bg-accent-gold/90 text-white"
                >
                    {product.category}
                </span>

                {/* Size badge */}
                <span
                    className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-forest-dark
                               text-xs font-bold px-2.5 py-1 rounded-full shadow-md font-display"
                >
                    {product.size}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3
                    className="font-display font-bold text-lg text-forest-dark mb-4
                               group-hover:text-forest transition-colors leading-tight"
                >
                    {product.name}
                </h3>

                {/* Configuration Options */}
                <div className="flex flex-col gap-3 mb-5 flex-1">
                    {/* Largo */}
                    <div className="flex items-center justify-between">
                        <label className="text-sm text-charcoal-light font-medium">Largo</label>
                        <select 
                            value={length}
                            onChange={(e) => { e.stopPropagation(); setLength(e.target.value); }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-sans font-semibold text-charcoal
                                       focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest cursor-pointer transition-colors"
                        >
                            {['2.40', '3.20', '4', '5', '6', '7'].map(l => (
                                <option key={l} value={l}>{l} m</option>
                            ))}
                        </select>
                    </div>

                    {/* Cepillada Switch */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-charcoal-light font-medium">Cepillada</span>
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setIsCepillada(!isCepillada); }}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 ${isCepillada ? 'bg-amber-600' : 'bg-gray-200'}`}
                            role="switch"
                            aria-checked={isCepillada}
                        >
                            <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-300 ease-in-out ${isCepillada ? 'translate-x-6' : 'translate-x-1'}`} />
                        </button>
                    </div>

                    {/* Impregnada Switch */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-charcoal-light font-medium">Impregnada</span>
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setIsImpregnada(!isImpregnada); }}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 ${isImpregnada ? 'bg-forest' : 'bg-gray-200'}`}
                            role="switch"
                            aria-checked={isImpregnada}
                        >
                            <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-300 ease-in-out ${isImpregnada ? 'translate-x-6' : 'translate-x-1'}`} />
                        </button>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-[42px]" onClick={(e) => e.stopPropagation()}>
                        <button 
                            type="button"
                            onClick={decrementQuantity}
                            className="w-8 h-full flex items-center justify-center text-charcoal-light hover:text-forest hover:bg-gray-100 transition-colors"
                            aria-label="Disminuir cantidad"
                        >
                            <FaMinus size={10} />
                        </button>
                        <input 
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                            onBlur={handleQuantityBlur}
                            className="w-10 h-full text-center text-sm font-sans font-bold text-charcoal bg-transparent border-none focus:ring-0 p-0 appearance-none m-0"
                            style={{ MozAppearance: 'textfield' }}
                        />
                        <button 
                            type="button"
                            onClick={incrementQuantity}
                            className="w-8 h-full flex items-center justify-center text-charcoal-light hover:text-forest hover:bg-gray-100 transition-colors"
                            aria-label="Aumentar cantidad"
                        >
                            <FaPlus size={10} />
                        </button>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className={`flex-1 flex items-center justify-center gap-2 px-2 py-2.5 rounded-xl transition-all duration-300 font-sans font-semibold text-sm shadow-sm h-[42px]
                            ${justAdded
                                    ? 'bg-accent-gold text-white scale-95 shadow-inner'
                                    : 'bg-forest text-white hover:bg-forest-dark hover:shadow-md active:scale-95'
                            }`}
                        aria-label="Añadir configuración a cotización"
                    >
                        {justAdded ? (
                            <>
                                <FaCheck size={14} className="animate-bounce" />
                                <span>¡Añadido!</span>
                            </>
                        ) : (
                            <>
                                <FaShoppingCart size={14} />
                                <span>{isInCart ? 'Añadir más' : 'Añadir'}</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  ProductGrid — main catalogue section with filters
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ProductGrid({ onSelectProduct }) {
    const [activeCategory, setActiveCategory] = useState('Construcción')
    const [filterSize, setFilterSize] = useState('todas')
    const [showAll, setShowAll] = useState(false)
    const initialCount = useInitialCount()

    const CATEGORIES = ['Construcción', 'Terminaciones', 'Polines', 'Tablas']

    /* Derive unique sizes dynamically for the active category (rerender-derived-state-no-effect) */
    const uniqueSizes = useMemo(() => {
        const categoryProducts = products.filter(p => p.category === activeCategory)
        const sizeSet = new Set(categoryProducts.map((p) => p.size))
        return Array.from(sizeSet).sort((a, b) => {
            const [a1, a2] = a.split('x').map(Number)
            const [b1, b2] = b.split('x').map(Number)
            return (a1 || 0) - (b1 || 0) || (a2 || 0) - (b2 || 0)
        })
    }, [activeCategory])

    /* Derive filtered products from state — no effect (rerender-derived-state-no-effect) */
    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            const matchCategory = p.category === activeCategory
            const matchSize = filterSize === 'todas' || p.size === filterSize
            return matchCategory && matchSize
        })
    }, [activeCategory, filterSize])

    /* Stable callbacks (rerender-functional-setstate) */
    const handleCategoryChange = useCallback((category) => {
        setActiveCategory(category)
        setFilterSize('todas') // Reset size when changing category to avoid empty states
        setShowAll(false)
    }, [])

    const handleSizeChange = useCallback((e) => {
        setFilterSize(e.target.value)
    }, [])

    const handleClearFilters = useCallback(() => {
        setFilterSize('todas')
        setShowAll(false)
    }, [])

    const handleToggleShowAll = useCallback(() => {
        setShowAll((prev) => {
            if (prev) {
                // Return to top of catalog smoothly
                setTimeout(() => {
                    const el = document.getElementById('catalogo')
                    if (el) {
                        const navbarHeight = 80
                        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
                        window.scrollTo({ top, behavior: 'smooth' })
                    }
                }, 0)
            }
            return !prev
        })
    }, [])

    const hasActiveFilter = filterSize !== 'todas'

    /* Slice products for "show more" pattern */
    const visibleProducts = showAll
        ? filteredProducts
        : filteredProducts.slice(0, initialCount)
    const hasMore = filteredProducts.length > initialCount

    /* Scroll reveal animations */
    const headerReveal = useScrollReveal({ threshold: 0.2 })
    const filterReveal = useScrollReveal({ threshold: 0.15, delay: 100 })

    return (
        <div id="catalogo" className="py-10 md:py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ── Header ── */}
                <div
                    ref={headerReveal.ref}
                    className={`text-center mb-6 reveal reveal-up ${
                        headerReveal.isVisible ? 'visible' : ''
                    }`}
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-dark mb-4">
                        Nuestro Catálogo
                    </h2>
                    <p className="text-charcoal-light max-w-3xl mx-auto text-lg font-sans">
                        Explora nuestra línea completa de madera dimensionada,
                        disponible en tratamiento impregnado y natural.
                    </p>
                </div>

                {/* ── Filter Bar ── */}
                <div
                    ref={filterReveal.ref}
                    className={`mb-8 reveal reveal-up ${
                        filterReveal.isVisible ? 'visible' : ''
                    }`}
                >
                    {/* Category Tabs */}
                    <div className="mb-6 relative -mx-2 px-2 pt-2">
                        <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory 
                                      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {CATEGORIES.map((category) => {
                                const isActive = activeCategory === category
                                return (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryChange(category)}
                                        className={`snap-start whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-display font-medium
                                                    transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest
                                                    ${
                                                        isActive
                                                            ? 'bg-forest text-white shadow-md transform scale-105 ml-1'
                                                            : 'bg-gray-50 text-charcoal-light hover:bg-gray-100 hover:text-forest border border-gray-100'
                                                    }`}
                                        aria-current={isActive ? 'page' : undefined}
                                    >
                                        {category}
                                    </button>
                                )
                            })}
                        </div>
                        {/* Gradient to indicate scrollability on mobile */}
                        <div className="absolute top-0 right-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden" />
                    </div>

                    <div
                        className="flex flex-col sm:flex-row items-center justify-between
                                    gap-4 bg-white/80 backdrop-blur-sm rounded-2xl
                                    px-4 py-3 sm:px-6 sm:py-4 shadow-md border border-gray-100"
                    >
                        <div className="flex items-center gap-6">
                            {/* Size selector */}
                            <div className="flex items-center gap-2">
                                <label
                                    htmlFor="filter-size"
                                    className="text-sm text-charcoal-light font-sans hidden sm:inline"
                                >
                                    Medida:
                                </label>
                                <div className="relative">
                                    <select
                                        id="filter-size"
                                        value={filterSize}
                                        onChange={handleSizeChange}
                                        className="appearance-none bg-gray-50 border border-gray-200
                                                   rounded-full px-4 py-2 pr-10 text-sm font-sans text-charcoal
                                                   focus:outline-none focus:ring-2 focus:ring-forest/40
                                                   focus:border-forest transition-colors cursor-pointer"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23374151' d='M2 4l4 4 4-4'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 0.85rem center',
                                        }}
                                    >
                                        <option value="todas">Todas las medidas</option>
                                        {uniqueSizes.map((size) => (
                                            <option key={size} value={size}>
                                                {size}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Products count indicator */}
                            <p className="text-sm text-charcoal-light font-sans hidden md:block">
                                <span className="font-semibold text-forest-dark">
                                    {filteredProducts.length}
                                </span>{' '}
                                {filteredProducts.length === 1
                                    ? 'producto'
                                    : 'productos'}
                            </p>
                        </div>

                        {hasActiveFilter && (
                            <button
                                onClick={handleClearFilters}
                                className="flex items-center gap-2 text-sm font-display font-semibold text-forest 
                                           hover:text-accent-gold transition-colors px-3 py-1.5 rounded-lg
                                           hover:bg-forest/5"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                                Limpiar filtros
                            </button>
                        )}
                    </div>
                </div>

                {/* ── Products Grid ── */}
                {filteredProducts.length > 0 ? (
                    <>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {visibleProducts.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="animate-fade-in-up"
                                >
                                    <CatalogCard
                                        product={product}
                                        onSelect={onSelectProduct}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Show more / less toggle */}
                        {hasMore && (
                            <div className="text-center mt-10">
                                <button
                                    onClick={handleToggleShowAll}
                                    className="inline-flex items-center gap-2 bg-white text-forest
                                               font-display font-bold px-8 py-3.5 rounded-xl
                                               border-2 border-forest hover:bg-forest hover:text-white
                                               transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    <span>{showAll ? 'Ver menos' : 'Ver todo'}</span>
                                    {showAll ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    /* ── Empty state ── */
                    <div className="text-center py-20">
                        {EmptyStateIcon}
                        <h3 className="font-display font-bold text-xl text-forest-dark mb-2">
                            Sin resultados
                        </h3>
                        <p className="text-charcoal-light font-sans mb-6 max-w-md mx-auto">
                            No encontramos productos que coincidan con los filtros
                            seleccionados. Prueba con otra combinación.
                        </p>
                        <button
                            onClick={handleClearFilters}
                            className="inline-flex items-center gap-2 text-forest
                                       hover:text-accent-gold font-sans font-semibold
                                       transition-colors duration-300"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            Limpiar filtros
                        </button>
                    </div>
                )}

                {/* ── Special Order CTA (Always visible at the bottom) ── */}
                <SpecialOrderCTA />
            </div>
        </div>
    )
}

export default ProductGrid
