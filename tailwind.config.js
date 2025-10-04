/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend:{ 
      fontFamily: {
        
        'roboto': ['Roboto', ...defaultTheme.fontFamily.sans], 
        
        'outfit': ['Outfit', ...defaultTheme.fontFamily.sans],
      },
    },
  }
}