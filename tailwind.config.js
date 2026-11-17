/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0B1020',
        darkSurface: '#121A33',
        darkText: '#E8ECF8',
        darkMuted: '#9AA4C0',
        lightBg: '#F7F8FC',
        lightSurface: 'rgba(255, 255, 255, 0.75)',
        lightText: '#0F172A',
        lightMuted: '#475569',
        accentIndigo: '#6366F1',
        accentAmber: '#F5B544',
        accentGreen: '#34D399',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backdropBlur: {
        glass: '14px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        glassLight: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        glowIndigo: '0 0 25px -5px rgba(99, 102, 241, 0.4)',
        glowAmber: '0 0 25px -5px rgba(245, 181, 68, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
