/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/ui/pages/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'lightblack' : '#252525',
        'spotifygreen' : '#1DB954'
      }
    },
  },
  plugins: [],
}
