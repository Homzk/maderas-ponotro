import { useState, useEffect, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import { heroBackgrounds } from '../../constants/heroData'
import Slide1 from './Hero/Slides/Slide1'
import Slide2 from './Hero/Slides/Slide2'
import Slide3 from './Hero/Slides/Slide3'
import Slide4 from './Hero/Slides/Slide4'

const slideComponents = [Slide1, Slide2, Slide3, Slide4]

/* All slides use the same dark overlay for uniform brightness */
const overlayClass = 'bg-gradient-to-b from-black/50 via-black/40 to-black/60'


function Hero() {
    const [current, setCurrent] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slideComponents.length)
    }, [])

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slideComponents.length) % slideComponents.length)
    }, [])

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return
        const timer = setInterval(next, 10000)
        return () => clearInterval(timer)
    }, [isAutoPlaying, next])

    const handleManualNav = useCallback((action) => {
        setIsAutoPlaying(false)
        action()
        setTimeout(() => setIsAutoPlaying(true), 12000)
    }, [])

    const handleScrollDown = useCallback(() => {
        const productos = document.getElementById('productos')
        if (productos) {
            productos.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

    const minSwipeDistance = 50

    const onTouchStart = (e) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            handleManualNav(next)
        } else if (isRightSwipe) {
            handleManualNav(prev)
        }
    }

    return (
        <section 
            id="inicio" 
            className="relative h-[100svh] flex flex-col overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Background images — slide 0 pans horizontally (avoids moiré on grid patterns), others zoom gently */}
            {heroBackgrounds.map((bg, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={bg.src}
                        srcSet={bg.srcSet}
                        sizes="100vw"
                        alt={i === 0 ? "Bodega de Maderas Ponotro con maderas apiladas en Cañete, Región del Biobío" : ""}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding={i === 0 ? "sync" : "async"}
                        // eslint-disable-next-line react/no-unknown-property -- React 18 emits a runtime DOM warning for camelCase `fetchPriority`; use lowercase HTML attribute
                        fetchpriority={i === 0 ? "high" : "low"}
                        width={1920}
                        height={1440}
                        className={`w-full h-full object-cover ${
                            i === 0
                                ? (i === current ? 'animate-pan-slow' : 'scale-[1.03]')
                                : `transition-transform duration-[14000ms] ease-linear ${i === current ? 'scale-[1.04]' : 'scale-100'}`
                        }`}
                        aria-hidden={i === 0 ? undefined : "true"}
                    />
                </div>
            ))}

            {/* Uniform dark overlay */}
            <div className={`absolute inset-0 ${overlayClass}`} />

            {/* Decorative grain */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

            {/* Slide content */}
            <div className="relative z-10 flex-1 flex flex-col w-full h-full">
                {slideComponents.map((SlideComponent, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 flex flex-col justify-center pt-20 pb-20 md:pb-28
                            transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            i === current
                                ? 'opacity-100 translate-x-0 z-20'
                                : i < current
                                    ? 'opacity-0 -translate-x-12 z-0'
                                    : 'opacity-0 translate-x-12 z-0'
                        }`}
                    >
                        <div className="w-full max-h-full overflow-hidden flex flex-col justify-center">
                            <SlideComponent />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => handleManualNav(prev)}
                className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-300 border border-white/20"
                aria-label="Slide anterior"
            >
                <FaChevronLeft size={16} />
            </button>
            <button
                onClick={() => handleManualNav(next)}
                className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-300 border border-white/20"
                aria-label="Slide siguiente"
            >
                <FaChevronRight size={16} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-12 short:bottom-9 md:bottom-16 inset-x-0 flex justify-center gap-2.5 z-30">
                {slideComponents.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleManualNav(() => setCurrent(i))}
                        className="group relative flex items-center justify-center h-6 min-w-[24px]"
                        aria-label={`Ir a slide ${i + 1}`}
                    >
                        <span className={`block h-2.5 rounded-full transition-all duration-500 ${i === current
                                ? 'w-10 bg-forest-light'
                                : 'w-2.5 bg-white/40 group-hover:bg-white/60'
                            }`} />
                    </button>
                ))}
            </div>

            {/* Scroll indicator */}
            <button
                onClick={handleScrollDown}
                className="absolute bottom-3 short:bottom-1.5 md:bottom-5 inset-x-0 flex justify-center z-30 animate-bounce cursor-pointer"
                aria-label="Ver productos"
            >
                <FiChevronDown className="w-7 h-7 short:w-5 short:h-5 md:w-9 md:h-9 text-white/70" />
            </button>
        </section>
    )
}

export default Hero
