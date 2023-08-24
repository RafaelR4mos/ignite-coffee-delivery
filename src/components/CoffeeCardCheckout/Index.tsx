import { useContext, useEffect, useState } from "react";
import { ActionsContainer, CoffeeCartContainer, DeleteBtn } from "./styles";
import { CartContext, ICartList } from "../../context/Cart";
import { Counter } from "../CoffeeCard/styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";

interface CoffeeCardCheckoutProps {
  coffeeData: ICartList;
}

export function CoffeeCardCheckout({ coffeeData }: CoffeeCardCheckoutProps) {
  const { removeItemToCart } = useContext(CartContext);
  const { changeCoffeeQuantity } = useContext(CartContext);

  const [coffeeQuantity, setCoffeeQuantity] = useState(coffeeData.quantity);
  const price = (coffeeData.price * coffeeQuantity).toFixed(2).padEnd(2, "0");

  function handleCoffeeQuantity(target: "minus" | "plus") {
    if (target === "minus" && coffeeQuantity > 1) {
      setCoffeeQuantity((state) => (state -= 1));
    } else if (target === "plus") {
      setCoffeeQuantity((state) => (state += 1));
    } else {
      setCoffeeQuantity((state) => state);
    }
  }

  useEffect(() => {
    changeCoffeeQuantity(coffeeData.id, coffeeQuantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coffeeQuantity, coffeeData.id]);

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
              onClick={() => handleCoffeeQuantity("minus")}
            />
            <span>{coffeeQuantity}</span>
            <Plus
              className="icon"
              size={14}
              weight="bold"
              alt="Adicionar café"
              cursor="pointer"
              onClick={() => handleCoffeeQuantity("plus")}
            />
          </Counter>

          <DeleteBtn onClick={() => removeItemToCart(coffeeData.id)}>
            <Trash size={16} />
            <span>Remover</span>
          </DeleteBtn>
        </ActionsContainer>
      </div>
      <strong>{`R$ ${price}`}</strong>
    </CoffeeCartContainer>
  );
}
