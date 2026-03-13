import { useState, useEffect } from 'react'
import { validateForm } from '../../utils/validation'
import { sendEmail } from '../../utils/emailService'
import { FaPaperPlane, FaCheck, FaExclamationCircle } from 'react-icons/fa'
import { useQuotationCart } from '../../context/QuotationCartContext'

function ContactForm() {
    const { items, getCartMessage, clearCart } = useQuotationCart()

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        message: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    // Listen for cart message injection via DOM events
    useEffect(() => {
        const textarea = document.getElementById('message')
        if (!textarea) return

        const handleInput = (e) => {
            // Only handle programmatic input events (from cart)
            if (!e.isTrusted) {
                setFormData((prev) => ({ ...prev, message: textarea.value }))
            }
        }

        textarea.addEventListener('input', handleInput)
        return () => textarea.removeEventListener('input', handleInput)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitStatus(null)

        const validation = validateForm(formData)
        if (!validation.isValid) {
            setErrors(validation.errors)
            return
        }

        setIsSubmitting(true)

        try {
            const result = await sendEmail(formData)

            if (result.success) {
                setSubmitStatus('success')
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    city: '',
                    message: '',
                })
                // Clear cart after successful submission
                if (items.length > 0) {
                    clearCart()
                }
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Submit error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="font-display font-bold text-xl text-forest-dark mb-6">
                Envíanos un Mensaje
            </h3>

            {/* Success Message */}
            {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    <FaCheck className="flex-shrink-0" />
                    <p>¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.</p>
                </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    <FaExclamationCircle className="flex-shrink-0" />
                    <p>Hubo un error al enviar el mensaje. Por favor intente nuevamente.</p>
                </div>
            )}

            {/* Cart indicator */}
            {items.length > 0 && !formData.message.includes('COTIZACIÓN') && (
                <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, message: getCartMessage() }))}
                    className="w-full flex items-center gap-3 p-3 bg-accent-gold/10 border border-accent-gold/30 rounded-lg text-accent-gold-dark text-sm hover:bg-accent-gold/15 transition-colors"
                >
                    <span className="w-6 h-6 bg-accent-gold text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {items.length}
                    </span>
                    Incluir {items.length} producto{items.length > 1 ? 's' : ''} de la cotización en el mensaje
                </button>
            )}

            {/* Name Field */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all`}
                    placeholder="Ingrese su nombre"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
            </div>

            {/* Phone Field */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all`}
                    placeholder="+56 9 1234 5678"
                />
                {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
            </div>

            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all`}
                    placeholder="su@email.com"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
            </div>

            {/* City Field */}
            <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad *
                </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.city ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all`}
                    placeholder="Ingrese su ciudad"
                />
                {errors.city && (
                    <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                )}
            </div>

            {/* Message Field */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje * <span className="text-gray-400 text-xs">(máx. 500 caracteres)</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all resize-none`}
                    placeholder="Cuéntenos sobre su proyecto o consulta..."
                />
                <div className="flex justify-between mt-1">
                    {errors.message && (
                        <p className="text-sm text-red-600">{errors.message}</p>
                    )}
                    <span className={`text-xs ml-auto ${formData.message.length > 500 ? 'text-red-600' : 'text-gray-400'}`}>
                        {formData.message.length}/500
                    </span>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
            >
                {isSubmitting ? (
                    <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Enviando...
                    </>
                ) : (
                    <>
                        <FaPaperPlane />
                        Enviar Mensaje
                    </>
                )}
            </button>
        </form>
    )
}

export default ContactForm
