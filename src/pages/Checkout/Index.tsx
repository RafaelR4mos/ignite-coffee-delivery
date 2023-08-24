import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  AddressForm,
  CardTitleContainer,
  ConfirmOrderBtn,
  Input,
  InputContainer,
  PageContainer,
  PaymentCards,
  PaymentCardsContainer,
  PaymentContainer,
  PriceRow,
  PricesContainer,
  SelectedCoffeesContainer,
  Subtitle,
} from "./styles";

import { useContext, useState } from "react";
import { CartContext } from "../../context/Cart";
import { CoffeeCardCheckout } from "../../components/CoffeeCardCheckout/Index";

type PaymentMethod = "credit" | "debit" | "cash";

export function Checkout() {
  const { cartList, totalItensPrice, deliveryPrice, totalFinalPrice } =
    useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    null
  );

  function selectPaymentMethod(method: PaymentMethod) {
    setPaymentMethod(method);
  }

  return (
    <PageContainer>
      <div>
        <Subtitle>Complete seu pedido</Subtitle>

        <AddressForm>
          <CardTitleContainer>
            <MapPinLine size={22} color="#C47F17" />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </CardTitleContainer>

          <InputContainer>
            <div>
              <Input $flex={0.4} placeholder="CPF" />
            </div>

            <div>
              <Input $flex={1} placeholder="Rua" />
            </div>

            <div>
              <Input $flex={0.4} placeholder="Número" type="number" />
              <Input $flex={1} placeholder="Complemento" />
            </div>

            <div>
              <Input $flex={0.4} placeholder="Bairro" />
              <Input $flex={1} placeholder="Cidade" />
              <Input $flex={0.2} placeholder="UF" />
            </div>
          </InputContainer>
        </AddressForm>

        <PaymentContainer>
          <CardTitleContainer>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </CardTitleContainer>

          <PaymentCardsContainer>
            <PaymentCards
              $isSelected={paymentMethod === "credit"}
              onClick={() => selectPaymentMethod("credit")}
            >
              <CreditCard size={12} />
              <span>cartão de crédito</span>
            </PaymentCards>

            <PaymentCards
              $isSelected={paymentMethod === "debit"}
              onClick={() => selectPaymentMethod("debit")}
            >
              <Bank size={12} />
              <span>cartão de débito</span>
            </PaymentCards>

            <PaymentCards
              $isSelected={paymentMethod === "cash"}
              onClick={() => selectPaymentMethod("cash")}
            >
              <Money size={12} />
              <span>dinheiro</span>
            </PaymentCards>
          </PaymentCardsContainer>
        </PaymentContainer>
      </div>

      <div>
        <Subtitle>Cafés selecionados</Subtitle>

        <SelectedCoffeesContainer>
          {cartList.length > 0 ? (
            <>
              {cartList.map((coffee) => (
                <CoffeeCardCheckout coffeeData={coffee} />
              ))}
              <PricesContainer>
                <PriceRow>
                  <span>Total de itens</span>
                  <span>{`R$ ${totalItensPrice}`}</span>
                </PriceRow>
                <PriceRow>
                  <span>Entrega</span>
                  <span>{`R$ ${deliveryPrice}`}</span>
                </PriceRow>
                <PriceRow>
                  <strong>Total</strong>
                  <span>{`R$ ${totalFinalPrice}`}</span>
                </PriceRow>

                <ConfirmOrderBtn>Confirmar Pedido</ConfirmOrderBtn>
              </PricesContainer>
            </>
          ) : (
            <span>Nenhum café adicionado</span>
          )}
        </SelectedCoffeesContainer>
      </div>
    </PageContainer>
  );
}
