import { useState, lazy, Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/layout/Hero'

// Lazy-loaded components — below-the-fold / interaction-triggered (bundle-dynamic-imports)
const QuotationCart = lazy(() => import('./components/layout/QuotationCart'))
const ProductGrid = lazy(() => import('./components/products/ProductGrid'))
const ProcessGallery = lazy(() => import('./components/history/ProcessGallery'))
const FounderProfile = lazy(() => import('./components/history/FounderProfile'))
const CallToAction = lazy(() => import('./components/home/CallToAction'))
const ContactSection = lazy(() => import('./components/contact/ContactSection'))
const ProductDetailModal = lazy(() => import('./components/products/ProductDetailModal'))

/**
 * Lightweight spinner placeholder — matches section min-height
 * to prevent CLS while chunks load.
 */
function SectionFallback({ className = '' }) {
    return (
        <div className={`flex items-center justify-center py-20 ${className}`}>
            <div className="w-8 h-8 border-[3px] border-forest/30 border-t-forest rounded-full animate-spin" />
        </div>
    )
}

function App() {
    const [selectedProduct, setSelectedProduct] = useState(null)

    return (
        <HelmetProvider>
        <div className="min-h-[100svh]">
            <Navbar />
            <Suspense fallback={null}>
                <QuotationCart />
            </Suspense>

            <main>
                {/* 1. Hero — critical above-the-fold, loaded eagerly */}
                <Hero />

                {/* 2. Productos */}
                <section id="productos">
                    <Suspense fallback={<SectionFallback />}>
                        <ProductGrid onSelectProduct={setSelectedProduct} />
                    </Suspense>
                </section>

                {/* 3. Proceso (has video — heavy) */}
                <section id="proceso">
                    <Suspense fallback={<SectionFallback className="bg-charcoal" />}>
                        <ProcessGallery />
                    </Suspense>
                </section>

                {/* 4. Historia */}
                <section id="historia">
                    <Suspense fallback={<SectionFallback />}>
                        <FounderProfile />
                    </Suspense>
                </section>

                {/* 5. CTA + Contacto */}
                <Suspense fallback={<SectionFallback className="bg-gray-50" />}>
                    <CallToAction />
                </Suspense>

                <section id="contacto">
                    <Suspense fallback={<SectionFallback className="bg-gray-50" />}>
                        <ContactSection />
                    </Suspense>
                </section>
            </main>

            <Footer />

            {selectedProduct && (
                <Suspense fallback={null}>
                    <ProductDetailModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                </Suspense>
            )}
        </div>
        </HelmetProvider>
    )
}

export default App
