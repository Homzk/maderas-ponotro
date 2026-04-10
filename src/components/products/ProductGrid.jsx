import { useState, useMemo, useCallback } from 'react'
import { products } from '../../data/products'
import { useScrollReveal, useScrollRevealStagger } from '../../hooks/useScrollReveal'

/* ─── Treatment labels (hoisted, stable reference) ─── */
const TREATMENT_OPTIONS = [
    { value: 'todas', label: 'Todas' },
    { value: 'impregnada', label: 'Impregnada' },
    { value: 'natural', label: 'Natural' },
]

/* ─── Treatment → badge styling map ─── */
const TREATMENT_BADGE = {
    impregnada: 'bg-forest/90 text-white',
    natural: 'bg-accent-gold/90 text-white',
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
    const badgeClass = TREATMENT_BADGE[product.treatment] ?? 'bg-gray-500/80 text-white'

    return (
        <div
            className="group bg-white rounded-2xl shadow-lg overflow-hidden
                        hover:shadow-2xl transition-all duration-500 flex flex-col h-full
                        border border-gray-100 hover:border-accent-gold/30 cursor-pointer"
            onClick={() => onSelect?.(product)}
        >
            {/* Image */}
            <div className="relative h-56 bg-gradient-to-br from-forest-dark/80 to-forest/60 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Treatment badge */}
                <span
                    className={`absolute top-4 left-4 backdrop-blur-sm text-xs font-semibold
                                px-3 py-1 rounded-full shadow-lg capitalize ${badgeClass}`}
                >
                    {product.treatment}
                </span>

                {/* Size badge */}
                <span
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-forest-dark
                               text-xs font-bold px-3 py-1 rounded-full shadow-lg font-display"
                >
                    {product.size}
                </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <h3
                    className="font-display font-bold text-lg text-forest-dark mb-2
                               group-hover:text-forest transition-colors leading-tight"
                >
                    {product.name}
                </h3>

                <div className="mt-auto pt-4 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent-gold" />
                    <span className="text-sm text-charcoal-light font-sans capitalize">
                        {product.treatment}
                    </span>
                    <span className="text-gray-300 mx-1">·</span>
                    <span className="text-sm text-charcoal-light font-sans">
                        {product.size}
                    </span>
                </div>
            </div>
        </div>
    )
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  ProductGrid — main catalogue section with filters
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ProductGrid({ onSelectProduct }) {
    const [filterTreatment, setFilterTreatment] = useState('todas')
    const [filterSize, setFilterSize] = useState('todas')

    /* Derive unique sizes once — no effect needed (rerender-derived-state-no-effect) */
    const uniqueSizes = useMemo(() => {
        const sizeSet = new Set(products.map((p) => p.size))
        return Array.from(sizeSet).sort((a, b) => {
            const [a1, a2] = a.split('x').map(Number)
            const [b1, b2] = b.split('x').map(Number)
            return a1 - b1 || a2 - b2
        })
    }, [])

    /* Derive filtered products from state — no effect (rerender-derived-state-no-effect) */
    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            const matchTreatment =
                filterTreatment === 'todas' || p.treatment === filterTreatment
            const matchSize = filterSize === 'todas' || p.size === filterSize
            return matchTreatment && matchSize
        })
    }, [filterTreatment, filterSize])

    /* Stable callbacks (rerender-functional-setstate) */
    const handleTreatmentChange = useCallback((value) => {
        setFilterTreatment(value)
    }, [])

    const handleSizeChange = useCallback((e) => {
        setFilterSize(e.target.value)
    }, [])

    const handleClearFilters = useCallback(() => {
        setFilterTreatment('todas')
        setFilterSize('todas')
    }, [])

    /* Scroll reveal animations */
    const headerReveal = useScrollReveal({ threshold: 0.2 })
    const filterReveal = useScrollReveal({ threshold: 0.15, delay: 100 })
    const gridStagger = useScrollRevealStagger(filteredProducts.length, {
        staggerDelay: 60,
    })

    const hasActiveFilter = filterTreatment !== 'todas' || filterSize !== 'todas'

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ── Header ── */}
                <div
                    ref={headerReveal.ref}
                    className={`text-center mb-10 reveal reveal-up ${
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
                    className={`mb-12 reveal reveal-up ${
                        filterReveal.isVisible ? 'visible' : ''
                    }`}
                >
                    <div
                        className="flex flex-col sm:flex-row items-center justify-between
                                    gap-4 bg-white/80 backdrop-blur-sm rounded-2xl
                                    px-4 py-3 sm:px-6 sm:py-4 shadow-md border border-gray-100"
                    >
                        {/* Treatment pills */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm text-charcoal-light font-sans mr-1 hidden sm:inline">
                                Tratamiento:
                            </span>
                            {TREATMENT_OPTIONS.map((opt) => {
                                const isActive = filterTreatment === opt.value
                                return (
                                    <button
                                        key={opt.value}
                                        onClick={() => handleTreatmentChange(opt.value)}
                                        className={`px-4 py-2 rounded-full text-sm font-sans font-medium
                                                    transition-all duration-300 focus:outline-none
                                                    focus-visible:ring-2 focus-visible:ring-forest/50
                                                    ${
                                                        isActive
                                                            ? 'bg-forest text-white shadow-md'
                                                            : 'bg-gray-50 text-charcoal-light hover:bg-gray-100'
                                                    }`}
                                        aria-pressed={isActive}
                                    >
                                        {opt.label}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Size selector */}
                        <div className="flex items-center gap-2">
                            <label
                                htmlFor="filter-size"
                                className="text-sm text-charcoal-light font-sans hidden sm:inline"
                            >
                                Medida:
                            </label>
                            <select
                                id="filter-size"
                                value={filterSize}
                                onChange={handleSizeChange}
                                className="appearance-none bg-gray-50 border border-gray-200
                                           rounded-full px-4 py-2 pr-8 text-sm font-sans text-charcoal
                                           focus:outline-none focus:ring-2 focus:ring-forest/40
                                           focus:border-forest transition-colors cursor-pointer"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23374151' d='M2 4l4 4 4-4'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 0.75rem center',
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

                    {/* Active filters summary */}
                    {hasActiveFilter && (
                        <div className="flex items-center justify-between mt-3 px-2">
                            <p className="text-sm text-charcoal-light font-sans">
                                <span className="font-semibold text-forest-dark">
                                    {filteredProducts.length}
                                </span>{' '}
                                {filteredProducts.length === 1
                                    ? 'producto encontrado'
                                    : 'productos encontrados'}
                            </p>
                            <button
                                onClick={handleClearFilters}
                                className="text-sm font-sans text-forest hover:text-accent-gold
                                           transition-colors underline underline-offset-2"
                            >
                                Limpiar filtros
                            </button>
                        </div>
                    )}
                </div>

                {/* ── Products Grid ── */}
                {filteredProducts.length > 0 ? (
                    <div
                        ref={gridStagger.containerRef}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className={`reveal reveal-up ${
                                    gridStagger.isVisible(index) ? 'visible' : ''
                                }`}
                            >
                                <CatalogCard
                                    product={product}
                                    onSelect={onSelectProduct}
                                />
                            </div>
                        ))}
                    </div>
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
            </div>
        </div>
    )
}

export default ProductGrid
