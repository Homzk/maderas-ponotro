import StorySection from '../components/history/StorySection'
import ProcessGallery from '../components/history/ProcessGallery'
import MissionVision from '../components/history/MissionVision'

function History() {
    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="bg-gradient-to-br from-forest-dark to-forest py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                        Nuestra Historia
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                        Conoce más sobre nuestra trayectoria, valores y el proceso que nos
                        distingue en la industria maderera.
                    </p>
                </div>
            </section>

            {/* 1. Nuestra Historia - Carousel */}
            <StorySection />

            {/* 2. Nuestro Proceso */}
            <ProcessGallery />

            {/* 3. Lo Que Nos Define */}
            <MissionVision />
        </div>
    )
}

export default History
