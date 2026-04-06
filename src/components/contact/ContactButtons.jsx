import { FaGoogle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { getWhatsAppLink, getMailtoLink, getTelLink, CONTACT_INFO } from '../../utils/emailService'

function ContactButtons() {
    return (
        <div className="space-y-4">
            <h3 className="font-display font-bold text-xl text-forest-dark mb-6">
                Contacto Directo
            </h3>

            {/* Gmail Button */}
            <a
                href={getMailtoLink()}
                className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-red-200"
            >
                <div className="w-12 h-12 flex-shrink-0 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <FaGoogle className="text-red-600 text-xl" />
                </div>
                <div>
                    <span className="font-display font-semibold text-gray-800 block">Gmail</span>
                    <span className="text-gray-500 text-sm">{CONTACT_INFO.email}</span>
                </div>
            </a>

            {/* WhatsApp Button */}
            <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-green-200"
            >
                <div className="w-12 h-12 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <FaWhatsapp className="text-green-600 text-xl" />
                </div>
                <div>
                    <span className="font-display font-semibold text-gray-800 block">WhatsApp</span>
                    <span className="text-gray-500 text-sm">Escríbenos directamente</span>
                </div>
            </a>

            {/* Phone Button */}
            <a
                href={getTelLink()}
                className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-forest-light"
            >
                <div className="w-12 h-12 flex-shrink-0 bg-forest-light/20 rounded-full flex items-center justify-center group-hover:bg-forest-light/30 transition-colors">
                    <FaPhone className="text-forest text-xl" />
                </div>
                <div>
                    <span className="font-display font-semibold text-gray-800 block">Teléfono</span>
                    <span className="text-gray-500 text-sm">{CONTACT_INFO.phone}</span>
                </div>
            </a>
        </div>
    )
}

export default ContactButtons
