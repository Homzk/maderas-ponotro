/**
 * Email service configuration for Maderas Ponotro
 * Using EmailJS for form submission
 *
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │  IMPORTANTE — FASE DE PRUEBAS                                      │
 * │  El correo de destino se configura EXCLUSIVAMENTE desde el panel   │
 * │  de EmailJS (Dashboard → Email Templates → To Email).              │
 * │  NO se debe hardcodear el correo destino en el frontend.           │
 * └─────────────────────────────────────────────────────────────────────┘
 *
 * Environment variables (Vite):
 *   VITE_EMAILJS_SERVICE_ID   — EmailJS service ID
 *   VITE_EMAILJS_TEMPLATE_ID  — EmailJS template ID
 *   VITE_EMAILJS_PUBLIC_KEY   — EmailJS public key
 */

// ---------------------------------------------------------------------------
// EmailJS credentials — sourced from Vite env vars, NEVER hardcoded.
// ---------------------------------------------------------------------------
const EMAIL_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

/**
 * Runtime guard: fail fast if any EmailJS credential is missing.
 * This avoids silent failures during development.
 */
function assertEmailConfig() {
    const missing = Object.entries(EMAIL_CONFIG)
        .filter(([, v]) => !v)
        .map(([k]) => k)

    if (missing.length > 0) {
        throw new Error(
            `[emailService] Missing EmailJS env vars: ${missing.join(', ')}. ` +
            'Check your .env file for VITE_EMAILJS_* variables.'
        )
    }
}

// Company contact information
export const CONTACT_INFO = {
    email: 'maderas_ponotros@hotmail.com',
    executives: [
        {
            name: 'Orosimbo Cisterna',
            phone: '+56 9 8744 6911',
            whatsapp: '+56987446911'
        },
        {
            name: 'Claudia Zapata',
            phone: '+56 9 4032 3645',
            whatsapp: '+56940323645'
        }
    ],
    branches: [
        {
            id: 'ubicacion1',
            name: 'Ubicación 1',
            address: 'Región del Biobío, Chile',
            mapUrl: 'https://maps.google.com/maps?q=-37.8370857,-73.4258194&hl=es&z=15&output=embed'
        },
        {
            id: 'ubicacion2',
            name: 'Ubicación 2',
            address: 'Región del Biobío, Chile',
            mapUrl: 'https://www.google.com/maps?q=-37.80126190185547,-73.396484375&z=17&hl=es&output=embed'
        }
    ],
    hours: 'Lunes a Viernes: 08:00 - 17:30 | Sábado: 08:00 - 12:00',
}

/**
 * Send email using EmailJS.
 *
 * Template variable mapping (must match EmailJS template):
 *   user_name       → Nombre completo del cliente
 *   user_email      → Correo del cliente
 *   user_phone      → Teléfono del cliente
 *   user_city       → Ciudad del cliente
 *   user_message    → Mensaje libre
 *   quotation_items → Lista formateada de productos cotizados
 *
 * @param {Object} formData - { name, phone, email, city, message }
 * @param {string} quotationDetails - Formatted cart products string
 * @returns {Promise<{success: boolean, result?: object, error?: object}>}
 */
export const sendEmail = async (formData, quotationDetails = '') => {
    const missing = Object.entries(EMAIL_CONFIG)
        .filter(([, v]) => !v)
        .map(([k]) => k)

    if (missing.length > 0) {
        if (import.meta.env.DEV) {
            console.warn(`[emailService] Dev mode — simulating email send (missing: ${missing.join(', ')})`)
            await new Promise(r => setTimeout(r, 800))
            return { success: true, result: { status: 200 } }
        }
        throw new Error(
            `[emailService] Missing EmailJS env vars: ${missing.join(', ')}. ` +
            'Check your .env file for VITE_EMAILJS_* variables.'
        )
    }

    // Dynamic import keeps emailjs out of the initial bundle (bundle-conditional)
    const emailjs = await import('emailjs-com')

    // Template params — keys MUST match the EmailJS template variables exactly
    const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_city: formData.city,
        user_message: formData.message || 'Sin mensaje adicional.',
        quotation_items: quotationDetails || 'Sin productos cotizados.',
    }

    const result = await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        templateParams,
        EMAIL_CONFIG.publicKey
    )

    return { success: result.status === 200, result }
}

/**
 * Generate WhatsApp link with pre-filled message
 * @param {string} phone - Target phone number
 * @param {string} message - Optional pre-filled message
 * @returns {string} - WhatsApp URL
 */
export const getWhatsAppLink = (phone, message = '¡Hola! Me interesa conocer más sobre sus productos de madera.') => {
    const encodedMessage = encodeURIComponent(message)
    const cleanPhone = phone.replace(/\+/g, '').replace(/\s/g, '')
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`
}

/**
 * Generate mailto link
 * @param {string} subject - Email subject
 * @returns {string} - Mailto URL
 */
export const getMailtoLink = (subject = 'Consulta desde sitio web') => {
    return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}`
}

/**
 * Generate tel link
 * @param {string} phone - Target phone number
 * @returns {string} - Tel URL
 */
export const getTelLink = (phone) => {
    const cleanPhone = phone.replace(/\s/g, '')
    return `tel:${cleanPhone}`
}
