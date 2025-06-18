/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Inconsolata", "monospace"],
        body: ["Noto Sans", "sans-serif"],
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      'border-spin':{
        '100%':{
          transform: 'rotate(360deg)',
        },
      },
    },
    animation:{
      'border-spin': 'border-spin 2s linear infinite',
      gradient: 'gradient 8s linear infinite',
    },
      colors:{
        primary: "#275838",
        secondary: "#f7ebeb",
        textiary: "#D3D3D3",
        customGreen: "#C1E1C1",
        customPink: "#Da70d6",
        dark:"#333333",
        dark2: "#797979",
      },
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm:"2rem",
        },
      },
    },
  },
  plugins: [],
}

