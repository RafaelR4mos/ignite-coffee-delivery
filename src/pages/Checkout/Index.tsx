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

// import { checkoutSchema } from "./formSchema";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/Cart";
import { CoffeeCardCheckout } from "../../components/CoffeeCardCheckout/Index";

interface IAddressFormValues {
  cpf: number;
  street: string;
  number: number;
  complement: string | undefined;
  neighborhood: string;
  city: string;
  uf: string;
}

export interface ICoffeeOrder extends IAddressFormValues {
  payment: PaymentMethod | null;
}

type PaymentMethod = "crédito" | "débito" | "dinheiro";

export function Checkout() {
  const {
    cartList,
    totalItensPrice,
    deliveryPrice,
    totalFinalPrice,
    finishCoffeeOrder,
  } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    null
  );
  const { register, handleSubmit } = useForm<IAddressFormValues>();

  function selectPaymentMethod(method: PaymentMethod) {
    setPaymentMethod(method);
  }

  function onSubmit(data: IAddressFormValues) {
    const orderData: ICoffeeOrder = {
      ...data,
      payment: paymentMethod,
    };

    finishCoffeeOrder(orderData);
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
              <Input
                $flex={0.4}
                type="number"
                placeholder="CPF"
                id="cpf"
                {...register("cpf")}
              />
              <p></p>
            </div>

            <div>
              <Input
                $flex={1}
                placeholder="Rua"
                id="street"
                {...register("street", { required: true })}
              />
            </div>

            <div>
              <Input
                $flex={0.4}
                placeholder="Número"
                type="number"
                {...register("number", { required: true })}
              />
              <Input
                $flex={1}
                placeholder="Complemento"
                {...register("complement")}
              />
            </div>

            <div>
              <Input
                $flex={0.4}
                placeholder="Bairro"
                id="neighborhood"
                {...register("neighborhood", { required: true })}
              />
              <Input
                $flex={1}
                placeholder="Cidade"
                id="city"
                {...register("city", { required: true })}
              />
              <Input
                $flex={0.2}
                placeholder="UF"
                id="uf"
                {...register("uf", { required: true })}
              />
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
              $isSelected={paymentMethod === "crédito"}
              onClick={() => selectPaymentMethod("crédito")}
            >
              <CreditCard size={12} />
              <span>cartão de crédito</span>
            </PaymentCards>

            <PaymentCards
              $isSelected={paymentMethod === "débito"}
              onClick={() => selectPaymentMethod("débito")}
            >
              <Bank size={12} />
              <span>cartão de débito</span>
            </PaymentCards>

            <PaymentCards
              $isSelected={paymentMethod === "dinheiro"}
              onClick={() => selectPaymentMethod("dinheiro")}
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
                <CoffeeCardCheckout key={coffee.id} coffeeData={coffee} />
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

                <ConfirmOrderBtn
                  onClick={handleSubmit((data) => onSubmit(data))}
                >
                  Confirmar Pedido
                </ConfirmOrderBtn>
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
