import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header/Index";
import { CoffeeProvider } from "./context/Coffee";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeProvider>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </CoffeeProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
