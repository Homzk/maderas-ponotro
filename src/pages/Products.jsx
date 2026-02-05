import { Link } from 'react-router-dom'
import ProductGrid from '../components/products/ProductGrid'
import { FaPhoneAlt } from 'react-icons/fa'

function Products() {
    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="bg-gradient-to-br from-forest-dark to-forest py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        Productos
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                        Descubre nuestra amplia gama de productos de madera elaborada e impregnada.
                        Calidad garantizada para todos tus proyectos.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <ProductGrid />

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-forest-dark to-forest rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

                        <div className="relative z-10">
                            <FaPhoneAlt className="text-4xl text-white/80 mx-auto mb-6" />
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                                ¿No encuentras lo que buscas?
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                                Contáctanos y te ayudaremos a encontrar el producto perfecto para tu proyecto.
                                También ofrecemos cortes especiales y productos personalizados.
                            </p>
                            <Link
                                to="/contacto"
                                className="inline-flex items-center gap-2 bg-white text-forest font-display font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                            >
                                Solicitar Cotización
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
