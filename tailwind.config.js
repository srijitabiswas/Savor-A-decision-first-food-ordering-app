/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0F0D0B',
          secondary: '#1A1612',
          card: '#211E19',
          elevated: '#2A2520',
        },
        accent: {
          purple: '#C9A84C',
          'purple-dim': '#A8873A',
          'purple-glow': 'rgba(201,168,76,0.15)',
          gold: '#E8C97A',
          'gold-dim': '#C9A84C',
        },
        text: {
          primary: '#F0EBE1',
          secondary: '#9E9488',
          muted: '#5C5650',
        },
        border: {
          default: 'rgba(255,255,255,0.07)',
          subtle: 'rgba(255,255,255,0.04)',
          accent: 'rgba(201,168,76,0.3)',
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
        card: '0 4px 24px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.7)',
        purple: '0 0 32px rgba(201,168,76,0.2)',
        'purple-sm': '0 0 16px rgba(201,168,76,0.15)',
      },
      backdropBlur: { xs: '4px' },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-in': 'slideIn 0.4s ease forwards',
        shimmer: 'shimmer 1.8s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
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