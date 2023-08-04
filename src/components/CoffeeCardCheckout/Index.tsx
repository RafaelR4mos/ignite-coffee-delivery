import { useContext, useState } from "react";
import { ActionsContainer, CoffeeCartContainer, DeleteBtn } from "./styles";
import { CartContext, ICartList } from "../../context/Cart";
import { Counter } from "../CoffeeCard/styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";

interface CoffeeCardCheckoutProps {
  coffeeData: ICartList;
}

export function CoffeeCardCheckout({ coffeeData }: CoffeeCardCheckoutProps) {
  const { removeItemToCart } = useContext(CartContext);
  const [coffeeQuantity, setCoffeeQuantity] = useState(coffeeData.quantity);
  const price = (coffeeData.price * coffeeQuantity).toFixed(2).padEnd(2, "0");

  function changeCoffeeQuantity(target: "minus" | "plus") {
    if (target === "minus" && coffeeQuantity > 1) {
      setCoffeeQuantity((state) => (state -= 1));
    } else if (target === "plus") {
      setCoffeeQuantity((state) => (state += 1));
    } else {
      setCoffeeQuantity((state) => state);
    }
  }

  return (
    <CoffeeCartContainer>
      <img src={coffeeData.coffeeImg} alt={coffeeData.name} />
      <div>
        <span>{coffeeData.name}</span>
        <ActionsContainer>
          <Counter>
            <Minus
              className="icon"
              size={14}
              weight="bold"
              alt="Remover café"
              cursor="pointer"
              onClick={() => changeCoffeeQuantity("minus")}
            />
            <span>{coffeeQuantity}</span>
            <Plus
              className="icon"
              size={14}
              weight="bold"
              alt="Adicionar café"
              cursor="pointer"
              onClick={() => changeCoffeeQuantity("plus")}
            />
          </Counter>

          <DeleteBtn onClick={() => removeItemToCart(coffeeData.id)}>
            <Trash size={16} />
            <span>Remover</span>
          </DeleteBtn>
        </ActionsContainer>
      </div>
      <span>{`R$ ${price}`}</span>
    </CoffeeCartContainer>
  );
}
