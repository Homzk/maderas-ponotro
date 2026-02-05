import Hero from '../components/layout/Hero'
import InfoSection from '../components/home/InfoSection'
import CallToAction from '../components/home/CallToAction'

function Home() {
    return (
        <div className="pt-20">
            <Hero />
            <InfoSection />
            <CallToAction />
        </div>
    )
}

export default Home
