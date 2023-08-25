import { CartContext } from "../../context/Cart";
import { useContext } from "react";
import {
  OrderInfo,
  OrderInfoAndImageContainer,
  SuccessPageContainer,
  TitleContainer,
} from "./styles";

export function Success() {
  const { coffeeOrder } = useContext(CartContext);

  console.log(coffeeOrder);

  return (
    <SuccessPageContainer>
      <TitleContainer>
        <h1>Uhu Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleContainer>

      <OrderInfoAndImageContainer>
        <OrderInfo>
          <div>
            <span>a</span>
            <div>
              <p>Entrega em .... ,</p>
              <p>Cidade...</p>
            </div>
          </div>
        </OrderInfo>
        <div>
          <img src="" alt="" />
          <h2>a</h2>
        </div>
      </OrderInfoAndImageContainer>
    </SuccessPageContainer>
  );
}
