/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        gold: {
          50: '#fbf6ec',
          100: '#f5e9cf',
          200: '#ead29c',
          300: '#dcb866',
          400: '#cda246',
          500: '#b8924a',
          600: '#a07a35',
          700: '#7e5f2a',
          800: '#5c4520',
          900: '#3d2e16',
        },
        ink: {
          50: '#f7f7f8',
          100: '#ededf0',
          200: '#d4d4dc',
          300: '#aaaab8',
          400: '#75758a',
          500: '#4f4f63',
          600: '#34344a',
          700: '#232333',
          800: '#16161f',
          900: '#0b0b13',
        },
      },
      letterSpacing: {
        tightest: '-0.025em',
      },
      maxWidth: {
        page: '1320px',
      },
    },
  },
  plugins: [],
}
