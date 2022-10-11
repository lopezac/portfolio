import { ThemeProvider } from "styled-components";

import RouteSwitch from "./RouteSwitch";
import { GlobalStyle } from "Assets/styles/GlobalStyle";
import { darkTheme } from "Assets/styles/Theme";
import { GlobalFonts } from "Assets/fonts/GlobalFonts";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalFonts />
      <GlobalStyle />
      <RouteSwitch />
    </ThemeProvider>
  );
}

export default App;
