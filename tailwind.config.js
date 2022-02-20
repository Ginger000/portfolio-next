module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '0.5':'0.5px'
    },
    extend: {
      fontFamily: {
        clip: ['Clip'],
        neoncity:['Neoncity']
        // sans: ['Clip', 'sans-serif'],
      },
      zIndex: {
        '9999': '9999',
      },
      width: {
        '128': '32rem',
        '156': '36rem',
      },
      colors:{
        'back-blue': '#08202D',
        'ho-pink':'#FF4ACC',
        'hyper-cyan':'#00EEFD',
        'lighter-back':'#10374D',
        'card-back':'#25324A',
        'pale-blue':'#94E1F9',
      },
    },
  },
  plugins: [],
}
