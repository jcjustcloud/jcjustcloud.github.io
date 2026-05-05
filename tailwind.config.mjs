import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--bg-base)',
        card: 'var(--bg-card)',
        elevated: 'var(--bg-elevated)',
        accent: 'var(--accent-primary)',
        accent2: 'var(--accent-secondary)',
        border: 'var(--border)',
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)'
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        display: ['"Sora"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono]
      },
      boxShadow: {
        card: '0 22px 50px -36px rgba(2, 8, 23, 0.65)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -6px, 0)' }
        }
      },
      animation: {
        floaty: 'floaty 10s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
