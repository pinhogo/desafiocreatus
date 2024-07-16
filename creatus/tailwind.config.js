/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'verde-forte':'#065D2F',
      'white': '#FFFFFF',
      'black': '#000000',
      'cinzinha': '#CBD5E1',
      'cinza': '#718096',
      'cinza-2':' #F6F6F6',
      'red': '#FF0000',
      'green': '#00FF00',	
      'transparent': 'transparent',
    },
    spacing: {
      '0': '0',
      '28.7e': '28.7em',
      '20r': '2rem',
      '60r': '6rem',
      '65r': '6.5rem',
      '70r': '7rem',
      '90r': '9rem',
      '100r': '10rem',
      '150r': '15rem',
      '180r': '18rem',
      '10e': '10em',
      '2e': '2em',
      '40e': '40em',
      '55e': '55em',
      '4e': '4em',
      '3e': '3em',
      '10r': '1rem',
      '15r': '1.5rem',
      '12r': '12rem',
      '05e':  '0.5em',
      '1e': '1em',
      '100%h': '100vh',
      '100%w': '100vw',
      '50%w': '50%',
      '30%w': '30wh',
    },
    fontFamily: {
      'inter': ['inter','system-ui'],
    },
    extend: {
      scale: {
        '101': '1.01',
      },
      backgroundImage: {
        'combined-bg': "url('./src/assets/img/bgtop.svg'), url('/src/assets/img/bgmid.svg'), url('/src/assets/img/bgbot.svg')",
      },
      backgroundPosition: {
        'combined-bg-pos': 'top, center, bottom',
      },
      backgroundSize: {
        'combined-bg-size': '100% 33.333%, 100% 33.333%, 100% 33.333%',
      },
    },
  },
  plugins: [],
}

