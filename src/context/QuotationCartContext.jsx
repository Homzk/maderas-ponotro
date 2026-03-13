import { createContext, useContext, useReducer, useCallback } from 'react'

const QuotationCartContext = createContext(null)

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const exists = state.items.find(item => item.id === action.payload.id)
            if (exists) return state
            return {
                ...state,
                items: [...state.items, action.payload],
                isOpen: false
            }
        }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case 'CLEAR_CART':
            return { ...state, items: [], isOpen: false }
        case 'TOGGLE_CART':
            return { ...state, isOpen: !state.isOpen }
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

export function QuotationCartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addItem = useCallback((product) => {
        dispatch({ type: 'ADD_ITEM', payload: product })
    }, [])

    const removeItem = useCallback((productId) => {
        dispatch({ type: 'REMOVE_ITEM', payload: productId })
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

    const getCartMessage = useCallback(() => {
        if (state.items.length === 0) return ''
        const header = '--- PRODUCTOS PARA COTIZACIÓN ---\n\n'
        const productLines = state.items.map((item, i) =>
            `${i + 1}. ${item.name}${item.description ? `\n   ${item.description}` : ''}`
        ).join('\n\n')
        const footer = '\n\n--- FIN DE LA LISTA ---\n\nPor favor, envíenme una cotización de los productos listados.'
        return header + productLines + footer
    }, [state.items])

    const scrollToContactWithMessage = useCallback(() => {
        dispatch({ type: 'CLOSE_CART' })

        // Small delay to allow cart to close before scrolling
        requestAnimationFrame(() => {
            const contactSection = document.getElementById('contacto')
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
            }

            // Pre-fill the textarea after scroll settles
            setTimeout(() => {
                const textarea = document.getElementById('message')
                if (textarea) {
                    const nativeSetter = Object.getOwnPropertyDescriptor(
                        window.HTMLTextAreaElement.prototype, 'value'
                    ).set
                    nativeSetter.call(textarea, getCartMessage())
                    textarea.dispatchEvent(new Event('input', { bubbles: true }))
                    textarea.dispatchEvent(new Event('change', { bubbles: true }))
                }
            }, 800)
        })
    }, [getCartMessage])

    const value = {
        items: state.items,
        isOpen: state.isOpen,
        itemCount: state.items.length,
        addItem,
        removeItem,
        clearCart,
        toggleCart,
        closeCart,
        getCartMessage,
        scrollToContactWithMessage
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
