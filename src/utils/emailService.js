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
 * Send email using EmailJS
 * @param {Object} formData - Form data with name, phone, email, city, message
 * @param {string} quotationDetails - Formatted string of cart products (optional)
 * @returns {Promise} - EmailJS send result
 */
export const sendEmail = async (formData, quotationDetails = '') => {
    // Dynamic import of emailjs-com
    const emailjs = await import('emailjs-com')

    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        city: formData.city,
        message: formData.message || 'Sin mensaje adicional.',
        quotation_details: quotationDetails || 'Sin productos cotizados.',
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
