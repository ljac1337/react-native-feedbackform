const COLORS = {
  primary: "#20B2AA",
  secondary: "#2071B2",
  darkSeaGreen: "#105955",
  crystal: "#A5E0DD",

  black: "#000000",
  tintedBlack: "#222222",
  darkGray: "#555555",
  mediumGray: "#777777",
  tintedGray: "#888888",
  paleGray: "AAAAAA",
  shadedWhite: "#dddddd",
  white: "#ffffff",
  background:
    "radial-gradient(100% 132.88% at 0% 3.17%, rgba(0, 150, 255, 0.32) 0%, rgba(255, 222, 106, 0.26) 100%)",
};

const FONT = {
  regular: "Montserrat-regular",
  medium: "Montserrat",
  bold: "Montserrat",
};

const SIZES = {
  small: 10,
  medium: 12,
  large: 14,
  xLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
