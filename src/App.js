import { ThemeProvider } from "styled-components";
import RouteSwitch from "./RouteSwitch";
import { GlobalStyle } from "Assets/styles/GlobalStyle";
import { theme } from "Assets/styles/theme";
import { GlobalFonts } from "Assets/fonts/GlobalFonts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyle />
      <RouteSwitch />
    </ThemeProvider>
  );
}

export default App;
