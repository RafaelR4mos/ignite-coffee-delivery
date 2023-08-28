import { CartContext } from "../../context/Cart";
import { useContext } from "react";
import {
  DeliveryInfoRow,
  ImgContainer,
  OrderInfo,
  OrderInfoAndImageContainer,
  SuccessPageContainer,
  TitleContainer,
} from "./styles";

import motoboyImg from "../../assets/motoboy.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

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
          <DeliveryInfoRow $iconBgColor="purple">
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <p>
                Entrega em
                <strong>{` ${coffeeOrder?.street}, ${coffeeOrder?.number}`}</strong>
              </p>
              <p>{`${coffeeOrder?.neighborhood} - ${coffeeOrder?.city}, ${coffeeOrder?.uf}`}</p>
            </div>
          </DeliveryInfoRow>

          <DeliveryInfoRow $iconBgColor="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </DeliveryInfoRow>

          <DeliveryInfoRow $iconBgColor="yellow-dark">
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                {coffeeOrder?.payment === "dinheiro"
                  ? `${coffeeOrder.payment}`
                  : `Cartão de ${coffeeOrder?.payment}`}
              </p>
            </div>
          </DeliveryInfoRow>
        </OrderInfo>
        <ImgContainer>
          <img
            src={motoboyImg}
            alt="imagem de um entregador em uma moto, saindo com uma encomenda."
          />
        </ImgContainer>
      </OrderInfoAndImageContainer>
    </SuccessPageContainer>
  );
}
