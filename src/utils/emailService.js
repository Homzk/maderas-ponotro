/**
 * Email service configuration for Maderas Ponotro
 * Using EmailJS for form submission
 * 
 * To configure EmailJS:
 * 1. Create account at https://www.emailjs.com/
 * 2. Create an email service
 * 3. Create an email template with variables: {{name}}, {{phone}}, {{email}}, {{city}}, {{message}}
 * 4. Replace the placeholder values below with your actual credentials
 */

// EmailJS configuration - Replace with actual credentials
export const EMAIL_CONFIG = {
    serviceId: 'YOUR_EMAILJS_SERVICE_ID',
    templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
}

// Company contact information
export const CONTACT_INFO = {
    email: 'contacto@maderasponotro.cl',
    phone: '+56912345678',
    whatsapp: '+56912345678',
    address: 'Región del Biobío, Chile',
    hours: 'Lunes a Viernes: 08:00 - 18:00 | Sábado: 09:00 - 13:00',
}

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data with name, phone, email, city, message
 * @returns {Promise} - EmailJS send result
 */
export const sendEmail = async (formData) => {
    // Dynamic import of emailjs-com
    const emailjs = await import('emailjs-com')

    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        city: formData.city,
        message: formData.message,
        to_email: CONTACT_INFO.email,
    }

    try {
        const result = await emailjs.send(
            EMAIL_CONFIG.serviceId,
            EMAIL_CONFIG.templateId,
            templateParams,
            EMAIL_CONFIG.publicKey
        )
        return { success: true, result }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, error }
    }
}

/**
 * Generate WhatsApp link with pre-filled message
 * @param {string} message - Optional pre-filled message
 * @returns {string} - WhatsApp URL
 */
export const getWhatsAppLink = (message = '¡Hola! Me interesa conocer más sobre sus productos de madera.') => {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, '')}?text=${encodedMessage}`
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
 * @returns {string} - Tel URL
 */
export const getTelLink = () => {
    return `tel:${CONTACT_INFO.phone}`
}
