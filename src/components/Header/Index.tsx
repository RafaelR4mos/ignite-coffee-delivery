import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import {
  ButtonCart,
  ButtonContainer,
  Counter,
  HeaderContainer,
  LocationContainer,
} from "./styles";

export function Header() {
  const itemsAddedToCart = 4;

  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="logo do coffe delivery com um copo e letras que representam a marca"
      />
      <ButtonContainer>
        <LocationContainer color="purple-light">
          <MapPin size={16} weight="fill" color="#8047F8" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <ButtonCart color="yellow-light" itemsNumber={1}>
          <ShoppingCart size={20} weight="fill" color="#C47F17" />
          <Counter isShow={itemsAddedToCart ? true : false}>
            {itemsAddedToCart}
          </Counter>
        </ButtonCart>
      </ButtonContainer>
    </HeaderContainer>
  );
}
