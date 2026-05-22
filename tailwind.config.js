/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondos
        'bg-primary':   '#0F1117',
        'bg-secondary': '#1A1D2E',
        'bg-card':      '#252838',
        'bg-border':    '#2E3250',

        // Texto
        'text-primary':   '#FFFFFF',
        'text-secondary': '#8B92B2',

        // Señales
        'signal-bull':    '#00C076',
        'signal-bear':    '#FF3B69',
        'signal-lateral': '#F0B90B',

        // Acento CryptoLens
        'accent':         '#6C63FF',
        'accent-hover':   '#5A52E0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.3)',
        'accent': '0 0 20px rgba(108, 99, 255, 0.3)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
