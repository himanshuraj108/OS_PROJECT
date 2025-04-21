module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'pulse-shadow': 'pulse-shadow 2s infinite',
      },
      keyframes: {
        'pulse-shadow': {
          '0%': { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.4)' },
          '70%': { boxShadow: '0 0 0 10px rgba(59, 130, 246, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)' },
        },
      },
    },
  },
  plugins: [],
} 