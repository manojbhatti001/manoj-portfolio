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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'spin-reverse': 'spin-reverse 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      }
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
