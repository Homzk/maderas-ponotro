/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'short': { 'raw': '(max-height: 750px)' },
                'medium-h': { 'raw': '(min-height: 751px) and (max-height: 900px)' },
            },
            colors: {
                // Esmeralda - Color principal elegante
                'forest-dark': '#064E3B',
                'forest': '#065F46',
                'forest-medium': '#047857',
                'forest-light': '#059669',
                // Dorado bronce - Acentos premium
                'accent-gold': '#B8860B',
                'accent-gold-light': '#DAA520',
                'accent-gold-dark': '#996515',
                // Neutros sofisticados
                'cream': '#FFFBEB',
                'cream-dark': '#FEF3C7',
                'charcoal': '#1F2937',
                'charcoal-light': '#374151',
            },
            fontFamily: {
                'sans': ['Open Sans', 'sans-serif'],
                'display': ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
