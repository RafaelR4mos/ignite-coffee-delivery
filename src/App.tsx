import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header/Index";
import { CoffeeProvider } from "./context/Coffee";
import { CartProvider } from "./context/Cart";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <CoffeeProvider>
            <Header />
            <Router />
          </CoffeeProvider>
        </CartProvider>
        <GlobalStyles />
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
}
