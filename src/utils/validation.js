/**
 * Form validation utilities for Maderas Ponotro contact form
 */

// Email validation
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || email.trim() === '') {
        return { isValid: false, error: 'El email es obligatorio' }
    }
    if (!emailRegex.test(email)) {
        return { isValid: false, error: 'Por favor ingrese un email válido' }
    }
    return { isValid: true, error: null }
}

// Phone validation (Chilean format: +56 9 XXXX XXXX or similar)
export const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-+()]{8,20}$/
    if (!phone || phone.trim() === '') {
        return { isValid: false, error: 'El teléfono es obligatorio' }
    }
    if (!phoneRegex.test(phone)) {
        return { isValid: false, error: 'Por favor ingrese un teléfono válido' }
    }
    return { isValid: true, error: null }
}

// Name validation (min 3 characters)
export const validateName = (name) => {
    if (!name || name.trim() === '') {
        return { isValid: false, error: 'El nombre es obligatorio' }
    }
    if (name.trim().length < 3) {
        return { isValid: false, error: 'El nombre debe tener al menos 3 caracteres' }
    }
    return { isValid: true, error: null }
}

// City validation (min 2 characters)
export const validateCity = (city) => {
    if (!city || city.trim() === '') {
        return { isValid: false, error: 'La ciudad es obligatoria' }
    }
    if (city.trim().length < 2) {
        return { isValid: false, error: 'La ciudad debe tener al menos 2 caracteres' }
    }
    return { isValid: true, error: null }
}

// Message validation (10-500 characters, optional when cart has items)
export const validateMessage = (message, { skipRequired = false } = {}) => {
    if (!message || message.trim() === '') {
        if (skipRequired) return { isValid: true, error: null }
        return { isValid: false, error: 'El mensaje es obligatorio' }
    }
    if (message.trim().length < 10) {
        return { isValid: false, error: 'El mensaje debe tener al menos 10 caracteres' }
    }
    if (message.trim().length > 500) {
        return { isValid: false, error: 'El mensaje no puede exceder 500 caracteres' }
    }
    return { isValid: true, error: null }
}

// Validate all form fields
// hasCartItems: when true, the message field becomes optional
export const validateForm = (formData, { hasCartItems = false } = {}) => {
    const errors = {}

    const nameValidation = validateName(formData.name)
    if (!nameValidation.isValid) errors.name = nameValidation.error

    const phoneValidation = validatePhone(formData.phone)
    if (!phoneValidation.isValid) errors.phone = phoneValidation.error

    const emailValidation = validateEmail(formData.email)
    if (!emailValidation.isValid) errors.email = emailValidation.error

    const cityValidation = validateCity(formData.city)
    if (!cityValidation.isValid) errors.city = cityValidation.error

    const messageValidation = validateMessage(formData.message, { skipRequired: hasCartItems })
    if (!messageValidation.isValid) errors.message = messageValidation.error

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}
