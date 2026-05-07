import { useState, useRef, useCallback } from 'react'
import { FaTruck, FaCogs, FaFlask, FaBoxes, FaShippingFast, FaPlay, FaPause } from 'react-icons/fa'
import { useScrollReveal, useScrollRevealStagger } from '../../hooks/useScrollReveal'

const processSteps = [
    {
        icon: FaTruck,
        step: '01',
        title: 'Recepción de Materia Prima',
        description: 'Cosecha, transporte y descarga de trozas provenientes de bosques certificados del sur de Chile.',
        video: '/videos/ingreso-madera.webm#t=0.001',
        hasVideo: true,
    },
    {
        icon: FaCogs,
        step: '02',
        title: 'Proceso de Aserrío',
        description: 'Grúa, aserrío, despunte y dimensionado con sierra huincha y circular para obtener piezas precisas.',
        hasVideo: false,
    },
    {
        icon: FaFlask,
        step: '03',
        title: 'Tratamiento e Impregnación',
        description: 'Carga y avance de carro al cilindro impregnador. Tratamiento certificado que protege contra hongos e insectos.',
        hasVideo: false,
    },
    {
        icon: FaBoxes,
        step: '04',
        title: 'Armado de Paquetes',
        description: 'Extracción de madera impregnada, clasificación por dimensiones y armado de paquetes listos para despacho.',
        hasVideo: false,
    },
    {
        icon: FaShippingFast,
        step: '05',
        title: 'Carga y Despacho',
        description: 'Carga final al camión con equipo especializado, garantizando que el producto llegue en perfectas condiciones al cliente.',
        hasVideo: false,
    },
]

/* ── Step 1: Play-on-click video ── */
function VideoStep({ step }) {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlay = useCallback(() => {
        const video = videoRef.current
        if (!video) return

        if (isPlaying) {
            video.pause()
            setIsPlaying(false)
        } else {
            video.play().catch(() => {})
            setIsPlaying(true)
        }
    }, [isPlaying])

    return (
        <div className="relative overflow-hidden rounded-2xl bg-charcoal shadow-xl hover:shadow-2xl transition-all duration-500 h-full group">
            {/* Visual Container */}
            <div
                className="relative h-56 md:h-64 overflow-hidden cursor-pointer"
                onClick={togglePlay}
            >
                {/* Video */}
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={step.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    width={640}
                    height={360}
                    aria-label={step.title}
                    onCanPlay={(e) => e.currentTarget.playbackRate = 1.25}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />

                {/* Step number badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-accent-gold/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <span className="font-display font-bold text-white text-sm">{step.step}</span>
                </div>

                {/* Play / Pause button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-all duration-300 ${
                        isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                    }`}>
                        {isPlaying ? (
                            <FaPause className="w-5 h-5 text-white" />
                        ) : (
                            <FaPlay className="w-5 h-5 text-white ml-1" />
                        )}
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-forest/20 rounded-lg flex items-center justify-center group-hover:bg-forest/30 transition-colors">
                        <step.icon className="text-forest-light text-lg" />
                    </div>
                    <h3 className="font-display font-bold text-white text-base md:text-lg leading-tight">
                        {step.title}
                    </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                </p>
            </div>
        </div>
    )
}

/* ── Steps 2-5: Placeholder cards ── */
function PlaceholderStep({ step }) {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-charcoal border-2 border-dashed border-white/10 hover:border-white/20 transition-all duration-500 h-full group">
            {/* Empty Visual Container */}
            <div className="relative h-56 md:h-64 flex items-center justify-center bg-charcoal-light/30">
                {/* Step number — large and centered */}
                <span className="font-display text-6xl md:text-7xl font-bold text-white/8">
                    {step.step}
                </span>

                {/* Step number badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="font-display font-bold text-white/50 text-sm">{step.step}</span>
                </div>

                {/* "Upcoming" label */}
                <div className="absolute bottom-4 inset-x-4 text-center">
                    <span className="text-white/30 text-xs font-display tracking-wider uppercase">
                        Contenido en preparación
                    </span>
                </div>
            </div>

            {/* Text Content */}
            <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                        <step.icon className="text-white/30 text-lg" />
                    </div>
                    <h3 className="font-display font-bold text-white/50 text-base md:text-lg leading-tight">
                        {step.title}
                    </h3>
                </div>
                <p className="text-white/30 text-sm leading-relaxed">
                    {step.description}
                </p>
            </div>
        </div>
    )
}

function ProcessGallery() {
    const headerReveal = useScrollReveal({ threshold: 0.2 })
    const stepsStagger = useScrollRevealStagger(processSteps.length, { staggerDelay: 120 })

    return (
        <div className="py-20 bg-charcoal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    ref={headerReveal.ref}
                    className={`text-center mb-14 reveal reveal-up ${headerReveal.isVisible ? 'visible' : ''}`}
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                        Nuestro Proceso
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Desde la recepción de materia prima hasta el despacho final, cada etapa es realizada con dedicación y estándares profesionales.
                    </p>
                </div>

                {/* Process Steps Grid */}
                <div
                    ref={stepsStagger.containerRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`reveal ${
                                index % 3 === 0 ? 'reveal-left' :
                                index % 3 === 2 ? 'reveal-right' : 'reveal-up'
                            } ${stepsStagger.isVisible(index) ? 'visible' : ''} ${
                                index >= 3 ? 'lg:col-span-1' : ''
                            }`}
                        >
                            {step.hasVideo ? (
                                <VideoStep step={step} />
                            ) : (
                                <PlaceholderStep step={step} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProcessGallery
