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
  Input,
  InputContainer,
  PageContainer,
  PaymentCards,
  PaymentCardsContainer,
  PaymentContainer,
  Subtitle,
} from "./styles";

import { useState } from "react";

type PaymentMethod = "credit" | "debit" | "cash";

export function Checkout() {
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
      </div>
    </PageContainer>
  );
}
