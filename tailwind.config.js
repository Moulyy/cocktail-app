module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
      extend: {
        fontSize: {
          '50': '50px',
        },
        fontFamily: {
          'nunito': ['Nunito', 'sans-serif'],
          'pacifico': ['Pacifico', 'sans-serif'],
          'poppins': ['Poppins', 'sans-serif'],
        },
        colors: {
          'title': '#FF001F',
          'orange-gradient': 'linear-gradient(180deg, #FFB054 3.65%, #FF7B1C 55.21%, #FF6C63 100%)',
        },
        backgroundImage: {
          'gradient-bg': 'linear-gradient(168.49deg, #E8EBF2 -0.93%, #FED8DA 101.18%)',
          'gradient-btn': 'linear-gradient(90.03deg, #FF5B5B -11.15%, #FF487F 109.72%);'
        },
        boxShadow: {
          'btn-box-shadow': '0px 5px 11px -5px rgba(228, 23, 23, 0.48)',
        },
      },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      }, ['hover', 'focus'])
    }
  ],
}