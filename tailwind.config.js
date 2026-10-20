module.exports = {
  // ADDED: Forces Tailwind to listen to the manual .dark class toggle
  darkMode: 'class',
  
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.15rem',
      xl2: '1.3rem',
      xl3: '1.45rem',
      xl4: '1.60rem',
      xl5: '1.75rem',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'blue': '#090c9b',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      // FIXED: Removed trailing semicolons from RGB strings
      'blue-600':'rgb(37 99 235)',
      'blue-400':'rgb(96 165 250)',
      'blue-700':'rgb(29 78 216)',
      'ivory-100':'#FBFFF1',
      'blue-100':'#FBFFF1',
      'blockcoffee':'#3c3744',
      'white':'rgb(255,255,255)',
      'lightsteelblue':'#b4c5e4',
      'irisblue':'#3D52D5',
      'customdark1':'#1e1c21',
      'customdark2':'#387B94',
      'customdark3':'#515052',
      'customdark4':'#BAB5B5',
      'customdark5':'#FAF3F0',
      'customdark6':'#413b4a',
      'customdark7':'#85C8E1',
      'customdark8':'#a0ddf3'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};