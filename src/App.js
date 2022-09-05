import { ThemeProvider } from "styled-components";

import Router from "./Routes/Router";
import { GlobalStyle } from "./Assets/Styles/GlobalStyle";
import { darkTheme } from "./Assets/Styles/Theme";
import { GlobalFonts } from "./Assets/Fonts/GlobalFonts";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalFonts />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
