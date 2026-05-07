import { useScrollReveal } from '../../hooks/useScrollReveal'

function FounderProfile() {
    const profileReveal = useScrollReveal({ threshold: 0.15 })
    const textReveal = useScrollReveal({ threshold: 0.2, delay: 200 })

    return (
        <div className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div
                    ref={profileReveal.ref}
                    className={`text-center mb-14 reveal reveal-up ${profileReveal.isVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">Nuestra Historia</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Más de dos décadas transformando la madera del sur de Chile
                    </p>
                </div>

                {/* Two-column layout */}
                <div
                    ref={textReveal.ref}
                    className={`grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start reveal reveal-up ${textReveal.isVisible ? 'visible' : ''}`}
                >
                    {/* Left: Photo */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Decorative background — gentle float */}
                            <div className="absolute -inset-3 bg-gradient-to-br from-forest/20 to-accent-gold/20 rounded-3xl rotate-3 animate-float-slow" />

                            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                {/* Placeholder SVG portrait */}
                                <svg
                                    className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"
                                    viewBox="0 0 288 384"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="288" height="384" fill="url(#bgGrad)" />
                                    {/* Person silhouette */}
                                    <circle cx="144" cy="130" r="55" fill="#94A3B8" />
                                    <ellipse cx="144" cy="310" rx="90" ry="100" fill="#94A3B8" />
                                    {/* Subtle overlay */}
                                    <rect width="288" height="384" fill="url(#overlayGrad)" />
                                    <defs>
                                        <linearGradient id="bgGrad" x1="0" y1="0" x2="288" y2="384" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#E2E8F0" />
                                            <stop offset="1" stopColor="#CBD5E1" />
                                        </linearGradient>
                                        <linearGradient id="overlayGrad" x1="144" y1="0" x2="144" y2="384" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="transparent" />
                                            <stop offset="1" stopColor="rgba(0,0,0,0.1)" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Replace with real image: */}
                                {/* <img src="/fundador.jpg" alt="Orosimbo Cisterna Molina" className="w-full h-full object-cover" /> */}
                            </div>

                            {/* Badge */}
                            <div className="absolute -bottom-4 -right-4 bg-forest text-white px-5 py-2.5 rounded-xl shadow-lg font-display font-bold text-sm">
                                Fundador
                            </div>
                        </div>
                    </div>

                    {/* Right: Text content */}
                    <div className="lg:col-span-3">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-forest-dark">
                                    Orosimbo Cisterna Molina
                                </h3>
                                <p className="text-accent-gold font-display font-semibold mt-1">
                                    Fundador & Director — Maderas Ponotro
                                </p>
                            </div>

                            <div className="w-16 h-1 bg-gradient-to-r from-accent-gold to-forest rounded-full" />

                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Maderas Ponotro nace del esfuerzo y la visión de Orosimbo Cisterna Molina, quien hace más de
                                    dos décadas decidió emprender en la industria maderera del sur de Chile. Criado entre bosques
                                    de la Región del Biobío, desde joven comprendió que la madera no era solo un recurso, sino un
                                    material noble que demandaba respeto en su extracción, transformación y tratamiento.
                                </p>
                                <p>
                                    Con trabajo incansable y una convicción firme en la calidad por sobre todo, comenzó con un
                                    pequeño aserradero familiar que, año tras año, fue creciendo hasta consolidarse como una
                                    operación integral de fabricación, dimensionado e impregnación. Cada inversión en maquinaria,
                                    cada certificación obtenida y cada relación comercial forjada ha sido un testimonio de su
                                    compromiso con la excelencia.
                                </p>
                                <p>
                                    Hoy Maderas Ponotro cuenta con una planta impregnadora certificada por la Universidad del
                                    Bío-Bío y un equipo dedicado que comparte su filosofía: entregar a cada cliente un producto
                                    que resista el paso del tiempo, con la honestidad y transparencia que caracterizan el trabajo
                                    del sur de Chile.
                                </p>
                            </div>

                            {/* Founder quote */}
                            <blockquote className="border-l-4 border-accent-gold pl-5 py-2 italic text-gray-500">
                                "La madera bien tratada no solo construye estructuras, construye confianza. Ese ha sido nuestro
                                norte desde el primer día."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FounderProfile
