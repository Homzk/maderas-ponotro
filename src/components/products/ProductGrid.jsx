import ProductCard from './ProductCard'
import { FaTree, FaShieldAlt, FaCubes, FaCog, FaWarehouse, FaTools } from 'react-icons/fa'

const products = [
    {
        id: 1,
        name: 'Madera Elaborada',
        description: 'Madera cepillada y dimensionada lista para uso en construcción y proyectos. Disponible en diversas medidas y especies.',
        category: 'Elaboración',
        icon: FaTree,
        features: ['Pino, Eucalipto, Roble', 'Múltiples dimensiones', 'Cepillado fino'],
    },
    {
        id: 2,
        name: 'Madera Impregnada',
        description: 'Madera tratada con productos protectores que garantizan resistencia contra hongos, insectos y humedad.',
        category: 'Impregnación',
        icon: FaShieldAlt,
        features: ['Tratamiento CCA/CCB', 'Alta durabilidad', '25+ años de vida útil'],
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
]

function ProductGrid() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductGrid
