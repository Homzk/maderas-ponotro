import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import QuotationCart from './components/layout/QuotationCart'
import Hero from './components/layout/Hero'
import ProductGrid from './components/products/ProductGrid'
import ProcessGallery from './components/history/ProcessGallery'
import FounderProfile from './components/history/FounderProfile'
import CallToAction from './components/home/CallToAction'
import ContactSection from './components/contact/ContactSection'

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <QuotationCart />

            <main>
                {/* 1. Hero — full-screen carousel */}
                <Hero />

                {/* 2. Productos */}
                <section id="productos">
                    <ProductGrid />
                </section>

                {/* 3. Proceso */}
                <section id="proceso">
                    <ProcessGallery />
                </section>

                {/* 4. Historia */}
                <section id="historia">
                    <FounderProfile />
                </section>

                {/* 5. CTA + Contacto */}
                <CallToAction />

                <section id="contacto">
                    <ContactSection />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default App
