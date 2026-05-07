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
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%':       { transform: 'translateY(-12px)' },
                },
                'ken-burns': {
                    '0%':   { transform: 'scale(1)    translateX(0)' },
                    '100%': { transform: 'scale(1.08) translateX(-1%)' },
                },
                'pan-slow': {
                    '0%':   { transform: 'scale(1.03) translateX(0%)' },
                    '100%': { transform: 'scale(1.03) translateX(-1.5%)' },
                },
                shimmer: {
                    '0%':   { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition:  '200% 0' },
                },
                'pulse-gold': {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(184,134,11,0.4)' },
                    '50%':      { boxShadow: '0 0 0 8px rgba(184,134,11,0)' },
                },
                'slide-up': {
                    from: { opacity: '0', transform: 'translateY(24px)' },
                    to:   { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-down': {
                    from: { opacity: '0', transform: 'translateY(-16px)' },
                    to:   { opacity: '1', transform: 'translateY(0)' },
                },
                'scale-in': {
                    from: { opacity: '0', transform: 'scale(0.92)' },
                    to:   { opacity: '1', transform: 'scale(1)' },
                },
                'spin-slow': {
                    from: { transform: 'rotate(0deg)' },
                    to:   { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                'float':       'float 6s ease-in-out infinite',
                'float-slow':  'float 9s ease-in-out infinite',
                'ken-burns':   'ken-burns 14s ease-in-out alternate infinite',
                'pan-slow':    'pan-slow 14s ease-in-out alternate infinite',
                'shimmer':     'shimmer 2.2s linear infinite',
                'pulse-gold':  'pulse-gold 2s ease-in-out infinite',
                'slide-up':    'slide-up 0.5s cubic-bezier(0.16,1,0.3,1) both',
                'slide-down':  'slide-down 0.4s ease-out both',
                'scale-in':    'scale-in 0.4s cubic-bezier(0.16,1,0.3,1) both',
                'spin-slow':   'spin-slow 20s linear infinite',
                'bounce-once': 'bounceOnce 0.4s ease-out',
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
