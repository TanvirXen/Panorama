import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar/index";
function MyApp({ Component, pageProps }) {
  const outerTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1400,
      },
    },
    palette: {
      primary: {
        main: "#0065ff",
        dark: "#0003e9c",
        light: "#e6f0ff",
        b50: "#e6f0ff",
        b75: "#96c0ff",
        b100: "#6ba6ff",
        b200: "#2b7fff",
        b300: "#0065ff",
        b400: "#0047b3",
        b500: "#003e9c",
      },
      secondary: {
        main: "#f85828",
        light: "#feeeea",
        dark: "#973618",
        o50: "#feeeea",
        o75: "#fcbba7",
        o100: "#fb9e82",
        o200: "#f9744d",
        o300: "#f85828",
        o400: "#ae3e1c",
        o500: "#973618",
      },
      yellow: {
        y50: "#fef9e8",
        y75: "#fea6a0",
        y100: "#f8dc79",
        y200: "#f5cd3f",
        y300: "#f3c318",
        y400: "#aa8911",
        y500: "#94770f",
      },
      green: {
        g50: "#e8f5ed",
        g75: "#a0d4b4",
        g100: "#78c395",
        g200: "#3ea967",
        g300: "#179748",
        g400: "#106a32",
        g500: "#0e5c2c",
      },
      red: {
        r50: "#feecef",
        r75: "#fab0bd",
        r100: "#f990a2",
        r200: "#f66079",
        r300: "#f43f5e",
        r400: "#ab2c42",
        r500: "#952639",
      },
      neutral: {
        b900: "#000000",
        b800: "#0d0d0d",
        b700: "#1c1c1c",
        b600: "#2e2e2e",
        b500: "#3b3b3b",
        b400: "#4a4a4a",
        b300: "#575755",
        b200: "#666666",
        b100: "#757575",
        b90: "#858585",
        b80: "#949494",
        b70: "#a3a3a3",
        b60: "#b0b0b0",
        b50: "#bfbfbf",
        b40: "#dedede",
        b30: "#ebebeb",
        b20: "#f5f5f5",
        b10: "#fafafa",
        b0: "#ffffff",
      },
    },
    typography: {
      h1: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "400",
        fontSize: "3rem",

        "@media (max-width:1100px)": {
          fontSize: "2.8rem",
        },
        "@media (max-width:900px)": {
          fontSize: "2.6rem",
        },
        "@media (max-width:600px)": {
          fontSize: "2.2rem",
        },
        "@media (max-width:430px)": {
          fontSize: "1.8rem",
        },
      },
      h1R: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "300",
        fontSize: "3rem",
        lineHeight: "120%",
        "@media (max-width:1100px)": {
          fontSize: "2.8rem",
        },
        "@media (max-width:900px)": {
          fontSize: "2.6rem",
        },
        "@media (max-width:600px)": {
          fontSize: "2.2rem",
        },
        "@media (max-width:430px)": {
          fontSize: "1.8rem",
        },
      },
      h2: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "700",
        fontSize: "2.5rem",
        lineHeight: "120%",
      },
      h2R: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "300",
        fontSize: "2.5rem",
        lineHeight: "120%",
      },
      h3: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "120%",
      },
      h4B: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "400",
        fontSize: "2rem",
        lineHeight: "120%",
      },
      h4: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "300",
        fontSize: "2rem",
        lineHeight: "120%",
      },
      h5: {
        fontFamily: `"Ubuntu"`,
      },
      h6: {
        fontFamily: `"Ubuntu"`,
      },
      large: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "300",
        fontSize: "1.5rem",
        lineHeight: "120%",
      },
      largeB: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "400",
        fontSize: "1.5rem",
        lineHeight: "120%",
      },
      base: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "300",
        fontSize: "1.25rem",
        lineHeight: "120%",
      },
      baseb: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "400",
        fontSize: "1.25rem",
        lineHeight: "120%",
      },
      small: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "300",
        fontSize: "1rem",
        lineHeight: "120%",
      },
      smallB: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "500",
        fontSize: "1rem",
        lineHeight: "120%",
      },
      xsmall: {
        fontFamily: `"Ubuntu"`,
        fontWeight: "400",
        fontSize: "0.75rem",
        lineHeight: "120%",
      },
    },
  });
  return (
    <ThemeProvider theme={outerTheme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
