/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
        colors: {
            clifford: '#da373d',
        },
        fontFamily: {
            'Inter': 'Inter, sans-serif',
        }
    }
},
  plugins: [],
}

