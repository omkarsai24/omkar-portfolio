/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F8F5EE', // warm, elegant cream background
        surface: '#FFFFFF', // crisp white card surface
        accent: '#4F46E5', // high-contrast indigo accent
        cyan: {
          DEFAULT: '#0891B2',
          300: '#38BDF8',
          400: '#0EA5E9',
          500: '#06B6D4',
          600: '#0891B2',
        },
        success: '#059669', // rich emerald
        ink: '#0F172A', // deep slate for sharp, readable text
        muted: '#475569', // slate-600 for high-contrast secondary text
        line: 'rgba(15, 23, 42, 0.12)', // refined border
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
