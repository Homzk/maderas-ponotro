import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import ContactForm from './ContactForm'
import ContactButtons from './ContactButtons'
import { CONTACT_INFO } from '../../utils/emailService'

function ContactSection() {
    return (
        <div className="pt-0">
            {/* Header Section */}
            <section className="bg-gradient-to-br from-forest-dark to-forest py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                        Contáctanos
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                        Estamos aquí para ayudarte. Envíanos un mensaje o contacta directamente
                        a través de nuestros canales de atención.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <ContactForm />
                        </div>

                        {/* Right Column - Contact Info & Buttons */}
                        <div className="space-y-8">
                            {/* Contact Buttons */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <ContactButtons />
                            </div>

                            {/* Contact Info Card */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="font-display font-bold text-xl text-forest-dark mb-6">
                                    Información de Contacto
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-forest-light/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <FaMapMarkerAlt className="text-forest" />
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-800 block">Ubicación</span>
                                            <span className="text-gray-600">{CONTACT_INFO.address}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-forest-light/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <FaClock className="text-forest" />
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-800 block">Horario de Atención</span>
                                            <span className="text-gray-600 text-sm">
                                                Lunes a Viernes: 08:00 - 18:00<br />
                                                Sábado: 09:00 - 13:00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <iframe
                                    src="https://maps.google.com/maps?q=-37.8370857,-73.4258194&hl=es&z=15&output=embed"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación Maderas Ponotro"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactSection
