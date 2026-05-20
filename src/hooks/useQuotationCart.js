import { useContext } from 'react'
import { QuotationCartContext } from '../context/quotationCart'

export function useQuotationCart() {
    const context = useContext(QuotationCartContext)
    if (!context) {
        throw new Error('useQuotationCart must be used within a QuotationCartProvider')
    }
    return context
}
