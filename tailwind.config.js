/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0F1115',
          secondary: '#1A1D23',
          card: '#1E2128',
          elevated: '#252830',
        },
        accent: {
          purple: '#7C6CFF',
          'purple-dim': '#5A4ECC',
          'purple-glow': 'rgba(124,108,255,0.15)',
          gold: '#D6C6A8',
          'gold-dim': '#A89880',
        },
        text: {
          primary: '#EAEAF0',
          secondary: '#9AA0A6',
          muted: '#5C6370',
        },
        border: {
          default: 'rgba(255,255,255,0.07)',
          subtle: 'rgba(255,255,255,0.04)',
          accent: 'rgba(124,108,255,0.3)',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
        '3xl': '28px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6)',
        purple: '0 0 32px rgba(124,108,255,0.2)',
        'purple-sm': '0 0 16px rgba(124,108,255,0.15)',
      },
      backdropBlur: {
        xs: '4px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-in': 'slideIn 0.4s ease forwards',
        shimmer: 'shimmer 1.8s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideIn: {
          from: { opacity: 0, transform: 'translateX(30px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};