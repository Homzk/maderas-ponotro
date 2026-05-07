import { useState, useCallback } from 'react'
import { validateForm } from '../../utils/validation'
import { sendEmail } from '../../utils/emailService'
import { FaPaperPlane, FaCheck, FaExclamationCircle } from 'react-icons/fa'
import { useQuotationCart } from '../../context/QuotationCartContext'

/**
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │  FASE DE PRUEBAS — El correo de destino se configura              │
 * │  EXCLUSIVAMENTE desde el panel de EmailJS, no en este código.      │
 * └─────────────────────────────────────────────────────────────────────┘
 */

// Initial form state — hoisted to avoid re-creating on every render (rerender-lazy-state-init)
const INITIAL_FORM_STATE = {
    name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
}

function ContactForm() {
    const { items, getCartMessage, clearCart } = useQuotationCart()
    const hasCartItems = items.length > 0

    const [formData, setFormData] = useState(INITIAL_FORM_STATE)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // null | 'success' | 'error'

    // Stable callback via functional setState (rerender-functional-setstate)
    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => {
            if (!prev[name]) return prev
            const next = { ...prev }
            delete next[name]
            return next
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitStatus(null)

        // ── Validation ──────────────────────────────────────────────
        const validation = validateForm(formData, { hasCartItems })
        if (!validation.isValid) {
            setErrors(validation.errors)
            return
        }

        setIsSubmitting(true)

        try {
            // ── Unify cart data ─────────────────────────────────────
            // getCartMessage() reads the QuotationCartContext items array
            // and returns a formatted plain-text string for the email payload.
            const quotationDetails = getCartMessage()

            // ── Send via EmailJS ────────────────────────────────────
            const result = await sendEmail(formData, quotationDetails)

            if (result.success) {
                setSubmitStatus('success')
                setFormData(INITIAL_FORM_STATE)
                setErrors({})

                // Clear cart ONLY on successful submission (status 200)
                if (hasCartItems) {
                    clearCart()
                }
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            // Debug log — kept intentionally for testing phase
            console.error('[ContactForm] EmailJS send failed:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <h3 className="font-display font-bold text-xl text-forest-dark mb-6">
                Envíanos un Mensaje
            </h3>

            {/* ── Name ─────────────────────────────────────────────── */}
            <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                </label>
                <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={errors.name ? 'true' : undefined}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all`}
                    placeholder="Ingrese su nombre"
                />
                {errors.name && (
                    <p id="contact-name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
            </div>

            {/* ── Phone ────────────────────────────────────────────── */}
            <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                </label>
                <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-invalid={errors.phone ? 'true' : undefined}
                    aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all`}
                    placeholder="+56 9 1234 5678"
                />
                {errors.phone && (
                    <p id="contact-phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
            </div>

            {/* ── Email ────────────────────────────────────────────── */}
            <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                </label>
                <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? 'true' : undefined}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all`}
                    placeholder="su@email.com"
                />
                {errors.email && (
                    <p id="contact-email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
            </div>

            {/* ── City ─────────────────────────────────────────────── */}
            <div>
                <label htmlFor="contact-city" className="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad *
                </label>
                <input
                    type="text"
                    id="contact-city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    aria-invalid={errors.city ? 'true' : undefined}
                    aria-describedby={errors.city ? 'contact-city-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.city ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all`}
                    placeholder="Ingrese su ciudad"
                />
                {errors.city && (
                    <p id="contact-city-error" className="mt-1 text-sm text-red-600">{errors.city}</p>
                )}
            </div>

            {/* ── Message ──────────────────────────────────────────── */}
            <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje {hasCartItems ? '' : '*'}{' '}
                    <span className="text-gray-400 text-xs">(máx. 500 caracteres)</span>
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={errors.message ? 'true' : undefined}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all resize-none`}
                    placeholder={hasCartItems
                        ? 'Opcional: añade consultas adicionales sobre tu cotización...'
                        : 'Cuéntenos sobre su proyecto o consulta...'
                    }
                />
                <div className="flex justify-between mt-1">
                    {errors.message ? (
                        <p id="contact-message-error" className="text-sm text-red-600">{errors.message}</p>
                    ) : (
                        <span />
                    )}
                    <span className={`text-xs ml-auto ${formData.message.length > 500 ? 'text-red-600' : 'text-gray-400'}`}>
                        {formData.message.length}/500
                    </span>
                </div>
            </div>

            {/* ── Submit Button with Loading State ─────────────────── */}
            <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center gap-3 transition-opacity ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
            >
                {isSubmitting ? (
                    <>
                        <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
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
                        <FaPaperPlane aria-hidden="true" />
                        {hasCartItems ? 'Enviar Cotización' : 'Enviar Mensaje'}
                    </>
                )}
            </button>

            {hasCartItems && (
                <p className="text-xs text-center text-charcoal-light font-sans mt-2">
                    Los productos de tu cotización se adjuntarán automáticamente al enviar.
                </p>
            )}

            {/* ── Success Toast ────────────────────────────────────── */}
            {submitStatus === 'success' && (
                <div
                    role="alert"
                    className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 animate-fade-in"
                >
                    <FaCheck className="flex-shrink-0" aria-hidden="true" />
                    <p>Gracias por contactarnos, tu mensaje fue enviado correctamente. Nos pondremos en contacto pronto.</p>
                </div>
            )}

            {/* ── Error Toast ──────────────────────────────────────── */}
            {submitStatus === 'error' && (
                <div
                    role="alert"
                    className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 animate-fade-in"
                >
                    <FaExclamationCircle className="flex-shrink-0" aria-hidden="true" />
                    <p>Hubo un error al enviar el mensaje. Por favor intente nuevamente.</p>
                </div>
            )}
        </form>
    )
}

export default ContactForm
