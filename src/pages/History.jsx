import StorySection from '../components/history/StorySection'
import MissionVision from '../components/history/MissionVision'
import ProcessGallery from '../components/history/ProcessGallery'

function History() {
    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="bg-gradient-to-br from-forest-dark to-forest py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        Nuestra Historia
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                        Conoce más sobre nuestra trayectoria, valores y el proceso que nos
                        distingue en la industria maderera.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <StorySection />

            {/* Mission & Vision */}
            <MissionVision />

            {/* Process Gallery */}
            <ProcessGallery />
        </div>
    )
}

export default History
