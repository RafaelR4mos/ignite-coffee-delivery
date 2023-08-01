import { ShoppingCart } from "@phosphor-icons/react";
import { ICoffeeData } from "../../utils/commonInterfaces";
import {
  CardFooter,
  CoffeeCardContainer,
  CoffeeName,
  CoffeePrice,
  CoffeeTag,
} from "./styles";

interface CoffeCardProps {
  coffeeData: ICoffeeData;
}

export function CoffeeCard({ coffeeData }: CoffeCardProps) {
  console.log(coffeeData);
  return (
    <CoffeeCardContainer>
      <img src={coffeeData.coffeeImg} alt={coffeeData.name} />
      <div>
        {coffeeData.tags.map((tag) => (
          <CoffeeTag>{tag}</CoffeeTag>
        ))}
      </div>
      <CoffeeName>{coffeeData.name}</CoffeeName>
      <p>{coffeeData.description}</p>

      <CardFooter>
        <CoffeePrice>
          <span>
            R$ <strong>9,90</strong>
          </span>
        </CoffeePrice>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <button>
          <ShoppingCart weight="fill" size={20} />
        </button>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
