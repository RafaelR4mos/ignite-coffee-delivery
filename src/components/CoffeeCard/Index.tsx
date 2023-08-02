import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ICoffeeData } from "../../utils/commonInterfaces";
import {
  AddCartBtn,
  CardFooter,
  CoffeeActionsContainer,
  CoffeeCardContainer,
  CoffeeName,
  CoffeePrice,
  CoffeeTag,
  CoffeeTagsContainer,
  Counter,
} from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "../../context/Cart";

interface CoffeCardProps {
  coffeeData: ICoffeeData;
}

export function CoffeeCard({ coffeeData }: CoffeCardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1);
  const { addItemToCart } = useContext(CartContext);

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
    <CoffeeCardContainer>
      <img src={coffeeData.coffeeImg} alt={coffeeData.name} />
      <CoffeeTagsContainer>
        {coffeeData.tags.map((tag) => (
          <CoffeeTag key={tag}>{tag}</CoffeeTag>
        ))}
      </CoffeeTagsContainer>
      <CoffeeName>{coffeeData.name}</CoffeeName>
      <p>{coffeeData.description}</p>

      <CardFooter>
        <CoffeePrice>
          <span>
            R$ <strong>9,90</strong>
          </span>
        </CoffeePrice>
        <CoffeeActionsContainer>
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

          <AddCartBtn>
            <ShoppingCart
              weight="fill"
              size={22}
              alt="Adicionar ao carrinho"
              cursor="pointer"
              onClick={() =>
                addItemToCart({ ...coffeeData, quantity: coffeeQuantity })
              }
            />
          </AddCartBtn>
        </CoffeeActionsContainer>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
