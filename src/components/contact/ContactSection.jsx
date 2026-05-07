import { useState } from 'react'
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import ContactForm from './ContactForm'
import ContactButtons from './ContactButtons'
import QuotationSummary from './QuotationSummary'
import { CONTACT_INFO } from '../../utils/emailService'
import { useQuotationCart } from '../../context/QuotationCartContext'

function ContactSection() {
    const { items } = useQuotationCart()
    const hasCartItems = items.length > 0
    const [activeBranchId, setActiveBranchId] = useState(CONTACT_INFO.branches[0].id)
    
    const activeBranch = CONTACT_INFO.branches.find(b => b.id === activeBranchId)

    return (
        <div className="pt-0">
            {/* Header Section */}
            <section className="bg-gradient-to-br from-forest-dark to-forest py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                        Contáctanos
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                        {hasCartItems
                            ? 'Revisa tu cotización y envíanos tus datos para recibir una respuesta personalizada.'
                            : 'Estamos aquí para ayudarte. Envíanos un mensaje o contacta directamente a través de nuestros canales de atención.'
                        }
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`grid grid-cols-1 gap-8 ${
                        hasCartItems
                            ? 'lg:grid-cols-3'
                            : 'lg:grid-cols-2 gap-12'
                    }`}>
                        {/* Form — always first in DOM; visually second (center) on desktop when cart has items */}
                        <div className={`${hasCartItems ? 'lg:col-span-1 lg:order-2' : ''} bg-white rounded-2xl shadow-lg p-8`}>
                            <ContactForm />
                        </div>

                        {/* Quotation Summary — only when cart has items; visually first (left) on desktop */}
                        {hasCartItems && (
                            <div className="lg:col-span-1 lg:order-1">
                                <QuotationSummary />
                            </div>
                        )}

                        {/* Right Column - Contact Info & Buttons */}
                        <div className={`${hasCartItems ? 'lg:col-span-1 lg:order-3' : ''} space-y-8`}>
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
                                            <span className="text-gray-600">{activeBranch.name} - {activeBranch.address}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-forest-light/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <FaClock className="text-forest" />
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-800 block">Horario de Atención</span>
                                            <span className="text-gray-600 text-sm whitespace-pre-line">
                                                {CONTACT_INFO.hours.replace(' | ', '\n')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map & Branch Selector */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                                {/* Branch Tabs */}
                                <div className="flex border-b border-gray-100 bg-gray-50/50">
                                    {CONTACT_INFO.branches.map(branch => (
                                        <button
                                            key={branch.id}
                                            onClick={() => setActiveBranchId(branch.id)}
                                            className={`flex-1 py-4 px-2 text-sm font-semibold transition-colors relative ${
                                                activeBranchId === branch.id
                                                    ? 'text-forest-dark bg-white'
                                                    : 'text-gray-500 hover:text-forest hover:bg-gray-50'
                                            }`}
                                        >
                                            {branch.name}
                                            {activeBranchId === branch.id && (
                                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-forest" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                                {/* Map iframe */}
                                <iframe
                                    src={activeBranch.mapUrl}
                                    width={600}
                                    height={300}
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Mapa de ubicación de ${activeBranch.name}`}
                                    className="w-full transition-opacity duration-300"
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
