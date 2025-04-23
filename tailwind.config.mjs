/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f5',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        accent: {
          50: '#fff0f3',
          100: '#ffe4e9',
          200: '#ffc8d3',
          300: '#ff9aad',
          400: '#ff5c7c',
          500: '#ff1f4b',
          600: '#eb0039',
          700: '#c4002f',
          800: '#a3002a',
          900: '#8a0028',
          950: '#4b0012',
        },
      },
      fontFamily: {
        sans: [
          'sohne', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
        serif: [
          'gt-super', 
          'Georgia', 
          'Cambria', 
          'Times New Roman', 
          'Times', 
          'serif'
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            lineHeight: '1.75',
            h1: {
              fontFamily: 'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
              fontWeight: '700',
            },
            h2: {
              fontFamily: 'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
              fontWeight: '700',
            },
            h3: {
              fontFamily: 'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
              fontWeight: '700',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}