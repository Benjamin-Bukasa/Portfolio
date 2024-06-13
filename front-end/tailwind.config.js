/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'vsm':'280px',
      // => @media (min-width:280px){ ... }
      'sm':'640px',
      // => @media (min-width:640px){ ... }
      'md':'768px',
      // => @media (min-width:768px){ ... }
      'lg':'1024px',
      // => @media (min-width:1024px){ ... }
      'xl':'1280px',
      // => @media (min-width:1280px){ ... }
      '2xl':'1440px',
      // => @media (min-width:1440px){ ... }
    },
    extend: {
      boxShadow: {
        'custom': '0px 10px 33px -3px rgba(0,0,0,0.1)',
      },
      fontFamily:{
        poppins:["poppins, sans-serif"],
      }
    },
  },
  plugins: [],
}