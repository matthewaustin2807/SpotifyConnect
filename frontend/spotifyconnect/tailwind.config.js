/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/ui/pages/*.{js,ts,jsx,tsx,mdx}',
    './src/app/ui/components/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'lightblack' : '#121212',
        'spotifygreen' : '#1DB954',
        'cardBackground' : '#181818',
        'cardPicture' : '#333333'
      }
    },
  },
  plugins: [],
}
