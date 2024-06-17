/** @type {import('tailwindcss').Config} */
export default {
  purge:{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist:[
    'w-[85%]','w-[10%]','w-[25%]','w-[30%]',
    {
      pattern: /w-\[.+\]/,
      patterns: /w-\[\d+%?\]/,
    },
  ],
  theme: {
    screens:{
      'vsm':'380px',
      // => @media (min-width:280px){ ... }
      'ssm':'640px',
      // => @media (min-width:640px){ ... }
      'smd':'768px',
      // => @media (min-width:768px){ ... }
      'slg':'1024px',
      // => @media (min-width:1024px){ ... }
      'sxl':'1280px',
      // => @media (min-width:1280px){ ... }
      's2xl':'1440px',
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
};