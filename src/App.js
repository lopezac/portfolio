import { ThemeProvider } from "styled-components";
import RouteSwitch from "./RouteSwitch";
import { GlobalStyle } from "Assets/styles/GlobalStyle";
import { theme } from "Assets/styles/theme";
import { GlobalFonts } from "Assets/fonts/GlobalFonts";
import { SocketProvider } from "Context/Socket";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyle />
      <SocketProvider>
        <RouteSwitch />
      </SocketProvider>
    </ThemeProvider>
  );
}

export default App;
