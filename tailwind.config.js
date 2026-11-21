/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ... (Mantén toda tu paleta 'faraday' intacta aquí)
      },
      fontFamily: {
        // ... (Mantén tu configuración de fuentes intacta aquí)
      },
      // AGREGA ESTAS NUEVAS SECCIONES PARA LAS ANIMACIONES
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.6s ease-out both', // 'both' es la clave aquí
      }
    },
  },
  plugins: [],
}