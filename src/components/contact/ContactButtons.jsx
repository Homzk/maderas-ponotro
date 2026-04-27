import { FaGoogle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { getWhatsAppLink, getMailtoLink, getTelLink, CONTACT_INFO } from '../../utils/emailService'

function ContactButtons() {
    return (
        <div className="space-y-6">
            <h3 className="font-display font-bold text-xl text-forest-dark mb-6">
                Contacto Directo
            </h3>

            {/* Gmail Button */}
            <a
                href={getMailtoLink()}
                className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-red-200"
            >
                <div className="w-12 h-12 flex-shrink-0 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <FaGoogle className="text-red-600 text-xl" />
                </div>
                <div>
                    <span className="font-display font-semibold text-gray-800 block">Email Oficial</span>
                    <span className="text-gray-500 text-xs sm:text-sm">{CONTACT_INFO.email}</span>
                </div>
            </a>

            <div className="pt-2 border-t border-gray-100">
                <h4 className="font-display font-semibold text-sm text-gray-500 mb-4 uppercase tracking-wider">
                    Nuestros Ejecutivos
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {CONTACT_INFO.executives.map((exec, index) => (
                        <div key={index} className="flex flex-col space-y-2 p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <span className="font-display font-bold text-gray-800 text-sm">
                                {exec.name}
                            </span>
                            
                            <div className="flex flex-col space-y-2 mt-2">
                                {/* WhatsApp */}
                                <a
                                    href={getWhatsAppLink(exec.whatsapp)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center space-x-2 py-2 px-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-lg transition-colors border border-[#25D366]/20"
                                    title={`WhatsApp ${exec.name}`}
                                >
                                    <FaWhatsapp size={16} />
                                    <span className="text-sm font-semibold">WhatsApp</span>
                                </a>

                                {/* Call */}
                                <a
                                    href={getTelLink(exec.phone)}
                                    className="flex items-center justify-center space-x-2 py-2 px-3 bg-forest/10 hover:bg-forest/20 text-forest rounded-lg transition-colors border border-forest/20"
                                    title={`Llamar a ${exec.name}`}
                                >
                                    <FaPhone size={14} />
                                    <span className="text-sm font-semibold">{exec.phone}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactButtons
