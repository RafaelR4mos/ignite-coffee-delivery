import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header/Index";
import { CoffeeProvider } from "./context/Coffee";
import { CartProvider } from "./context/Cart";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <CoffeeProvider>
          <BrowserRouter>
            <Header />
            <Router />
          </BrowserRouter>
        </CoffeeProvider>
      </CartProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
