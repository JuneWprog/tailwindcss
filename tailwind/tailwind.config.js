/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' if you prefer to use the system's dark mode
  content: [
    './src/*.{html,js}',   // Include all HTML and JS files in the src folder
    './public/*.html',      // Include all HTML files in the public folder
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        'Bungee': ['Bungee Tint'],
      },
      colors: {
        // Define custom colors if needed
        darkBg: '#1a202c',   // Dark mode background color
        darkText: '#cbd5e0', // Dark mode text color
        lightBg: '#f7fafc',  // Light mode background color
        lightText: '#2d3748',// Light mode text color
      },
    },
  },
  plugins: []
   
}

