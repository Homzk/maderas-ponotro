import { useState } from 'react'
import { FaTree, FaShieldAlt, FaCubes, FaCog, FaWarehouse, FaTools, FaWindowMaximize, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import ProductCard from './ProductCard'
import { useScrollReveal, useScrollRevealStagger } from '../../hooks/useScrollReveal'

const INITIAL_VISIBLE = 6

const products = [
    {
        id: 1,
        name: 'Madera Impregnada Estructural',
        description: 'Pino tratado con CCA para máxima durabilidad en construcciones y estructuras expuestas. Ideal para proyectos que requieren resistencia extrema a la intemperie.',
        category: 'Impregnación',
        icon: FaShieldAlt,
        features: ['Tratamiento CCA certificado', 'Alta resistencia estructural', 'Uso exterior garantizado'],
    },
    {
        id: 2,
        name: 'Madera Elaborada',
        description: 'Madera cepillada y dimensionada lista para uso en construcción y proyectos. Disponible en diversas medidas y especies.',
        category: 'Elaboración',
        icon: FaTree,
        features: ['Pino, Eucalipto, Roble', 'Múltiples dimensiones', 'Cepillado fino'],
    },
    {
        id: 3,
        name: 'Cortes Especiales',
        description: 'Servicio de corte a medida según las especificaciones del cliente para proyectos personalizados.',
        category: 'Servicios',
        icon: FaCubes,
        features: ['Corte a medida', 'Precisión garantizada', 'Cualquier dimensión'],
    },
    {
        id: 4,
        name: 'Vigas y Pilares',
        description: 'Estructuras de madera para construcción de casas, galpones y proyectos de gran envergadura.',
        category: 'Estructural',
        icon: FaWarehouse,
        features: ['Alta resistencia', 'Tratamiento opcional', 'Grandes dimensiones'],
    },
    {
        id: 5,
        name: 'Tablas y Tablones',
        description: 'Variedad de tablas y tablones para revestimientos, pisos, cercas y múltiples aplicaciones.',
        category: 'Elaboración',
        icon: FaTools,
        features: ['Varias especies', 'Secado controlado', 'Acabado premium'],
    },
    {
        id: 6,
        name: 'Postes Impregnados',
        description: 'Postes de madera tratados para cercas, parrones y uso agrícola con máxima durabilidad.',
        category: 'Impregnación',
        icon: FaCog,
        features: ['Para cercos y parrones', 'Uso agrícola', 'Resistencia extrema'],
    },
    {
        id: 7,
        name: 'Marco rebajado para ventana impregnado 1.5" x 6"',
        description: 'Fabricación disponible en distintos largos: 2.50m, 3.20m, 4.00m, 5.00m, 6.00m, y 7.00m.',
        category: 'Impregnación',
        icon: FaWindowMaximize,
        features: ['Rebajado para vidrio', 'Impregnado CCA', 'Largos de 2.5 a 7m'],
    },
]

function ProductGrid() {
    const [showAll, setShowAll] = useState(false)
    const visibleProducts = showAll ? products : products.slice(0, INITIAL_VISIBLE)
    const hasMore = products.length > INITIAL_VISIBLE

    const headerReveal = useScrollReveal({ threshold: 0.2 })
    const gridStagger = useScrollRevealStagger(visibleProducts.length, { staggerDelay: 80 })

    const handleToggle = () => {
        if (showAll) {
            // Scroll back to the products section header when collapsing
            const section = document.getElementById('productos')
            if (section) section.scrollIntoView({ behavior: 'smooth' })
        }
        setShowAll((prev) => !prev)
    }

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    ref={headerReveal.ref}
                    className={`text-center mb-14 reveal reveal-up ${headerReveal.isVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">Nuestros Productos</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Descubre nuestra amplia gama de productos de madera elaborada e impregnada.
                        Calidad garantizada para todos tus proyectos.
                    </p>
                </div>

                {/* Products Grid */}
                <div
                    ref={gridStagger.containerRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {visibleProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className={`reveal reveal-up ${gridStagger.isVisible(index) ? 'visible' : ''}`}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {/* Toggle button */}
                {hasMore && (
                    <div className="text-center mt-12">
                        <button
                            onClick={handleToggle}
                            className="inline-flex items-center gap-2 bg-white text-forest font-display font-bold px-8 py-3.5 rounded-xl border-2 border-forest hover:bg-forest hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            <span>{showAll ? 'Ver menos' : 'Ver más productos'}</span>
                            {showAll ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductGrid
