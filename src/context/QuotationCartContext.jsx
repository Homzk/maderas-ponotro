import { createContext, useContext, useReducer, useCallback, useEffect } from 'react'

const QuotationCartContext = createContext(null)

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            // Use cartItemId for uniqueness when available (configured products)
            const identifier = action.payload.cartItemId || action.payload.id
            const exists = state.items.find(item => (item.cartItemId || item.id) === identifier)

            const itemQuantity = action.payload.quantity || 1

            if (exists) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        (item.cartItemId || item.id) === identifier
                            ? { ...item, quantity: (item.quantity || 1) + itemQuantity }
                            : item
                    )
                }
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: itemQuantity }]
            }
        }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => {
                    const identifier = item.cartItemId || item.id
                    return identifier !== action.payload
                })
            }
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item => {
                    const identifier = item.cartItemId || item.id
                    if (identifier === action.payload.id) {
                        return { ...item, quantity: Math.max(1, action.payload.quantity) }
                    }
                    return item
                })
            }
        case 'CLEAR_CART':
            return { ...state, items: [], isOpen: false }
        case 'TOGGLE_CART':
            return { ...state, isOpen: true }
        case 'CLOSE_CART':
            return { ...state, isOpen: false }
        default:
            return state
    }
}

const initialState = {
    items: [],
    isOpen: false
}

const STORAGE_KEY = 'maderas-quotation-cart'

function loadFromStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (!saved) return initialState
        const parsed = JSON.parse(saved)
        return { ...initialState, items: parsed.items ?? [] }
    } catch {
        return initialState
    }
}

export function QuotationCartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, undefined, loadFromStorage)

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }))
        } catch {
            // storage quota exceeded or private mode — silently ignore
        }
    }, [state.items])

    const addItem = useCallback((product) => {
        dispatch({ type: 'ADD_ITEM', payload: product })
    }, [])

    const removeItem = useCallback((productId) => {
        dispatch({ type: 'REMOVE_ITEM', payload: productId })
    }, [])

    const updateQuantity = useCallback((productId, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } })
    }, [])

    const clearCart = useCallback(() => {
        dispatch({ type: 'CLEAR_CART' })
    }, [])

    const toggleCart = useCallback(() => {
        dispatch({ type: 'TOGGLE_CART' })
    }, [])

    const closeCart = useCallback(() => {
        dispatch({ type: 'CLOSE_CART' })
    }, [])

    /**
     * Generates a formatted text summary of the cart for email payloads.
     * Includes all configuration options (largo, cepillado, impregnado, pedido especial).
     */
    const getCartMessage = useCallback(() => {
        if (state.items.length === 0) return ''

        const header = '═══ PRODUCTOS PARA COTIZACIÓN ═══\n\n'

        const productLines = state.items.map((item, i) => {
            const qty = item.quantity || 1
            const lines = [`${i + 1}. (x${qty}) ${item.name}`]

            if (item.size) lines.push(`   Medida: ${item.size}`)
            if (item.selectedLength) lines.push(`   Largo: ${item.selectedLength} m`)

            // Treatment options
            const treatments = []
            if (item.options?.cepillada) treatments.push('Cepillada')
            if (item.options?.impregnada) treatments.push('Impregnada')
            if (treatments.length > 0) {
                lines.push(`   Tratamiento: ${treatments.join(', ')}`)
            }

            if (item.category) lines.push(`   Categoría: ${item.category}`)

            // Special order details
            if (item.isSpecialOrder && item.description) {
                lines.push(`   ⚡ PEDIDO ESPECIAL`)
                lines.push(`   Detalle: ${item.description}`)
            }

            return lines.join('\n')
        }).join('\n\n')

        const footer = '\n\n═══ FIN DE LA LISTA ═══'
        return header + productLines + footer
    }, [state.items])

    /**
     * Scrolls to the contact section. No longer manipulates the textarea DOM.
     */
    const scrollToContact = useCallback(() => {
        dispatch({ type: 'CLOSE_CART' })

        requestAnimationFrame(() => {
            const contactSection = document.getElementById('contacto')
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
            }
        })
    }, [])

    const value = {
        items: state.items,
        isOpen: state.isOpen,
        itemCount: state.items.reduce((acc, item) => acc + (item.quantity || 1), 0),
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        closeCart,
        getCartMessage,
        scrollToContact
    }

    return (
        <QuotationCartContext.Provider value={value}>
            {children}
        </QuotationCartContext.Provider>
    )
}

export function useQuotationCart() {
    const context = useContext(QuotationCartContext)
    if (!context) {
        throw new Error('useQuotationCart must be used within a QuotationCartProvider')
    }
    return context
}

export default QuotationCartContext
