import { ThemeProvider } from "styled-components";

import RouteSwitch from "./Routes/RouteSwitch";
import { GlobalStyle } from "./Assets/Styles/GlobalStyle";
import { darkTheme } from "./Assets/Styles/Theme";
import { GlobalFonts } from "./Assets/Fonts/GlobalFonts";

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
