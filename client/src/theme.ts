// hues

export const tokens = {
    grey: {
      100: "#f0f0f3",
      200: "#e1e2e7",
      300: "#d1d3da",
      400: "#c2c5ce",
      500: "#b3b6c2",
      600: "#8f929b",
      700: "#6b6d74",
      800: "#48494e",
      900: "#242427",
    },
    // primary: {
    //   // light green
    //   100: "#d0fcf4",
    //   200: "#a0f9e9",
    //   300: "#71f5de",
    //   400: "#41f2d3",
    //   500: "#12efc8",
    //   600: "#0ebfa0",
    //   700: "#0b8f78",
    //   800: "#076050",
    //   900: "#043028",
    // },

    // primary: {
    //   // light Blue
    //   100: "#CCEEF2",
    //   200: "#9CD7E5",
    //   300: "#6CB9D8",
    //   400: "#3B94CB",
    //   500: "#2A669F",
    //   600: "#234B83",
    //   700: "#1B3366",
    //   800: "#14204A",
    //   900: "#0C102E",
    // },

    primary: {  
      DEFAULT: '#8B5CF6',  
      100: '#FFFFFF',  
      200: '#F9F7FF',  
      300: '#DED0FC',  
      400: '#C2A9FA',  
      500: '#A783F8',  
      600: '#8B5CF6',  
      700: '#6527F3',  
      800: '#4A0CD6',  
      900: '#3709A1',  
      },

    secondary: {
      // yellow
      100: "#fcf0dd",
      200: "#fae1bb",
      300: "#f7d299",
      400: "#f5c377",
      500: "#f2b455",
      600: "#c29044",
      700: "#916c33",
      800: "#614822",
      900: "#302411",
    },
    tertiary: {
      // yellow
      500: "#f2b455",
    },
    background: {
      light: "#2d2d34",
      main: "#1f2026",
    },
  };
  
  // mui theme settings
  export const themeSettings = {
    palette: {
      primary: {
        ...tokens.primary,
        main: tokens.primary[500],
        light: tokens.primary[400],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[500],
      },
      tertiary: {
        ...tokens.tertiary,
      },
      grey: {
        ...tokens.grey,
        main: tokens.grey[500],
      },
      background: {
        default: tokens.background.main,
        light: tokens.background.light,
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 800,
        color: tokens.grey[200],
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
        color: tokens.grey[300],
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
        color: tokens.grey[500],
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 10,
        color: tokens.grey[700],
      },
    },
  };