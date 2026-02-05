import { useEffect, useRef, useState } from 'react'

/**
 * Hook personalizado para animaciones de Scroll Reveal
 * Usa Intersection Observer API para detección eficiente del viewport
 * 
 * @param {Object} options - Opciones de configuración
 * @param {number} options.threshold - Porcentaje del elemento visible para activar (0-1)
 * @param {string} options.rootMargin - Margen del viewport (ej: '-50px')
 * @param {boolean} options.triggerOnce - Si solo se activa una vez
 * @param {number} options.delay - Delay en ms antes de la animación
 * 
 * @returns {Object} - { ref, isVisible }
 */
export function useScrollReveal({
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0
} = {}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (delay > 0) {
                        setTimeout(() => setIsVisible(true), delay)
                    } else {
                        setIsVisible(true)
                    }

                    if (triggerOnce) {
                        observer.unobserve(element)
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false)
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(element)

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [threshold, rootMargin, triggerOnce, delay])

    return { ref, isVisible }
}

/**
 * Hook para múltiples elementos con animación escalonada
 * Ideal para listas o grids de elementos
 * 
 * @param {number} itemCount - Número de elementos
 * @param {Object} options - Opciones de configuración
 * @param {number} options.staggerDelay - Delay entre cada elemento (ms)
 * @param {number} options.threshold - Porcentaje visible para activar
 * 
 * @returns {Array} - Array de { ref, isVisible } para cada elemento
 */
export function useScrollRevealStagger(itemCount, {
    staggerDelay = 100,
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
} = {}) {
    const [visibleItems, setVisibleItems] = useState(new Set())
    const containerRef = useRef(null)
    const hasTriggered = useRef(false)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTriggered.current) {
                    hasTriggered.current = true

                    // Revelar elementos de forma escalonada
                    for (let i = 0; i < itemCount; i++) {
                        setTimeout(() => {
                            setVisibleItems(prev => new Set([...prev, i]))
                        }, i * staggerDelay)
                    }

                    if (triggerOnce) {
                        observer.unobserve(container)
                    }
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(container)

        return () => {
            if (container) {
                observer.unobserve(container)
            }
        }
    }, [itemCount, staggerDelay, threshold, rootMargin, triggerOnce])

    return {
        containerRef,
        isVisible: (index) => visibleItems.has(index)
    }
}

export default useScrollReveal
