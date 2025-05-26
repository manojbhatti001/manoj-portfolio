module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: {
          DEFAULT: '#FFFFFF',
          dark: '#111827',
        },
        accent: {
          DEFAULT: '#F3F4F6',
          dark: '#374151',
        },
        'text-primary': {
          DEFAULT: '#1F2937',
          dark: '#F9FAFB',
        },
        'text-secondary': {
          DEFAULT: '#4B5563',
          dark: '#D1D5DB',
        },
        'neon-green': '#4ADE80',
        'neon-purple': '#8B5CF6',
        'gradient-1': '#6366F1',
        'gradient-2': '#8B5CF6',
        'gradient-3': '#D946EF',
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#111827',
        },
      },
      perspective: {
        '1000': '1000px',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(139,92,246,0.3)',
      },
      transitionTimingFunction: {
        'bounce-custom': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        'border-wave': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'grid-move': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'shine': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.5)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0) scale(1.5)' },
          '50%': { transform: 'translateY(-15px) scale(1)' },
        },
      },
      animation: {
        shine: 'shine 2s linear infinite',
        float: 'float 3s ease-in-out infinite',
        'spin-reverse': 'spin-reverse 8s linear infinite',
        'float1': 'float1 3s ease-in-out infinite',
        'float2': 'float2 3s ease-in-out infinite 0.5s',
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      scale: ['hover', 'active'],
    },
  },
  plugins: [],
}
