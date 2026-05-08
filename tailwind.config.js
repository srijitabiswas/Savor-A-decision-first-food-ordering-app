/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FAFAF8',
          secondary: '#F2F1EE',
          card: '#FFFFFF',
          elevated: '#EEEDE9',
        },
        accent: {
          purple: '#D9A441',
          'purple-dim': '#B8872E',
          'purple-glow': 'rgba(217,164,65,0.15)',
          gold: '#D9A441',
          'gold-dim': '#B8872E',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#555550',
          muted: '#999994',
        },
        border: {
          default: 'rgba(0,0,0,0.08)',
          subtle: 'rgba(0,0,0,0.04)',
          accent: 'rgba(217,164,65,0.35)',
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
        card: '0 2px 16px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.14)',
        purple: '0 0 32px rgba(217,164,65,0.2)',
        'purple-sm': '0 0 12px rgba(217,164,65,0.15)',
      },
      backdropBlur: { xs: '4px' },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-in': 'slideIn 0.35s ease forwards',
        'slide-in-left': 'slideInLeft 0.35s ease forwards',
        shimmer: 'shimmer 1.8s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(100%)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-100%)' },
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