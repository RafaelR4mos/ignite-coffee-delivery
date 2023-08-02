import { MapPinLine } from "@phosphor-icons/react";
import {
  AddressForm,
  CardTitleContainer,
  Input,
  InputContainer,
  PageContainer,
  Subtitle,
} from "./styles";

import InputMask from "react-input-mask";

export function Checkout() {
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
              <InputMask mask="999-999-99">
                <Input $flex={0.4} placeholder="CPF" />
              </InputMask>
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
      </div>
      <div>
        <Subtitle>Cafés selecionados</Subtitle>
      </div>
    </PageContainer>
  );
}
