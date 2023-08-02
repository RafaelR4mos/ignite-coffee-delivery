import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import {
  ButtonCart,
  ButtonContainer,
  Counter,
  HeaderContainer,
  LocationContainer,
} from "./styles";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { itemsQuantityInCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="logo do coffe delivery com um copo e letras que representam a marca"
        onClick={() => navigate("/")}
      />
      <ButtonContainer>
        <LocationContainer color="purple-light">
          <MapPin size={16} weight="fill" color="#8047F8" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <ButtonCart
          color="yellow-light"
          title="ir para checkout"
          onClick={() => navigate("checkout")}
        >
          <ShoppingCart size="20" weight="fill" color="#C47F17" />
          <Counter $isShow={!!itemsQuantityInCart}>
            {itemsQuantityInCart}
          </Counter>
        </ButtonCart>
      </ButtonContainer>
    </HeaderContainer>
  );
}
