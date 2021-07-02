module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainbg: "hsl(233, 47%, 7%)",
        heading: "hsl(0, 0%, 100%)",
        par: "hsla(0, 0%, 100%, 0.75)",
        cardbg: "hsl(244, 38%, 16%)",
        accent: "hsl(277, 64%, 61%)",
      },
      fontSize: {
        myfont: "15px",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        deca: "'Lexend Deca', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
